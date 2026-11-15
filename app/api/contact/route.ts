import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "メール送信の設定がありません。" },
        { status: 500 }
      );
    }

    const body = await request.json();

    const {
      name,
      email,
      phone,
      type,
      shopName,
      item,
      quantity,
      purpose,
      content,
    } = body;

    if (
      !name ||
      !email ||
      !type ||
      !content ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof type !== "string" ||
      typeof content !== "string"
    ) {
      return NextResponse.json(
        { error: "必須項目を入力してください。" },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      content.length > 5000
    ) {
      return NextResponse.json(
        { error: "入力文字数が上限を超えています。" },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "メールアドレスをご確認ください。" },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "つちとひと <noreply@tsuchitohito.jp>",
      to: ["yamaguchi.k.bd@gmail.com"],
      replyTo: email,
      subject: `【つちとひと】お問い合わせ：${type}`,
      text: `
ホームページからお問い合わせがありました。

■ お問い合わせ種別
${type}

■ お名前
${name}

■ メールアドレス
${email}

■ 電話番号
${phone || "未入力"}

■ 店舗名
${shopName || "未入力"}

■ ご希望の器・形状
${item || "未入力"}

■ ご希望数量
${quantity || "未入力"}

■ 使用用途
${purpose || "未入力"}

■ お問い合わせ内容
${content}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "メールの送信に失敗しました。" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}