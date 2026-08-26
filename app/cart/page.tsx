"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const qtyBtn = {
  width: "32px",
  height: "32px",
  border: "1px solid #ccc",
  background: "#fff",
  cursor: "pointer",
};

const shippingPrices = {
  other: 1980,
  hokkaidoKyushu: 2500,
  okinawa: 3000,
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [shippingArea, setShippingArea] = useState<
    "other" | "hokkaidoKyushu" | "okinawa"
  >("other");

  useEffect(() => {
    const stored = localStorage.getItem("cart");

    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const changeQuantity = (id: string, delta: number) => {
    const newCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + delta,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(newCart);
  };

  const removeItem = (id: string) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingFee = shippingPrices[shippingArea];

  const grandTotal = total + shippingFee;

  /* ---------- 空カート ---------- */
  if (cart.length === 0) {
    return (
      <main style={{ padding: "120px 20px" }}>
        <div
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 500,
              marginBottom: "24px",
            }}
          >
            カートは空です
          </h1>

          <p
            style={{
              marginBottom: "32px",
              color: "#555",
            }}
          >
            気になることがありましたら
            <br />
            Instagramのメッセージより
            <br />
            ご連絡ください。
          </p>

          <Link
            href="/"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              border: "1px solid #222",
              fontSize: "14px",
            }}
          >
            商品一覧を見る
          </Link>
        </div>
      </main>
    );
  }

  /* ---------- カートあり ---------- */
  return (
    <main style={{ padding: "80px 20px" }}>
      <h1 style={{ marginBottom: "40px" }}>カート</h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              padding: "20px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            <img
              src={`/products/${item.id}.jpg`}
              alt={item.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                background: "#eee",
                padding: "8px",
                borderRadius: "6px",
              }}
            />

            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: "12px" }}>
                {item.name}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <button
                  style={qtyBtn}
                  onClick={() =>
                    changeQuantity(item.id, -1)
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  style={qtyBtn}
                  onClick={() =>
                    changeQuantity(item.id, 1)
                  }
                >
                  ＋
                </button>
              </div>
            </div>

            <div
              style={{
                width: "140px",
                textAlign: "right",
              }}
            >
              ¥
              {(
                item.price * item.quantity
              ).toLocaleString()}
            </div>

            <button
              onClick={() => removeItem(item.id)}
              style={{
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
              }}
            >
              削除
            </button>
          </div>
        ))}

        {/* 配送先 */}
        <div
          style={{
            marginTop: "40px",
            padding: "24px",
            background: "#f6f5f3",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              marginBottom: "16px",
            }}
          >
            配送先
          </div>

          <select
            value={shippingArea}
            onChange={(e) =>
              setShippingArea(
                e.target.value as
                  | "other"
                  | "hokkaidoKyushu"
                  | "okinawa"
              )
            }
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "12px",
              border: "1px solid #ccc",
              background: "#fff",
              fontSize: "14px",
            }}
          >
            <option value="other">
              北海道・九州・沖縄以外
            </option>

            <option value="hokkaidoKyushu">
              北海道・九州
            </option>

            <option value="okinawa">
              沖縄
            </option>
          </select>
        </div>

        {/* 金額 */}
        <div
          style={{
            marginTop: "40px",
            marginLeft: "auto",
            maxWidth: "360px",
            fontSize: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span>商品合計</span>

            <span>
              ¥{total.toLocaleString()}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <span>送料</span>

            <span>
              ¥{shippingFee.toLocaleString()}
            </span>
          </div>

          <div
            style={{
              borderTop: "1px solid #ddd",
              paddingTop: "16px",
              display: "flex",
              justifyContent: "space-between",
              fontSize: "20px",
            }}
          >
            <span>合計</span>

            <span>
              ¥{grandTotal.toLocaleString()}
            </span>
          </div>
        </div>

        {/* ボタン */}
        <div
          style={{
            marginTop: "48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href="/">
            ← 商品一覧へ戻る
          </Link>

          <button
            onClick={async () => {
              const res = await fetch(
                "/api/checkout",
                {
                  method: "POST",
                  headers: {
                    "Content-Type":
                      "application/json",
                  },
                  body: JSON.stringify({
                    items: cart,
                    shippingFee,
                  }),
                }
              );

              const data = await res.json();

              if (data.url) {
                window.location.href =
                  data.url;
              }
            }}
            style={{
              padding: "14px 40px",
              background: "#2b2b2b",
              color: "#fff",
              border: "none",
              letterSpacing: "0.08em",
              cursor: "pointer",
            }}
          >
            購入手続きへ
          </button>
        </div>
      </div>
    </main>
  );
}