"use client";

import { useState } from "react";

export default function ContactPage() {
  const [type, setType] = useState("既存作品の再制作");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    shopName: "",
    item: "",
    quantity: "",
    purpose: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          type,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "送信に失敗しました。"
        );
      }

      setMessage(
        "お問い合わせを受け付けました。ありがとうございます。"
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        shopName: "",
        item: "",
        quantity: "",
        purpose: "",
        content: "",
      });

    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "送信に失敗しました。時間をおいて再度お試しください。"
      );
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "13px",
    border: "1px solid #ddd",
    background: "#fff",
    fontSize: "14px",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "14px",
    marginBottom: "10px",
  };

  return (
    <main
      style={{
        padding: "150px 24px 100px",
        color: "#333",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto",
        }}
      >
        {/* タイトル */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              marginBottom: "18px",
            }}
          >
            CONTACT
          </h1>

          <p
            style={{
              fontSize: "13px",
              color: "#888",
              letterSpacing: "0.1em",
            }}
          >
            お問い合わせ
          </p>
        </div>

        <p
          style={{
            fontSize: "14px",
            lineHeight: 2.3,
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          作品の再制作や飲食店・店舗様からのご注文、
          <br />
          その他ご質問などございましたら、
          <br />
          下記フォームよりお気軽にお問い合わせください。
        </p>

        <form onSubmit={handleSubmit}>
          {/* お問い合わせ種別 */}
          <div style={{ marginBottom: "30px" }}>
            <label style={labelStyle}>
              お問い合わせ種別 <span style={{ color: "#999" }}>必須</span>
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              style={inputStyle}
            >
              <option>既存作品の再制作</option>
              <option>飲食店・店舗様からのご注文</option>
              <option>商品・オンラインショップについて</option>
              <option>その他のお問い合わせ</option>
            </select>
          </div>

          {/* お名前 */}
          <div style={{ marginBottom: "30px" }}>
            <label style={labelStyle}>
              お名前 <span style={{ color: "#999" }}>必須</span>
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* メールアドレス */}
          <div style={{ marginBottom: "30px" }}>
            <label style={labelStyle}>
              メールアドレス <span style={{ color: "#999" }}>必須</span>
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          {/* 電話番号 */}
          <div style={{ marginBottom: "30px" }}>
            <label style={labelStyle}>
              電話番号（任意）
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* 店舗向け項目 */}
          {type === "飲食店・店舗様からのご注文" && (
            <div
              style={{
                padding: "25px",
                background: "#f8f7f5",
                marginBottom: "30px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "25px",
                }}
              >
                ご注文について
              </p>

              <div style={{ marginBottom: "20px" }}>
                <label style={labelStyle}>
                  店舗名
                </label>

                <input
                  name="shopName"
                  value={form.shopName}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={labelStyle}>
                  ご希望の器・形状
                </label>

                <input
                  name="item"
                  value={form.item}
                  onChange={handleChange}
                  placeholder="例：平皿、鉢、湯呑など"
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={labelStyle}>
                  ご希望数量
                </label>

                <input
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="例：20個"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>
                  使用用途
                </label>

                <input
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  placeholder="例：料理の提供、店舗での販売など"
                  style={inputStyle}
                />
              </div>
            </div>
          )}

          {/* お問い合わせ内容 */}
          <div style={{ marginBottom: "35px" }}>
            <label style={labelStyle}>
              お問い合わせ内容 <span style={{ color: "#999" }}>必須</span>
            </label>

            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              required
              rows={7}
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
          </div>

          {/* 送信ボタン */}
          <div style={{ textAlign: "center" }}>
            <button
              type="submit"
              disabled={loading}
              style={{
                width: "220px",
                padding: "16px",
                background: "#333",
                color: "#fff",
                border: "none",
                fontSize: "13px",
                letterSpacing: "0.12em",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
                fontFamily: "inherit",
              }}
            >
              {loading ? "送信中..." : "送信する"}
            </button>
          </div>

          {message && (
            <p
              role="status"
              style={{
                textAlign: "center",
                marginTop: "25px",
                fontSize: "14px",
                lineHeight: 2,
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}