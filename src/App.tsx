import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Directions from './components/Directions'
import Recruit from './components/Recruit'
import Footer from './components/Footer'

export default function App() {
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