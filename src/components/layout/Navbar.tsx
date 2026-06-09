import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Waitlist', href: '#waitlist' },
]

const APP_STORE_URL = 'https://apps.apple.com/app/id000000000'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#050506]/90 backdrop-blur-xl border-b border-white/[0.06] py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #5E6AD2, #818cf8)',
              boxShadow: '0 0 18px rgba(94,106,210,0.35)',
            }}
          >
            D
          </div>
          <span className="text-xl font-bold text-[#EDEDEF] tracking-tight">Drape</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#8A8F98] hover:text-[#EDEDEF] transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/[0.05]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#8A8F98] hover:text-[#EDEDEF] transition-colors px-4 py-2 rounded-lg hover:bg-white/[0.05]"
          >
            Download
          </a>
          <a
            href="#waitlist"
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-all duration-200 active:scale-[0.98]"
            style={{
              background: '#7B2FFF',
              boxShadow: '0 0 0 1px rgba(123, 47, 255, 0.5), 0 4px 12px rgba(123,47,255,0.3), inset 0 1px 0 0 rgba(255,255,255,0.15)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#8C46FF'
                ; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 1px rgba(123,47,255,0.6), 0 6px 20px rgba(123,47,255,0.4), inset 0 1px 0 0 rgba(255,255,255,0.2)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#7B2FFF'
                ; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 1px rgba(123,47,255,0.5), 0 4px 12px rgba(123,47,255,0.3), inset 0 1px 0 0 rgba(255,255,255,0.15)'
            }}
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#8A8F98] hover:text-[#EDEDEF] p-2 rounded-lg hover:bg-white/[0.05] transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden mx-4 mt-2 rounded-xl border border-white/[0.06] px-4 py-4 flex flex-col gap-1"
          style={{
            background: '#0a0a0c',
            backdropFilter: 'blur(24px)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#8A8F98] hover:text-[#EDEDEF] hover:bg-white/[0.05] px-3 py-2.5 rounded-lg text-sm transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-white/[0.06]">
            <a
              href="#waitlist"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center block text-sm font-semibold text-white py-2.5 rounded-lg"
              style={{
                background: '#7B2FFF',
                boxShadow: '0 0 0 1px rgba(123,47,255,0.5), 0 4px 12px rgba(123,47,255,0.3)',
              }}
            >
              Join Waitlist — Free
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
