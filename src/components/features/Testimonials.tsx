import t1 from '@/assets/testimonial-1.jpg'
import t2 from '@/assets/testimonial-2.jpg'
import t3 from '@/assets/testimonial-3.jpg'

const testimonials = [
  {
    name: 'Sophia Adler',
    role: 'Fashion Blogger',
    avatar: t1,
    quote: "I used to return 40% of my online orders. Since Drape, I haven't returned a single item. The try-on is genuinely photorealistic — I can't tell it's AI.",
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Creative Director',
    avatar: t2,
    quote: "Finally an app that gets menswear right. The fabric drape on hoodies, structured blazers — it's accurate in a way I didn't think was possible on a phone.",
    rating: 5,
  },
  {
    name: 'Isabelle Moreau',
    role: 'Personal Stylist',
    avatar: t3,
    quote: 'I recommend Drape to every client. Being able to build entire virtual looks before a single purchase saves hours of fitting sessions and real money.',
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#7B2FFF]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,47,255,0.04)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto reveal">
          <p className="label-tag mb-4">What People Say</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
            <span className="gradient-text-white">Loved by style-forward </span>
            <span className="gradient-text-hero">shoppers worldwide.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal delay-${i * 150} rounded-2xl p-7 border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 flex flex-col ${
                i === 1 ? 'md:-translate-y-3' : ''
              }`}
              style={{
                background: i === 1
                  ? 'rgba(123,47,255,0.07)'
                  : 'rgba(255,255,255,0.04)',
                boxShadow: i === 1
                  ? '0 0 0 1px rgba(123,47,255,0.2), 0 8px 40px rgba(0,0,0,0.4), 0 0 60px rgba(123,47,255,0.08)'
                  : '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              {/* Stars */}
              <Stars count={t.rating} />

              <p className="text-[#8A8F98] leading-relaxed text-sm flex-1 mt-5 mb-6">
                "{t.quote}"
              </p>

              <div className="pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ border: '1px solid rgba(123,47,255,0.3)' }}
                />
                <div>
                  <p className="text-[#EDEDEF] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#8A8F98] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div
          className="mt-12 rounded-2xl p-8 border border-white/[0.06] flex flex-col md:flex-row items-center gap-8 md:gap-0 justify-around reveal-scale"
          style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.3)' }}
        >
          {[
            { value: '4.9', sub: 'App Store Rating', stars: true },
            { value: '2M+', sub: 'Virtual try-ons completed' },
            { value: '94%', sub: 'Would recommend Drape' },
            { value: '73%', sub: 'Reduction in returns' },
          ].map((s, i) => (
            <div key={i} className="flex md:flex-col items-center gap-4 md:gap-0 md:text-center">
              {i > 0 && <div className="hidden md:block w-px h-12 bg-white/[0.06] absolute" />}
              <div>
                <span className="text-4xl font-semibold text-[#EDEDEF] tracking-tight">{s.value}</span>
                {s.stars && (
                  <div className="flex justify-center mt-1.5">
                    <Stars count={5} />
                  </div>
                )}
                <p className="text-[#8A8F98] text-xs mt-1.5">{s.sub}</p>
              </div>
              {i < 3 && <div className="hidden md:block w-px h-12 bg-white/[0.06] mx-auto" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
