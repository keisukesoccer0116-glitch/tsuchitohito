"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  quantity: number;
};

const categories = [
  "すべて",
  "湯呑・カップ",
  "飯碗・丼",
  "皿・プレート",
  "鉢・ボウル",
  "花器",
  "その他",
];

export default function Header() {
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateCount = () => {
      const stored = localStorage.getItem("cart");

      if (!stored) {
        setCount(0);
        return;
      }

      const cart: CartItem[] = JSON.parse(stored);

      const total = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      setCount(total);
    };

    updateCount();

    window.addEventListener("storage", updateCount);

    return () =>
      window.removeEventListener("storage", updateCount);
  }, []);

  const handleCategoryClick = (category: string) => {
    window.dispatchEvent(
      new CustomEvent("categoryChange", {
        detail: category,
      })
    );

    setMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          borderBottom: "1px solid #ddd",
          background: "#ffffff",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* 左側 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="カテゴリーを開く"
              style={{
                background: "none",
                border: "none",
                fontSize: "28px",
                cursor: "pointer",
                padding: 0,
              }}
            >
              ☰
            </button>

            <Link
              href="/about"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <h1
                style={{
                  fontSize: "18px",
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                つちとひと
              </h1>
            </Link>
          </div>

          {/* 右側 */}
          <nav
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <Link href="/">ホーム</Link>

            <Link
              href="/cart"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              🛒 カート ({count})
            </Link>
          </nav>
        </div>
      </header>

      {/* カテゴリーメニュー */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            width: "260px",
            height: "calc(100vh - 70px)",
            background: "#fff",
            borderRight: "1px solid #ddd",
            padding: "30px",
            zIndex: 999,
            boxSizing: "border-box",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              style={{
                display: "block",
                width: "100%",
                marginBottom: "18px",
                padding: 0,
                background: "none",
                border: "none",
                textAlign: "left",
                fontFamily: "inherit",
                fontSize: "14px",
                color: "#222",
                cursor: "pointer",
              }}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </>
  );
}