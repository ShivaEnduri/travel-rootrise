import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { destinations } from '../data.js'

export default function Destinations() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="destinations" className="relative py-24 md:py-40 bg-ocean-deep">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="eyebrow text-amber mb-4">Where do you want to feel?</p>
            <h2 className="font-display text-4xl md:text-6xl text-cloud">
              Featured
              <br />
              <span className="italic text-sunset">Destinations</span>
            </h2>
          </div>
          <p className="text-cloud/50 max-w-xs text-sm leading-relaxed">
            Hover over each card to glimpse the world waiting for you on the other side.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[3/4]"
            >
              {/* Image */}
              <motion.img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover"
                animate={{ scale: hovered === i ? 1.12 : 1 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />

              {/* Light reflection shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ pointerEvents: 'none' }}
              />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="glass text-cloud text-xs px-3 py-1 rounded-full eyebrow">
                  {dest.tag}
                </span>
              </div>

              {/* Arrow on hover */}
              <motion.div
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-sunset flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: hovered === i ? 1 : 0, scale: hovered === i ? 1 : 0.6 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-5 h-5 text-cloud" />
              </motion.div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-1.5 text-amber/80 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium tracking-widest uppercase">
                    {dest.country}
                  </span>
                </div>
                <h3 className="font-display text-3xl text-cloud mb-3">{dest.name}</h3>
                <motion.p
                  className="text-cloud/60 text-sm leading-relaxed"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: hovered === i ? 1 : 0, y: hovered === i ? 0 : 8 }}
                  transition={{ duration: 0.35 }}
                >
                  {dest.desc}
                </motion.p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hovered === i ? '3rem' : 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 h-px bg-sunset"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
