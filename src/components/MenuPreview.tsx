import { menuCategories } from '../data/menu'
import { useScrollFade } from '../hooks/useScrollFade'
import { FoodImage } from './FoodImage'
import { OrderDeliveryButtons } from './OrderDeliveryButtons'

export function MenuPreview() {
  const sectionRef = useScrollFade<HTMLElement>()

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="fade-in-section scroll-mt-20 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-grill-dark">Our Menu</h2>
          <p className="mt-2 text-grill-gray">
            Browse by category — tap to see full items below
          </p>
        </div>

        <div className="mb-10 flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-grill-light p-6 sm:flex-row sm:justify-between">
          <p className="text-center text-sm text-grill-gray sm:text-left">
            <span className="font-semibold text-grill-dark">Ready to order?</span> Delivery and
            pickup via Uber Eats or DoorDash.
          </p>
          <OrderDeliveryButtons layout="row" size="md" className="w-full max-w-sm shrink-0" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menuCategories.map((cat) => (
            <article
              key={cat.id}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-32 overflow-hidden bg-gray-100">
                <FoodImage
                  src={cat.image}
                  alt={cat.title}
                  className="h-full w-full object-cover"
                  fallbackIcon={cat.icon}
                />
                <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-xl shadow-sm">
                  {cat.icon}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-bold text-grill-dark">{cat.title}</h3>
                <p className="mt-1 flex-1 text-sm text-grill-gray">{cat.description}</p>
                <a
                  href={`#menu-${cat.id}`}
                  className="mt-4 inline-block rounded-lg border border-grill-red px-4 py-2 text-center text-sm font-semibold text-grill-red transition-colors hover:bg-grill-red hover:text-white"
                >
                  View Items
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
