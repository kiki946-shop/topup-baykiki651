import { db } from "@/db";
import { games } from "@/db/schema";
import { eq } from "drizzle-orm";
import { GameIcon, hasCustomLogo } from "@/lib/game-icons";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const allGames = await db
    .select()
    .from(games)
    .where(eq(games.isActive, true))
    .orderBy(games.name);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-gray-950 to-blue-900/50" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-purple-300">
              Online 24 Jam • Proses Otomatis
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            <span className="text-white">Top Up Game </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Murah & Cepat
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Diamond, UC, Crystal, dan lainnya langsung masuk ke akun game kamu.
            Proses cepat, aman, dan otomatis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#games"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-3.5 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              🎮 Pilih Game
            </a>
            <a
              href="/order-check"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-8 py-3.5 rounded-xl text-lg font-semibold transition-all"
            >
              📋 Cek Pesanan
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                10+
              </div>
              <div className="text-sm text-gray-400 mt-1">Game Tersedia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">
                Instan
              </div>
              <div className="text-sm text-gray-400 mt-1">Proses Cepat</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">
                24/7
              </div>
              <div className="text-sm text-gray-400 mt-1">Layanan Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            🎮 Pilih Game Favoritmu
          </h2>
          <p className="text-gray-400">
            Tersedia berbagai game populer dengan harga termurah
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {allGames.map((game) => (
            <a
              key={game.id}
              href={`/game/${game.slug}`}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              <div className={`aspect-square ${hasCustomLogo(game.slug) ? "" : "bg-gradient-to-br from-gray-800 to-gray-900"} flex items-center justify-center text-5xl relative overflow-hidden`}>
                {!hasCustomLogo(game.slug) && <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all" />}
                <span className="relative z-10"><GameIcon slug={game.slug} size="lg" /></span>
                <div className="absolute top-2 right-2 z-10">
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                      game.category === "mobile"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {game.category === "mobile" ? "📱 Mobile" : "💻 PC"}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-white text-sm truncate group-hover:text-purple-400 transition-colors">
                  {game.name}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{game.publisher}</p>
                <div className="mt-2 flex items-center justify-end">
                  <span className="text-xs text-gray-600 group-hover:text-purple-400 transition-colors">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* How To Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            📖 Cara Top Up
          </h2>
          <p className="text-gray-400">
            Hanya 4 langkah mudah untuk top up game favoritmu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              icon: "🎮",
              title: "Pilih Game",
              desc: "Pilih game yang ingin kamu top up dari daftar game tersedia",
            },
            {
              step: "2",
              icon: "💎",
              title: "Pilih Nominal",
              desc: "Pilih jumlah diamond, UC, atau item yang kamu butuhkan",
            },
            {
              step: "3",
              icon: "💳",
              title: "Bayar",
              desc: "Pilih metode pembayaran dan selesaikan pembayaran",
            },
            {
              step: "4",
              icon: "✅",
              title: "Selesai",
              desc: "Item akan langsung masuk ke akun game kamu secara otomatis",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center relative"
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                {item.step}
              </div>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              ⭐ Kenapa Pilih TopUpBayKiki651?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "⚡",
                title: "Proses Instan",
                desc: "Item masuk ke akun game dalam hitungan detik setelah pembayaran",
              },
              {
                icon: "💰",
                title: "Harga Termurah",
                desc: "Dijamin harga paling murah dan terjangkau",
              },
              {
                icon: "🔒",
                title: "Aman & Terpercaya",
                desc: "Ribuan transaksi berhasil setiap hari dengan tingkat keberhasilan 99.9%",
              },
            ].map((feat) => (
              <div key={feat.title} className="text-center">
                <div className="text-4xl mb-3">{feat.icon}</div>
                <h3 className="font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-400">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
