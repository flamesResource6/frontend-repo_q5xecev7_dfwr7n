import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer({ onSubscribe }) {
  return (
    <footer className="relative bg-neutral-950 text-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border border-white/10" />
              <span className="font-extrabold tracking-tight">EABL Kenya</span>
            </div>
            <p className="mt-4 text-neutral-400 max-w-md">Celebrating life, every day, everywhere — proudly African, globally world‑class.</p>

            <div className="mt-6 flex gap-3">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-300">Quick Links</div>
            <ul className="mt-3 space-y-2 text-neutral-400 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#brands" className="hover:text-white">Brands</a></li>
              <li><a href="#sustainability" className="hover:text-white">Sustainability</a></li>
              <li><a href="#contact" className="hover:text-white">Careers</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-neutral-300">Newsletter</div>
            <form className="mt-3 flex gap-2" onSubmit={onSubscribe}>
              <input name="email" required type="email" placeholder="you@example.com" className="flex-1 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              <button className="rounded-full bg-yellow-500 text-black font-semibold px-4 py-2 hover:bg-yellow-400">Subscribe</button>
            </form>
            <p className="mt-3 text-[11px] text-neutral-500">By subscribing you agree to our privacy policy.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-neutral-500 flex flex-wrap items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} East African Breweries Limited. All Rights Reserved.</div>
          <div>Part of the Diageo group.</div>
        </div>
      </div>
    </footer>
  )
}
