import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-purple-300 py-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <motion.h1 
          className="text-4xl font-bold comic-title"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Pradheep: Code Symbiote
        </motion.h1>
        <motion.span
          className="text-sm italic text-purple-400 hidden md:block" // Hide on small screens
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          "Merging with code to build and evolve"
        </motion.span>
        <motion.div
          className="flex space-x-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/" className="hover:text-purple-400 transition-colors duration-200">Home</Link>
          <Link to="/projects" className="hover:text-purple-400 transition-colors duration-200">Projects</Link>
          {/* <Link to="/contact" className="hover:text-purple-400 transition-colors duration-200">Contact</Link> */}
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar