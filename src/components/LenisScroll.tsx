import { useEffect, useRef, type ReactNode } from 'react'

interface ScrollSnapProps {
  children: ReactNode
}

export default function ScrollSnap({ children }: ScrollSnapProps) {
  const scrollingRef = useRef(false)

  useEffect(() => {
    function getSections(): HTMLElement[] {
      return Array.from(document.querySelectorAll<HTMLElement>('section[id], footer[id]'))
    }

    function getCurrentSectionIndex(sections: HTMLElement[]): number {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const maxScroll = document.documentElement.scrollHeight - viewportHeight

      if (scrollY >= maxScroll - 50) {
        return sections.length - 1
      }

      const viewportCenter = scrollY + viewportHeight / 2
      let closestIdx = 0
      let closestDist = Infinity

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect()
        const sectionCenter = scrollY + rect.top + rect.height / 2
        const dist = Math.abs(viewportCenter - sectionCenter)
        if (dist < closestDist) {
          closestDist = dist
          closestIdx = i
        }
      })

      return closestIdx
    }

    function unlockOnScrollEnd() {
      let tick: number | null = null
      let lastY = window.scrollY

      function check() {
        if (window.scrollY === lastY) {
          scrollingRef.current = false
          if (tick) cancelAnimationFrame(tick)
          return
        }
        lastY = window.scrollY
        tick = requestAnimationFrame(check)
      }

      tick = requestAnimationFrame(check)
    }

    function handleWheel(e: WheelEvent) {
      if (window.innerWidth < 1024) return
      if (scrollingRef.current) { e.preventDefault(); return }
      e.preventDefault()

      const sections = getSections()
      if (sections.length === 0) return

      const currentIdx = getCurrentSectionIndex(sections)
      const direction = e.deltaY > 0 ? 1 : -1
      const targetIdx = Math.max(0, Math.min(sections.length - 1, currentIdx + direction))

      if (targetIdx === currentIdx) return

      scrollingRef.current = true
      sections[targetIdx].scrollIntoView({ behavior: 'smooth', block: 'start' })
      requestAnimationFrame(() => unlockOnScrollEnd())
    }

    document.addEventListener('wheel', handleWheel, { passive: false })

    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      e.preventDefault()
      const target = document.querySelector<HTMLElement>(href)
      if (!target) return
      scrollingRef.current = true
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      requestAnimationFrame(() => unlockOnScrollEnd())
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('wheel', handleWheel)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return <>{children}</>
}