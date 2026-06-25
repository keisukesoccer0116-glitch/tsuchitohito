import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "120px",
        padding: "40px 20px",
        borderTop: "1px solid #ddd",
        background: "#f6f5f3",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
          fontSize: "13px",
          color: "#555",
          lineHeight: 1.8,
        }}
      >
        <p style={{ marginBottom: "4px" }}>
          お問い合わせはyamaguchi.k.bd@gmail.com、または
          <br />
          Instagramのメッセージよりご連絡ください。
        </p>

        <p style={{ marginBottom: "24px" }}>
          <Link
            href="https://www.instagram.com/keisuke_y1998?igsh=a3pyZ3Zub2NmdDN0&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              borderBottom: "1px solid #555",
              paddingBottom: "2px",
            }}
          >
            Instagram →
          </Link>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "24px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/legal"
            style={{
              color: "#555",
              textDecoration: "none",
            }}
          >
            特定商取引法に基づく表記
          </Link>

          <Link
            href="/privacy"
            style={{
              color: "#555",
              textDecoration: "none",
            }}
          >
            プライバシーポリシー
          </Link>
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "#888",
          }}
        >
          © 2026 つちとひと
        </p>
      </div>
    </footer>
  );
}