import { RESTAURANT } from '../data/menu'

export function StickyOrderCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] backdrop-blur-sm md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={RESTAURANT.phoneHref}
          className="flex-1 rounded-lg border border-gray-300 py-3 text-center text-sm font-semibold text-grill-dark"
        >
          Call
        </a>
        <a
          href={RESTAURANT.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] rounded-lg bg-grill-red py-3 text-center text-sm font-semibold text-white"
        >
          Order Now
        </a>
      </div>
    </div>
  )
}
