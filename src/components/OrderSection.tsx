import { OrderDeliveryButtons } from './OrderDeliveryButtons'
import { useScrollFade } from '../hooks/useScrollFade'

export function OrderSection() {
  const sectionRef = useScrollFade<HTMLElement>()

  return (
    <section
      id="order"
      ref={sectionRef}
      className="fade-in-section scroll-mt-20 border-y border-gray-200 bg-white px-4 py-12 sm:px-6"
    >
      <div className="mx-auto max-w-6xl lg:flex lg:items-center lg:justify-between lg:gap-12">
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-grill-red">
            Order online
          </p>
          <h2 className="mt-1 text-2xl font-bold text-grill-dark sm:text-3xl">
            Delivery &amp; Pickup
          </h2>
          <p className="mt-2 max-w-md text-grill-gray">
            Order through Uber Eats or DoorDash for delivery and pickup in Maspeth.
          </p>
        </div>
        <OrderDeliveryButtons
          layout="row"
          size="lg"
          className="mt-8 w-full max-w-md lg:mt-0 lg:max-w-sm lg:shrink-0"
        />
      </div>
    </section>
  )
}
