import { useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    tagline: 'Try before you commit',
    features: [
      '10 try-ons per month',
      'Access to 20+ brands',
      'Basic AI draping',
      'Save up to 5 looks',
      'Standard resolution',
    ],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    name: 'Style',
    price: { monthly: 9.99, yearly: 7.99 },
    tagline: 'For the fashion-forward',
    features: [
      'Unlimited try-ons',
      'All 180+ brands',
      'Premium AI draping',
      'Unlimited saved looks',
      'HD & shareable renders',
      'AI stylist recommendations',
      'Priority processing',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Pro',
    price: { monthly: 24.99, yearly: 19.99 },
    tagline: 'For stylists & creators',
    features: [
      'Everything in Style',
      'Batch try-on (10 at once)',
      'Brand API access',
      'White-label renders',
      'Advanced analytics',
      'Custom brand partnerships',
      'Dedicated support',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,47,255,0.05)', filter: 'blur(100px)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-xl mx-auto reveal">
          <p className="label-tag mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
            <span className="gradient-text-white">Simple plans, </span>
            <span className="gradient-text-hero">real value.</span>
          </h2>
          <p className="text-[#8A8F98] text-lg mt-4 mb-8">
            Start free. Upgrade when you love it. Cancel anytime.
          </p>

          {/* Toggle */}
          <div
            className="inline-flex items-center p-1 rounded-lg border border-white/[0.08]"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !yearly
                  ? 'text-white'
                  : 'text-[#8A8F98] hover:text-[#EDEDEF]'
              }`}
              style={!yearly ? {
                background: '#7B2FFF',
                boxShadow: '0 0 0 1px rgba(123,47,255,0.4), 0 2px 8px rgba(123,47,255,0.3)',
              } : {}}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                yearly
                  ? 'text-white'
                  : 'text-[#8A8F98] hover:text-[#EDEDEF]'
              }`}
              style={yearly ? {
                background: '#7B2FFF',
                boxShadow: '0 0 0 1px rgba(123,47,255,0.4), 0 2px 8px rgba(123,47,255,0.3)',
              } : {}}
            >
              Yearly
              <span
                className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: 'rgba(123,47,255,0.2)', color: yearly ? '#ffffffff' : '#818cf8' }}
              >
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`reveal delay-${i * 150} rounded-2xl p-7 flex flex-col relative overflow-hidden border transition-all duration-300 ${
                plan.highlight ? 'md:-mt-3 md:-mb-3' : ''
              }`}
              style={{
                background: plan.highlight ? 'rgba(123,47,255,0.08)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${plan.highlight ? 'rgba(123,47,255,0.3)' : 'rgba(255,255,255,0.06)'}`,
                boxShadow: plan.highlight
                  ? '0 0 0 1px rgba(123,47,255,0.3), 0 8px 40px rgba(0,0,0,0.5), 0 0 80px rgba(123,47,255,0.10)'
                  : '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              {/* Top accent line for highlighted */}
              {plan.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(123,47,255,0.6), transparent)' }}
                />
              )}

              {plan.highlight && (
                <div className="absolute top-4 right-5">
                  <span
                    className="text-[10px] font-semibold text-[#7B2FFF] px-2.5 py-1 rounded-full tracking-widest uppercase"
                    style={{ background: 'rgba(123,47,255,0.15)', border: '1px solid rgba(123,47,255,0.3)' }}
                  >
                    Popular
                  </span>
                </div>
              )}

              {/* Plan info */}
              <div className="mb-5">
                <p className="text-[#EDEDEF] font-semibold text-sm">{plan.name}</p>
                <p className="text-[#8A8F98] text-xs mt-0.5">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-7">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-semibold text-[#EDEDEF] tracking-tight">
                    ${yearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-[#8A8F98] text-sm mb-1">/mo</span>
                  )}
                </div>
                {plan.price.monthly === 0 && (
                  <span className="text-[#8A8F98] text-xs">Forever free</span>
                )}
                {yearly && plan.price.monthly > 0 && (
                  <p className="text-[#7B2FFF] text-xs mt-1">
                    Save ${((plan.price.monthly - plan.price.yearly) * 12).toFixed(0)}/year
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: plan.highlight ? 'rgba(123,47,255,0.15)' : 'rgba(255,255,255,0.06)' }}
                    >
                      <Check className="w-2.5 h-2.5 text-[#7B2FFF]" />
                    </div>
                    <span className="text-[#8A8F98] text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-[0.98] ${
                  plan.highlight ? 'text-white' : 'text-[#8A8F98] hover:text-[#EDEDEF]'
                }`}
                style={plan.highlight ? {
                  background: '#7B2FFF',
                  boxShadow: '0 0 0 1px rgba(123,47,255,0.5), 0 4px 12px rgba(123,47,255,0.35), inset 0 1px 0 0 rgba(255,255,255,0.15)',
                } : {
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
                onMouseEnter={(e) => {
                  if (plan.highlight) {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = '#8C46FF'
                    el.style.boxShadow = '0 0 0 1px rgba(123,47,255,0.6), 0 6px 20px rgba(123,47,255,0.45), inset 0 1px 0 0 rgba(255,255,255,0.2)'
                  } else {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight) {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = '#7B2FFF'
                    el.style.boxShadow = '0 0 0 1px rgba(123,47,255,0.5), 0 4px 12px rgba(123,47,255,0.35), inset 0 1px 0 0 rgba(255,255,255,0.15)'
                  } else {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
                  }
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-[#8A8F98]/50 text-sm mt-8 reveal">
          All plans include a 14-day free trial · No credit card required
        </p>
      </div>
    </section>
  )
}
