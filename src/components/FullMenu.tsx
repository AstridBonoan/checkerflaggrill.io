import { useState } from 'react'
import { menuCategories } from '../data/menu'
import { useScrollFade } from '../hooks/useScrollFade'
import { DeliverySidebar } from './DeliverySidebar'

export function FullMenu() {
  const sectionRef = useScrollFade<HTMLElement>()
  const [openId, setOpenId] = useState<string | null>('breakfast')

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section ref={sectionRef} className="fade-in-section px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_11rem] lg:gap-10">
        <div className="min-w-0">
          <h2 className="text-2xl font-bold text-grill-dark sm:text-3xl">Full Menu</h2>
          <p className="mt-1 text-sm text-grill-gray">
            Expand a category to see items and prices
          </p>

          <div className="mt-8 space-y-2">
            {menuCategories.map((cat) => {
              const isOpen = openId === cat.id
              return (
                <div
                  key={cat.id}
                  id={`menu-${cat.id}`}
                  className="scroll-mt-24 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-gray-50 sm:px-5"
                    aria-expanded={isOpen}
                    onClick={() => toggle(cat.id)}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xl" aria-hidden>
                        {cat.icon}
                      </span>
                      <span className="font-bold text-grill-dark">{cat.title}</span>
                    </span>
                    <span
                      className={`text-grill-gray transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    >
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <ul className="border-t border-gray-100 px-4 pb-2 sm:px-5">
                      {cat.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-start justify-between gap-4 border-b border-gray-50 py-3 last:border-0"
                        >
                          <div className="min-w-0">
                            <p className="font-medium text-grill-dark">{item.name}</p>
                            <p className="text-sm text-grill-gray">{item.description}</p>
                          </div>
                          <span className="shrink-0 font-semibold text-grill-dark">
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <DeliverySidebar />
      </div>
    </section>
  )
}
