export default function MashikoPage() {
  return (
    <main style={{ padding: "100px 20px 120px" }}>
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
        }}
      >
        {/* タイトル */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 500,
            marginBottom: "40px",
            letterSpacing: "0.08em",
          }}
        >
          益子焼
        </h1>

        {/* 本文 */}
        <div
          style={{
            lineHeight: 1.9,
            fontSize: "14px",
            color: "#555",
          }}
        >
          <p>
            益子焼は、栃木県益子町を中心に
            作られてきた日常のための焼きものです。
          </p>

          <p>
            厚みのあるかたち。
            手にしたときの重み。
            土の粒子が感じられる肌合い。
          </p>

          <p>
            完璧に整えられた器というよりも、
            使うほどに馴染み、
            暮らしの中で役割を果たしていく器。
          </p>

          <p>
            釉薬の溜まりや、
            ろくろ目の揺らぎ。
            焼成によって生まれる表情の違いも、
            益子焼の魅力のひとつです。
          </p>

          <p>
            食卓に置かれ、
            料理を受け止め、
            日々使われていくことで、
            器として完成していきます。
          </p>
        </div>
      </div>
    </main>
  );
}