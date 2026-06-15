import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'

// The signature "wow factor": as the user scrolls through the journey,
// a soft tonal wash drifts from sunrise -> day -> golden hour -> night,
// echoing the arc of a full day of travel.
export default function TimeOfDayOverlay() {
  const { scrollYProgress } = useScroll()

  const top = useTransform(
    scrollYProgress,
    [0, 0.28, 0.6, 0.85, 1],
    ['#FFD8A8', '#BFE3F0', '#FF9A56', '#3B2057', '#040712']
  )
  const bottom = useTransform(
    scrollYProgress,
    [0, 0.28, 0.6, 0.85, 1],
    ['#FF8C5A', '#0A2E45', '#0A2E45', '#0A0908', '#000000']
  )
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.94, 1],
    [0.5, 0.22, 0.22, 0.55]
  )

  const background = useMotionTemplate`linear-gradient(180deg, ${top}, ${bottom})`

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none mix-blend-soft-light"
      style={{ background, opacity }}
    />
  )
}
