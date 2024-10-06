import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';

const TodoAppProject = ({ darkTheme }) => {
  // GSAP animation on hover
  const handleHover = (e) => {
    gsap.to(e.target, {
      scale: 1.0005,
      duration: 0.3,
    });
  };

  const handleHoverOut = (e) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
    });
  };

  return (
    <motion.div
      className={`p-6 rounded-lg shadow-md mb-8 transition-transform transform hover:scale-105 ${
        darkTheme ? 'bg-[#2C3E50] text-[#ECF0F1]' : 'bg-[#E8F8F5] text-[#1C2833]'
      }`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold mb-4">To-do App</h2>
        <a
          href="https://github.com/Mantissagithub/todo-app-ts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className={`text-${darkTheme ? 'gray-300' : 'gray-600'} text-3xl hover:text-gray-400 transition-colors duration-300 mb-4`}
          />
        </a>
      </div>

      {/* Project Description */}
      <p className="text-md mb-4 leading-relaxed">
        The To-do App is a comprehensive CRUD application developed using the MERN stack, featuring improved file management with distinct server, client, and common directories. This application utilizes Material-UI for a polished and responsive design, ensuring a user-friendly experience.
      </p>

      {/* Expert Level */}
      <div className="mb-4">
        <span
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            darkTheme
              ? 'bg-teal-500 text-white'
              : 'bg-teal-200 text-[#1C2833]'
          }`}
        >
          Expert Level: Basic
        </span>
      </div>

      {/* Technology Stack */}
      <div className="flex flex-wrap gap-2">
        {['React', 'Node.js', 'Express.js', 'MongoDB', 'Material-UI'].map((tool) => (
          <span
            key={tool}
            className={`text-sm m-2 px-4 py-2 rounded-full border border-transparent bg-opacity-20 ${
              darkTheme
                ? 'bg-teal-600 text-white hover:bg-teal-500'
                : 'bg-teal-300 text-[#1C2833] hover:bg-teal-400'
            } transition duration-300`}
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default TodoAppProject;