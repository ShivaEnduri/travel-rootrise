import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Plane, MapPin } from 'lucide-react'

export default function LoadingScreen({ onFinish }) {
  const [phase, setPhase] = useState('draw') // draw -> text -> exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 2200)
    const t2 = setTimeout(() => setPhase('exit'), 3600)
    const t3 = setTimeout(() => onFinish(), 4400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onFinish])

  return (
    <AnimatePresence>
      {phase !== 'exit' || true ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'exit' ? 0 : 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{ pointerEvents: phase === 'exit' ? 'none' : 'auto' }}
        >
          <div className="relative w-[80vw] max-w-2xl h-[40vh] flex items-center justify-center">
            {/* Route path */}
            <svg
              viewBox="0 0 800 300"
              className="absolute inset-0 w-full h-full"
              fill="none"
            >
              <motion.path
                d="M40,250 C200,80 350,260 460,120 C540,20 650,140 760,40"
                stroke="url(#routeGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FF6B35" />
                  <stop offset="100%" stopColor="#F4A949" />
                </linearGradient>
              </defs>

              {/* Pins */}
              {[
                { cx: 40, cy: 250, delay: 0.3 },
                { cx: 460, cy: 120, delay: 1.1 },
                { cx: 760, cy: 40, delay: 1.9 },
              ].map((p, i) => (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: p.delay, duration: 0.4, ease: 'backOut' }}
                >
                  <circle cx={p.cx} cy={p.cy} r="14" fill="#F4A949" opacity="0.18" />
                  <circle cx={p.cx} cy={p.cy} r="5" fill="#F4A949" />
                </motion.g>
              ))}
            </svg>

            {/* Plane */}
            <motion.div
              className="absolute"
              initial={{ offsetDistance: '0%', opacity: 0 }}
              animate={
                phase === 'exit'
                  ? { x: 500, y: -200, opacity: 0, rotate: -35 }
                  : { opacity: 1 }
              }
              transition={
                phase === 'exit'
                  ? { duration: 1, ease: 'easeIn' }
                  : { duration: 0.3 }
              }
              style={{
                offsetPath:
                  "path('M40,250 C200,80 350,260 460,120 C540,20 650,140 760,40')",
                offsetRotate: 'auto',
                animation: phase === 'draw' || phase === 'text' ? 'planeMove 2s ease-in-out forwards' : 'none',
              }}
            >
              <Plane className="w-7 h-7 text-cloud rotate-45 drop-shadow-[0_0_8px_rgba(244,169,73,0.8)]" />
            </motion.div>

            <style>{`
              @keyframes planeMove {
                0% { offset-distance: 0%; opacity: 0; }
                5% { opacity: 1; }
                100% { offset-distance: 100%; opacity: 1; }
              }
            `}</style>
          </div>

          {/* Headline text */}
          <AnimatePresence>
            {phase !== 'draw' && (
              <motion.div
                className="absolute bottom-[18%] text-center px-6"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <p className="eyebrow text-amber/80 mb-3 flex items-center justify-center gap-2">
                  <MapPin className="w-3 h-3" /> Plotting your route
                </p>
                <h2 className="font-display text-3xl md:text-5xl text-cloud italic">
                  The World Is Waiting<span className="text-sunset">...</span>
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
