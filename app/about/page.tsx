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
          <p>
            山口慶祐　Keisuke Yamaguchi
            <br />
            1998年 栃木県出身
            <br />
            大学院修了後、会社勤めを経て
            <br />
            益子焼窯元よこやまにて修行
            <br />
            現在に至る
          </p>

          {/* 制作について */}
          <p style={{ marginTop: "40px" }}>
            私は、料理や花など、何かを受け止めることで完成する器を目指しています。
          </p>

          <p>
            いずれは、器そのものが持つ力強さも表現していきたいと考えています。
            <br />
            しかし、どんな時も私の根底にあるのは、何かとともに完成する器をつくることです。
          </p>

          <p>
            器を通して、皆様の暮らしや人生の一部に、豊かさを感じていただけるような仕事ができましたら幸いです。
          </p>
        </div>
      </div>
    </main>
  );
}