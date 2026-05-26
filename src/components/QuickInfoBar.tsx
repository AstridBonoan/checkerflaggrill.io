import { RESTAURANT } from '../data/menu'
import { useTodayHours } from '../hooks/useTodayHours'

export function QuickInfoBar() {
  const todayHours = useTodayHours()

  const items = [
    {
      label: 'Open today',
      value: todayHours.replace(/^[^:]+:\s*/, ''),
      icon: '🕐',
    },
    { label: 'Delivery', value: 'Available', icon: '🚗' },
    { label: 'Pickup', value: 'Available', icon: '🥡' },
    {
      label: 'Call us',
      value: RESTAURANT.phone,
      icon: '📞',
      href: RESTAURANT.phoneHref,
    },
  ]

  return (
    <section className="border-y border-gray-200" aria-label="Quick info">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-gray-200 sm:grid-cols-4">
        {items.map((item) => {
          const content = (
            <>
              <span className="text-lg" aria-hidden>
                {item.icon}
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-grill-gray">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-grill-dark">{item.value}</p>
              </div>
            </>
          )

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 bg-white px-4 py-4 transition-colors hover:bg-gray-50 sm:px-6"
            >
              {content}
            </a>
          ) : (
            <div
              key={item.label}
              className="flex items-center gap-3 bg-white px-4 py-4 sm:px-6"
            >
              {content}
            </div>
          )
        })}
      </div>
    </section>
  )
}
