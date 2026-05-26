import { RESTAURANT } from '../data/menu'
import { OrderDeliveryButtons } from './OrderDeliveryButtons'

export function StickyOrderCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm md:hidden">
      <div className="mx-auto max-w-lg space-y-2">
        <OrderDeliveryButtons layout="grid" size="md" compactLabels />
        <a
          href={RESTAURANT.phoneHref}
          className="block rounded-lg border border-gray-300 py-2.5 text-center text-sm font-semibold text-grill-dark"
        >
          Call {RESTAURANT.phone}
        </a>
      </div>
    </div>
  )
}
