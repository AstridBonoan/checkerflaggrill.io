import { RESTAURANT } from '../data/menu'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="hours" className="scroll-mt-20 border-t border-gray-200 bg-grill-dark text-gray-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <Logo className="h-14 w-14" />
          <p className="mt-3 font-bold text-white">NYC Checker Flag Grill</p>
          <p className="mt-3 text-sm leading-relaxed">
            {RESTAURANT.fullAddress}
            <br />
            <a href={RESTAURANT.phoneHref} className="hover:text-white">
              {RESTAURANT.phone}
            </a>
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Hours</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li>{RESTAURANT.hours.weekday}</li>
            <li>{RESTAURANT.hours.weekend}</li>
            <li className="text-gray-500">{RESTAURANT.hours.note}</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-white">Follow</p>
          <div className="mt-3 flex gap-3">
            {['Facebook', 'Instagram', 'Yelp'].map((network) => (
              <a
                key={network}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xs font-medium text-white transition-colors hover:bg-white/20"
                aria-label={network}
              >
                {network[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-gray-500 sm:px-6">
        © {year} NYC Checker Flag Grill. All rights reserved. Demo redesign.
      </div>
    </footer>
  )
}
