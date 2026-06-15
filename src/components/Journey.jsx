import { motion } from 'framer-motion'

const emotions = [
  {
    word: 'Adventure',
    num: '01',
    img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1600&q=80',
    copy: 'The moment your feet leave solid ground and your heart finds a new rhythm — somewhere between fear and joy.',
  },
  {
    word: 'Freedom',
    num: '02',
    img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    copy: 'An open road with no itinerary. No notifications. Just you, the horizon, and however long it takes to get there.',
  },
  {
    word: 'Discovery',
    num: '03',
    img: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=1600&q=80',
    copy: 'A street with no name on any map. A dish you can&rsquo;t pronounce. The quiet thrill of not knowing what&rsquo;s next.',
  },
  {
    word: 'Connection',
    num: '04',
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80',
    copy: 'Strangers who become stories. Places that become part of you. The world, suddenly, a little smaller.',
  },
]

export default function Journey() {
  return (
    <section className="relative py-24 md:py-40 bg-noir">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-32"
        >
          <p className="eyebrow text-amber mb-4">What you&rsquo;re really looking for</p>
          <h2 className="font-display text-4xl md:text-6xl text-cloud">
            It&rsquo;s never about the place.
            <br />
            <span className="italic text-cloud/60">It&rsquo;s about how it makes you feel.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-40">
          {emotions.map((e, i) => (
            <div
              key={e.word}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative w-full md:w-3/5 aspect-[4/3] rounded-3xl overflow-hidden group"
              >
                <img
                  src={e.img}
                  alt={e.word}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 font-display text-7xl md:text-8xl text-cloud/20 italic">
                  {e.num}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="w-full md:w-2/5"
              >
                <p className="eyebrow text-sunset mb-4">{e.num} / Feel</p>
                <h3 className="font-display italic text-5xl md:text-7xl text-cloud mb-6">
                  {e.word}
                </h3>
                <p className="text-cloud/60 text-lg leading-relaxed max-w-md">
                  {e.copy}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
