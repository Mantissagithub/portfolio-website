import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';

const CourseSellingAppProject = ({ darkTheme }) => {
  // GSAP animation on hover
  const handleHover = (e) => {
    gsap.to(e.target, {
      scale: 1.02,
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
      className={`p-6 rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-105 ${
        darkTheme
          ? 'bg-[#400060] text-[#E0BBE4]'
          : 'bg-[#FFF8E7] text-[#4B0082]'
      }`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mb-4 tracking-wide">Course Selling Application</h2>
        <a
          href="https://github.com/Mantissagithub/next-app"
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
        The Course Selling Application is a robust platform developed using Next.js and TypeScript, designed to facilitate the sale and management of online courses. It features two distinct interfaces—one for administrators to manage courses and users, and another for students to browse and enroll in courses. With a focus on user experience, the application leverages Material-UI for a sleek and modern design, ensuring a responsive layout across devices.
      </p>

      {/* Expert Level */}
      <div className="mb-4">
        <span
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            darkTheme
              ? 'bg-purple-600 text-white'
              : 'bg-purple-200 text-[#2E2B5F]'
          }`}
        >
          Expert Level: Advanced
        </span>
      </div>

      {/* Technology Stack */}
      <div className="flex flex-wrap gap-2">
        {['Next.js', 'TypeScript', 'Material-UI', 'JWT Authentication', 'Axios'].map(
          (tool) => (
            <span
              key={tool}
              className={`text-sm m-1 px-4 py-2 rounded-full border border-transparent bg-opacity-20 ${
                darkTheme
                  ? 'bg-purple-500 text-white hover:bg-purple-400'
                  : 'bg-blue-200 text-[#2E2B5F] hover:bg-blue-300'
              } transition duration-300`}
            >
              {tool}
            </span>
          )
        )}
      </div>
    </motion.div>
  );
};

export default CourseSellingAppProject;