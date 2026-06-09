import { useEffect, useRef } from 'react'
import heroBg from '@/assets/hero-bg.jpg'
import phoneMockup from '@/assets/drape.png'
import Phone3D from './Phone3D'

const APP_STORE_URL = 'https://apps.apple.com/app/id000000000'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.drape.app'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  // Subtle parallax on scroll
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const content = el.querySelector('.hero-content') as HTMLElement
    const onScroll = () => {
      const y = window.scrollY
      const max = window.innerHeight * 0.5
      if (y > max) return
      const prog = y / max
      if (content) {
        content.style.opacity = String(1 - prog * 0.7)
        content.style.transform = `translateY(${prog * 60}px) scale(${1 - prog * 0.04})`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Layered background ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0a0a0f_0%,#050506_50%,#020203_100%)]" />

      {/* Hero image — dim overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={heroBg} alt="" aria-hidden className="w-full h-full object-cover object-center" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Animated ambient blobs */}
      <div
        className="blob-a absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full pointer-events-none"
        style={{ filter: 'blur(140px)' }}
      />
      <div
        className="blob-b absolute top-[20%] left-[-10%] w-[500px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'rgba(129,140,248,0.09)', filter: 'blur(110px)' }}
      />
      <div
        className="blob-c absolute top-[30%] right-[-8%] w-[450px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,47,255,0.08)', filter: 'blur(100px)' }}
      />

      {/* Content */}
      <div className="hero-content relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 w-full" style={{ willChange: 'transform, opacity' }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div className="flex flex-col gap-7 animate-fade-up">
            {/* Label badge */}

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tighter text-[#EDEDEF]">
              <span className="gradient-text-white">Wear it before</span>
              <br />
              <span className="gradient-text-accent">you buy it.</span>
            </h1>

            {/* Sub */}
            <p className="text-[#8A8F98] text-lg leading-relaxed max-w-md">
              Upload your photo, pick any outfit. Drape's AI places the clothes
              on <em className="not-italic text-[#EDEDEF]">you</em> — your body,
              your proportions, your style.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8">
              {[
                { value: '2M+', label: 'Outfits tried' },
                { value: '4.9★', label: 'App rating' },
                { value: '180+', label: 'Brand partners' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className="text-xl font-semibold text-[#EDEDEF] tracking-tight">{s.value}</span>
                  <span className="text-xs text-[#8A8F98]">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#waitlist"
                className="text-sm font-semibold text-white px-6 py-3 rounded-lg transition-all duration-200 active:scale-[0.98]"
                style={{
                  background: '#7B2FFF',
                  boxShadow: '0 0 0 1px rgba(123,47,255,0.5), 0 4px 16px rgba(123,47,255,0.35), inset 0 1px 0 0 rgba(255,255,255,0.15)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = '#8C46FF'
                  el.style.boxShadow = '0 0 0 1px rgba(123,47,255,0.6), 0 8px 24px rgba(123,47,255,0.45), inset 0 1px 0 0 rgba(255,255,255,0.2)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = '#7B2FFF'
                  el.style.boxShadow = '0 0 0 1px rgba(123,47,255,0.5), 0 4px 16px rgba(123,47,255,0.35), inset 0 1px 0 0 rgba(255,255,255,0.15)'
                }}
              >
                Join Waitlist — Free
              </a>
              <a
                href="#how-it-works"
                className="group flex items-center gap-2 text-sm font-medium text-[#8A8F98] hover:text-[#EDEDEF] transition-colors px-4 py-3 rounded-lg hover:bg-white/[0.05]"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <svg className="w-3.5 h-3.5 text-[#7B2FFF] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                Watch demo
              </a>
            </div>

            {/* Store badges */}
            {/* <div className="flex items-center gap-3 flex-wrap">
              {[
                {
                  href: APP_STORE_URL,
                  label: 'App Store',
                  sub: 'Download on the',
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  ),
                },
                {
                  href: PLAY_STORE_URL,
                  label: 'Google Play',
                  sub: 'Get it on',
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.76c.3.17.65.19.96.04L15.81 12 3.18.2c-.31-.15-.66-.13-.96.04C1.9.42 1.75.83 1.75 1.25v21.5c0 .42.15.83.43 1.01zM16.5 12l3.34 3.34-12.21 6.86L16.5 12zM7.63 2.8l12.21 6.86L16.5 12 7.63 2.8z" />
                    </svg>
                  ),
                },
              ].map((b) => (
                <a
                  key={b.label}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/[0.08] text-[#8A8F98] hover:text-[#EDEDEF] hover:border-white/[0.14] transition-all duration-200 group"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <span className="group-hover:text-[#7B2FFF] transition-colors">{b.icon}</span>
                  <div>
                    <p className="text-[10px] text-[#8A8F98]/60">{b.sub}</p>
                    <p className="text-sm font-medium leading-tight">{b.label}</p>
                  </div>
                </a>
              ))}
            </div> */}
          </div>

          {/* Right — phone mockup */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* Glow behind phone */}
            <div
              className="absolute w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'rgba(123,47,255,0.15)', filter: 'blur(80px)' }}
            />

            <div className="relative z-10 w-60 md:w-72 lg:w-80 h-[500px] md:h-[600px] lg:h-[600px] mx-auto">
              <div className="absolute inset-[-80px]">
                <Phone3D imageSrc={phoneMockup} />
              </div>

              {/* Floating card — top left */}
              <div
                className="absolute -left-10 rounded-2xl px-4 py-3 flex items-center gap-3 border border-[rgba(123,47,255,0.25)]"
                style={{
                  background: 'rgba(123,47,255,0.10)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 0 0 1px rgba(123,47,255,0.2), 0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                >
                  <svg className="w-4 h-4 text-[#7B2FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#EDEDEF] text-xs font-semibold">Perfect Fit!</p>
                  <p className="text-[#8A8F98] text-[11px]">AI matched your size</p>
                </div>
              </div>

              {/* Floating card — bottom right */}
              <div
                className="absolute -right-8 bottom-0 rounded-2xl px-4 py-3 border border-white/[0.08]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <p className="text-[#8A8F98] text-[10px] mb-1 tracking-widest uppercase">Try-ons today</p>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-semibold text-[#EDEDEF] tracking-tight">48K</span>
                  <span className="text-[#7B2FFF] text-xs mb-0.5">+12%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050506] to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#8A8F98]/40 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[rgba(123,47,255,0.6)] to-transparent" />
      </div>
    </section>
  )
}
