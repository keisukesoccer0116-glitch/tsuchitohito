import Stripe from "stripe";
import { NextResponse } from "next/server";
import { giftCards } from "../../../lib/giftCards";
import { products } from "../../../lib/products";
import { sendOrderEmail } from "../../../lib/sendOrderEmail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const items = body.items;
    const shippingFee = Number(body.shippingFee);
    const giftWrapping = body.giftWrapping === true;

    const note =
      typeof body.note === "string"
        ? body.note
        : "";

    const giftCardCode =
      typeof body.giftCardCode === "string"
        ? body.giftCardCode.trim()
        : "";

    /*
     * 0円注文用のお客様情報
     * 通常決済の場合はStripe Checkout側で取得するので不要
     */
    const customerName =
      typeof body.customerName === "string"
        ? body.customerName.trim()
        : "";

    const customerEmail =
      typeof body.customerEmail === "string"
        ? body.customerEmail.trim()
        : "";

    const phone =
      typeof body.phone === "string"
        ? body.phone.trim()
        : "";

    const address =
      typeof body.address === "string"
        ? body.address.trim()
        : "";

    // -----------------------------
    // 基本チェック
    // -----------------------------

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "商品情報が正しくありません" },
        { status: 400 }
      );
    }

    const allowedShippingFees = [1980, 2500, 3000];

    if (!allowedShippingFees.includes(shippingFee)) {
      return NextResponse.json(
        { error: "送料が正しくありません" },
        { status: 400 }
      );
    }

    const giftWrappingFee = giftWrapping ? 550 : 0;

    // -----------------------------
    // 商品・数量をサーバー側で再確認
    // -----------------------------

    const validatedItems = items.map((item: any) => {
      const product = products.find(
        (p) => p.id === item.id
      );

      if (!product) {
        throw new Error("存在しない商品です");
      }

      const quantity = Number(item.quantity);

      if (
        !Number.isInteger(quantity) ||
        quantity < 1
      ) {
        throw new Error("数量が正しくありません");
      }

      const maxQuantity =
        product.maxQuantity ?? 0;

      if (quantity > maxQuantity) {
        throw new Error(
          `${product.name}の在庫数を超えています`
        );
      }

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      };
    });

    // -----------------------------
    // 金額計算
    // -----------------------------

    const subtotal = validatedItems.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

    const total =
      subtotal +
      shippingFee +
      giftWrappingFee;

    // -----------------------------
    // ギフトカード
    // -----------------------------

    let giftCardAmount = 0;

    if (giftCardCode) {
      const registeredAmount =
        giftCards[giftCardCode];

      if (!registeredAmount) {
        return NextResponse.json(
          {
            error:
              "有効なギフトカードコードではありません",
          },
          { status: 400 }
        );
      }

      giftCardAmount = Math.min(
        registeredAmount,
        total
      );
    }

    const paymentTotal =
      total - giftCardAmount;

    // -----------------------------
    // 0円注文
    // -----------------------------
    //
    // Stripeを使用せず、
    // Resendで注文メールを送る
    //

    if (paymentTotal === 0) {
      if (!customerName) {
        return NextResponse.json(
          {
            error: "お名前を入力してください",
          },
          { status: 400 }
        );
      }

      if (!customerEmail) {
        return NextResponse.json(
          {
            error: "メールアドレスを入力してください",
          },
          { status: 400 }
        );
      }

      if (!phone) {
        return NextResponse.json(
          {
            error: "電話番号を入力してください",
          },
          { status: 400 }
        );
      }

      if (!address) {
        return NextResponse.json(
          {
            error: "住所を入力してください",
          },
          { status: 400 }
        );
      }

      await sendOrderEmail({
        items: validatedItems.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),

        subtotal,

        shippingFee,

        giftWrapping,

        giftWrappingFee,

        giftCardCode,

        giftCardAmount,

        originalTotal: total,

        paymentTotal: 0,

        note:
          note.trim() !== ""
            ? note
            : "",

        customerName,

        customerEmail,

        phone,

        address,
      });

      console.log(
        "0円注文の通知メールを送信しました"
      );

      return NextResponse.json({
        url:
          `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      });
    }

    // -----------------------------
    // 通常のStripe決済
    // -----------------------------

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      validatedItems.map((item) => ({
        price_data: {
          currency: "jpy",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price,
        },
        quantity: item.quantity,
      }));

    // 送料
    lineItems.push({
      price_data: {
        currency: "jpy",
        product_data: {
          name: "送料",
        },
        unit_amount: shippingFee,
      },
      quantity: 1,
    });

    // ギフト包装
    if (giftWrapping) {
      lineItems.push({
        price_data: {
          currency: "jpy",
          product_data: {
            name: "ギフト包装",
          },
          unit_amount: giftWrappingFee,
        },
        quantity: 1,
      });
    }

    // -----------------------------
    // Stripeクーポン
    // -----------------------------

    let couponId: string | undefined;

    if (giftCardAmount > 0) {
      const coupon = await stripe.coupons.create({
        amount_off: giftCardAmount,
        currency: "jpy",
        duration: "once",
        name: `ギフトカード ${giftCardCode}`,
        max_redemptions: 1,
        metadata: {
          gift_card_code: giftCardCode,
          gift_card_amount:
            giftCardAmount.toString(),
        },
      });

      couponId = coupon.id;
    }

    // -----------------------------
    // 注文情報
    // -----------------------------

    const orderMetadata = {
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
    };

    // -----------------------------
    // Stripe Checkout
    // -----------------------------

    const sessionParams: Stripe.Checkout.SessionCreateParams =
      {
        mode: "payment",

        payment_method_types: [
          "card",
          "paypay" as any,
        ],

        shipping_address_collection: {
          allowed_countries: ["JP"],
        },

        phone_number_collection: {
          enabled: true,
        },

        line_items: lineItems,

        metadata: orderMetadata,

        payment_intent_data: {
          metadata: orderMetadata,
        },

        success_url:
          `${process.env.NEXT_PUBLIC_BASE_URL}/success`,

        cancel_url:
          `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      };

    if (couponId) {
      sessionParams.discounts = [
        {
          coupon: couponId,
        },
      ];
    }

    const session =
      await stripe.checkout.sessions.create(
        sessionParams
      );

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "決済セッションの作成に失敗しました",
      },
      { status: 500 }
    );
  }
}