import { useRef, useState } from 'react'
import featureImg from '@/assets/feature-tryon.jpg'

const features = [
  {
    title: 'Your Photo, Your Fit',
    desc: 'Upload a full-body photo and Drape creates a precise digital twin matching your exact proportions.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'AI Draping Engine',
    desc: 'Photorealistic fabric simulation captures drape, wrinkle, fit and renders it on your body in under 2 seconds. No digital mannequin stiffness.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    span: 'col-span-1 md:col-span-2 row-span-1',
    featured: true,
  },
  {
    title: 'Shop Directly',
    desc: "One tap to checkout on the brand's site — already knowing your size.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272" />
      </svg>
    ),
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'AI Stylist',
    desc: "Learns your taste and proactively curates outfits you'll love from 180+ brands.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3" />
      </svg>
    ),
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Share Your Style',
    desc: 'Save looks, share virtual outfits, and build wishlists — all before spending a penny.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.933-2.185z" />
      </svg>
    ),
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Private & Secure',
    desc: 'Photos processed on-device. Never stored without your explicit permission.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    span: 'col-span-1 row-span-1',
  },
]

function SpotlightCard({
  children,
  className = '',
  style = {},
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect()
    setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 })
  }
  const handleMouseLeave = () => setSpotlight((s) => ({ ...s, opacity: 0 }))

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12] ${className}`}
      style={{
        background: 'rgba(255,255,255,0.04)',
        boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.35)',
        ...style,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.10), 0 8px 40px rgba(0,0,0,0.45), 0 0 60px rgba(123,47,255,0.08)'
      }}
    >
      {/* Mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${spotlight.x}px ${spotlight.y}px, rgba(123,47,255,0.12), transparent)`,
          opacity: spotlight.opacity,
        }}
      />
      {children}
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,47,255,0.05)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl reveal">
          <p className="label-tag mb-4">Why Drape</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight text-[#EDEDEF]">
            Fashion tech that feels{' '}
            <span className="gradient-text-white opacity-70">like magic.</span>
          </h2>
          <p className="text-[#8A8F98] text-lg leading-relaxed mt-4">
            Computer vision, generative AI, and deep fabric physics knowledge — combined
            to create try-ons that are genuinely believable.
          </p>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto md:auto-rows-[200px]">
          {/* Card 1 — normal */}
          <SpotlightCard className="reveal delay-100 p-7 flex flex-col justify-between">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#7B2FFF]"
              style={{ background: 'rgba(123,47,255,0.12)', border: '1px solid rgba(123,47,255,0.2)' }}
            >
              {features[0].icon}
            </div>
            <div>
              <h3 className="text-[#EDEDEF] font-semibold text-base mb-1">{features[0].title}</h3>
              <p className="text-[#8A8F98] text-sm leading-relaxed">{features[0].desc}</p>
            </div>
          </SpotlightCard>

          {/* Card 2 — featured, spans 2 cols and 2 rows */}
          <SpotlightCard
            className="reveal delay-150 md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between"
            style={{ minHeight: '420px' }}
          >
            <div className="flex items-start justify-between">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#7B2FFF]"
                style={{ background: 'rgba(123,47,255,0.12)', border: '1px solid rgba(123,47,255,0.2)' }}
              >
                {features[1].icon}
              </div>
              <span
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#7B2FFF] tracking-widest uppercase"
                style={{ background: 'rgba(123,47,255,0.12)', border: '1px solid rgba(123,47,255,0.2)' }}
              >
                Core Engine
              </span>
            </div>
            {/* Large display */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="h-px flex-1"
                  style={{ background: 'linear-gradient(90deg, rgba(123,47,255,0.4), transparent)' }}
                />
                <span className="text-[#7B2FFF] text-xs font-mono tracking-widest">98.4% accuracy</span>
              </div>
              <h3 className="text-[#EDEDEF] font-semibold text-2xl md:text-3xl tracking-tight mb-3">
                {features[1].title}
              </h3>
              <p className="text-[#8A8F98] text-base leading-relaxed max-w-md">{features[1].desc}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-2xl font-semibold text-[#EDEDEF] tracking-tight">&lt; 2s</span>
                  <span className="text-xs text-[#8A8F98]">Generation time</span>
                </div>
                <div className="w-px h-10 bg-white/[0.06]" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-2xl font-semibold text-[#EDEDEF] tracking-tight">40M+</span>
                  <span className="text-xs text-[#8A8F98]">Training images</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3 */}
          <SpotlightCard className="reveal delay-200 p-7 flex flex-col justify-between">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#7B2FFF]"
              style={{ background: 'rgba(123,47,255,0.12)', border: '1px solid rgba(123,47,255,0.2)' }}
            >
              {features[2].icon}
            </div>
            <div>
              <h3 className="text-[#EDEDEF] font-semibold text-base mb-1">{features[2].title}</h3>
              <p className="text-[#8A8F98] text-sm leading-relaxed">{features[2].desc}</p>
            </div>
          </SpotlightCard>

          {/* Card 4 */}
          <SpotlightCard className="reveal delay-300 p-7 flex flex-col justify-between">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#7B2FFF]"
              style={{ background: 'rgba(123,47,255,0.12)', border: '1px solid rgba(123,47,255,0.2)' }}
            >
              {features[3].icon}
            </div>
            <div>
              <h3 className="text-[#EDEDEF] font-semibold text-base mb-1">{features[3].title}</h3>
              <p className="text-[#8A8F98] text-sm leading-relaxed">{features[3].desc}</p>
            </div>
          </SpotlightCard>

          {/* Card 5 */}
          <SpotlightCard className="reveal delay-400 p-7 flex flex-col justify-between">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#7B2FFF]"
              style={{ background: 'rgba(123,47,255,0.12)', border: '1px solid rgba(123,47,255,0.2)' }}
            >
              {features[4].icon}
            </div>
            <div>
              <h3 className="text-[#EDEDEF] font-semibold text-base mb-1">{features[4].title}</h3>
              <p className="text-[#8A8F98] text-sm leading-relaxed">{features[4].desc}</p>
            </div>
          </SpotlightCard>

          {/* Card 6 — spans 2 cols, image card */}
          <SpotlightCard className="reveal delay-500 md:col-span-2 relative overflow-hidden">
            <img
              src={featureImg}
              alt="Drape Vision AI"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.25]"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(5,5,6,0.95), rgba(5,5,6,0.5))' }}
            />
            <div className="relative z-10 p-7 h-full flex flex-col justify-between">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#7B2FFF]"
                style={{ background: 'rgba(123,47,255,0.12)', border: '1px solid rgba(123,47,255,0.2)' }}
              >
                {features[5].icon}
              </div>
              <div>
                <h3 className="text-[#EDEDEF] font-semibold text-lg mb-1">Drape Vision AI™</h3>
                <p className="text-[#8A8F98] text-sm leading-relaxed">
                  Our proprietary model trained on 40M garment images. Understands fabric, fit, and body geometry unlike any other.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
