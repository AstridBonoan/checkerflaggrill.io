import { useScrollFade } from '../hooks/useScrollFade'

export function About() {
  const sectionRef = useScrollFade<HTMLElement>()

  return (
    <section
      id="about"
      ref={sectionRef}
      className="fade-in-section scroll-mt-20 border-t border-gray-200 px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-grill-dark sm:text-3xl">About Us</h2>
        <p className="mt-6 text-lg leading-relaxed text-grill-gray">
          A casual Queens grill serving breakfast, lunch, and dinner. Comfort food
          meets Mexican-inspired favorites in a family-friendly, affordable spot —
          the kind of neighborhood place you stop in for a bacon egg and cheese or a
          burrito without the fuss.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium text-grill-dark">
          {['Breakfast', 'Lunch', 'Dinner', 'Delivery & Pickup'].map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-gray-200 bg-grill-light px-4 py-2"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
