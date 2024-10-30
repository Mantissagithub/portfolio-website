//@ts-nocheck

import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const ContactInfoPanel = () => {
  const contactInfo = [
    { label: "Mail", value: "pradheep.raop@gmail.com", icon: <FiMail /> },
    { label: "GitHub", value: "https://github.com/Mantissagithub", icon: <FiGithub />, link: "https://github.com/Mantissagithub" },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/pradheep-rao-88a339250/", icon: <FiLinkedin />, link: "https://www.linkedin.com/in/pradheep-rao-88a339250/" },
    { label: "X (Twitter)", value: "https://x.com/rao_pradheep", icon: <FiTwitter />, link: "https://x.com/rao_pradheep" },
  ]

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg border-2 border-purple-600">
      <motion.h2
        className="text-2xl font-bold mb-4 text-purple-300"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Connect with Me
      </motion.h2>
      
      <div className="space-y-4">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-2 bg-gray-700 p-3 rounded shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <div className="text-purple-300">{item.icon}</div>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-purple-400">
                {item.value}
              </a>
            ) : (
              <span className="text-purple-200">{item.value}</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ContactInfoPanel
