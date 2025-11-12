import { motion } from 'framer-motion'

const locations = [
  { country: 'Kenya', city: 'Nairobi', name: 'Ruaraka Brewery', lat: -1.236, lng: 36.882, address: 'Ruaraka, Nairobi' },
  { country: 'Uganda', city: 'Kampala', name: 'Uganda Breweries', lat: 0.327, lng: 32.621, address: 'Port Bell, Luzira' },
  { country: 'Tanzania', city: 'Dar es Salaam', name: 'Serengeti Breweries', lat: -6.8, lng: 39.28, address: 'Dar es Salaam' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Contact & Careers
        </motion.h2>
        <p className="mt-3 text-neutral-600 max-w-2xl">Explore our regional presence and join our team.</p>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-yellow-50 to-emerald-50 border border-black/5">
            <div className="absolute inset-6 rounded-xl bg-white/70 backdrop-blur border border-black/5 p-4">
              <div className="grid grid-cols-6 grid-rows-4 gap-1 h-full">
                {locations.map((l, idx) => (
                  <div key={idx} className="col-span-1 row-span-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              {locations.map((l) => (
                <div key={l.name} className="p-4 rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition">
                  <div className="text-sm text-neutral-500">{l.country} • {l.city}</div>
                  <div className="text-lg font-bold">{l.name}</div>
                  <div className="text-sm text-neutral-600">{l.address}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-6 py-3 font-semibold hover:bg-neutral-800 transition">Join Our Team</a>
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white border border-black/10 px-6 py-3 font-semibold hover:bg-neutral-50 transition">General Enquiries</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
