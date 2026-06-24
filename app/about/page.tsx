export default function AboutPage() {
  return (
    <main style={{ padding: "80px 20px 100px" }}>
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        {/* メッセージ */}
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              lineHeight: 2,
              fontSize: "16px",
            }}
          >
            料理を盛る
            <br />
            お茶を入れる
            <br />
            花を生ける
            <br />
            <br />
            お気に入りの器に何かを入れて
            <br />
            ふと気持ちがほどける
            <br />
            <br />
            そんな体験がありますように
          </p>
        </div>

        {/* プロフィール */}
        <div
          style={{
            borderTop: "1px solid #ddd",
            paddingTop: "40px",
            color: "#555",
            lineHeight: 2,
            fontSize: "15px",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              fontWeight: 400,
              marginBottom: "28px",
              color: "#222",
            }}
          >
            山口慶祐　Keisuke Yamaguchi
          </h2>

          <p>
            1998年 栃木県出身
            <br />
            大学院修了後、会社勤めを経て
            <br />
            益子焼窯元よこやまにて修行
            <br />
            現在に至る
          </p>

          <div style={{ height: "36px" }} />

          <p>
            <strong>工房兼ギャラリー</strong>
            <br />
            〒321-4227
            <br />
            栃木県芳賀郡益子町東田井899-1
          </p>

          <div style={{ height: "24px" }} />

          <p>
            <strong>E-mail</strong>
            <br />
            yamaguchi.k.bd@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}