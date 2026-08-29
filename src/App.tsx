import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroBackground from './components/HeroBackground'
import { WHATSAPP_URL } from './lib/contact'
import Navbar from './components/Navbar'
import HowItWorks from './components/HowItWorks'
import LocationSection from './components/LocationSection'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import WhatsAppButton from './components/WhatsAppButton'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />

      <main>
        <section
          id="home"
          className="relative flex min-h-[80vh] items-center overflow-hidden px-6 sm:min-h-screen"
        >
          <HeroBackground />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start gap-6 text-left">
            <h1 className="text-4xl font-bold text-white opacity-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] [animation:fade-in-up_0.8s_ease-out_0.1s_both] sm:text-5xl">
              Laundry Express Service,
              <br />
              Free Pick-up & Delivery <span className="text-secondary-400">in Bali</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-100 opacity-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] [animation:fade-in-up_0.8s_ease-out_0.3s_both]">
              FIT Wash Laundry offers fast, clean, and fresh smelling laundry services.
              Free pickup and delivery service is available for you.
            </p>
            <div className="flex w-full gap-3 opacity-0 [animation:fade-in-up_0.8s_ease-out_0.5s_both] sm:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full bg-secondary-400 px-4 py-2.5 text-center text-sm font-semibold text-slate-900 transition hover:bg-secondary-500 sm:flex-none sm:px-8 sm:py-3 sm:text-base"
              >
                Booking Via Whatsapp
              </a>
              <a
                href="#pricing"
                className="flex-1 rounded-full border border-white/30 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:border-secondary-400 hover:text-secondary-400 sm:flex-none sm:px-8 sm:py-3 sm:text-base"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>

        <Pricing />

        <WhyChooseUs />

        <HowItWorks />

        <LocationSection />

        <Testimonials />

        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  )
}

export default App
