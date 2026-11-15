import Link from "next/link";

export const metadata = {
  title: "ORDER｜ご注文・制作のご相談｜つちとひと",
  description:
    "つちとひとでは、既存作品の再制作や飲食店・店舗様向けの器の制作を承っております。",
};

export default function OrderPage() {
  return (
    <main
      style={{
        padding: "160px 24px 100px",
        color: "#333",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* タイトル */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "100px",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              marginBottom: "18px",
            }}
          >
            ORDER
          </h1>

          <p
            style={{
              fontSize: "13px",
              letterSpacing: "0.12em",
              color: "#888",
            }}
          >
            ご注文・制作のご相談
          </p>
        </div>

        {/* はじめに */}
        <section style={{ marginBottom: "90px" }}>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 2.5,
              letterSpacing: "0.06em",
              textAlign: "center",
            }}
          >
            つちとひとでは、既存作品の再制作や、
            <br />
            飲食店・店舗様でお使いいただく器の制作を承っております。
            <br />
            ご希望や用途に合わせて、一つひとつ丁寧に制作いたします。
          </p>
        </section>

        {/* 再制作 */}
        <section style={{ marginBottom: "90px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              marginBottom: "28px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "16px",
            }}
          >
            既存作品の再制作
          </h2>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 2.4,
              letterSpacing: "0.04em",
              marginBottom: "20px",
            }}
          >
            オンラインショップでSOLD OUTとなっている作品につきましては、
            再制作のご相談を承っております。
          </p>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 2.4,
              letterSpacing: "0.04em",
            }}
          >
            制作期間は、目安として2〜3ヶ月ほどお時間を頂戴しております。
            また、手仕事による制作のため、色味や形状、表情には一点ごとの違いが生まれます。
            あらかじめご了承ください。
          </p>
        </section>

        {/* 飲食店向け */}
        <section style={{ marginBottom: "90px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              marginBottom: "28px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "16px",
            }}
          >
            飲食店・店舗様からのご注文
          </h2>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 2.4,
              letterSpacing: "0.04em",
              marginBottom: "20px",
            }}
          >
            飲食店や料理店、その他店舗様でご使用いただく器の制作も承っております。
          </p>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 2.4,
              letterSpacing: "0.04em",
            }}
          >
            お料理やお店の雰囲気、使用目的などをお伺いしながら、
            器の形状や数量についてご相談させていただきます。
            継続的なお取引についても、お気軽にお問い合わせください。
          </p>
        </section>

        {/* ご注文の流れ */}
        <section style={{ marginBottom: "100px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              marginBottom: "28px",
              borderBottom: "1px solid #ddd",
              paddingBottom: "16px",
            }}
          >
            ご注文の流れ
          </h2>

          {[
            ["01", "お問い合わせ", "フォームよりご希望の内容をお知らせください。"],
            ["02", "内容の確認", "ご希望の器や数量、用途などを確認いたします。"],
            ["03", "お見積もり", "制作内容に応じて、お見積もりをご案内いたします。"],
            ["04", "制作・納品", "内容にご了承いただいた後、制作を進めてまいります。"],
          ].map(([number, title, description]) => (
            <div
              key={number}
              style={{
                display: "flex",
                gap: "24px",
                padding: "22px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  color: "#999",
                  minWidth: "25px",
                }}
              >
                {number}
              </span>

              <div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 400,
                    marginBottom: "10px",
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 2,
                    color: "#777",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* お問い合わせ */}
        <section
          style={{
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "0.12em",
              marginBottom: "24px",
            }}
          >
            お問い合わせ
          </h2>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 2.3,
              color: "#777",
              marginBottom: "35px",
            }}
          >
            制作やご注文についてのご相談は、
            <br />
            下記よりお問い合わせください。
          </p>

          <Link
            href="/contact"
            style={{
              display: "inline-block",
              padding: "16px 60px",
              border: "1px solid #333",
              color: "#333",
              textDecoration: "none",
              fontSize: "13px",
              letterSpacing: "0.12em",
              transition: "0.3s",
            }}
          >
            CONTACT
          </Link>
        </section>
      </div>
    </main>
  );
}