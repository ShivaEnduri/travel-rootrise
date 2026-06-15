import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import LoadingScreen from './components/LoadingScreen'
import TimeOfDayOverlay from './components/TimeOfDayOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Destinations from './components/Destinations'
import Experiences from './components/Experiences'
import WorldMap from './components/WorldMap'
import MonsoonSection from './components/MonsoonSection'
import Gallery from './components/Gallery'
import Stories from './components/Stories'
import Testimonials from './components/Testimonials'
import BookTrip from './components/BookTrip'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen onFinish={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          {/* The signature scroll-based time-of-day color wash */}
          <TimeOfDayOverlay />

          <Navbar />

          <main>
            <Hero />
            <Journey />
            <Destinations />
            <Experiences />
            <WorldMap />
            <MonsoonSection />
            <Gallery />
            <Stories />
            <Testimonials />
            <BookTrip />
          </main>

          <Footer />
        </>
      )}
    </>
  )
}
