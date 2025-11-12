import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Brands() {
  const [brands, setBrands] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/brands`).then(r => r.json()).then(setBrands).catch(() => setBrands([]))
  }, [])

  const categories = ['Beer', 'Spirits', 'Non-Alcoholic']

  return (
    <section id="brands" className="relative py-24 bg-gradient-to-b from-white to-yellow-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Our Brands
        </motion.h2>
        <p className="mt-3 text-neutral-600 max-w-2xl">Iconic beers, celebrated spirits, and refreshing non-alcoholic beverages.</p>

        {categories.map(cat => (
          <div key={cat} className="mt-12">
            <h3 className="text-xl font-bold text-neutral-900 mb-6">{cat}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {brands.filter(b => b.category === cat).map((b, idx) => (
                <motion.div
                  key={b.name}
                  initial={{ opacity: 0, y: 40, rotate: -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-black/5 shadow-lg hover:shadow-xl"
                >
                  <div className="absolute inset-0" style={{ background: `radial-gradient(600px 120px at top left, ${b.color || '#f1f1f1'}33, transparent)` }} />
                  <div className="p-6 relative">
                    <div className="h-40 mb-4 rounded-xl bg-gradient-to-br from-white to-neutral-50 border border-black/5 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-xl bg-white/80 border border-black/5 shadow-inner group-hover:scale-105 transition-transform" />
                    </div>
                    <h4 className="text-lg font-bold">{b.name}</h4>
                    <p className="text-sm text-neutral-600">{b.tagline}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-neutral-50" />
    </section>
  )}
