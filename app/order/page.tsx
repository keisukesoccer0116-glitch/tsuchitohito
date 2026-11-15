import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ORDER｜ご注文・制作のご相談｜つちとひと",
  description:
    "つちとひとの器の再制作や、飲食店・店舗様向けの器のご注文についてご案内しています。",
};

const sectionStyle: React.CSSProperties = {
  maxWidth: "760px",
  margin: "0 auto",
};

const headingStyle: React.CSSProperties = {
  fontSize: "21px",
  fontWeight: 400,
  letterSpacing: "0.08em",
  marginBottom: "24px",
};

const textStyle: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: 2.2,
  color: "#555",
};

export default function OrderPage() {
  return (
    <main
      style={{
        background: "#fff",
        color: "#222",
        padding: "80px 24px 120px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 400,
            letterSpacing: "0.18em",
            marginBottom: "18px",
          }}
        >
          ORDER
        </h1>

        <p style={{ fontSize: "13px", color: "#888", letterSpacing: "0.1em" }}>
          ご注文・制作のご相談
        </p>
      </div>

      <div style={sectionStyle}>
        <section style={{ marginBottom: "80px" }}>
          <h2 style={headingStyle}>既存作品の再制作について</h2>

          <p style={textStyle}>
            オンラインストアでSOLD OUTとなっている作品につきましても、
            再制作を承っております。
            <br />
            <br />
            一点ずつ手作業で制作しているため、以前の作品とまったく同じものにはなりません。
            釉薬の表情や形、色合いなどに個体差が生まれることも、
            手仕事ならではの魅力としてお楽しみいただければ幸いです。
            <br />
            <br />
            制作期間は、ご注文内容や制作状況によって異なりますが、
            目安として2〜3か月ほどお時間をいただいております。
          </p>
        </section>

        <section style={{ marginBottom: "80px" }}>
          <h2 style={headingStyle}>飲食店・店舗様からのご注文</h2>

          <p style={textStyle}>
            飲食店や店舗様でお使いいただく器のご注文も承っております。
            <br />
            <br />
            お料理やお店の雰囲気、用途に合わせて、器の種類や数量などを
            ご相談いただけます。
            <br />
            <br />
            継続的なお取引についても、お気軽にお問い合わせください。
          </p>
        </section>

        <section style={{ marginBottom: "80px" }}>
          <h2 style={headingStyle}>ご注文の流れ</h2>

          {[
            {
              number: "01",
              title: "お問い合わせ",
              description:
                "お問い合わせフォームより、ご希望の作品や数量、用途などをお知らせください。",
            },
            {
              number: "02",
              title: "内容の確認・お見積もり",
              description:
                "ご希望の内容を確認し、制作内容や納期、お見積もりについてご案内いたします。",
            },
            {
              number: "03",
              title: "ご注文・制作",
              description:
                "内容にご了承いただいた後、制作を開始いたします。",
            },
            {
              number: "04",
              title: "お届け",
              description:
                "完成後、丁寧に梱包してお届けいたします。",
            },
          ].map((step) => (
            <div
              key={step.number}
              style={{
                display: "flex",
                gap: "24px",
                padding: "24px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  color: "#999",
                  letterSpacing: "0.08em",
                }}
              >
                {step.number}
              </span>

              <div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    marginBottom: "10px",
                  }}
                >
                  {step.title}
                </h3>

                <p style={textStyle}>{step.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section style={{ textAlign: "center" }}>
          <p style={{ ...textStyle, marginBottom: "30px" }}>
            ご注文や制作についてのご相談は、
            <br />
            お問い合わせフォームよりご連絡ください。
          </p>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "16px 48px",
              border: "1px solid #333",
              color: "#222",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "0.08em",
            }}
          >
            CONTACT
          </Link>
        </section>
      </div>
    </main>
  );
}