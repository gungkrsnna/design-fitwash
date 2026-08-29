import { ADDRESS, MAP_DIRECTIONS_URL, MAP_EMBED_SRC } from '../lib/location'

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
              title="FitWash Laundry Bali location"
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
                <h3 className="font-semibold text-slate-900">Our Store Address</h3>
                <p className="mt-1 text-sm text-slate-600">{ADDRESS}</p>
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary-600 hover:text-secondary-700"
                >
                  Get Directions
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
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
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-auto rounded-full bg-secondary-400 px-6 py-3 text-center font-semibold text-slate-900 transition hover:bg-secondary-500"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
