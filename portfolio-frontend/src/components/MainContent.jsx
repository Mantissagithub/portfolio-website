import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import { gsap } from 'gsap';
import CurrentProject from './CurrentProject';

const MainContent = ({ darkTheme }) => {
  const titles = [
    'MERN Stack Developer',
    'Emerging Machine Learning Enthusiast',
    'ROS2 Developer in Training',
  ];

  // GSAP effect for metallic shine
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    tl.to('.metallic-text', {
      backgroundPosition: '200% 0%',
      ease: 'power1.inOut',
      duration: 2,
    });
  }, []);

  return (
    <div className="flex justify-center items-center bg-transparent">
      {/* Main Card */}
      <motion.div
        className={`relative rounded-3xl shadow-2xl w-full max-w-screen-md flex flex-col md:flex-row p-2 overflow-hidden 
        ${darkTheme ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black border-2 border-gray-700' : 'bg-gradient-to-r from-gray-100 via-gray-300 to-white border-2 border-gray-200'}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Driving License-like Background */}
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
        />

        {/* Left Section: Avatar and Name */}
        <motion.div
          className="relative z-10 flex flex-col justify-center items-center md:w-1/3 mb-4 md:mb-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar with Metal Border */}
          <motion.div
            className={`rounded-full overflow-hidden shadow-xl mb-1 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr 
            ${darkTheme ? 'from-gray-700 to-gray-900' : 'from-gray-100 to-gray-300'} p-1 border-4 border-transparent 
            hover:border-metallic transition-all duration-500 ease-in-out`}
            whileHover={{ scale: 1.1 }}
          >
            <img
              src="https://img.freepik.com/premium-photo/lego-figure-boy-with-glasses-shirt-that-says-hes_970933-5005.jpg?size=626&ext=jpg&ga=GA1.1.829029841.1727089904&semt=ais_hybrid"
              alt="Avatar"
              className="rounded-full w-full h-full object-cover"
            />
          </motion.div>

          {/* Name */}
          <h2 className={`text-lg sm:text-xl font-bold metallic-text ${darkTheme ? 'text-white' : 'text-gray-800'} bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100`}>
            Pradheep P
          </h2>

          {/* Animated Title with Typing Effect */}
          <motion.div
            className={`title text-sm sm:text-base font-medium mt-0 metallic-text ${darkTheme ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ReactTypingEffect
              text={titles}
              speed={90}
              eraseSpeed={60}
              typingDelay={400}
              eraseDelay={1800}
              cursor="|"
            />
          </motion.div>
        </motion.div>

        {/* Right Section: Current Project */}
        <motion.div
          className="md:w-2/3 md:ml-4 flex flex-col justify-between relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex-grow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <CurrentProject darkTheme={darkTheme} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainContent;
