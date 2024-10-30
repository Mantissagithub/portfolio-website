//@ts-nocheck

import { motion } from 'framer-motion'

const ExperiencePanel = () => {
  const experiences = [
    { company: "Valsco Technologies", role: "Frontend Intern", year: "{Oct - Dec 2023}" },
    { company: "eBramha Techworks", role: "Research & Development Intern", year: "{Jun - Sep 2024}" },
    { company: "Team Vyadh (Rover Team), VIT", role: "Software Team Member", year: "{Jun 2024 - Present}" },
  ]

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg relative overflow-hidden border-2 border-purple-600 w-full">
      <motion.h2
        className="text-2xl font-bold mb-4 comic-title text-purple-300"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Symbiote Journey
      </motion.h2>

      {/* Scrollable Wrapper */}
      <div className="overflow-x-auto">
        <div className="flex items-center space-x-8 min-w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-4 rounded shadow-md flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <h3 className="font-bold text-purple-300">{exp.company}</h3>
              <p className="text-sm text-purple-200">{exp.role} - {exp.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute -bottom-2 -left-2 bg-purple-600 p-2 rounded-tr-lg shadow-md transform -rotate-12"
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ rotate: -12, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-xs font-bold text-white">SLURP!</p>
      </motion.div>

      <motion.img
        src="https://e7.pngegg.com/pngimages/488/409/png-clipart-venom-illustration-marvel-avengers-alliance-spider-man-eddie-brock-venom-venom-fictional-character-desktop-wallpaper.png"
        alt="Symbiote Tendril"
        className="absolute top-2 right-2 w-8 h-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
    </div>
  )
}

export default ExperiencePanel;