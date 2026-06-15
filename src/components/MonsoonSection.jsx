import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function RainCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const drops = []
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 120; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: 10 + Math.random() * 18,
        speed: 8 + Math.random() * 12,
        opacity: 0.1 + Math.random() * 0.35,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drops.forEach((d) => {
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - 1, d.y + d.len)
        ctx.strokeStyle = `rgba(174,215,240,${d.opacity})`
        ctx.lineWidth = 0.8
        ctx.stroke()
        d.y += d.speed
        if (d.y > canvas.height) {
          d.y = -d.len
          d.x = Math.random() * canvas.width
        }
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

export default function MonsoonSection() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-ocean-deep min-h-[80vh] flex items-center">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cloud/20 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=2400&q=80"
          alt="Monsoon misty waterfall"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/50 via-ocean-deep/30 to-ocean-deep/80" />
      </div>

      {/* Rain */}
      <RainCanvas />

      {/* Fog layers */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(to top, rgba(10,46,69,0.7) 0%, transparent 100%)',
        }}
      />
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none"
        animate={{ x: ['-5%', '5%', '-5%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(174,215,240,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="eyebrow text-amber mb-6"
        >
          Seasonal Special
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-5xl md:text-8xl text-cloud italic mb-6"
        >
          Monsoon Is Calling.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-cloud/70 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Mist-wrapped mountains. Rivers swelling with purpose.
          The smell of earth finally drinking. Some seasons don&rsquo;t interrupt travel — they are the destination.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="#book"
            className="px-8 py-4 rounded-full bg-cloud text-noir font-medium hover:shadow-[0_0_30px_rgba(247,244,238,0.3)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Plan Monsoon Escape
          </a>
          <a
            href="#destinations"
            className="px-8 py-4 rounded-full border border-cloud/30 text-cloud font-medium hover:bg-cloud/10 transition-all duration-300"
          >
            View Destinations
          </a>
        </motion.div>

        {/* Water ripple decorators */}
        <div className="mt-16 flex items-center justify-center gap-8">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              className="rounded-full border border-cloud/20"
              animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: n * 0.9, ease: 'easeOut' }}
              style={{ width: 12, height: 12 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
