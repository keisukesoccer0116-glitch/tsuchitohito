export default function SuccessPage() {
  return (
    <main
      style={{
        padding: "140px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            marginBottom: "24px",
            fontWeight: 500,
          }}
        >
          ご購入ありがとうございます。
        </h1>

        <p
          style={{
            lineHeight: 1.9,
            color: "#555",
            fontSize: "14px",
            marginBottom: "40px",
          }}
        >
          ご注文を受け付けました。
          <br />
          発送まで数日ほどお時間をいただきます。
          <br />
          どうぞ楽しみにお待ちください。
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "12px 28px",
            border: "1px solid #222",
            textDecoration: "none",
            color: "#222",
            fontSize: "14px",
          }}
        >
          ホームへ戻る
        </a>
      </div>
    </main>
  );
}