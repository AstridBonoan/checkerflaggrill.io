import { featuredItems } from '../data/menu'
import { useScrollFade } from '../hooks/useScrollFade'

export function FeaturedItems() {
  const sectionRef = useScrollFade<HTMLElement>()

  return (
    <section ref={sectionRef} className="fade-in-section bg-grill-light px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-grill-dark sm:text-3xl">Popular Dishes</h2>
        <p className="mt-1 text-grill-gray">Customer favorites at the grill</p>

        <div className="mt-8 -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory scrollbar-thin sm:mx-0 sm:px-0">
          {featuredItems.map((item) => (
            <article
              key={item.name}
              className="w-[260px] shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm sm:w-[280px]"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-grill-dark">{item.name}</h3>
                  <span className="shrink-0 text-sm font-semibold text-grill-red">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-grill-gray">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
