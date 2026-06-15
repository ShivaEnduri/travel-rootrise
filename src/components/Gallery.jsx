import { motion } from 'framer-motion'

const photos = [
  {
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    span: 'row-span-2',
    label: 'Patagonia, Chile',
  },
  {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    span: 'row-span-1',
    label: 'Phi Phi, Thailand',
  },
  {
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
    span: 'row-span-1',
    label: 'Lofoten, Norway',
  },
  {
    img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80',
    span: 'row-span-2',
    label: 'Kyoto, Japan',
  },
  {
    img: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?auto=format&fit=crop&w=800&q=80',
    span: 'row-span-1',
    label: 'Positano, Italy',
  },
  {
  img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80',
  span: 'row-span-1',
  label: 'Marrakech, Morocco',
},
  {
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    span: 'row-span-2',
    label: 'Maldives',
  },
  {
    img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    span: 'row-span-1',
    label: 'Banff, Canada',
  },
]

export default function Gallery() {
  return (
    <section className="relative py-24 md:py-40 bg-noir">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="eyebrow text-amber mb-4">Moments that stay with you</p>
          <h2 className="font-display text-4xl md:text-6xl text-cloud">
            The <span className="italic text-sunset">Gallery</span>
          </h2>
        </motion.div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${p.span}`}
            >
              <motion.img
                src={p.img}
                alt={p.label}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-cloud text-sm font-medium">{p.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
