const APP_STORE_URL = 'https://apps.apple.com/app/id000000000'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.drape.app'

export default function CTASection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,47,255,0.08)', filter: 'blur(120px)' }}
      />

      <div className="max-w-4xl mx-auto relative reveal-scale">
        <div
          className="rounded-2xl p-12 md:p-20 text-center relative overflow-hidden border border-white/[0.08]"
          style={{
            background: 'rgba(255,255,255,0.04)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 8px 60px rgba(0,0,0,0.5), 0 0 120px rgba(123,47,255,0.10)',
          }}
        >
          {/* Top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(123,47,255,0.6), transparent)' }}
          />
          {/* Grid */}
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          {/* Corner glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] pointer-events-none"
            style={{ background: 'rgba(123,47,255,0.12)', filter: 'blur(60px)', transform: 'translate(-50%, -40%)' }}
          />

          <p className="label-tag mb-6 relative">Your wardrobe, reimagined</p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-tight mb-6 relative">
            <span className="gradient-text-white">Try on the future</span>
            <br />
            <span className="animate-shimmer">of fashion.</span>
          </h2>

          <p className="text-[#8A8F98] text-lg max-w-xl mx-auto mb-10 leading-relaxed relative">
            Join over 500,000 style-conscious shoppers who never buy blind anymore.
            Download Drape and try your first outfit free today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 relative">
            <a
              href="#waitlist"
              className="text-sm font-semibold text-white px-8 py-3.5 rounded-lg transition-all duration-200 active:scale-[0.98] w-full sm:w-auto text-center"
              style={{
                background: '#7B2FFF',
                boxShadow: '0 0 0 1px rgba(123,47,255,0.5), 0 4px 16px rgba(123,47,255,0.4), inset 0 1px 0 0 rgba(255,255,255,0.15)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#8C46FF'
                el.style.boxShadow = '0 0 0 1px rgba(123,47,255,0.6), 0 8px 24px rgba(123,47,255,0.5), inset 0 1px 0 0 rgba(255,255,255,0.2)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#7B2FFF'
                el.style.boxShadow = '0 0 0 1px rgba(123,47,255,0.5), 0 4px 16px rgba(123,47,255,0.4), inset 0 1px 0 0 rgba(255,255,255,0.15)'
              }}
            >
              Join Waitlist — Free
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-[#8A8F98] hover:text-[#EDEDEF] px-6 py-3.5 rounded-lg transition-all duration-200 w-full sm:w-auto text-center hover:bg-white/[0.05]"
            >
              Learn More
            </a>
          </div>

          {/* Store badges */}
          <div className="flex items-center justify-center gap-3 flex-wrap relative">
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
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/[0.08] text-[#8A8F98] hover:text-[#EDEDEF] hover:border-white/[0.14] transition-all duration-200 group"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <span className="group-hover:text-[#7B2FFF] transition-colors">{b.icon}</span>
                <div className="text-left">
                  <p className="text-[10px] text-[#8A8F98]/50">{b.sub}</p>
                  <p className="text-sm font-semibold">{b.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
