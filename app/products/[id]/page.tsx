"use client";

import { useState, useEffect } from "react";
import { products } from "../../../lib/products";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div style={{ padding: "40px" }}>商品が見つかりません</div>;
  }

  const max = product.maxQuantity ?? 10;

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    product.images[0]
  );
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();

  window.addEventListener("resize", checkMobile);

  return () =>
    window.removeEventListener(
      "resize",
      checkMobile
    );
}, []);

  const addToCart = () => {
    const stored = localStorage.getItem("cart");
    const cart = stored ? JSON.parse(stored) : [];

    const existing = cart.find(
      (item: any) => item.id === product.id
    );

    if (existing) {
      existing.quantity = Math.min(
        max,
        existing.quantity + quantity
      );
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        maxQuantity: max,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  return (
    <main style={{ padding: "80px 20px" }}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "60px",
        }}
      >
        {/* 左：画像 */}
        <div style={{ flex: 1 }}>
          <img
            src={mainImage}
            alt={product.name}
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              marginBottom: "16px",
            }}
          />

          <div style={{ display: "flex", gap: "10px" }}>
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                onClick={() => setMainImage(img)}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  cursor: "pointer",
                  border:
                    mainImage === img
                      ? "2px solid #222"
                      : "1px solid #ddd",
                }}
              />
            ))}
          </div>
        </div>

        {/* 右：情報 */}
        <div style={{ width:  isMobile ? "100%" : "400px", }}>
          <h1 style={{ fontSize: "22px", marginBottom: "12px" }}>
            {product.name}
          </h1>

          {/* 産地表示 */}
          <div
            style={{
              fontSize: "13px",
              color: "#666",
              marginBottom: "12px",
            }}
          >
            産地：{product.origin}
          </div>

          <div
            style={{
              fontSize: "18px",
              marginBottom: "24px",
            }}
          >
            ¥{product.price.toLocaleString()}
          </div>

          {/* 数量選択 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
              fontSize: "14px",
            }}
          >
            <span>数量</span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
              }}
            >
              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                −
              </button>

              <div
                style={{
                  width: "32px",
                  textAlign: "center",
                }}
              >
                {quantity}
              </div>

              <button
                onClick={() =>
                  setQuantity(Math.min(max, quantity + 1))
                }
                disabled={quantity >= max}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  background: "none",
                  cursor:
                    quantity >= max
                      ? "not-allowed"
                      : "pointer",
                  opacity: quantity >= max ? 0.4 : 1,
                }}
              >
                ＋
              </button>
            </div>
          </div>

          {quantity >= max && (
            <div
              style={{
                fontSize: "12px",
                color: "#777",
                marginBottom: "16px",
              }}
            >
              この商品は最大{max}点までです
            </div>
          )}

          <button
            onClick={addToCart}
            style={{
              padding: "14px 28px",
              background: "#222",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            カートに入れる
          </button>

          <div style={{ marginTop: "20px" }}>
            <Link href="/">← 戻る</Link>
          </div>
        </div>
      </div>
    </main>
  );
}