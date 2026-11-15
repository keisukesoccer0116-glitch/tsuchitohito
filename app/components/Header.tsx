"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const isStorePage = pathname === "/store";

  useEffect(() => {
    const updateCount = () => {
      const stored = localStorage.getItem("cart");

      if (!stored) {
        setCount(0);
        return;
      }

      try {
        const cart: CartItem[] = JSON.parse(stored);

        const total = cart.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

        setCount(total);
      } catch {
        setCount(0);
      }
    };

    updateCount();

    window.addEventListener("storage", updateCount);
    window.addEventListener("cartUpdated", updateCount);

    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("cartUpdated", updateCount);
    };
  }, [pathname]);

  const handleCategoryClick = (category: string) => {
    window.dispatchEvent(
      new CustomEvent("categoryChange", {
        detail: category,
      })
    );

    setMenuOpen(false);
  };

  const navStyle = {
    textDecoration: "none",
    color: "inherit",
    whiteSpace: "nowrap" as const,
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
            {/* ショップページのみカテゴリー表示 */}
            {isStorePage && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="カテゴリーを開く"
                aria-expanded={menuOpen}
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
            )}

            {/* ロゴ */}
            <Link
              href="/"
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
                  whiteSpace: "nowrap",
                }}
              >
                つちとひと
              </h1>
            </Link>
          </div>

          {/* 右側メニュー */}
          <nav
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              fontSize: "13px",
            }}
          >
            <Link href="/store" style={navStyle}>
              SHOP
            </Link>

            <Link href="/order" style={navStyle}>
              ORDER
            </Link>

            <Link href="/journal" style={navStyle}>
              JOURNAL
            </Link>

            <Link href="/contact" style={navStyle}>
              CONTACT
            </Link>

            <Link href="/cart" style={navStyle}>
              🛒 ({count})
            </Link>
          </nav>
        </div>
      </header>

      {/* カテゴリーメニュー */}
      {isStorePage && menuOpen && (
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