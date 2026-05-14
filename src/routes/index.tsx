import { createFileRoute } from '@tanstack/react-router'
import products, { type Product } from '@/data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/')({
  component: GemStore,
})

const GEM_THEMES: Record<string, { from: string; to: string; icon: string }> = {
  'Starter Pack': { from: '#6ee7b7', to: '#059669', icon: '💎' },
  'Bronze Pack': { from: '#fbbf24', to: '#b45309', icon: '🟤' },
  'Silver Pack': { from: '#e2e8f0', to: '#94a3b8', icon: '⚡' },
  'Gold Pack': { from: '#fde68a', to: '#d97706', icon: '🌟' },
  'Diamond Pack': { from: '#a5f3fc', to: '#0891b2', icon: '💠' },
  'Legend Pack': { from: '#f9a8d4', to: '#be185d', icon: '👑' },
}

function GemCard({ product }: { product: Product }) {
  const theme = GEM_THEMES[product.name] ?? { from: '#a78bfa', to: '#7c3aed', icon: '💎' }

  return (
    <div className="gem-card rounded-2xl p-6 flex flex-col gap-4 relative">
      {product.popular && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
          style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}
        >
          🔥 Most Popular
        </div>
      )}

      <div
        className="w-full h-32 rounded-xl flex items-center justify-center text-6xl"
        style={{
          background: `linear-gradient(135deg, ${theme.from}22, ${theme.to}44)`,
          border: `1px solid ${theme.from}44`,
        }}
      >
        {theme.icon}
      </div>

      <div>
        <h2 className="text-xl font-bold text-white">{product.name}</h2>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="text-2xl font-extrabold" style={{ color: theme.from }}>
            {product.gems.toLocaleString()}
          </span>
          <span className="text-gray-400 text-sm">gems</span>
          {product.bonus > 0 && (
            <span
              className="px-2 py-0.5 rounded-full text-xs font-bold text-white"
              style={{ background: `linear-gradient(135deg, ${theme.from}, ${theme.to})` }}
            >
              +{product.bonus.toLocaleString()} bonus
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm mt-2">{product.shortDescription}</p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/10">
        <div className="text-2xl font-bold text-white">${product.price}</div>
        <BuyButton
          productId={product.id}
          className="buy-btn text-white font-semibold px-5 py-2 rounded-xl"
        />
      </div>
    </div>
  )
}

function GemStore() {
  return (
    <div className="min-h-screen">
      <div className="text-center py-16 px-4">
        <div className="text-6xl mb-4">💎</div>
        <h1 className="text-5xl font-extrabold text-white hero-glow mb-3">Gem Store</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Top up your gems instantly. Choose the pack that suits you and power up your game!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <GemCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 gem-card rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="text-4xl">⚡</div>
            <div>
              <h3 className="text-lg font-bold text-white">Instant Delivery</h3>
              <p className="text-gray-400 text-sm">
                Gems are credited to your account immediately after payment.
              </p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="flex items-center gap-4">
            <div className="text-4xl">🔒</div>
            <div>
              <h3 className="text-lg font-bold text-white">Safe &amp; Secure</h3>
              <p className="text-gray-400 text-sm">
                Secure checkout powered by Stripe. We never store your payment details.
              </p>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10" />
          <div className="flex items-center gap-4">
            <div className="text-4xl">🎮</div>
            <div>
              <h3 className="text-lg font-bold text-white">All Games</h3>
              <p className="text-gray-400 text-sm">
                Compatible with all supported titles on our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
