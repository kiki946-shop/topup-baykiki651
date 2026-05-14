import { Link, createFileRoute } from '@tanstack/react-router'
import products from '../../data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find((product) => product.id === +params.productId)
    if (!product) {
      throw new Error('Product not found')
    }
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="gem-card rounded-2xl p-10 max-w-lg w-full text-center">
        <div className="text-8xl mb-6">💎</div>
        <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-4xl font-extrabold text-violet-300">
            {product.gems.toLocaleString()}
          </span>
          <span className="text-gray-400">gems</span>
          {product.bonus > 0 && (
            <span className="px-2 py-1 rounded-full text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
              +{product.bonus.toLocaleString()} bonus
            </span>
          )}
        </div>
        <p className="text-gray-300 mb-8 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <div className="text-3xl font-bold text-white">${product.price}</div>
          <BuyButton
            productId={product.id}
            className="buy-btn text-white font-bold px-8 py-3 rounded-xl text-lg"
          />
        </div>
        <Link to="/" className="inline-block mt-6 text-gray-400 hover:text-white text-sm transition-colors">
          &larr; Back to Gem Store
        </Link>
      </div>
    </div>
  )
}
