import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'

const images = [image1, image2, image3, image4, image5]

export default function AppShowcase() {
  const targetRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Start tracking when the top of the section hits the top of the viewport
    // End tracking when the bottom of the section hits the bottom of the viewport
    offset: ["start start", "end end"]
  })

  // Move the carousel to the left as we scroll down
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"])

  return (
    <section id="app-showcase" ref={targetRef} className="relative h-[250vh]">
      {/* Sticky container that locks to the viewport during the 250vh scroll */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="w-full" style={{marginTop: '60px'}}>
          <div className="text-center mb-16 max-w-7xl mx-auto px-6 reveal">
            <p className="label-tag mb-4">Inside the App</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tight text-white mb-4">
              A premium <span className="gradient-text-hero">wardrobe experience.</span>
            </h2>
            <p className="text-[#8A8F98] text-lg max-w-2xl mx-auto">
              Explore our intuitive interface designed to make virtual styling effortless and beautiful.
            </p>
          </div>

          {/* Horizontal scroll container */}
          <div className="relative w-full overflow-hidden">
            {/* Fading edges to blend the scroll */}
            <div className="absolute top-0 bottom-0 left-0 w-12 md:w-48 bg-gradient-to-r from-[#050506] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 md:w-48 bg-gradient-to-l from-[#050506] to-transparent z-20 pointer-events-none" />
            
            {/* Container shifted so the first item is centered initially */}
            <div className="px-[calc(50%-130px)] md:px-[calc(50%-140px)]">
              <motion.div style={{ x, gap:'8px' }} className="flex pt-4 pb-10 w-max">
                {images.map((img, i) => (
                  <div 
                    key={i} 
                    className="relative flex-none w-[260px] md:w-[280px] aspect-[9/19.5] rounded-[2rem] overflow-hidden border border-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.2] z-10"
                    style={{
                      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 40px rgba(123,47,255,0.1)',
                      background: 'rgba(255,255,255,0.02)'
                    }}
                  >
                    <img src={img} alt={`App screenshot ${i + 1}`} className="w-full h-full object-cover pointer-events-none" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
