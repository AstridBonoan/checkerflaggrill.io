import { useEffect, useState } from 'react'
import { RESTAURANT } from '../data/menu'
import { Logo } from './Logo'
import { OrderDeliveryButtons } from './OrderDeliveryButtons'

const navLinks = [
  { href: '#menu', label: 'Menu' },
  { href: '#order', label: 'Order' },
  { href: '#about', label: 'About' },
  { href: '#hours', label: 'Hours' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center" onClick={close}>
          <Logo className="h-10 w-10 sm:h-11 sm:w-11" showName />
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-grill-gray transition-colors hover:text-grill-red"
            >
              {link.label}
            </a>
          ))}
          <a
            href={RESTAURANT.phoneHref}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-grill-dark transition-colors hover:bg-gray-50"
          >
            Call
          </a>
          <OrderDeliveryButtons inline />
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-5 bg-grill-dark transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 bg-grill-dark transition-opacity ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 bg-grill-dark transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-grill-dark hover:bg-grill-light"
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={RESTAURANT.phoneHref}
                className="mb-3 block rounded-lg border border-gray-300 px-4 py-3 text-center text-base font-semibold text-grill-dark"
                onClick={close}
              >
                Call to Order
              </a>
              <OrderDeliveryButtons layout="stack" size="md" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
