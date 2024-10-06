import React from 'react';
import { GitHub } from '@mui/icons-material'; // Import the GitHub icon
import { motion } from 'framer-motion'; // Optional: You can add framer-motion for animations

const CurrentProject = ({ darkTheme }) => {
  return (
    <div className={`${darkTheme ? 'bg-white text-black' : 'bg-gray-800 text-white'} rounded-lg shadow-lg p-6 w-full lg:w-3/4 mx-auto mt-10 border-gray-700`}>
      {/* First Line: Green button with "Working" and GitHub icon */}
      <div className="flex justify-between items-center mb-4">
        {/* Left Side: Green Button and Text */}
        <motion.div
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative rounded-full h-3 w-3 mr-2 shadow-lg"
              animate={{
                scale: [1, 1.1, 1], // Reduced pulse effect for balance
                background: [
                  'radial-gradient(circle at center, #86efac 0%, #22c55e 100%)',
                  'radial-gradient(circle at center, #a7f3d0 0%, #34d399 100%)'
                ], // Softer gradient transition between similar shades
                filter: [
                  'blur(0px)',
                  'blur(2px)',
                  'blur(0px)'
                ], // Reduced blur for a softer glow
              }}
              transition={{
                duration: 1.2, // Balanced duration for smoother effect
                repeat: Infinity,
                repeatType: 'mirror', // Alternates between states
              }}
            />
          <span className={`${darkTheme ? 'text-gray-700' : 'text-gray-300'} font-semibold`}>Working</span>
        </motion.div>

        {/* Right Side: GitHub Link with Icon */}
        <motion.div
          className={`${darkTheme ? 'text-gray-500' : 'text-gray-400'}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/Mantissagithub/NoCode-Sensei1" // Replace with your GitHub project URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600"
          >
            <GitHub fontSize="large" /> {/* GitHub Icon */}
          </a>
        </motion.div>
      </div>

      {/* Second Line: Project Heading */}
      <motion.h2
        className="text-2xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        NoCodeSensei
      </motion.h2>

      {/* Description */}
      <motion.p
        className={`text-base ${darkTheme ? 'text-gray-600' : 'text-gray-300'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        This project serves as an innovative code and project idea generator, empowering users to effortlessly brainstorm and explore new development concepts. By providing tailored suggestions and inspiration, it enhances creativity and accelerates the project initiation process for developers of all skill levels.
      </motion.p>
    </div>
  );
};

export default CurrentProject;