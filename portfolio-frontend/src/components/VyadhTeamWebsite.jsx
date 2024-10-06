import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';

const VyadhTeamWebsite = ({ darkTheme }) => {
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
        darkTheme ? 'bg-[#2C3E50] text-[#ECF0F1]' : 'bg-[#ECF0F1] text-[#2C3E50]'
      }`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold mb-4">Vyadh Team Website</h2>
        <a
          href="https://github.com/Mantissagithub/vyaadh-contact-us-page"
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
        I built the Team website to showcase the achievements, projects, and milestones of our university rover team, "Vyadh." Using React, I incorporated modern design elements like parallax scrolling for an engaging user experience. The "Contact Us" page is powered by a Node.js and Express backend, allowing seamless communication with the team by capturing user responses and managing them via Nodemailer.
      </p>

      {/* Expert Level */}
      <div className="mb-4">
        <span
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            darkTheme ? 'bg-blue-600 text-white' : 'bg-blue-200 text-[#2C3E50]'
          }`}
        >
          Expert Level: Intermediate
        </span>
      </div>

      {/* Technology Stack */}
      <div className="flex flex-wrap gap-2">
        {['React', 'Node.js', 'Express.js', 'MongoDB', 'Nodemailer', 'Tailwind CSS'].map((tool) => (
          <span
            key={tool}
            className={`text-sm m-2 px-4 py-2 rounded-full border border-transparent bg-opacity-20 ${
              darkTheme ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-200 text-[#2C3E50] hover:bg-blue-300'
            } transition duration-300`}
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default VyadhTeamWebsite;