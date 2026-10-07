import { Resend } from "resend";


type OrderItem = {
  name: string;
  price: number;
  quantity: number;
};

type OrderData = {
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  giftWrapping: boolean;
  giftWrappingFee: number;
  giftCardCode: string;
  giftCardAmount: number;
  originalTotal: number;
  paymentTotal: number;
  note: string;
  customerName: string;
  customerEmail: string;
  phone: string;
  address: string;
};

export async function sendOrderEmail(order: OrderData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const itemsHtml = order.items
    .map(
      (item) => `
        <tr>
          <td style="padding:8px 0; border-bottom:1px solid #eee;">
            ${item.name}
          </td>
          <td style="padding:8px 0; border-bottom:1px solid #eee; text-align:center;">
            ${item.quantity}
          </td>
          <td style="padding:8px 0; border-bottom:1px solid #eee; text-align:right;">
            ¥${(item.price * item.quantity).toLocaleString()}
          </td>
        </tr>
      `
    )
    .join("");

  const { error } = await resend.emails.send({
    from: "つちとひと <noreply@tsuchitohito.jp>",
    to: ["yamaguchi.k.bd@gmail.com"],
    subject: `【つちとひと】注文が入りました（¥${order.paymentTotal.toLocaleString()}）`,
    html: `
      <div style="font-family:Arial,'Hiragino Kaku Gothic ProN',Meiryo,sans-serif; max-width:700px; margin:0 auto; color:#222; line-height:1.8;">

        <h1 style="font-size:22px; font-weight:500; margin-bottom:30px;">
          注文が入りました
        </h1>

        <h2 style="font-size:17px; font-weight:500; border-bottom:1px solid #ddd; padding-bottom:8px;">
          商品
        </h2>

        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <thead>
            <tr>
              <th style="text-align:left; padding:8px 0;">商品名</th>
              <th style="text-align:center; padding:8px 0;">数量</th>
              <th style="text-align:right; padding:8px 0;">金額</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        <div style="margin-top:25px; font-size:14px;">
          <p>商品小計：¥${order.subtotal.toLocaleString()}</p>
          <p>送料：¥${order.shippingFee.toLocaleString()}</p>
          <p>ギフト包装：¥${order.giftWrappingFee.toLocaleString()}</p>

          ${
            order.giftCardCode
              ? `
                <p>
                  ギフトカード：
                  ${order.giftCardCode}
                  （−¥${order.giftCardAmount.toLocaleString()}）
                </p>
              `
              : ""
          }

          <p>元の合計：¥${order.originalTotal.toLocaleString()}</p>

          <p style="font-size:18px; font-weight:bold; margin-top:20px;">
            お支払い合計：¥${order.paymentTotal.toLocaleString()}
          </p>
        </div>

        <h2 style="font-size:17px; font-weight:500; border-bottom:1px solid #ddd; padding-bottom:8px; margin-top:35px;">
          お客様情報
        </h2>

        <p style="font-size:14px;">
          お名前：${order.customerName || "なし"}<br />
          メール：${order.customerEmail || "なし"}<br />
          電話番号：${order.phone || "なし"}<br />
          住所：${order.address || "なし"}
        </p>

        <h2 style="font-size:17px; font-weight:500; border-bottom:1px solid #ddd; padding-bottom:8px; margin-top:35px;">
          備考
        </h2>

        <p style="font-size:14px; white-space:pre-wrap;">
          ${order.note || "なし"}
        </p>

        <p style="margin-top:40px; color:#777; font-size:12px;">
          このメールは「つちとひと」のオンラインストアから自動送信されています。
        </p>

      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}