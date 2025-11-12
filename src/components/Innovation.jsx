import { motion } from 'framer-motion'

export default function Innovation() {
  return (
    <section id="innovation" className="relative py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Innovation in Every Drop
        </motion.h2>
        <p className="mt-3 text-neutral-600 max-w-2xl">Advanced brewing technology, data-driven quality control, and sustainable packaging.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i, idx) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="h-56 rounded-2xl bg-gradient-to-br from-white to-neutral-100 border border-black/5 shadow-inner" />
          ))}
        </div>
      </div>
    </section>
  )
}
