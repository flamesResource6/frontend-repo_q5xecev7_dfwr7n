import { useState } from 'react'
import { Menu, X, Globe2 } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#brands', label: 'Brands' },
  { href: '#heritage', label: 'Our Heritage' },
  { href: '#sustainability', label: 'Sustainability' },
  { href: '#innovation', label: 'Innovation' },
  { href: '#news', label: 'News & Media' },
  { href: '#investors', label: 'Investors' },
  { href: '#contact', label: 'Contact & Careers' },
]

export default function Navbar({ language, setLanguage }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border border-black/10" />
          <span className="font-extrabold tracking-tight text-neutral-900">EABL Kenya</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">
              {label}
            </a>
          ))}
          <button
            onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
            aria-label="Toggle language"
          >
            <Globe2 className="w-4 h-4" /> {language === 'en' ? 'EN' : 'SW'}
          </button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/95">
          <div className="px-4 py-3 space-y-2">
            {links.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="block text-sm font-medium text-neutral-700 hover:text-neutral-900">
                {label}
              </a>
            ))}
            <button
              onClick={() => { setLanguage(language === 'en' ? 'sw' : 'en'); setOpen(false) }}
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              <Globe2 className="w-4 h-4" /> {language === 'en' ? 'English' : 'Swahili'}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
