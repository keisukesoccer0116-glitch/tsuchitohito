import Link from "next/link";
import { notFound } from "next/navigation";
import { journalArticles } from "@/lib/journal";

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = journalArticles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#333]">
      <article className="max-w-3xl mx-auto px-6 pt-20 pb-32">

        {/* 記事タイトル */}
        <header className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] text-gray-400 mb-5">
            JOURNAL
          </p>

          <p className="text-xs text-gray-400 mb-6">
            {article.date}
          </p>

          <h1 className="text-xl md:text-2xl leading-9 tracking-wide font-normal">
            {article.title}
          </h1>

          <p className="text-xs text-gray-400 mt-5">
            {article.category}
          </p>
        </header>

        {/* メイン画像 */}
        <div className="mb-14">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-auto"
          />
        </div>

        {/* 記事本文 */}
        <div className="max-w-2xl mx-auto">
          {article.content.map((paragraph, index) => (
            <div key={index}>
              <p className="text-sm md:text-base leading-9 tracking-wide text-[#444] mb-10">
                {paragraph}
              </p>

              {/* 2段落目の後に2枚目の写真 */}
              {index === 1 && article.images[1] && (
                <img
                  src={article.images[1]}
                  alt={article.title}
                  className="w-full h-auto mb-12"
                />
              )}

              {/* 4段落目の後に3枚目の写真 */}
              {index === 3 && article.images[2] && (
                <img
                  src={article.images[2]}
                  alt={article.title}
                  className="w-full h-auto mb-12"
                />
              )}
            </div>
          ))}
        </div>

        {/* その他の写真 */}
        {article.images.length > 3 && (
          <div className="mt-16 space-y-10">
            {article.images.slice(3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${article.title} 写真 ${index + 4}`}
                className="w-full h-auto"
              />
            ))}
          </div>
        )}

        {/* 記事一覧へ戻る */}
        <div className="text-center mt-24">
          <Link
            href="/journal"
            className="inline-block text-xs tracking-[0.2em] border-b border-gray-400 pb-2 hover:opacity-50 transition"
          >
            BACK TO JOURNAL
          </Link>
        </div>

      </article>
    </main>
  );
}