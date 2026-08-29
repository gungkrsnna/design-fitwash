import { WHATSAPP_URL } from '../lib/contact'
import { MAP_EMBED_SRC, SERVICE_AREA } from '../lib/location'

const coverageAreas = [
  'Denpasar',
  'Kuta',
  'Kerobokan',
  'Uma Alas',
  'Sanur',
  'Seminyak',
  'Batu Belig',
  'Dalung',
]

function LocationSection() {
  return (
    <section id="location" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Serving Across Bali</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            FitWash provides professional laundry pickup and delivery services across Bali's most
            popular residential, tourism, and business districts.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
            <iframe
              title="FitWash Laundry Bali service area"
              src={MAP_EMBED_SRC}
              className="h-80 w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary-400 text-slate-900">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Service Area</h3>
                <p className="mt-1 text-sm text-slate-600">{SERVICE_AREA}</p>
                <p className="mt-1 text-sm text-slate-500">
                  We come to you — free pickup & delivery, no need to visit a store.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Coverage Area</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {coverageAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-secondary-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-auto rounded-full bg-secondary-400 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-secondary-500"
            >
              Book a Pickup via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
