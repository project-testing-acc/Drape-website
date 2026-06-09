import { useState } from 'react'
import { supabase } from '@/lib/supabase'

type Status = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [platform, setPlatform] = useState<'ios' | 'android' | ''>('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    setErrorMsg('')
    const { error } = await supabase.from('waitlist').insert({
      email: email.trim().toLowerCase(),
      name: name.trim() || null,
      platform: platform || null,
    })
    if (error) {
      if (error.code === '23505') {
        setStatus('duplicate')
      } else {
        setStatus('error')
        setErrorMsg('Something went wrong. Please try again.')
      }
      return
    }
    setStatus('success')
    setEmail('')
    setName('')
    setPlatform('')
  }

  return (
    <section id="waitlist" className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,47,255,0.06)', filter: 'blur(100px)' }}
      />

      <div className="max-w-xl mx-auto relative reveal">
        <div
          className="rounded-2xl p-10 md:p-12 relative overflow-hidden border border-white/[0.08]"
          style={{
            background: 'rgba(255,255,255,0.04)',
            boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 60px rgba(0,0,0,0.5), 0 0 100px rgba(123,47,255,0.08)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(123,47,255,0.5), transparent)' }}
          />
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-grid pointer-events-none" />

          {status === 'success' ? (
            <div className="relative text-center py-8">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div
                  className="absolute inset-0 rounded-full animate-pulse-ring"
                  style={{ background: 'rgba(123,47,255,0.15)', transform: 'scale(1.4)' }}
                />
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: 'rgba(123,47,255,0.12)', border: '1px solid rgba(123,47,255,0.35)' }}
                >
                  <svg className="w-7 h-7 text-[#7B2FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-[#EDEDEF] tracking-tight mb-3">
                You're on the list!
              </h3>
              <p className="text-[#8A8F98] leading-relaxed text-sm">
                We'll notify you the moment Drape launches. Get ready to dress smarter.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-xs text-[#8A8F98] hover:text-[#7B2FFF] transition-colors"
              >
                Add another email →
              </button>
            </div>
          ) : (
            <div className="relative">
              <p className="label-tag mb-4">Early Access</p>
              <h2 className="text-3xl font-semibold tracking-tighter text-[#EDEDEF] mb-2">
                Be first to try{' '}
                <span className="animate-shimmer">Drape.</span>
              </h2>
              <p className="text-[#8A8F98] text-sm leading-relaxed mb-8">
                Join the waitlist and get exclusive early access + a free month of Drape Style when we launch.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="wl-name" className="block text-xs text-[#8A8F98] mb-1.5 tracking-wide">
                    Your Name <span className="opacity-50">(optional)</span>
                  </label>
                  <input
                    id="wl-name"
                    type="text"
                    placeholder="Alex Johnson"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-sm text-[#EDEDEF] placeholder-[#8A8F98]/40 transition-all duration-200 outline-none focus:ring-2 focus:ring-[#7B2FFF]/40 focus:ring-offset-2 focus:ring-offset-[#050506]"
                    style={{
                      background: '#0F0F12',
                      border: '1px solid rgba(255,255,255,0.10)',
                    }}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,47,255,0.5)' }}
                    onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="wl-email" className="block text-xs text-[#8A8F98] mb-1.5 tracking-wide">
                    Email Address <span className="text-[#7B2FFF]">*</span>
                  </label>
                  <input
                    id="wl-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 text-sm text-[#EDEDEF] placeholder-[#8A8F98]/40 transition-all duration-200 outline-none focus:ring-2 focus:ring-[#7B2FFF]/40 focus:ring-offset-2 focus:ring-offset-[#050506]"
                    style={{
                      background: '#0F0F12',
                      border: '1px solid rgba(255,255,255,0.10)',
                    }}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,47,255,0.5)' }}
                    onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.10)' }}
                  />
                </div>

                {/* Platform */}
                <div>
                  <label className="block text-xs text-[#8A8F98] mb-1.5 tracking-wide">
                    Preferred platform
                  </label>
                  <div className="flex gap-3">
                    {[
                      {
                        value: 'ios',
                        label: 'iOS',
                        icon: (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                          </svg>
                        ),
                      },
                      {
                        value: 'android',
                        label: 'Android',
                        icon: (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5z" />
                          </svg>
                        ),
                      },
                    ].map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        onClick={() => setPlatform(platform === p.value as 'ios' | 'android' ? '' : p.value as 'ios' | 'android')}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                        style={{
                          background: platform === p.value ? 'rgba(123,47,255,0.12)' : '#0F0F12',
                          border: `1px solid ${platform === p.value ? 'rgba(123,47,255,0.4)' : 'rgba(255,255,255,0.08)'}`,
                          color: platform === p.value ? '#818cf8' : '#8A8F98',
                        }}
                      >
                        {p.icon}
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Errors */}
                {status === 'duplicate' && (
                  <p className="text-[#7B2FFF] text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You're already on the list! We'll be in touch.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                  style={{
                    background: '#7B2FFF',
                    boxShadow: '0 0 0 1px rgba(123,47,255,0.5), 0 4px 16px rgba(123,47,255,0.35), inset 0 1px 0 0 rgba(255,255,255,0.15)',
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'loading') {
                      const el = e.currentTarget as HTMLElement
                      el.style.background = '#8C46FF'
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = '#7B2FFF'
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Joining…
                    </>
                  ) : (
                    'Join the Waitlist — Free'
                  )}
                </button>

                <p className="text-center text-[#8A8F98]/40 text-xs">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </form>
            </div>
          )}
        </div>

        {/* Social proof */}
        <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
          <div className="flex -space-x-2">
            {[
              '1494790108377-be9c29b29330',
              '1507003211169-0a1dd7228f2d',
              '1517841905240-472988babdf9',
              '1534528741775-53994a69daeb',
            ].map((id, i) => (
              <img
                key={i}
                src={`https://images.unsplash.com/photo-${id}?w=32&h=32&fit=crop&q=80`}
                alt="member"
                className="w-7 h-7 rounded-full object-cover"
                style={{ border: '2px solid #050506' }}
              />
            ))}
          </div>
          <span className="text-[#8A8F98] text-sm">
            <span className="text-[#EDEDEF] font-semibold">12,400+</span> people already joined
          </span>
        </div>
      </div>
    </section>
  )
}
