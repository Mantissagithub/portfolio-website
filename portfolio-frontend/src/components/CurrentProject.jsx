import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const CurrentProject = ({ darkTheme }) => {
  return (
    <div className={`relative ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-xl p-4 w-full overflow-hidden`}>
      <div className="flex justify-between items-center mb-2">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative rounded-full h-2 w-2 mr-2"
            animate={{
              scale: [1, 1.2, 1],
              backgroundColor: ['#22c55e', '#4ade80', '#22c55e'],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-xs font-medium">Active</span>
        </motion.div>
        <motion.a
          href="https://github.com/Mantissagithub/NoCode-Sensei1"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-${darkTheme ? 'gray-400' : 'gray-600'} hover:text-${darkTheme ? 'gray-200' : 'gray-800'}`}
          whileHover={{ scale: 1.1 }}
        >
          <Github size={18} />
        </motion.a>
      </div>
      
      <motion.h3
        className="text-lg font-semibold mb-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        NoCodeSensei
      </motion.h3>
      
      <motion.p
        className={`text-xs ${darkTheme ? 'text-gray-400' : 'text-gray-600'} mb-2`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AI-powered code and project idea generator
      </motion.p>
      
      <motion.div
        className={`text-xs ${darkTheme ? 'text-gray-400' : 'text-gray-600'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p>Last updated: October 2024</p>
      </motion.div>
    </div>
  );
};

export default CurrentProject;
