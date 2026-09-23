import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const scrollToHashElement = () => {
        const element = document.querySelector(hash)
        if (element) {
          const navHeight = 90
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: Math.max(0, elementPosition - navHeight),
            behavior: 'smooth'
          })
          return true
        }
        return false
      }

      // Check immediately and with staggered attempts to accommodate GSAP and dynamic layouts
      scrollToHashElement()
      const attempts = [100, 250, 450, 700, 1100]
      const timers = attempts.map((ms) => setTimeout(scrollToHashElement, ms))

      return () => {
        timers.forEach(clearTimeout)
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}
