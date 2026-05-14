export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  gems: number
  bonus: number
  popular?: boolean
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Starter Pack',
    image: '/placeholder.png',
    gems: 100,
    bonus: 0,
    description:
      'Perfect for new players! Get 100 Gems to kickstart your adventure. Use gems to unlock characters, buy power-ups, and customize your experience.',
    shortDescription: 'Great for beginners. 100 Gems to get you started.',
    price: 1,
  },
  {
    id: 2,
    name: 'Bronze Pack',
    image: '/placeholder.png',
    gems: 500,
    bonus: 25,
    description:
      'Get 500 Gems plus 25 bonus gems! A solid choice for casual players who want to progress faster. Unlock new content and upgrade your gear.',
    shortDescription: '500 Gems + 25 Bonus. Great value for casual players.',
    price: 4,
  },
  {
    id: 3,
    name: 'Silver Pack',
    image: '/placeholder.png',
    gems: 1200,
    bonus: 150,
    description:
      "Get 1200 Gems plus 150 bonus gems — that's 12.5% extra! Mid-tier pack ideal for regular players who want to stay competitive and unlock premium content.",
    shortDescription: '1200 Gems + 150 Bonus. 12.5% extra value!',
    price: 9,
    popular: true,
  },
  {
    id: 4,
    name: 'Gold Pack',
    image: '/placeholder.png',
    gems: 2500,
    bonus: 500,
    description:
      'Get 2500 Gems plus 500 bonus gems — 20% extra! Best for dedicated players looking to dominate. Access exclusive items and rare upgrades with ease.',
    shortDescription: '2500 Gems + 500 Bonus. 20% extra value!',
    price: 19,
  },
  {
    id: 5,
    name: 'Diamond Pack',
    image: '/placeholder.png',
    gems: 6000,
    bonus: 1500,
    description:
      'Get 6000 Gems plus 1500 bonus gems — 25% extra! For serious players who demand the best. Unlock everything, top the leaderboards, and play without limits.',
    shortDescription: '6000 Gems + 1500 Bonus. 25% extra value!',
    price: 44,
  },
  {
    id: 6,
    name: 'Legend Pack',
    image: '/placeholder.png',
    gems: 15000,
    bonus: 5000,
    description:
      "The ultimate gem bundle — 15000 Gems plus 5000 bonus gems, that's 33% extra! Reserved for legends. Maximum value, maximum power. Rule the game.",
    shortDescription: '15,000 Gems + 5,000 Bonus. 33% extra — best value!',
    price: 99,
  },
]

export default products
