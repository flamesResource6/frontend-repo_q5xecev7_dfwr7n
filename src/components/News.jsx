import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function News() {
  const [posts, setPosts] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/news`).then(r => r.json()).then(setPosts).catch(() => setPosts([]))
  }, [])

  return (
    <section id="news" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
          News & Media
        </motion.h2>
        <p className="mt-3 text-neutral-600 max-w-2xl">Latest updates, campaigns, and press releases.</p>

        <div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"></div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link || '#'}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group block overflow-hidden rounded-2xl bg-white border border-black/5 shadow hover:shadow-lg"
            >
              <div className="h-44 bg-gradient-to-br from-neutral-100 to-neutral-200" />
              <div className="p-6">
                <div className="text-xs text-neutral-500">{p.published_at}</div>
                <h4 className="text-lg font-bold mt-1 group-hover:text-yellow-600 transition-colors">{p.title}</h4>
                <p className="text-sm text-neutral-600 mt-1">{p.summary}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
