import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../lib/contact'

function Contact() {
  return (
    <section id="contact" className="bg-secondary-400 px-6 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Get in Touch</h2>
        <p className="mt-3 text-slate-800/80">
          Have a question or ready to book? Reach out to us directly via WhatsApp.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            <svg className="h-5 w-5" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.4-16.2-53.7-28.9-75.1-65.5-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            Chat on WhatsApp
          </a>
          <span className="text-sm text-slate-800/70">{WHATSAPP_DISPLAY}</span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/40 p-6 backdrop-blur-sm">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900">
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
                  d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                />
              </svg>
            </div>
            <h3 className="mt-3 font-semibold text-slate-900">Operating Hours</h3>
            <p className="mt-1 text-sm text-slate-800/80">Everyday, 08:00 - 21:00</p>
            <p className="mt-1 text-xs text-slate-800/50">(placeholder, please confirm)</p>
          </div>

          <div className="rounded-2xl bg-white/40 p-6 backdrop-blur-sm">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900">
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
                  d="M7.5 3.75h9A3.75 3.75 0 0120.25 7.5v9a3.75 3.75 0 01-3.75 3.75h-9A3.75 3.75 0 013.75 16.5v-9A3.75 3.75 0 017.5 3.75zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm4.875-.375h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>
            <h3 className="mt-3 font-semibold text-slate-900">Follow Us</h3>
            <p className="mt-1 text-sm text-slate-800/80">@fitwashlaundrybali</p>
            <p className="mt-1 text-xs text-slate-800/50">(placeholder, please confirm)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
