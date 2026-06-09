const brands = [
  'Zara', 'H&M', 'Mango', 'ASOS', 'Topshop', 'Uniqlo', "Levi's", 'Calvin Klein',
  'Gucci', 'Prada', 'Zara', 'H&M',
]

export default function BrandLogos() {
  return (
    <section className="py-16 border-y border-white/[0.06] overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center reveal">
        <p className="label-tag opacity-50">Try on clothes from 180+ brands</p>
      </div>
      <div className="flex overflow-hidden">
        <div
          className="flex gap-16 items-center whitespace-nowrap px-8 min-w-max"
          style={{ animation: 'marquee 24s linear infinite' }}
        >
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-[#8A8F98]/40 hover:text-[#7B2FFF] transition-colors duration-300 text-base font-semibold tracking-widest cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
