"use client";

import Link from "next/link";
import { products } from "../lib/products";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState("すべて");

  const [menuOpen, setMenuOpen] = useState(false);

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


      {/* カテゴリーメニュー */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            width: "240px",
            height: "100vh",
            background: "#fff",
            borderRight: "1px solid #eee",
            padding: "24px",
            zIndex: 999,
          }}
        >
          {categories.map((label) => (
            <div
              key={label}
              onClick={() => {
                setSelectedCategory(label);
                setMenuOpen(false);
              }}
              style={{
                marginBottom: "16px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      )}

      {/* 商品一覧 */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop:"120px",
        }}
      >
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
      </div>
    </main>
  );
}