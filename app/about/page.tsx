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
            山口慶祐　Keisuke Yamaguchi　　　　　　　　　　　メッセージ：私は、料理や花などの何かを受け止めることで器が完成することを目指しています。
            <br />　　　　　　　　　　　　　　　　　　　　　　　　　　　　いずれはその器単体の力強さを表現していくことを考えています。しかしどんな時も
            1998年 栃木県出身　　　　　　　　　　　　　　　　　　　　　　 私の根底にあるものは、何かとともに完成する器を作ることです。
            <br />　　　　　　　　　　　　　　　　　　　　　　　　　　　　皆様の生活や人生の一部に豊かさを感じられる仕事ができましたら幸いです。
            大学院修了後、会社勤めを経て　　　　　　　　　　　　　　　　　 
            <br />
            益子焼窯元よこやまにて修行
            <br />
            益子町で独立、現在に至る
          </p>
        </div>
      </div>
    </main>
  );
}