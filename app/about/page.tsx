export default function AboutPage() {
  return (
    <main style={{ padding: "40px 20px 100px" }}>
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        {/* 中央に来るメインメッセージ */}
        <div
          style={{
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              lineHeight: 1.9,
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

        {/* プロフィール・略歴 */}
        <p
          style={{
            lineHeight: 1.9,
            fontSize: "14px",
            color: "#555",
          }}
        >
          つちとひと
          <br />
          山口慶祐
          <br />
          1998年生まれ。
          <br />
          大学院修了後、会社勤めを経て、
          <br />
          益子焼窯元よこやまでの修行期間を過ごしました。
          <br />
          <br />
          工房兼ギャラリー
          <br />
          〒111-1111
          <br />
          栃木県益子町555
        </p>
      </div>
    </main>
  );
}