"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  quantity: number;
};

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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
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

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            width: "260px",
            height: "100vh",
            background: "#fff",
            borderRight: "1px solid #ddd",
            padding: "30px",
            zIndex: 999,
          }}
        >
          <div style={{ marginBottom: "18px" }}>すべて</div>
          <div style={{ marginBottom: "18px" }}>湯呑・カップ</div>
          <div style={{ marginBottom: "18px" }}>飯碗・丼</div>
          <div style={{ marginBottom: "18px" }}>皿・プレート</div>
          <div style={{ marginBottom: "18px" }}>鉢・ボウル</div>
          <div style={{ marginBottom: "18px" }}>花器</div>
          <div style={{ marginBottom: "18px" }}>その他</div>
        </div>
      )}
    </>
  );
}