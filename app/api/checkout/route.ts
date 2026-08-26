import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const items = body.items;
    const shippingFee = Number(body.shippingFee);

    if (!Array.isArray(items)) {
      return NextResponse.json(
        {
          error: "商品情報が正しくありません",
        },
        {
          status: 400,
        }
      );
    }

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
          error: "送料が正しくありません",
        },
        {
          status: 400,
        }
      );
    }

    const session =
      await stripe.checkout.sessions.create({
        mode: "payment",

        payment_method_types: ["card"],

        // 配送先住所を取得
        shipping_address_collection: {
          allowed_countries: ["JP"],
        },

        line_items: [
          ...items.map((item: any) => ({
            price_data: {
              currency: "jpy",

              product_data: {
                name: item.name,
              },

              unit_amount: item.price,
            },

            quantity: item.quantity,
          })),

          // 送料
          {
            price_data: {
              currency: "jpy",

              product_data: {
                name: "送料",
              },

              unit_amount: shippingFee,
            },

            quantity: 1,
          },
        ],

        success_url:
          `${process.env.NEXT_PUBLIC_BASE_URL}/success`,

        cancel_url:
          `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      });

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