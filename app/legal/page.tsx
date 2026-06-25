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
              〒321-4227　栃木県芳賀郡益子町東台井899-1
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
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>商品代金以外の必要料金</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              ・送料・支払方法により所定の手数料・販売価格には消費税が含まれています。
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>配送について</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              【ヤマト運輸】
              ・関東、関西、東北、北陸、中部、信越：1,800円(税込)
              ・中国地方：2,100円(税込)
              ・四国：2,100円(税込)
              ・北海道、九州：2,300円(税込)
              ・沖縄：3,500円(税込)
              ※出荷後のキャンセル、配送先の変更・転送は別途配送料金がかかります。
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>キャンセル・変更について</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              ご注文後のキャンセル、内容変更はお受けできませんので、予めご了承ください。
              ※出荷後のキャンセル、配送先の変更・転送は別途配送料金がかかります。
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>支払方法</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              ・クレジットカード決済（JCB,VISA, MASTER, AMEX）
            　・スマホ決済（PayPay）
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>商品の引渡時期</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              ご注文確認後、7日以内に発送いたします。
            </td>
          </tr>
          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>商品の個体差について</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              商品はすべて手作りのため、大きさ、形、色、模様、風合いなどが一点一点異なります。
              ・貫入（表面に入る模様のようなヒビ）
              ・ピンホール（小さな穴）
              ・鉄粉（鉄分が焼かれることによって酸化し黒点となった状態）
              ・釉薬のムラなどの個体差をうつわの個性、うつわの表情として捉えられない方のご購入はご遠慮ください
            </td>
          </tr>

          <tr>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>不良品の取り扱い</td>
            <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
              個体差によるもの以外の初期不良や配送中破損が認められる場合は、同等商品と交換、または返金致します。
              この場合の返品等にかかる送料は当店が負担致します。お届け後7日間以内に「お問い合わせ」よりご連絡ください。
              ※ただし、商品は手作りのため同一のものと交換が出来ない場合がございます。その場合は返金させて頂きます。
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}