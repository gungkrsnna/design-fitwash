import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroBackground from './components/HeroBackground'
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
          className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 text-center sm:min-h-screen"
        >
          <HeroBackground />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h1 className="text-4xl font-bold text-white opacity-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] [animation:fade-in-up_0.8s_ease-out_0.1s_both] sm:text-5xl">
              Clean Clothes, <span className="text-secondary-400">Lighter Life</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-100 opacity-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] [animation:fade-in-up_0.8s_ease-out_0.3s_both]">
              FitWash Laundry helps you with fast, clean, and fresh-smelling laundry
              service. Free pickup & delivery available in selected areas.
            </p>
            <div className="flex flex-col gap-3 opacity-0 [animation:fade-in-up_0.8s_ease-out_0.5s_both] sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-secondary-400 px-8 py-3 font-semibold text-slate-900 transition hover:bg-secondary-500"
              >
                Contact Us
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:border-secondary-400 hover:text-secondary-400"
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
