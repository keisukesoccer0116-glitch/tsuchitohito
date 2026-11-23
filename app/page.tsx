export default function Home() {
  return (
    <main style={{ padding: "80px 20px 100px" }}>
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        {/* メインメッセージ */}
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

        {/* Message */}
        <section
          style={{
            borderTop: "1px solid #ddd",
            padding: "60px 0",
            color: "#555",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "normal",
              letterSpacing: "0.08em",
              marginBottom: "40px",
            }}
          >
            Message
          </h2>

          <div
            style={{
              fontSize: "14px",
              lineHeight: 2.2,
              letterSpacing: "0.03em",
            }}
          >
            <p>
              私は器を通して、何気ない日常の中に小さな喜びや心地よさを感じる体験を増やしたいと考えています。
            </p>

            <p>
              私たちは毎日、水や食べ物をいただくことで命をつないでいます。そして、その多くは器を介して行われます。だからこそ、日々の食事に使う器に少し意識を向けてみてほしいのです。お気に入りの器に料理を盛り付ける。器の色や質感を楽しみ、料理との組み合わせを考える。それだけで、いつもの食事が少し特別な時間に変わります。食事は単にお腹を満たすためだけのものではなく、その時間をどのように過ごすかによって、心の満たされ方も変わるのだと思います。
            </p>

            <p>
              また、器のある暮らしは食事の場面だけに限りません。朝、一杯の水を飲む、朝食をとり、鍵を手に取って出かける。季節の草花を花器に生ける。こうした身近な生活の中にお気に入りの器があるだけで、いつもの動作が少し心地よくなり、何気ない時間に小さな喜びが生まれます。器そのものを楽しむことはもちろん、器と周囲のものとの組み合わせや、暮らしの中に生まれる何気ない景色を楽しむことも、器を使う魅力の一つです。
            </p>

            <p>
              現代は、特に先進国である日本において、必要なものがいつでも手に入り、便利さや効率が優先される時代です。大量生産・大量消費によって多くのものに囲まれる一方で、本当に自分が大切にしたいものを考える機会は少なくなっているようにも感じます。
            </p>

            <p>
              だからこそ、自分の身の回りに何を選び、何を置くのかを大切にしてほしいと思っています。高価なものである必要はありません。なくても困らないけれど、あると少し嬉しい。そんな自分にとって大切なものを見つけ、長く使い続けること。それが、私の考える豊かな暮らしです。
            </p>

            <p>
              そして、器をきっかけに、身近なものを大切にする気持ちや、日々の暮らしを楽しむ心が育まれていく。そんな存在でありたいと願っています。
            </p>
          </div>
        </section>

        {/* プロフィール */}
        <div
          style={{
            borderTop: "1px solid #ddd",
            paddingTop: "40px",
            color: "#555",
            lineHeight: 2,
            fontSize: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* 経歴 */}
            <div
              style={{
                flex: 1,
                minWidth: 0,
              }}
            >
              <p style={{ margin: 0 }}>
                山口慶祐　Keisuke Yamaguchi
                <br />
                1998年 栃木県出身
                <br />
                大学院修了後、会社員を経て
                <br />
                益子焼窯元よこやまにて修行
                <br />
                栃木県益子町にて独立
                <br />
                現在に至る
              </p>
            </div>

            {/* 写真 */}
            <div style={{ flexShrink: 0 }}>
              <img
                src="/images/profile.jpg"
                alt="つちとひと 山口慶祐"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}