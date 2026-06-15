import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Calendar, Users, Compass, Loader } from 'lucide-react'

const destOptions = [
  'Swiss Alps', 'Bali', 'Maldives', 'Santorini', 'Kashmir', 'Japan',
]

export default function BookTrip() {
  const [form, setForm] = useState({
    destination: '',
    departure: '',
    return: '',
    travelers: '',
    experience: '',
    name: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1800)
  }

  const field = (id, label, type = 'text', icon) => (
    <div className="relative">
      <label htmlFor={id} className="eyebrow text-cloud/50 mb-2 block text-xs">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber/70">{icon}</span>
        )}
        <input
          id={id}
          type={type}
          value={form[id]}
          onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
          className={`w-full glass rounded-xl py-3.5 pr-4 ${icon ? 'pl-11' : 'pl-4'} text-cloud bg-transparent placeholder:text-cloud/30 focus:outline-none focus:ring-1 focus:ring-amber/60 text-sm transition-all duration-200`}
          placeholder={label}
          required
        />
      </div>
    </div>
  )

  return (
    <section id="book" className="relative py-24 md:py-40 bg-ocean-deep overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/80 via-ocean-deep/60 to-ocean-deep/90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="eyebrow text-amber mb-4">Your journey begins here</p>
          <h2 className="font-display text-4xl md:text-6xl text-cloud">
            Book Your <span className="italic text-sunset">Trip</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 rounded-full bg-sunset/20 flex items-center justify-center mx-auto mb-6">
                <Compass className="w-10 h-10 text-amber" />
              </div>
              <h3 className="font-display text-3xl text-cloud mb-3">
                Your adventure is confirmed.
              </h3>
              <p className="text-cloud/60 leading-relaxed">
                We&rsquo;ve received your request and a travel specialist will reach out within 24 hours
                to craft something extraordinary just for you.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="destination" className="eyebrow text-cloud/50 mb-2 block text-xs">
                  Destination
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber/70">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <select
                    id="destination"
                    value={form.destination}
                    onChange={(e) => setForm((f) => ({ ...f, destination: e.target.value }))}
                    className="w-full glass rounded-xl py-3.5 pr-4 pl-11 text-cloud bg-transparent appearance-none focus:outline-none focus:ring-1 focus:ring-amber/60 text-sm"
                    required
                  >
                    <option value="" disabled className="bg-ocean-deep">
                      Choose a destination
                    </option>
                    {destOptions.map((d) => (
                      <option key={d} value={d} className="bg-ocean-deep">
                        {d}
                      </option>
                    ))}
                    <option value="other" className="bg-ocean-deep">
                      Surprise me
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {field('departure', 'Departure Date', 'date', <Calendar className="w-4 h-4" />)}
                {field('return', 'Return Date', 'date', <Calendar className="w-4 h-4" />)}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {field('travelers', 'Number of Travelers', 'number', <Users className="w-4 h-4" />)}
                <div>
                  <label htmlFor="experience" className="eyebrow text-cloud/50 mb-2 block text-xs">
                    Experience Type
                  </label>
                  <select
                    id="experience"
                    value={form.experience}
                    onChange={(e) => setForm((f) => ({ ...f, experience: e.target.value }))}
                    className="w-full glass rounded-xl py-3.5 px-4 text-cloud bg-transparent appearance-none focus:outline-none focus:ring-1 focus:ring-amber/60 text-sm"
                    required
                  >
                    <option value="" disabled className="bg-ocean-deep">Select type</option>
                    <option value="luxury" className="bg-ocean-deep">Luxury Vacation</option>
                    <option value="adventure" className="bg-ocean-deep">Adventure Tour</option>
                    <option value="beach" className="bg-ocean-deep">Beach Retreat</option>
                    <option value="mountain" className="bg-ocean-deep">Mountain Escape</option>
                    <option value="road" className="bg-ocean-deep">Road Trip</option>
                    <option value="monsoon" className="bg-ocean-deep">Monsoon Getaway</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {field('name', 'Your Name', 'text')}
                {field('email', 'Email Address', 'email')}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full py-4 rounded-xl bg-gradient-to-r from-sunset to-amber text-noir font-semibold text-base hover:shadow-[0_0_35px_rgba(255,107,53,0.5)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Crafting your journey…
                  </>
                ) : (
                  <>
                    <Compass className="w-5 h-5" />
                    Start My Adventure
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
