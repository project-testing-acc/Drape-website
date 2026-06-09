const steps = [
  {
    number: '01',
    title: 'Upload Your Photo',
    desc: "Take or upload a full-body photo. Drape's AI scans your proportions, skin tone, and pose in seconds.",
    tag: 'Takes 3 seconds',
  },
  {
    number: '02',
    title: 'Pick Your Outfit',
    desc: 'Browse thousands of real items from top brands, or paste any product URL from any retailer.',
    tag: '180+ brands',
  },
  {
    number: '03',
    title: 'See Yourself in It',
    desc: 'The AI drapes the garment on your body with realistic fabric physics — lighting, shadows and all.',
    tag: 'Photorealistic',
  },
  {
    number: '04',
    title: 'Buy with Confidence',
    desc: 'Know exactly how it fits before you spend a penny. One tap to checkout or save to your wishlist.',
    tag: 'Zero returns',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,47,255,0.05)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto reveal">
          <p className="label-tag mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight">
            <span className="gradient-text-white">Four steps to your</span>
            <br />
            <span className="gradient-text-hero">perfect wardrobe.</span>
          </h2>
          <p className="text-[#8A8F98] text-lg leading-relaxed mt-4">
            From photo to full outfit in under 10 seconds. No measurements needed.
          </p>
        </div>

        {/* Steps — alternating layout on desktop */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(123,47,255,0.3) 20%, rgba(123,47,255,0.3) 80%, transparent)' }}
          />

          <div className="flex flex-col gap-4 lg:gap-0">
            {steps.map((step, i) => {
              const isRight = i % 2 === 1
              return (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${isRight ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Card */}
                  <div
                    className={`w-full lg:w-[calc(50%-56px)] ${isRight ? 'lg:pl-10' : 'lg:pr-10'} ${isRight ? 'reveal-right' : 'reveal-left'} delay-${i * 100}`}
                  >
                    <div
                      className="rounded-2xl p-8 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 group"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.3)',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.boxShadow = '0 0 0 1px rgba(123,47,255,0.2), 0 8px 40px rgba(0,0,0,0.4), 0 0 60px rgba(123,47,255,0.07)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.3)'
                      }}
                    >
                      <div
                        className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full mb-5"
                        style={{ background: 'rgba(123,47,255,0.1)', border: '1px solid rgba(123,47,255,0.2)' }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FFF]" />
                        <span className="text-[#7B2FFF] text-[10px] font-medium tracking-widest uppercase">{step.tag}</span>
                      </div>
                      <h3 className="text-[#EDEDEF] font-semibold text-xl tracking-tight mb-3 group-hover:text-white transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[#8A8F98] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Center node — desktop */}
                  <div className="hidden lg:flex w-[112px] justify-center flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(123,47,255,0.10)',
                        border: '1px solid rgba(123,47,255,0.30)',
                        boxShadow: '0 0 0 4px rgba(123,47,255,0.06)',
                      }}
                    >
                      <span className="text-[#7B2FFF] font-semibold text-sm font-mono">{step.number}</span>
                    </div>
                  </div>

                  <div className="hidden lg:block w-[calc(50%-56px)]" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-20 reveal">
          <a
            href="#waitlist"
            className="inline-block text-sm font-semibold text-white px-8 py-3.5 rounded-lg transition-all duration-200 active:scale-[0.98]"
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
            Start Trying On Now
          </a>
        </div>
      </div>
    </section>
  )
}
