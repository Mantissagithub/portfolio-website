//@ts-nocheck

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const ExperiencePanel = () => {
  const experiences = [
    { company: "Valsco Technologies", role: "Frontend Intern", year: "{Oct - Dec 2023}" },
    { company: "eBramha Techworks", role: "Research & Development Intern", year: "{Jun - Sep 2024}" },
    { company: "Team Vyadh (Rover Team), VIT", role: "Software Team Member", year: "{Jun 2024 - Present}" },
  ]
  
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  const handleTimelineClick = (index) => {
    setActiveIndex(index);
  };

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

      {/* Symbiote Timeline */}
      <div className="mb-3 relative">
        <div className="h-1 bg-gray-700 rounded-full relative">
          <motion.div 
            className="absolute h-1 bg-purple-600 rounded-full"
            style={{ width: `${(activeIndex + 1) * (100/experiences.length)}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${(activeIndex + 1) * (100/experiences.length)}%` }}
            transition={{ duration: 0.5 }}
          />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`absolute cursor-pointer transform -translate-y-1/2 -translate-x-1/2`}
              style={{ left: `${(index * (100/(experiences.length-1)))}%`, top: '50%' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              onClick={() => handleTimelineClick(index)}
            >
              <div className={`relative group`}>
                {/* <div className={`w-2 h-2 rounded-full ${index <= activeIndex ? 'bg-purple-600' : 'bg-gray-600'} 
                  border-2 border-purple-300 z-10 transition-all duration-300 hover:scale-125`}>
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-purple-600 opacity-30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ display: index === activeIndex ? 'block' : 'none' }}
                  />
                </div> */}
                <div className="absolute top-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-purple-300 whitespace-nowrap">{exp.year.replace('{', '').replace('}', '')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Symbiote Tendrils */}
      <div className="relative mb-1 h-3">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: activeIndex === index ? 1 : 0,
              y: activeIndex === index ? 0 : -20
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-purple-600 fill-current">
                <path d="M20 0 L23 20 L20 40 L17 20 Z" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Cards */}
      <div className="overflow-hidden relative">
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-4 rounded shadow-md border border-purple-600"
              initial={{ opacity: 0, x: 100 }}
              animate={{ 
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 100,
                position: activeIndex === index ? 'relative' : 'absolute',
                top: activeIndex === index ? 0 : 0,
                zIndex: activeIndex === index ? 10 : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold text-purple-300">{exp.company}</h3>
              <p className="text-sm text-purple-200">{exp.role} - {exp.year}</p>
              <div className="mt-2 border-t border-purple-500 pt-2">
                <p className="text-xs text-gray-300 italic">
                  {index === 0 && "First symbiote connection established..."}
                  {index === 1 && "Symbiote powers growing stronger..."}
                  {index === 2 && "Full symbiote integration achieved..."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-1">
        <motion.button
          className="bg-gray-700 text-purple-300 px-3 py-1 rounded-full text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
        >
          <span className="mr-1">◀</span> Previous
        </motion.button>
        
        <motion.button
          className="bg-gray-700 text-purple-300 px-3 py-1 rounded-full text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={activeIndex === experiences.length - 1}
          onClick={() => setActiveIndex(prev => Math.min(experiences.length - 1, prev + 1))}
        >
          Next <span className="ml-1">▶</span>
        </motion.button>
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

export default ExperiencePanel
