import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Investors() {
  const [metrics, setMetrics] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/investor-metrics`).then(r => r.json()).then(setMetrics).catch(() => setMetrics(null))
  }, [])

  return (
    <section id="investors" className="relative py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Investor Relations
        </motion.h2>
        <p className="mt-3 text-neutral-600 max-w-2xl">Performance at a glance with sleek, animated metrics.</p>

        {metrics && (
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white border border-black/5 shadow">
              <div className="text-neutral-500 text-sm">Revenue (KES Bn)</div>
              <div className="text-4xl font-extrabold text-yellow-600">{metrics.revenue.toFixed(1)}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white border border-black/5 shadow">
              <div className="text-neutral-500 text-sm">YoY Growth</div>
              <div className="text-4xl font-extrabold text-emerald-600">{metrics.growth_percent.toFixed(1)}%</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-white border border-black/5 shadow">
              <div className="text-neutral-500 text-sm">Share Price (KES)</div>
              <div className="text-4xl font-extrabold text-neutral-900">{metrics.share_price.toFixed(1)}</div>
            </motion.div>
          </div>
        )}

        {metrics && (
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={metrics.report_url} target="_blank" className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-6 py-3 font-semibold hover:bg-neutral-800 transition">Download Annual Report</a>
            <a href={metrics.nse_url} target="_blank" className="inline-flex items-center justify-center rounded-full bg-white border border-black/10 px-6 py-3 font-semibold hover:bg-neutral-50 transition">View NSE Data</a>
          </div>
        )}
      </div>
    </section>
  )
}
