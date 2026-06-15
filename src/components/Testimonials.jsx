import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data.js'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  const prev = () => {
    setDir(-1)
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setDir(1)
    setIdx((i) => (i + 1) % testimonials.length)
  }

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [])

  const t = testimonials[idx]

  return (
    <section className="relative py-24 md:py-40 bg-noir overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sunset/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-sunset/5 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="eyebrow text-amber mb-4">They went. They felt. They came back changed.</p>
          <h2 className="font-display text-4xl md:text-6xl text-cloud">
            What <span className="italic text-gradient">Travelers Say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dir * 60 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="glass rounded-3xl p-8 md:p-14 text-center"
            >
              <Quote className="w-12 h-12 text-sunset/50 mx-auto mb-8" />
              <blockquote className="font-display italic text-2xl md:text-4xl text-cloud leading-snug mb-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex flex-col items-center gap-1">
                <p className="font-medium text-cloud">{t.name}</p>
                <p className="text-cloud/50 text-sm">{t.location}</p>
                <div className="mt-3 px-4 py-1.5 rounded-full border border-amber/30 text-amber text-xs eyebrow">
                  {t.trip}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-cloud hover:text-amber transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === idx ? 'w-8 bg-sunset' : 'w-2 bg-cloud/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-cloud hover:text-amber transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
