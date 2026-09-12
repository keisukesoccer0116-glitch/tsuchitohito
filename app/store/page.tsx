"use client";

import Link from "next/link";
import { products } from "../../lib/products";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState("すべて");

  useEffect(() => {
    const handleCategoryChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>;

      setSelectedCategory(customEvent.detail);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener(
      "categoryChange",
      handleCategoryChange
    );

    return () => {
      window.removeEventListener(
        "categoryChange",
        handleCategoryChange
      );
    };
  }, []);

  const filteredProducts =
    selectedCategory === "すべて"
      ? products
      : products.filter(
          (p) => p.category === selectedCategory
        );

  return (
    <main style={{ padding: "100px 20px 80px" }}>
      {/* 商品一覧 */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "120px",
        }}
      >
        {/* 選択中カテゴリー */}
        {selectedCategory !== "すべて" && (
          <div
            style={{
              marginBottom: "32px",
              fontSize: "14px",
              color: "#666",
            }}
          >
            {selectedCategory}
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {filteredProducts.map((product) => {
            const soldOut =
              (product.maxQuantity ?? 0) <= 0;

            return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                        background: "#eee",
                        marginBottom: "10px",
                        display: "block",
                      }}
                    />

                    {soldOut && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "rgba(255, 255, 255, 0.45)",
                          fontSize: "16px",
                          letterSpacing: "0.12em",
                        }}
                      >
                        SOLD OUT
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="content-text">
                      {product.name}
                    </div>

                    <div className="meta-text">
                      ¥{product.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}