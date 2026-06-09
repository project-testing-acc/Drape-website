import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.10, rootMargin: '0px 0px -30px 0px' }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
