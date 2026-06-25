export default function LegalPage() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "40px" }}>
        特定商取引法に基づく表記
      </h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          lineHeight: 1.8,
        }}
      >
        <tbody>
          <tr>
            <td style={{ width: "35%", padding: "12px", borderBottom: "1px solid #ddd" }}>販売事業者</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>つちとひと</td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>運営責任者</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>山口 慶祐</td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>所在地</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              請求があった場合、遅滞なく開示いたします。
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>電話番号</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              請求があった場合、遅滞なく開示いたします。
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>メールアドレス</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              yamaguchi.k.bd@gmail.com
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>販売価格</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              商品ページに表示
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>商品代金以外の必要料金</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              送料
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>支払方法</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              クレジットカード（Stripe）
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>商品の引渡時期</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              ご注文確認後、7日以内に発送いたします。
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>返品・交換</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              商品に欠陥がある場合を除き、返品・交換はお受けできません。
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}