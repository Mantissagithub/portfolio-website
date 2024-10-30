//@ts-nocheck

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ContactPanel = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [showErrorPopup, setShowErrorPopup] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleBondNowClick = (e) => {
    e.preventDefault()

    const { name, email, message } = formData

    if (!name || !email || !message) {
      setShowErrorPopup(true)
    } else {
      setShowPopup(true)
    }
  }

  return (
    <div className="bg-purple-900 p-6 rounded-lg shadow-lg relative overflow-hidden border-2 border-purple-400">
      <motion.h2
        className="text-3xl font-bold mb-6 comic-title text-purple-200"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Bond with Me!
      </motion.h2>
      <motion.form
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleBondNowClick} // Bind to form submission
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Symbiote Name"
          className="w-full p-3 rounded bg-purple-800 text-purple-200 border border-purple-400 focus:outline-none focus:border-purple-300"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Klyntar Signal (Email)"
          className="w-full p-3 rounded bg-purple-800 text-purple-200 border border-purple-400 focus:outline-none focus:border-purple-300"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Your Message"
          className="w-full p-3 rounded bg-purple-800 text-purple-200 border border-purple-400 focus:outline-none focus:border-purple-300"
          rows={4}
        ></textarea>
        <motion.button
          type="submit"
          className="w-full bg-purple-600 text-white px-6 py-3 rounded text-lg font-bold hover:bg-purple-700 transition-colors comic-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Bond Now
        </motion.button>
      </motion.form>

      {/* Success Popup Card */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="bg-black bg-opacity-75 w-full h-full absolute"
              onClick={() => setShowPopup(false)}
            />
            <div 
              className="bg-gray-900 p-8 rounded-lg shadow-lg relative z-10 border-2 border-purple-400"
              style={{
                backgroundImage: 'url(https://i.pinimg.com/736x/12/bc/a5/12bca51ffe6843ad7c7cde4aba107db3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h3 className="text-xl font-bold text-black mb-4">Thanks for Connecting with Me!</h3>
              <p className="text-black">Your message has been received, and I’ll get back to you soon!</p>
              <button 
                onClick={() => setShowPopup(false)} 
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Popup Card */}
      <AnimatePresence>
        {showErrorPopup && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="bg-black bg-opacity-75 w-full h-full absolute"
              onClick={() => setShowErrorPopup(false)}
            />
            <div 
              className="bg-gray-900 p-8 rounded-lg shadow-lg relative z-10 border-2 border-purple-400 "
              style={{
                backgroundImage: 'url(https://i.pinimg.com/736x/5c/52/46/5c52462059ae18d28e7e5a21ef401279.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Oops!</h3>
              <p className="text-white">It looks like you forgot to fill out all the fields! Please complete the form.</p>
              <button 
                onClick={() => setShowErrorPopup(false)} 
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ContactPanel
