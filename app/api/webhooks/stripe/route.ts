import Stripe from "stripe";
import { NextResponse } from "next/server";
import { sendOrderEmail } from "../../../../lib/sendOrderEmail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Stripe signatureがありません" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Stripe webhook error:", error);

    return NextResponse.json(
      { error: "Webhook signatureが正しくありません" },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      const metadata = session.metadata || {};

      const items: {
        name: string;
        price: number;
        quantity: number;
      }[] = [];

      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id
      );

      for (const item of lineItems.data) {
        const name = item.description || "商品";

        const price = item.price?.unit_amount || 0;

        const quantity = item.quantity || 1;

        if (
          name !== "送料" &&
          name !== "ギフト包装"
        ) {
          items.push({
            name,
            price,
            quantity,
          });
        }
      }

      const customerDetails = session.customer_details;

      const addressData =
        customerDetails?.address;

      const address = addressData
        ? [
            addressData.postal_code
              ? `〒${addressData.postal_code}`
              : "",
            addressData.state || "",
            addressData.city || "",
            addressData.line1 || "",
            addressData.line2 || "",
          ]
            .filter(Boolean)
            .join(" ")
        : "";

      const subtotal = Number(
        metadata.subtotal || 0
      );

      const shippingFee = Number(
        metadata.shipping_fee || 0
      );

      const giftWrappingFee = Number(
        metadata.gift_wrapping_fee || 0
      );

      const giftCardAmount = Number(
        metadata.gift_card_amount || 0
      );

      const originalTotal = Number(
        metadata.original_total || 0
      );

      const paymentTotal = Number(
        metadata.payment_total || 0
      );

      const giftCardCode =
        metadata.gift_card_code === "なし"
          ? ""
          : metadata.gift_card_code || "";

      const giftWrapping =
        metadata.gift_wrapping === "希望あり";

      const note =
        metadata.note === "なし"
          ? ""
          : metadata.note || "";

      await sendOrderEmail({
        items,
        subtotal,
        shippingFee,
        giftWrapping,
        giftWrappingFee,
        giftCardCode,
        giftCardAmount,
        originalTotal,
        paymentTotal,
        note,
        customerName:
          customerDetails?.name || "",
        customerEmail:
          customerDetails?.email || "",
        phone:
          customerDetails?.phone || "",
        address,
      });

      console.log(
        "注文通知メールを送信しました:",
        session.id
      );
    } catch (error) {
      console.error(
        "注文通知メールの送信に失敗しました:",
        error
      );

      return NextResponse.json(
        { error: "注文通知メールの送信に失敗しました" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}