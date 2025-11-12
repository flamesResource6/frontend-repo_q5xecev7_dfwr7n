import { motion } from 'framer-motion'
import { Droplets, GraduationCap, Leaf, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Droplets, title: 'Water Conservation', stat: '3.2Bn L saved', text: 'Investing in smart water stewardship and clean water access.' },
  { icon: GraduationCap, title: 'Education Sponsorships', stat: '10k+ students', text: 'Scholarships and skills training across East Africa.' },
  { icon: Leaf, title: 'Local Sourcing', stat: '70%+ local', text: 'Supporting farmers and sustainable supply chains.' },
  { icon: ShieldCheck, title: 'Responsible Drinking', stat: 'Nationwide programs', text: 'Championing moderation and safety in our communities.' },
]

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative py-24 bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Sustainability & Responsibility
        </motion.h2>
        <p className="mt-3 text-neutral-600 max-w-2xl">Brewing a better future — for people, planet, and prosperity.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="relative overflow-hidden rounded-2xl bg-white border border-black/5 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 to-yellow-100/30" />
              <div className="relative p-6">
                <it.icon className="w-8 h-8 text-emerald-700" />
                <h4 className="text-lg font-bold mt-3">{it.title}</h4>
                <p className="text-sm text-neutral-600 mt-1">{it.text}</p>
                <div className="mt-4 text-2xl font-extrabold text-emerald-700">{it.stat}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
