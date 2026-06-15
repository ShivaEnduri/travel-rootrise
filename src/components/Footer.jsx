import { motion } from 'framer-motion'
import { Compass, Instagram, Twitter, Youtube, Mail } from 'lucide-react'

const cols = [
  {
    title: 'Explore',
    links: ['Swiss Alps', 'Bali', 'Maldives', 'Santorini', 'Kashmir', 'Japan'],
  },
  {
    title: 'Experiences',
    links: ['Mountain Escapes', 'Beach Retreats', 'Road Trips', 'Luxury Vacations', 'Adventure Tours', 'Monsoon Getaways'],
  },
  {
    title: 'Company',
    links: ['About WANDR', 'Our Philosophy', 'Travel Stories', 'Press', 'Sustainability', 'Contact Us'],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-noir pt-24 pb-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sunset/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Tagline hero area */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 pb-20 border-b border-cloud/10"
        >
          <p className="eyebrow text-amber mb-5">One last thought</p>
          <h2 className="font-display italic text-3xl md:text-5xl lg:text-6xl text-cloud max-w-3xl mx-auto leading-tight">
            &ldquo;Life Begins At The End Of Your Comfort Zone.&rdquo;
          </h2>
          <a
            href="#book"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sunset text-cloud font-medium hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <Compass className="w-5 h-5" />
            Begin Your Journey
          </a>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Compass className="w-5 h-5 text-amber" />
              <span className="font-display text-xl text-cloud">
                WAND<span className="text-sunset">R</span>
              </span>
            </div>
            <p className="text-cloud/40 text-sm leading-relaxed max-w-[200px]">
              Crafting extraordinary journeys for those who travel to feel, not just to see.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Twitter, Youtube, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-cloud/60 hover:text-amber transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-cloud/60 mb-5">{col.title}</h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cloud/40 text-sm hover:text-amber transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-cloud/10 text-cloud/30 text-xs">
          <p>© {new Date().getFullYear()} WANDR. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cloud/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cloud/60 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cloud/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
