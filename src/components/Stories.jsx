import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import { stories } from '../data.js'

export default function Stories() {
  return (
    <section id="stories" className="relative py-24 md:py-40 bg-ocean-deep">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cloud/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="eyebrow text-amber mb-4">From the road</p>
            <h2 className="font-display text-4xl md:text-6xl text-cloud">
              Travel <span className="italic text-sunset">Stories</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-amber text-sm font-medium group"
          >
            All stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-5">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="glass text-cloud text-xs px-3 py-1 rounded-full eyebrow">
                    Story
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-cloud/40 text-xs mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span>{s.read}</span>
                <span>·</span>
                <span>{s.author}</span>
              </div>
              <h3 className="font-display text-xl text-cloud mb-2 group-hover:text-amber transition-colors duration-300 leading-snug">
                {s.title}
              </h3>
              <p className="text-cloud/50 text-sm italic leading-relaxed">&ldquo;{s.excerpt}&rdquo;</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
