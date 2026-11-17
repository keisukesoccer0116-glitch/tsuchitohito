import Link from "next/link";
import { journalArticles } from "@/lib/journal";

export default function JournalPage() {
  return (
    <main className="bg-white min-h-screen text-[#333]">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            JOURNAL
          </p>
          <h1 className="text-2xl md:text-3xl tracking-widest font-normal">
            日々のこと
          </h1>
          <p className="text-sm text-gray-500 mt-6 leading-8">
            制作のこと、日々の暮らし、器を通じて生まれるご縁。
            <br />
            つちとひとの活動を綴っています。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {journalArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group block"
            >
              <div className="overflow-hidden bg-gray-50 aspect-[4/3]">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <p className="text-xs text-gray-400 tracking-wider">
                  {article.date}
                  <span className="mx-3">/</span>
                  {article.category}
                </p>

                <h2 className="text-base leading-8 mt-3 font-normal tracking-wide group-hover:opacity-60 transition">
                  {article.title}
                </h2>

                <p className="text-xs tracking-widest mt-5 text-gray-500">
                  READ MORE →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}