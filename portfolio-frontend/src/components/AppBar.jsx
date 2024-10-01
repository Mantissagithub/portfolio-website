import React, { useState, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const AppBar = ({ onThemeToggle }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showPopover, setShowPopover] = useState({ github: false, linkedin: false, mail: false });

  // Toggle theme and pass to parent
  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
    onThemeToggle(!darkTheme);
  };

  // GSAP animation on component mount
  useEffect(() => {
    gsap.fromTo(
      '.icon',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <motion.div
      className={`w-full bg-black bg-opacity-70 backdrop-blur-md rounded-lg py-4 px-6 flex justify-between items-center shadow-xl border-b border-gray-800 transition-colors duration-300 ${
        darkTheme
          ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 border-gray-600'
          : 'bg-gradient-to-r from-white via-gray-200 to-gray-300 border-gray-100'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Side: Theme Toggle */}
      <motion.button
        className={`p-3 rounded-full shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-110 ${
          darkTheme ? 'bg-gray-800' : 'bg-white'
        }`}
        whileHover={{ rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleThemeToggle}
      >
        {darkTheme ? (
          <LightModeIcon className="text-white" />
        ) : (
          <DarkModeIcon className="text-black" />
        )}
      </motion.button>

      {/* Right Side: Social Icons */}
      <div className="flex space-x-6 relative">
        {/* GitHub Icon with Popover */}
        <motion.div
          className={`icon relative p-3 rounded-full shadow-md hover:shadow-xl transition-shadow transform hover:scale-110 ${
            darkTheme ? 'bg-gray-800' : 'bg-white'
          }`}
          onMouseEnter={() => setShowPopover({ ...showPopover, github: true })}
          onMouseLeave={() => setShowPopover({ ...showPopover, github: false })}
        >
          <GitHubIcon className={darkTheme ? 'text-white' : 'text-gray-800'} />
          {showPopover.github && (
            <motion.div
              className="absolute left-0 top-14 bg-white text-gray-800 p-2 rounded-lg shadow-xl text-sm z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Github
            </motion.div>
          )}
        </motion.div>

        {/* LinkedIn Icon with Popover */}
        <motion.div
          className={`icon relative p-3 rounded-full shadow-md hover:shadow-xl transition-shadow transform hover:scale-110 ${
            darkTheme ? 'bg-gray-800' : 'bg-white'
          }`}
          onMouseEnter={() => setShowPopover({ ...showPopover, linkedin: true })}
          onMouseLeave={() => setShowPopover({ ...showPopover, linkedin: false })}
        >
          <LinkedInIcon className={darkTheme ? 'text-white' : 'text-blue-600'} />
          {showPopover.linkedin && (
            <motion.div
              className="absolute left-0 top-14 bg-white text-gray-800 p-2 rounded-lg shadow-xl text-sm z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              LinkedIn
            </motion.div>
          )}
        </motion.div>

        {/* Mail Icon with Popover */}
        <motion.div
          className={`icon relative p-3 rounded-full shadow-md hover:shadow-xl transition-shadow transform hover:scale-110 ${
            darkTheme ? 'bg-gray-800' : 'bg-white'
          }`}
          onMouseEnter={() => setShowPopover({ ...showPopover, mail: true })}
          onMouseLeave={() => setShowPopover({ ...showPopover, mail: false })}
        >
          <MailIcon className={darkTheme ? 'text-white' : 'text-red-600'} />
          {showPopover.mail && (
            <motion.div
              className="absolute left-0 top-14 bg-white text-gray-800 p-2 rounded-lg shadow-xl text-sm z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Mail
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppBar;
