import { RESTAURANT } from '../data/menu'

export const DELIVERY_SERVICES = [
  {
    name: 'Uber Eats',
    shortLabel: 'Uber',
    url: RESTAURANT.uberEatsUrl,
  },
  {
    name: 'DoorDash',
    shortLabel: 'DoorDash',
    url: RESTAURANT.doorDashUrl,
  },
] as const

type Layout = 'stack' | 'row' | 'grid'
type Size = 'md' | 'lg'

type OrderDeliveryButtonsProps = {
  layout?: Layout
  size?: Size
  className?: string
  /** Use short labels on narrow mobile bars */
  compactLabels?: boolean
  /** Tight inline buttons for the navbar */
  inline?: boolean
}

const layoutClasses: Record<Layout, string> = {
  stack: 'flex flex-col gap-3',
  row: 'flex flex-col gap-3 sm:flex-row',
  grid: 'grid grid-cols-2 gap-3',
}

const sizeClasses: Record<Size, string> = {
  md: 'px-5 py-3.5 text-sm',
  lg: 'px-6 py-4 text-base',
}

export function OrderDeliveryButtons({
  layout = 'stack',
  size = 'md',
  className = '',
  compactLabels = false,
  inline = false,
}: OrderDeliveryButtonsProps) {
  const wrapperClass = inline
    ? 'flex flex-row gap-2'
    : `${layoutClasses[layout]} ${className}`

  const buttonClass = inline
    ? 'rounded-lg bg-grill-dark px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-black whitespace-nowrap'
    : `flex items-center justify-center rounded-lg bg-grill-dark font-semibold text-white transition-colors hover:bg-black ${sizeClasses[size]}`

  return (
    <div
      className={inline ? wrapperClass : wrapperClass}
      role="group"
      aria-label="Order delivery"
    >
      {DELIVERY_SERVICES.map((service) => (
        <a
          key={service.name}
          href={service.url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          {compactLabels || inline ? service.shortLabel : service.name}
        </a>
      ))}
    </div>
  )
}
