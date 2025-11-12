import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onExploreBrands }) {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="text-yellow-300 font-semibold tracking-wide">Celebrating 100 Years</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
            Celebrating Life, Every Day, Everywhere — EABL Kenya
          </h1>
          <p className="mt-6 text-white/90 text-lg">
            East Africa’s leading brewer and beverage company under Diageo — proudly African, globally world-class.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#brands" onClick={onExploreBrands} className="inline-flex items-center justify-center rounded-full bg-yellow-400/90 hover:bg-yellow-400 text-black font-semibold px-6 py-3 shadow-lg shadow-yellow-500/20 transition">
              Explore Our Brands
            </a>
            <a href="#heritage" className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 border border-white/20 backdrop-blur">
              Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
