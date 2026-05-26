import { RESTAURANT } from '../data/menu'
import { Logo } from './Logo'
import { OrderDeliveryButtons } from './OrderDeliveryButtons'
import { SectionWatermark } from './SectionWatermark'

export function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550547660-d9450f859349?w=1600&q=80')",
        }}
        role="img"
        aria-label="Grill food background"
      />
      <div className="absolute inset-0 bg-black/55" />
      <SectionWatermark onDark />
      <div className="relative z-10 mx-auto flex min-h-[calc(70vh-4rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
        <Logo className="mb-4 h-20 w-20 sm:h-24 sm:w-24" />
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-grill-orange">
          Maspeth, Queens
        </p>
        <h1 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          NYC Checker Flag Grill
        </h1>
        <p className="mt-4 max-w-lg text-lg text-gray-200">
          Comfort Food • Breakfast • Burgers • Mexican Favorites
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#menu"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-grill-dark transition-colors hover:bg-gray-100"
          >
            View Menu
          </a>
          <a
            href={RESTAURANT.phoneHref}
            className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Call to Order
          </a>
        </div>
        <div className="mt-6 max-w-md">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-300">
            Order delivery or pickup
          </p>
          <OrderDeliveryButtons layout="grid" size="md" />
        </div>
      </div>
    </section>
  )
}
