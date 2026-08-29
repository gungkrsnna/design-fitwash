import { useEffect, useState } from 'react'

const PARALLAX_FACTOR = 0.3

function HeroBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
      <div
        className="absolute inset-x-0 -top-[15%] h-[130%] w-full will-change-transform"
        style={{ transform: `translateY(${scrollY * PARALLAX_FACTOR}px)` }}
      >
        <img
          src="/fit-wash-laundry-background.webp"
          alt="FitWash Laundry Bali store"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover [animation:hero-zoom-out_8s_ease-out_forwards]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/40" />
    </div>
  )
}

export default HeroBackground
