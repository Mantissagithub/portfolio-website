import React from 'react';
import { GitHub } from '@mui/icons-material'; // Import the GitHub icon
import { motion } from 'framer-motion'; // Optional: You can add framer-motion for animations

const CurrentProject = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:w-3/4 mx-auto mt-10 border-gray-700">
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
            className="rounded-full h-3 w-3 mr-2 shadow-lg"
            animate={{
              scale: [1, 1.1, 1], // Slight zoom effect
              backgroundColor: ["#86efac", "#22c55e"], // Color change from light green to dark green
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <span className="text-gray-700 font-semibold">Working</span>
        </motion.div>

        {/* Right Side: GitHub Link with Icon */}
        <motion.div
          className="text-gray-500"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/yourusername/yourproject" // Replace with your GitHub project URL
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
        className="text-2xl font-bold text-gray-800 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        NoCodeSensei
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-600 text-base"
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