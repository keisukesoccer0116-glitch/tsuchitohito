import Link from "next/link";

export default function OriginsPage() {
  return (
    <main style={{ padding: "100px 20px 120px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* タイトル */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 500,
            marginBottom: "32px",
            letterSpacing: "0.08em",
          }}
        >
          やきものについて
        </h1>

        {/* 学びの文章 */}
        <div
          style={{
            maxWidth: "640px",
            marginBottom: "64px",
            lineHeight: 1.9,
            fontSize: "14px",
            color: "#555",
          }}
        >
          <p>
            日本各地には、
            その土地の土や気候、人の営みによって
            育まれてきた焼きものがあります。
          </p>

          <p>
            使われる土。
            炎のあたり方。
            釉薬の重なり。
            時間のかけ方。
          </p>

          <p>
            地図上の産地名をクリックすると、
            それぞれの焼きものの背景や特徴を知ることができます。
          </p>
        </div>

        {/* 日本地図 */}
        <div
          style={{
            position: "relative",
            maxWidth: "720px",
            marginBottom: "80px",
          }}
        >
          <img
            src="/products/japan-map.jpg"
            alt="日本の焼きものの産地"
            style={{
              width: "100%",
              display: "block",
            }}
          />

          {/* ===== 産地ラベル ===== */}

          {/* 益子焼（栃木） */}
          <Link href="/origins/mashiko">
            <span
              style={{
                position: "absolute",
                top: "38%",
                left: "58%",
                transform: "translate(-50%, -50%)",
                fontSize: "13px",
                background: "rgba(255,255,255,0.85)",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              益子焼
            </span>
          </Link>

          {/* 小鹿田焼（大分） */}
          <Link href="/origins/ontayaki">
            <span
              style={{
                position: "absolute",
                top: "55%",
                left: "52%",
                transform: "translate(-50%, -50%)",
                fontSize: "13px",
                background: "rgba(255,255,255,0.85)",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              小鹿田焼
            </span>
          </Link>

          {/* 備前焼（岡山） */}
          <Link href="/origins/bizen">
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "13px",
                background: "rgba(255,255,255,0.85)",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              備前焼
            </span>
          </Link>

          {/* 三川内焼（長崎） */}
          <Link href="/origins/mikawachi">
            <span
              style={{
                position: "absolute",
                top: "58%",
                left: "68%",
                transform: "translate(-50%, -50%)",
                fontSize: "13px",
                background: "rgba(255,255,255,0.85)",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              三川内焼
            </span>
          </Link>
        </div>

        {/* 注釈 */}
        <p style={{ fontSize: "12px", color: "#777" }}>
          ※ 産地は順次追加予定です。
        </p>
      </div>
    </main>
  );
}