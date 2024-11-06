'use client'

import { useState } from 'react'
import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
      }
    },
    open: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05
      }
    }
  }

  const linkVariants = {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 }
  }

  return (
    <nav className="bg-gray-800 text-purple-300 py-4 mb-8 relative z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl md:text-4xl font-bold comic-title"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Pradheep: Code Symbiote
        </motion.h1>
        <motion.span
          className="text-sm italic text-purple-400 hidden md:block"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          "Merging with code to build and evolve"
        </motion.span>
        <motion.div
          className="hidden md:flex space-x-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/" className="hover:text-purple-400 transition-colors duration-200">Home</Link>
          <Link to="/skills" className="hover:text-purple-400 transition-colors duration-200">Skills</Link>
          <Link to="/projects" className="hover:text-purple-400 transition-colors duration-200">Projects</Link>
        </motion.div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-purple-300 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-gray-800 shadow-lg"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-4 py-2 space-y-2">
              {['Home', 'Skills', 'Projects'].map((item) => (
                <motion.div key={item} variants={linkVariants}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="block py-2 px-4 text-purple-300 hover:bg-purple-700 hover:text-white rounded transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-purple-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar