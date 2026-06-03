"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  quantity: number;
};

export default function Header() {
  const [count, setCount] = useState(0);

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
    <header
      style={{
        borderBottom: "1px solid #ddd",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 店名（プロフィールへ） */}
        <Link href="/about">
          <h1 style={{ fontSize: "18px", margin: 0 }}>
            つちとひと
          </h1>
        </Link>

        {/* ナビ */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <Link href="/">ホーム</Link>

          <Link href="/cart">
            <div
              style={{
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              <span>🛒</span>
              <span>カート</span>
              <span>({count})</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}