import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Importing icons
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icon

const TrafficLightNavigation = () => {
  const handleMouseEnter = (e) => {
    gsap.to(e.target, {
      scale: 1.15,
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)", // Increase shadow on hover
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
    <div className="flex flex-col items-start space-y-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl">
      {/* About Me Section */}
      <motion.div
        className="flex items-center justify-between space-x-4 w-full p-4 rounded-lg bg-gray-700 cursor-pointer transition-all duration-300 hover:bg-gray-600 hover:bg-opacity-80"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ backgroundColor: '#4B5563' }}
      >
        <div className="flex items-center space-x-2">
          <FaUser className="text-white text-2xl" />
          <span className="text-white text-lg font-semibold">About Me</span>
        </div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ x: 10 }}
        >
          <FaArrowRight className="text-white text-xl" />
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="flex items-center justify-between space-x-4 w-full p-4 rounded-lg bg-gray-700 cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:bg-opacity-80"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ backgroundColor: '#F59E0B' }}
      >
        <div className="flex items-center space-x-2">
          <FaProjectDiagram className="text-white text-2xl" />
          <span className="text-white text-lg font-semibold">Projects</span>
        </div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ x: 10 }}
        >
          <FaArrowRight className="text-white text-xl" />
        </motion.div>
      </motion.div>

      {/* Connect Section */}
      <motion.div
        className="flex items-center justify-between space-x-4 w-full p-4 rounded-lg bg-gray-700 cursor-pointer transition-all duration-300 hover:bg-red-500 hover:bg-opacity-80"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ backgroundColor: '#EF4444' }}
      >
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-white text-2xl" />
          <span className="text-white text-lg font-semibold">Connect</span>
        </div>
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileHover={{ x: 10 }}
        >
          <FaArrowRight className="text-white text-xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TrafficLightNavigation;
