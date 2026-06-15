import { motion } from 'framer-motion'
import { experiences } from '../data.js'

export default function Experiences() {
  return (
    <section id="experiences" className="relative py-24 md:py-40 bg-noir overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sunset/30 to-transparent" />

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-ocean/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="eyebrow text-amber mb-4">Curated for every kind of wanderer</p>
          <h2 className="font-display text-4xl md:text-6xl text-cloud">
            Travel <span className="italic text-gradient">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              animate={{ y: [0, -8, 0] }}
              // Override animate when in viewport with combined style
              style={{
                animation: `float ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
              whileHover={{ y: -16, scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[4/5]"
            >
              <img
                src={exp.img}
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-noir/30 to-transparent" />

              {/* Glassmorphism overlay on hover */}
              <motion.div
                className="absolute inset-x-0 bottom-0 p-6"
              >
                <p className="eyebrow text-amber/80 mb-2">{`0${i + 1}`}</p>
                <h3 className="font-display text-2xl text-cloud mb-3">{exp.title}</h3>
                <p className="text-cloud/60 text-sm leading-relaxed max-w-[260px]">
                  {exp.desc}
                </p>
                <motion.div
                  className="mt-5 inline-flex items-center gap-2 text-sunset text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Explore →
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
