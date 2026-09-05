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

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  if (!product) {
    return <div style={{ padding: "40px" }}>商品が見つかりません</div>;
  }

  const max = product.maxQuantity ?? 10;

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
            src={mainImage || product.images[0]}
            alt={product.name}
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              marginBottom: "16px",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {product.images.map((img) => (
              <img
                key={img}
                src={img}
                alt={product.name}
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
        <div
          style={{
            width: isMobile ? "100%" : "400px",
          }}
        >
          <h1
            style={{
              fontSize: "22px",
              marginBottom: "12px",
            }}
          >
            {product.name}
          </h1>

          {/* 価格 */}
          <div
            style={{
              fontSize: "18px",
              marginBottom: "24px",
            }}
          >
            ¥{product.price.toLocaleString()}
          </div>

          {/* 商品紹介 */}
          <div
            style={{
              fontSize: "14px",
              lineHeight: 2,
              color: "#555",
              marginBottom: "30px",
            }}
          >
            {product.description}
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

          {/* カートボタン */}
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

          {/* 商品仕様 */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "30px",
              borderTop: "1px solid #ddd",
              fontSize: "14px",
              lineHeight: 1.9,
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 400,
                marginBottom: "20px",
              }}
            >
              商品仕様
            </h2>

            <div style={{ marginBottom: "16px" }}>
              <div style={{ color: "#777", marginBottom: "4px" }}>
                サイズ
              </div>
              <div>{product.size}</div>
            </div>

            <div>
              <div style={{ color: "#777", marginBottom: "4px" }}>
                対応可否
              </div>

              <div>
                オーブン：{product.oven ? "○" : "×"}
                <br />
                電子レンジ：{product.microwave ? "○" : "×"}
                <br />
                食器洗い洗浄機：
                {product.dishwasher ? "○" : "×"}
                <br />
                直火：{product.directFire ? "○" : "×"}
              </div>
            </div>
          </div>

          {/* 注意点 */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "30px",
              borderTop: "1px solid #ddd",
              fontSize: "13px",
              color: "#666",
              lineHeight: 2,
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#555",
                marginBottom: "20px",
              }}
            >
              注意点
            </h2>

            <p style={{ margin: 0 }}>
              商品画像とお届けする商品は全く同じではございません。
              <br />
              大きさ、形、色、模様、風合いなどは、1点1点異なります。
              <br />
              貫入（表面に入る模様のようなヒビ）、ピンホール（小さな穴）、鉄粉（鉄分が焼かれることによって酸化し黒点となった状態）、釉薬のムラなどの個体差をうつわの個性、うつわの表情として、捉えていただけない方のご購入はご遠慮願います。
              <br />
              お客様のご都合によるキャンセル・返品・交換はお受けしておりません。
              <br />
              もし形やラインが全て整った量産品の器をお探しの場合は、当店での購入はお控えください。
            </p>
          </div>

          {/* 戻る */}
          <div style={{ marginTop: "30px" }}>
            <Link href="/store">← ショップへ戻る</Link>
          </div>
        </div>
      </div>
    </main>
  );
}