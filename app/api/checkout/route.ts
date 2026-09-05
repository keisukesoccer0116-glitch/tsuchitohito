import Stripe from "stripe";
import { NextResponse } from "next/server";

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

    if (!Array.isArray(items)) {
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

    /* ---------- 商品 ---------- */

    const lineItems = items.map(
      (item: any) => ({
        price_data: {
          currency: "jpy",

          product_data: {
            name: item.name,
          },

          unit_amount: item.price,
        },

        quantity: item.quantity,
      })
    );

    /* ---------- 送料 ---------- */

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

    /* ---------- ギフト包装 ---------- */

    if (giftWrapping) {
      lineItems.push({
        price_data: {
          currency: "jpy",

          product_data: {
            name: "ギフト包装",
          },

          unit_amount:
            giftWrappingFee,
        },

        quantity: 1,
      });
    }

    /* ---------- Stripe Checkout ---------- */

    const session =
      await stripe.checkout.sessions.create(
        {
          mode: "payment",

          payment_method_types: [
            "card",
          ],

          /* 配送先住所を取得 */
          shipping_address_collection:
            {
              allowed_countries: ["JP"],
            },

          line_items: lineItems,

          /* 備考欄などを注文情報として保存 */
          metadata: {
            gift_wrapping:
              giftWrapping
                ? "希望あり"
                : "希望なし",

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