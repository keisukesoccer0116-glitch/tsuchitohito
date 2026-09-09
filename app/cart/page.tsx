"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { products } from "../../lib/products";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  maxQuantity?: number;
};

type ShippingType = "other" | "hokkaidoKyushu" | "okinawa";

const shippingPrices: Record<ShippingType, number> = {
  other: 1980,
  hokkaidoKyushu: 2500,
  okinawa: 3000,
};

const giftWrappingPrice = 550;

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [shipping, setShipping] = useState<ShippingType>("other");
  const [giftWrapping, setGiftWrapping] = useState(false);
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");

    if (!saved) return;

    try {
      const parsed: CartItem[] = JSON.parse(saved);

      const corrected = parsed.map((item) => {
        const product = products.find((p) => p.id === item.id);
        const max = product?.maxQuantity ?? 10;

        return {
          ...item,
          maxQuantity: max,
          quantity: Math.min(item.quantity, max),
        };
      });

      setCart(corrected);
      localStorage.setItem("cart", JSON.stringify(corrected));
    } catch (error) {
      console.error("カート情報の読み込みに失敗しました。", error);
      localStorage.removeItem("cart");
      setCart([]);
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const changeQuantity = (id: string, delta: number) => {
    const newCart = cart
      .map((item) => {
        if (item.id !== id) return item;

        const max = item.maxQuantity ?? 10;
        const quantity = Math.min(
          max,
          Math.max(0, item.quantity + delta)
        );

        return { ...item, quantity };
      })
      .filter((item) => item.quantity > 0);

    saveCart(newCart);
  };

  const removeItem = (id: string) => {
    saveCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingFee = shippingPrices[shipping];
  const wrappingFee = giftWrapping ? giftWrappingPrice : 0;
  const total = subtotal + shippingFee + wrappingFee;

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
          shippingFee,
          giftWrapping,
          note,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "決済の準備に失敗しました。"
        );
      }

      if (!data?.url) {
        throw new Error(
          "決済ページのURLを取得できませんでした。"
        );
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Checkout error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "決済の準備に失敗しました。"
      );

      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "160px 20px 120px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 400,
            marginBottom: "40px",
          }}
        >
          カート
        </h1>

        <p
          style={{
            fontSize: "14px",
            lineHeight: 2,
            color: "#555",
            marginBottom: "40px",
          }}
        >
          カートに商品がありません。
        </p>

        <p
          style={{
            fontSize: "13px",
            lineHeight: 2,
            color: "#666",
            marginBottom: "35px",
          }}
        >
          気になることがありましたら
          <br />
          Instagramのメッセージよりご連絡ください。
        </p>

        <Link
          href="/store"
          style={{
            display: "inline-block",
            padding: "14px 30px",
            border: "1px solid #222",
            color: "#222",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          商品一覧を見る
        </Link>
      </main>
    );
  }

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "140px 20px 100px",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: 400,
          marginBottom: "50px",
        }}
      >
        カート
      </h1>

      <section>
        {cart.map((item) => {
          const product = products.find((p) => p.id === item.id);
          const image = product?.images?.[0] || "";
          const max = item.maxQuantity ?? 10;
          const isMax = item.quantity >= max;

          return (
            <div
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr auto",
                gap: "20px",
                padding: "20px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              {image ? (
                <img
                  src={image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "#eee",
                  }}
                />
              )}

              <div>
                <div
                  style={{
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  {item.name}
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    marginBottom: "15px",
                  }}
                >
                  ¥{item.price.toLocaleString()}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => changeQuantity(item.id, -1)}
                    style={{
                      width: "30px",
                      height: "30px",
                      border: "1px solid #ccc",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    −
                  </button>

                  <span
                    style={{
                      minWidth: "20px",
                      textAlign: "center",
                      fontSize: "14px",
                    }}
                  >
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => changeQuantity(item.id, 1)}
                    disabled={isMax}
                    style={{
                      width: "30px",
                      height: "30px",
                      border: "1px solid #ccc",
                      background: "#fff",
                      cursor: isMax ? "default" : "pointer",
                      opacity: isMax ? 0.4 : 1,
                    }}
                  >
                    ＋
                  </button>
                </div>

                {isMax && (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#777",
                      marginTop: "10px",
                      marginBottom: 0,
                    }}
                  >
                    この商品は最大{max}点までです
                  </p>
                )}
              </div>

              <div
                style={{
                  textAlign: "right",
                  minWidth: "90px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    marginBottom: "18px",
                  }}
                >
                  ¥{(item.price * item.quantity).toLocaleString()}
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  style={{
                    border: "none",
                    background: "none",
                    padding: 0,
                    fontSize: "12px",
                    color: "#777",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  削除
                </button>
              </div>
            </div>
          );
        })}
      </section>

      <section
        style={{
          marginTop: "50px",
          paddingTop: "30px",
          borderTop: "1px solid #ddd",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: 400,
            marginBottom: "25px",
          }}
        >
          配送先
        </h2>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
            marginBottom: "15px",
          }}
        >
          <input
            type="radio"
            name="shipping"
            value="other"
            checked={shipping === "other"}
            onChange={() => setShipping("other")}
          />
          北海道・九州・沖縄以外
        </label>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
            marginBottom: "15px",
          }}
        >
          <input
            type="radio"
            name="shipping"
            value="hokkaidoKyushu"
            checked={shipping === "hokkaidoKyushu"}
            onChange={() => setShipping("hokkaidoKyushu")}
          />
          北海道・九州
        </label>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          <input
            type="radio"
            name="shipping"
            value="okinawa"
            checked={shipping === "okinawa"}
            onChange={() => setShipping("okinawa")}
          />
          沖縄
        </label>
      </section>
            <section
        style={{
          marginTop: "50px",
          paddingTop: "30px",
          borderTop: "1px solid #ddd",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: 400,
            marginBottom: "25px",
          }}
        >
          ギフト包装
        </h2>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          <input
            type="checkbox"
            checked={giftWrapping}
            onChange={(e) =>
              setGiftWrapping(e.target.checked)
            }
          />
          ギフト包装を利用する（550円）
        </label>
      </section>

      <section
        style={{
          marginTop: "50px",
          paddingTop: "30px",
          borderTop: "1px solid #ddd",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: 400,
            marginBottom: "25px",
          }}
        >
          備考
        </h2>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="ご希望の配送日時などがありましたらご記入ください。"
          rows={5}
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            resize: "vertical",
            fontFamily: "inherit",
            fontSize: "14px",
            lineHeight: 1.8,
            boxSizing: "border-box",
          }}
        />

        <div
          style={{
            marginTop: "15px",
            fontSize: "12px",
            color: "#777",
            lineHeight: 1.8,
          }}
        >
          <p style={{ margin: "0 0 5px" }}>
            ・配送はヤマト運輸でのお届けとなります。
          </p>

          <p style={{ margin: "0 0 5px" }}>
            ・通常、発送まで2〜3日ほどいただきます。
          </p>

          <p style={{ margin: 0 }}>
            ・発送後、追跡番号と配送状況をご登録のメールアドレスへお知らせします。
          </p>
        </div>
      </section>

      <section
        style={{
          marginTop: "50px",
          paddingTop: "30px",
          borderTop: "1px solid #ddd",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
            fontSize: "14px",
          }}
        >
          <span>商品合計</span>
          <span>¥{subtotal.toLocaleString()}</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
            fontSize: "14px",
          }}
        >
          <span>送料</span>
          <span>¥{shippingFee.toLocaleString()}</span>
        </div>

        {giftWrapping && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
              fontSize: "14px",
            }}
          >
            <span>ギフト包装</span>
            <span>
              ¥{giftWrappingPrice.toLocaleString()}
            </span>
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
            borderTop: "1px solid #ddd",
            fontSize: "17px",
          }}
        >
          <span>合計</span>
          <span>¥{total.toLocaleString()}</span>
        </div>
      </section>

      <button
        type="button"
        onClick={handleCheckout}
        disabled={loading}
        style={{
          display: "block",
          width: "100%",
          marginTop: "40px",
          padding: "18px",
          border: "none",
          background: "#222",
          color: "#fff",
          fontSize: "15px",
          fontFamily: "inherit",
          cursor: loading ? "default" : "pointer",
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading
          ? "決済ページへ移動しています..."
          : "購入手続きへ進む"}
      </button>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <Link
          href="/store"
          style={{
            fontSize: "13px",
            color: "#555",
            textDecoration: "underline",
          }}
        >
          商品一覧を見る
        </Link>
      </div>
    </main>
  );
}