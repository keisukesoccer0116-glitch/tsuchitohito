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

  const navStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "inherit",
    whiteSpace: "nowrap",
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
          boxSizing: "border-box",
        }}
      >
        <style jsx>{`
          .header-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .header-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .header-nav {
            display: flex;
            gap: 20px;
            align-items: center;
            font-size: 13px;
          }

          .cart-link {
            text-decoration: none;
            color: inherit;
            white-space: nowrap;
            font-size: 15px;
          }

          @media (max-width: 640px) {
            .header-inner {
              padding: 12px 18px 0;
              display: flex;
              flex-direction: column;
              align-items: stretch;
            }

            .header-top {
              min-height: 42px;
            }

            .cart-link {
              font-size: 17px;
            }

            .header-nav {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 0;
              padding: 13px 0;
              font-size: 11px;
              border-top: 1px solid #f0f0f0;
              margin-top: 10px;
            }
          }
        `}</style>

        <div className="header-inner">
          {/* 1段目：ロゴとカート */}
          <div className="header-top">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
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

            {/* PC・スマホ共通カート */}
            <Link
              href="/cart"
              className="cart-link"
              aria-label={`カート、商品${count}点`}
            >
              🛒 ({count})
            </Link>
          </div>

          {/* 2段目：4つのメニュー */}
          <nav className="header-nav">
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