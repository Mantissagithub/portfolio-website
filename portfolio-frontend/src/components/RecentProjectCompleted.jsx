import React from 'react';
import { GitHub } from '@mui/icons-material'; // Import the GitHub icon
import { motion } from 'framer-motion'; // Optional: You can add framer-motion for animations

const RecentProjectCompleted = ({ darkTheme }) => {
  return (
    <div className={`${darkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-xl p-6 w-full lg:w-3/4 mx-auto mt-10 border border-gray-700`}>
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
          <span className={`font-semibold`}>Completed (Will add features if needed)</span>
        </motion.div>

        {/* Right Side: GitHub Link with Icon */}
        <motion.div
          className={`text-gray-500`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/Mantissagithub/chat-sphere/" // Replace with your GitHub project URL
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-500 transition duration-300"
          >
            <GitHub fontSize="large" /> {/* GitHub Icon */}
          </a>
        </motion.div>
      </div>

      {/* Second Line: Project Heading */}
      <motion.h2
        className="text-3xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ChatSphere
      </motion.h2>

      {/* Description */}
      <motion.p
        className={`text-base leading-relaxed mb-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        This is a fully functional chat application built using the MERN stack. It includes features like adding friends, creating groups, and managing group conversations. WebRTC is now integrated, enhancing real-time communication capabilities.
      </motion.p>

      {/* Technology Buttons */}
      <div className="flex flex-wrap justify-center mt-4">
        {['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'WebRTC', 'MUI Icons'].map((tech) => (
          <button key={tech} className={`m-2 px-4 py-2 rounded-full border border-transparent bg-opacity-20 ${darkTheme ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-200 text-gray-900 hover:bg-blue-300'} transition duration-300`}>
            {tech}
          </button>
        ))}
      </div>

      {/* More Projects Button */}
      <motion.button 
        className={`mt-6 px-6 py-3 rounded-full transition duration-300 ${darkTheme ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} shadow-md ml-28`}
      >
        More Projects
      </motion.button>
    </div>
  );
};

export default RecentProjectCompleted;