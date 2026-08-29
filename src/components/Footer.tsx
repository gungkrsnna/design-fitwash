import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../lib/contact'
import { SERVICE_AREA } from '../lib/location'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="bg-slate-900 px-6 pt-16 pb-8 text-slate-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src="/logo-fitwash.jpg"
            alt="FitWash Laundry Bali"
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            className="h-12 w-12 rounded-lg object-cover"
          />
          <p className="mt-4 text-sm text-slate-400">
            Professional laundry pickup and delivery service across Bali. Clean clothes,
            lighter life.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-secondary-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition hover:text-secondary-400">
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <span>{SERVICE_AREA} — free pickup & delivery</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Follow Us</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="transition hover:text-secondary-400">
                {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} FitWash Laundry. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
