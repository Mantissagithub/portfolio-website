import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Importing icons
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon

const TrafficLightNavigation = ({ darkTheme }) => {
  const handleMouseEnter = (e) => {
    gsap.to(e.target, {
      scale: 1.1,
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)", // Increase shadow on hover
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      boxShadow: "none", // Remove shadow on leave
      duration: 0.3,
    });
  };

  return (
    <div className={`flex flex-col items-start space-y-6 p-8 rounded-3xl shadow-2xl ${darkTheme ? 'bg-gray-100' : 'bg-gray-900'}`}>
      {/* About Me Section */}
      <motion.div
        className={`flex items-center justify-between space-x-4 w-full p-4 rounded-lg cursor-pointer transition-all duration-300 ${darkTheme ? 'bg-white hover:bg-gray-200' : 'bg-gray-700 hover:bg-gray-600'} transform hover:translate-y-[-2px]`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ backgroundColor: darkTheme ? '#E5E7EB' : '#4B5563' }} // Light gray for dark theme
      >
        <div className="flex items-center space-x-2">
          <FaUser className={`${darkTheme ? 'text-black' : 'text-white'} text-2xl`} />
          <span className={`${darkTheme ? 'text-black' : 'text-white'} text-lg font-semibold`}>About Me</span>
        </div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ x: 10 }}
        >
          <FaArrowRight className={`${darkTheme ? 'text-black' : 'text-white'} text-xl`} />
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className={`flex items-center justify-between space-x-4 w-full p-4 rounded-lg cursor-pointer transition-all duration-300 ${darkTheme ? 'bg-white hover:bg-gray-200' : 'bg-gray-700 hover:bg-yellow-500'} transform hover:translate-y-[-2px]`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ backgroundColor: darkTheme ? '#E5E7EB' : '#F59E0B' }} // Light gray for dark theme
      >
        <div className="flex items-center space-x-2">
          <FaProjectDiagram className={`${darkTheme ? 'text-black' : 'text-white'} text-2xl`} />
          <span className={`${darkTheme ? 'text-black' : 'text-white'} text-lg font-semibold`}>Projects</span>
        </div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ x: 10 }}
        >
          <FaArrowRight className={`${darkTheme ? 'text-black' : 'text-white'} text-xl`} />
        </motion.div>
      </motion.div>

      {/* Connect Section */}
      <motion.div
        className={`flex items-center justify-between space-x-4 w-full p-4 rounded-lg cursor-pointer transition-all duration-300 ${darkTheme ? 'bg-white hover:bg-gray-200' : 'bg-gray-700 hover:bg-red-500'} transform hover:translate-y-[-2px]`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ backgroundColor: darkTheme ? '#E5E7EB' : '#EF4444' }} // Light gray for dark theme
      >
        <div className="flex items-center space-x-2">
          <FaEnvelope className={`${darkTheme ? 'text-black' : 'text-white'} text-2xl`} />
          <span className={`${darkTheme ? 'text-black' : 'text-white'} text-lg font-semibold`}>Connect</span>
        </div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ x: 10 }}
        >
          <FaArrowRight className={`${darkTheme ? 'text-black' : 'text-white'} text-xl`} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TrafficLightNavigation;