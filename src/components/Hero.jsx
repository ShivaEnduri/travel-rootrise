import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronDown, Plane } from 'lucide-react'

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const sx = useSpring(mx, { stiffness: 50, damping: 20 })
  const sy = useSpring(my, { stiffness: 50, damping: 20 })

  const bgX = useTransform(sx, [-1, 1], [-20, 20])
  const bgY = useTransform(sy, [-1, 1], [-15, 15])
  const midX = useTransform(sx, [-1, 1], [-40, 40])
  const midY = useTransform(sy, [-1, 1], [-25, 25])
  const fgX = useTransform(sx, [-1, 1], [-70, 70])
  const fgY = useTransform(sy, [-1, 1], [-45, 45])

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    mx.set((e.clientX / innerWidth) * 2 - 1)
    my.set((e.clientY / innerHeight) * 2 - 1)
  }

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background landscape */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=80"
          alt="Golden sunrise over layered mountains and clouds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/30 via-transparent to-noir" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/70 via-transparent to-transparent" />
      </motion.div>

      {/* Sunlight rays */}
      <motion.div
        style={{ x: midX, y: midY }}
        className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[140%] h-[140%] opacity-40 pointer-events-none"
      >
        <div className="w-full h-full bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(244,169,73,0.35)_8deg,transparent_22deg,transparent_70deg,rgba(255,107,53,0.25)_80deg,transparent_95deg,transparent_180deg)] animate-[spin_60s_linear_infinite]" />
      </motion.div>

      {/* Drifting clouds */}
      <div className="absolute inset-0 pointer-events-none mask-fade-bottom">
        <motion.img
          style={{ y: midY }}
          src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=60"
          alt=""
          className="absolute top-[8%] left-0 w-[60%] opacity-30 mix-blend-screen animate-drift"
        />
        <motion.img
          style={{ y: bgY }}
          src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=60"
          alt=""
          className="absolute top-[22%] left-0 w-[45%] opacity-20 mix-blend-screen animate-drift-rev"
        />
      </div>

      {/* Flying birds */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cloud/60 text-2xl"
            style={{ top: `${18 + i * 6}%` }}
            initial={{ x: '-10vw', opacity: 0 }}
            animate={{ x: '110vw', opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 18 + i * 4,
              repeat: Infinity,
              delay: i * 5,
              ease: 'linear',
            }}
          >
            ⌢⌢
          </motion.div>
        ))}
      </div>

      {/* Crossing airplane */}
      <motion.div
        className="absolute top-[15%] text-cloud"
        initial={{ x: '-10vw', opacity: 0, rotate: 8 }}
        animate={{ x: '110vw', opacity: [0, 1, 1, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear', delay: 2 }}
      >
        <Plane className="w-8 h-8 drop-shadow-[0_0_10px_rgba(244,169,73,0.6)]" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-amber/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i % 7) * 0.6,
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <motion.div
        style={{ x: fgX, y: fgY }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="eyebrow text-amber mb-6"
        >
          Travel is not a destination — it&rsquo;s a feeling
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="font-display text-5xl sm:text-6xl md:text-8xl leading-[1.05] text-cloud"
        >
          Collect Moments.
          <br />
          <span className="italic text-gradient">Not Things.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-lg md:text-xl text-cloud/80 font-light max-w-xl mx-auto"
        >
          Discover extraordinary journeys crafted for unforgettable memories —
          curated for those who travel to feel, not just to see.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#destinations"
            className="px-8 py-4 rounded-full bg-sunset text-cloud font-medium tracking-wide hover:shadow-[0_0_30px_rgba(255,107,53,0.6)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Destinations
          </a>
          <a
            href="#book"
            className="px-8 py-4 rounded-full border border-cloud/30 text-cloud font-medium tracking-wide hover:bg-cloud/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Adventure
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cloud/60 flex flex-col items-center gap-2"
      >
        <span className="eyebrow">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  )
}
