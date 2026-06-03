"use client";

import Link from "next/link";
import { products } from "../lib/products";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState("すべて");

  const categories = [
    "すべて",
    "湯呑・カップ",
    "飯碗・丼",
    "皿・プレート",
    "鉢・ボウル",
    "花器",
    "その他",
  ];

  const filteredProducts =
    selectedCategory === "すべて"
      ? products
      : products.filter(
          (p) => p.category === selectedCategory
        );

  return (
    <main style={{ padding: "100px 20px 80px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "60px",
        }}
      >
        {/* ---------- 左：カテゴリー ---------- */}
        <aside style={{ width: "180px" }}>
          <h2 className="ui-text" style={{ marginBottom: "16px" }}>
            CATEGORY
          </h2>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {categories.map((label) => (
              <li
                key={label}
                style={{
                  marginBottom: "10px",
                  cursor: "pointer",
                  fontWeight:
                    selectedCategory === label ? 600 : 400,
                }}
                onClick={() =>
                  setSelectedCategory(label)
                }
              >
                <span className="ui-text">{label}</span>

                <div
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    color: "#bbb",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  --------------------
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* ---------- 右：商品一覧 ---------- */}
        <section style={{ flex: 1 }}>
          <section style={{ marginBottom: "48px" }}>
            <h1
              className="title-text"
              style={{ fontWeight: 500 }}
            >
              つちとひと
            </h1>
          </section>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "36px",
            }}
          >
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <div>
                  <img
                    src={`/products/${product.id}.jpg`}
                    alt={product.name}
                    style={{
                      width: "100%",
                      aspectRatio: "1 / 1",
                      objectFit: "cover",
                      background: "#eee",
                      marginBottom: "10px",
                    }}
                  />

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
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}