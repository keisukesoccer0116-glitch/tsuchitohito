import Stripe from "stripe";
import { NextResponse } from "next/server";
import { giftCards } from "../../../lib/giftCards";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const items = body.items;

    const shippingFee = Number(
      body.shippingFee
    );

    const giftWrapping =
      body.giftWrapping === true;

    const note =
      typeof body.note === "string"
        ? body.note
        : "";

    const giftCardCode =
      typeof body.giftCardCode === "string"
        ? body.giftCardCode.trim()
        : "";

    /* ---------- 商品情報の確認 ---------- */

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        {
          error:
            "商品情報が正しくありません",
        },
        {
          status: 400,
        }
      );
    }

    /* ---------- 送料の確認 ---------- */

    const allowedShippingFees = [
      1980,
      2500,
      3000,
    ];

    if (
      !allowedShippingFees.includes(
        shippingFee
      )
    ) {
      return NextResponse.json(
        {
          error:
            "送料が正しくありません",
        },
        {
          status: 400,
        }
      );
    }

    /* ---------- ギフト包装料金 ---------- */

    const giftWrappingFee =
      giftWrapping ? 550 : 0;

    /* ---------- 商品合計 ---------- */

    const subtotal = items.reduce(
      (sum: number, item: any) => {
        const price = Number(item.price);
        const quantity = Number(item.quantity);

        if (
          !Number.isFinite(price) ||
          !Number.isFinite(quantity) ||
          price < 0 ||
          quantity <= 0
        ) {
          throw new Error(
            "商品情報が正しくありません"
          );
        }

        return (
          sum +
          price * quantity
        );
      },
      0
    );

    /* ---------- 総額 ---------- */

    const total =
      subtotal +
      shippingFee +
      giftWrappingFee;

    /* ---------- ギフトカード ---------- */

    let giftCardAmount = 0;

    if (giftCardCode) {
      const registeredAmount =
        giftCards[giftCardCode];

      if (
        typeof registeredAmount !==
          "number" ||
        registeredAmount <= 0
      ) {
        return NextResponse.json(
          {
            error:
              "有効なギフトカードコードではありません。",
          },
          {
            status: 400,
          }
        );
      }

      /*
       * ギフトカード金額が総額を超えないようにする
       */
      giftCardAmount = Math.min(
        registeredAmount,
        total
      );
    }

    /* ---------- 最終支払額 ---------- */

    const paymentTotal =
      total - giftCardAmount;

    /*
     * 現在はStripe Checkoutを使用しているため、
     * 0円決済には対応しない。
     *
     * 5,000円のギフトカードで
     * 3,000円の商品を購入する場合などは、
     * 別途0円注文の仕組みが必要。
     */
    if (paymentTotal <= 0) {
      return NextResponse.json(
        {
          error:
            "ギフトカードの金額がご注文金額以上です。現在は、ご注文金額がギフトカード額を超える場合のみご利用いただけます。",
        },
        {
          status: 400,
        }
      );
    }

    /* ---------- Stripe用の商品情報 ---------- */

    /*
     * Stripeではマイナスのline itemを作れないため、
     * 実際の決済額を1つのline itemとして作成する。
     *
     * Stripe上では、
     * 「商品・送料・ギフト包装込み」
     * として表示する。
     */
    const lineItems = [
      {
        price_data: {
          currency: "jpy",

          product_data: {
            name: "つちとひと ご注文",
          },

          unit_amount: paymentTotal,
        },

        quantity: 1,
      },
    ];

    /* ---------- Stripe Checkout ---------- */

    const session =
      await stripe.checkout.sessions.create(
        {
          mode: "payment",

          /* 決済方法 */
          payment_method_types: [
            "card",
            "paypay" as any,
          ],

          /* 配送先住所を取得 */
          shipping_address_collection: {
            allowed_countries: ["JP"],
          },

          /* 電話番号を必須で取得 */
          phone_number_collection: {
            enabled: true,
          },

          line_items: lineItems,

          /* ---------- 注文情報 ---------- */

          metadata: {
            gift_card_code:
              giftCardCode || "なし",

            gift_card_amount:
              giftCardAmount.toString(),

            subtotal:
              subtotal.toString(),

            shipping_fee:
              shippingFee.toString(),

            gift_wrapping:
              giftWrapping
                ? "希望あり"
                : "希望なし",

            gift_wrapping_fee:
              giftWrappingFee.toString(),

            original_total:
              total.toString(),

            payment_total:
              paymentTotal.toString(),

            note:
              note.trim() !== ""
                ? note
                : "なし",
          },

          success_url:
            `${process.env.NEXT_PUBLIC_BASE_URL}/success`,

          cancel_url:
            `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
        }
      );

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "決済セッションの作成に失敗しました",
      },
      {
        status: 500,
      }
    );
  }
}