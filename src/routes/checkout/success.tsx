import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="gem-card rounded-2xl p-12 text-center max-w-lg">
        <div className="text-6xl mb-4">💎</div>
        <div className="text-4xl mb-6 text-green-400">✓</div>
        <h1 className="text-3xl font-bold text-white mb-4">Gems Credited!</h1>
        <p className="text-gray-300 mb-8">
          Your payment was successful and your gems have been added to your account. Enjoy!
        </p>
        <Link
          to="/"
          className="buy-btn inline-block px-8 py-3 rounded-xl text-white font-semibold"
        >
          Back to Gem Store
        </Link>
      </div>
    </div>
  )
}
