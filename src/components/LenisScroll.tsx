import { useEffect, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'

interface LenisScrollProps {
  children: ReactNode
}

export default function LenisScroll({ children }: LenisScrollProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      smoothWheel: true,
    })

    lenisRef.current = lenis

    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      e.preventDefault()
      lenis.scrollTo(href, { duration: 1.5 })
    }

    document.addEventListener('click', handleAnchorClick)

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}