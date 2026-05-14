import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="gem-card rounded-2xl p-12 text-center max-w-lg">
        <div className="text-6xl mb-6">😢</div>
        <h1 className="text-3xl font-bold text-white mb-4">Checkout Cancelled</h1>
        <p className="text-gray-300 mb-8">
          Your payment was cancelled. No charges were made. Come back anytime to top up your gems!
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
