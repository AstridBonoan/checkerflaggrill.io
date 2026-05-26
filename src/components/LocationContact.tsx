import { useState } from 'react'
import { RESTAURANT } from '../data/menu'
import { useScrollFade } from '../hooks/useScrollFade'

export function LocationContact() {
  const sectionRef = useScrollFade<HTMLElement>()
  const [formStatus, setFormStatus] = useState<'idle' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sent')
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="fade-in-section scroll-mt-20 bg-grill-light px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-grill-dark sm:text-3xl">Location & Contact</h2>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <iframe
              title="NYC Checker Flag Grill on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8!2d-73.8994!3d40.7262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f8b8b8b8b8b%3A0x0!2s70-11%20Grand%20Ave%2C%20Maspeth%2C%20NY%2011378!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="h-64 w-full border-0 sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="p-5">
              <p className="font-bold text-grill-dark">{RESTAURANT.fullAddress}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={RESTAURANT.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-grill-dark transition-colors hover:bg-gray-50"
                >
                  Get Directions
                </a>
                <a
                  href={RESTAURANT.phoneHref}
                  className="rounded-lg bg-grill-red px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a01822]"
                >
                  {RESTAURANT.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-bold text-grill-dark">Send a Message</h3>
            <p className="mt-1 text-sm text-grill-gray">
              Questions or catering inquiries? We&apos;ll get back to you.
            </p>

            {formStatus === 'sent' ? (
              <p className="mt-6 rounded-lg bg-green-50 p-4 text-sm text-green-800">
                Thanks! This demo form doesn&apos;t send email — use{' '}
                <a href={`mailto:${RESTAURANT.email}`} className="font-semibold underline">
                  {RESTAURANT.email}
                </a>{' '}
                to reach us directly.
              </p>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-grill-dark">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-grill-red focus:outline-none focus:ring-1 focus:ring-grill-red"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-grill-dark">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-grill-red focus:outline-none focus:ring-1 focus:ring-grill-red"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-grill-dark">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-grill-red focus:outline-none focus:ring-1 focus:ring-grill-red"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-grill-red py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a01822] sm:w-auto sm:px-8"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
