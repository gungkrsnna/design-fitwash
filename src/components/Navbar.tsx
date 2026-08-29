import { useEffect, useRef, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 20)

      const scrolledPastThreshold = currentScrollY > 100
      const scrollingDown = currentScrollY > lastScrollY.current
      setIsHidden(scrolledPastThreshold && scrollingDown)

      lastScrollY.current = currentScrollY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const solid = isScrolled || isOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-slate-100 bg-white shadow-sm' : 'bg-transparent'
      } ${isOpen ? 'translate-y-0' : isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" aria-label="FitWash Laundry Bali - Home">
          <img
            src="/logo-fitwash.jpg"
            alt="FitWash Laundry Bali"
            width={48}
            height={48}
            decoding="async"
            className="h-11 w-11 rounded-lg object-cover sm:h-12 sm:w-12"
          />
        </a>

        <nav
          className={`hidden gap-8 text-sm font-medium transition-colors md:flex ${
            solid ? 'text-slate-600' : 'text-white/90'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                solid ? 'hover:text-secondary-600' : 'hover:text-secondary-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-secondary-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-secondary-500 md:inline-block"
        >
          Book Now
        </a>

        <button
          type="button"
          onClick={() => {
            setIsOpen((open) => !open)
            setIsHidden(false)
          }}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
          className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors md:hidden ${
            solid ? 'text-slate-700' : 'text-white'
          }`}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-secondary-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block rounded-full bg-secondary-400 px-5 py-2 text-center font-semibold text-slate-900 hover:bg-secondary-500"
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
