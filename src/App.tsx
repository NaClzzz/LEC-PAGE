import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="h-[600px] bg-[#F5F5F5]" />
      {/* Achievements */}
      <section id="achievements" className="h-[600px] bg-[#EAEAEA]" />
      {/* Directions */}
      <section id="directions" className="h-[600px] bg-[#E0E0E0]" />
      {/* Recruit */}
      <section id="recruit" className="h-[600px] bg-[#D6D6D6]" />
      {/* Footer */}
      <section className="h-[300px] bg-[#CCCCCC]" />
    </div>
  )
}