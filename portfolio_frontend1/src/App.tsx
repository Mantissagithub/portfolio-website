import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import SymbioteEffect from './components/symbioteEffect'
import VenomCursor from './components/venomCursor'
import MainPage from './components/mainPage'
import ProjectsPage from './components/projectsPage'
import Navbar from './components/navbar'

function App() {
  const appRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <Router>
      <div ref={appRef} className="bg-gray-900 min-h-screen font-comic relative overflow-hidden">
        <SymbioteEffect />
        <VenomCursor />
        <motion.div className="progress-bar fixed top-0 left-0 right-0 h-1 bg-purple-600 z-50" style={{ scaleX }} />
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App