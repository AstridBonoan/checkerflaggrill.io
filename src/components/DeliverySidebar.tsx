import { OrderDeliveryButtons } from './OrderDeliveryButtons'

export function DeliverySidebar() {
  return (
    <aside className="hidden lg:block" aria-label="Order delivery">
      <div className="sticky top-24 w-44">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-grill-gray">
          Order online
        </p>
        <OrderDeliveryButtons layout="stack" size="md" />
      </div>
    </aside>
  )
}
