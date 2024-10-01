import React, { useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const AppBar = () => {
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
      className="w-full bg-black bg-opacity-70 backdrop-blur-md rounded-lg py-4 px-6 flex justify-between items-center shadow-xl border-b border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Side: Theme Toggle */}
      <motion.button
        className="p-3 bg-white rounded-full shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-110"
        whileHover={{ rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          document.body.classList.toggle('dark');
        }}
      >
        <DarkModeIcon className="text-black" />
      </motion.button>

      {/* Right Side: Social Icons */}
      <div className="flex space-x-6">
        <motion.a
          href="https://github.com/Mantissagithub/"
          className="icon p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-shadow transform hover:scale-110"
          whileHover={{ scale: 1.3, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <GitHubIcon className="text-gray-800" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/pradheep-rao-88a339250/"
          className="icon p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-shadow transform hover:scale-110"
          whileHover={{ scale: 1.3, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon className="text-blue-600" />
        </motion.a>

        <motion.a
          href="mailto:pradheep.raop@gmail.com"
          className="icon p-3 bg-white rounded-full shadow-md hover:shadow-xl transition-shadow transform hover:scale-110"
          whileHover={{ scale: 1.3, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          <MailIcon className="text-red-600" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default AppBar;