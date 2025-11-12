import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Heritage from './components/Heritage'
import Sustainability from './components/Sustainability'
import Innovation from './components/Innovation'
import News from './components/News'
import Investors from './components/Investors'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('en')
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const glow = useTransform(scrollYProgress, [0, 1], [0, 1])

  const handleSubscribe = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

    try {
      const res = await fetch(`${baseUrl}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, language }),
      })
      if (!res.ok) throw new Error('Subscription failed')
      alert('Thanks for subscribing!')
      e.currentTarget.reset()
    } catch (err) {
      alert('Unable to subscribe at the moment.')
    }
  }

  return (
    <div className="bg-white text-neutral-900" ref={containerRef}>
      <div className="fixed inset-x-0 top-0 h-[120px] pointer-events-none" style={{
        background: 'radial-gradient(600px 200px at top center, rgba(212,175,55,' + glow.get() + '), transparent)'
      }} />

      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero />
        <Brands />
        <Heritage />
        <Sustainability />
        <Innovation />
        <News />
        <Investors />
        <Contact />
      </main>
      <Footer onSubscribe={handleSubscribe} />
    </div>
  )
}

export default App
