import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Compass, Menu, X } from 'lucide-react'

const links = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Map', href: '#map' },
  { label: 'Stories', href: '#stories' },
  { label: 'Book', href: '#book' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <Compass className="w-6 h-6 text-amber group-hover:rotate-180 transition-transform duration-700" />
          <span className="font-display text-xl tracking-wide text-cloud">
            WAND<span className="text-sunset">R</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="eyebrow text-cloud/70 hover:text-amber transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-sunset/90 hover:bg-sunset text-cloud text-sm font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,107,53,0.5)]"
        >
          Start Your Adventure
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cloud"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass mt-4 mx-6 rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col p-6 gap-5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="eyebrow text-cloud/80 hover:text-amber transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="text-center px-5 py-3 rounded-full bg-sunset text-cloud text-sm font-medium"
            >
              Start Your Adventure
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
