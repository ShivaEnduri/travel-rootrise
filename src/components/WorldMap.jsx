import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plane } from 'lucide-react'
import { worldDestinations } from '../data.js'

const routePairs = [
  [0, 4], // Swiss Alps -> Maldives
  [4, 1], // Maldives -> Kashmir
  [1, 2], // Kashmir -> Bali
  [2, 3], // Bali -> Santorini
  [3, 5], // Santorini -> Japan
]

export default function WorldMap() {
  const [active, setActive] = useState(null)

  return (
    <section id="map" className="relative py-24 md:py-40 bg-ocean-deep overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="eyebrow text-amber mb-4">Every pin is a story</p>
          <h2 className="font-display text-4xl md:text-6xl text-cloud">
            Your World, <span className="italic text-sunset">Mapped</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden aspect-[16/9] glass"
        >
          {/* World map image */}
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2400&q=80"
            alt="World map"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/30 to-ocean-deep/60" />

          {/* Animated SVG routes */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {routePairs.map(([a, b], ri) => {
              const from = worldDestinations[a]
              const to = worldDestinations[b]
              const fx = parseFloat(from.left)
              const fy = parseFloat(from.top)
              const tx = parseFloat(to.left)
              const ty = parseFloat(to.top)
              const mx = (fx + tx) / 2
              const my = Math.min(fy, ty) - 10
              return (
                <motion.path
                  key={ri}
                  d={`M${fx},${fy} Q${mx},${my} ${tx},${ty}`}
                  fill="none"
                  stroke="rgba(244,169,73,0.4)"
                  strokeWidth="0.4"
                  strokeDasharray="2 3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, delay: ri * 0.5 }}
                />
              )
            })}
          </svg>

          {/* Animated plane along a route */}
          <motion.div
            className="absolute text-amber"
            initial={{ top: '38%', left: '50%', rotate: 45 }}
            animate={{
              top: ['38%', '28%', '38%', '58%', '64%'],
              left: ['50%', '67%', '54%', '66%', '76%'],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute' }}
          >
            <Plane className="w-5 h-5 drop-shadow-[0_0_8px_rgba(244,169,73,0.8)]" />
          </motion.div>

          {/* Destination pins */}
          {worldDestinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.2 }}
              className="absolute cursor-pointer group"
              style={{ top: dest.top, left: dest.left, transform: 'translate(-50%,-50%)' }}
              onHoverStart={() => setActive(i)}
              onHoverEnd={() => setActive(null)}
            >
              {/* Ping */}
              <span className="absolute inline-flex h-5 w-5 rounded-full bg-sunset/50 animate-ping" />
              <span className="relative inline-flex h-5 w-5 rounded-full bg-sunset border-2 border-amber" />

              {/* Tooltip */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 glass text-cloud text-xs px-3 py-2 rounded-xl whitespace-nowrap"
                  >
                    {dest.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
