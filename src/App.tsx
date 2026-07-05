import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Directions from './components/Directions'
import Recruit from './components/Recruit'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const fill = document.querySelector('.loading-bar-fill') as HTMLElement

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (fill) fill.style.width = '55%'
      })
    })

    const minTime = new Promise<void>(r => setTimeout(r, 2000))
    const fontsReady = document.fonts.ready
    const windowLoaded = new Promise<void>(r => {
      if (document.readyState === 'complete') r()
      else window.addEventListener('load', () => r(), { once: true })
    })

    Promise.all([minTime, fontsReady, windowLoaded]).then(() => {
      if (fill) fill.style.width = '100%'
      const el = document.getElementById('loading-screen')
      if (el) {
        setTimeout(() => {
          el.classList.add('fade-out')
          el.addEventListener('transitionend', () => el.remove(), { once: true })
        }, 900)
      }
    })
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <Achievements />
      <Directions />
      <Recruit />
      <Footer />
    </div>
  )
}