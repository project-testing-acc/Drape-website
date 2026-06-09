import { useState } from 'react'
// No local video asset — use a hosted URL or upload drape.mp4 to src/assets to enable playback
import drapeVideo from '@/assets/drape.mp4'


export default function VideoDemo() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,47,255,0.05)', filter: 'blur(100px)' }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="label-tag mb-4">See It Live</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter">
            <span className="gradient-text-white">Watch Drape in </span>
            <span className="gradient-text-accent">30 seconds.</span>
          </h2>
        </div>

        {/* Video frame */}
        <div
          className="relative rounded-2xl overflow-hidden reveal-scale border border-white/[0.06]"
          style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 60px rgba(0,0,0,0.6), 0 0 100px rgba(123,47,255,0.08)' }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(123,47,255,0.5), transparent)' }}
          />

          {!playing ? (
            <div
              className="relative aspect-video bg-[#0a0a0c] cursor-pointer group"
              onClick={() => setPlaying(true)}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=675&fit=crop&q=80"
                alt="Drape demo preview"
                className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(5,5,6,0.9), rgba(5,5,6,0.3))' }}
              />
              {/* Grid overlay on video */}
              <div className="absolute inset-0 bg-grid" />

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                <div className="relative group-hover:-translate-y-1 transition-transform duration-300">
                  <div
                    className="absolute inset-0 rounded-full animate-pulse-ring"
                    style={{ background: 'rgba(123,47,255,0.2)', transform: 'scale(1.4)' }}
                  />
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                    style={{
                      background: '#7B2FFF',
                      boxShadow: '0 0 0 1px rgba(123,47,255,0.6), 0 4px 24px rgba(123,47,255,0.5), inset 0 1px 0 0 rgba(255,255,255,0.2)',
                    }}
                  >
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[#EDEDEF] font-semibold text-sm">Watch the demo</p>
                  <p className="text-[#8A8F98] text-xs mt-0.5">30 seconds · No sound required</p>
                </div>
              </div>

              {/* Live badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold text-[#7B2FFF] tracking-widest uppercase"
                  style={{ background: 'rgba(123,47,255,0.12)', border: '1px solid rgba(123,47,255,0.3)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7B2FFF] animate-pulse" />
                  LIVE DEMO
                </span>
              </div>
            </div>
          ) : (
            <div className="aspect-video bg-[#020203] flex items-center justify-center">
              {drapeVideo ? (
                <video
                  className="w-full h-full object-cover"
                  src={drapeVideo}
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <p className="text-[#8A8F98] text-sm">Demo video coming soon</p>
                  <button
                    onClick={() => setPlaying(false)}
                    className="text-xs text-[#7B2FFF] hover:text-[#8C46FF] transition-colors"
                  >
                    ← Back
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Stats below */}
        <div className="mt-6 grid grid-cols-3 gap-4 reveal delay-200">
          {[
            { value: '< 2s', label: 'Generation time' },
            { value: '98.4%', label: 'Accuracy rate' },
            { value: '40M+', label: 'Training images' },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-xl p-5 text-center border border-white/[0.06] hover:border-white/[0.12] transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <p className="text-xl font-semibold text-[#EDEDEF] tracking-tight">{s.value}</p>
              <p className="text-[#8A8F98] text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
