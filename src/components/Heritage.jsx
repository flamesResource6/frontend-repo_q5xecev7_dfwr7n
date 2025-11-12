import { motion } from 'framer-motion'

const milestones = [
  { year: 1922, title: 'Founded', text: 'East African Breweries begins its journey in Nairobi.' },
  { year: 1952, title: 'Tusker Legacy', text: 'Tusker evolves into Kenya’s beloved national lager.' },
  { year: 1999, title: 'Diageo Partnership', text: 'Joining the Diageo family elevates global excellence.' },
  { year: 2012, title: 'Regional Growth', text: 'Expansion across East Africa strengthens our footprint.' },
  { year: 2022, title: 'Centenary', text: '100 years of brewing excellence in East Africa.' },
]

export default function Heritage() {
  return (
    <section id="heritage" className="relative py-24 bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.1), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,209,0,0.08), transparent 40%)'
      }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold">
          Our Heritage
        </motion.h2>
        <p className="mt-3 text-neutral-300 max-w-2xl">A story a century in the making — crafted with pride, innovation, and community.</p>

        <div className="mt-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-300 via-yellow-500 to-emerald-500 rounded-full" />
          <div className="space-y-12">
            {milestones.map((m, idx) => (
              <motion.div key={m.year} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }} className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 ? 'md:text-left' : 'md:text-right'}`}>
                <div className={`${idx % 2 ? 'md:order-2' : ''}`}>
                  <h3 className="text-4xl font-extrabold text-yellow-300">{m.year}</h3>
                  <h4 className="text-xl font-bold mt-2">{m.title}</h4>
                  <p className="text-neutral-300 mt-2">{m.text}</p>
                </div>
                <div className={`${idx % 2 ? 'md:order-1' : ''}`}>
                  <div className="h-44 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 shadow-inner" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-yellow-300 font-semibold">100 Years of Brewing Excellence in East Africa</p>
        </div>
      </div>
    </section>
  )
}
