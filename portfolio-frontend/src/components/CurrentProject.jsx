import React from 'react';
import { GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const CurrentProject = ({ darkTheme }) => {
  return (
    <div className={`relative ${darkTheme ? 'bg-white text-black' : 'bg-gray-900 text-white'} rounded-lg shadow-xl p-6 w-full lg:w-3/4 mx-auto m-2 border-2 ${darkTheme ? 'border-gray-300' : 'border-gray-700'} overflow-hidden`}>
      {/* Subtle License-like Background */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
      >
      </motion.div>

      {/* First Line: Green button with "Working" and GitHub icon */}
      <div className="flex justify-between items-center mb-4 relative z-10">
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
              scale: [1, 1.1, 1],
              background: [
                'radial-gradient(circle at center, #86efac 0%, #22c55e 100%)',
                'radial-gradient(circle at center, #a7f3d0 0%, #34d399 100%)',
              ],
              filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: 'mirror',
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
            href="https://github.com/Mantissagithub/NoCode-Sensei1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:underline"
          >
            <GitHub fontSize="large" />
          </a>
        </motion.div>
      </div>

      {/* Second Line: Project Heading */}
      <motion.h2
        className="text-2xl font-bold mb-2 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        NoCodeSensei
      </motion.h2>

      {/* Project Information styled like a license detail */}
      <motion.div
        className="flex justify-between items-center text-sm font-medium border-t border-gray-300 dark:border-gray-700 pt-3 mb-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {['Project Type:', 'Status:', 'Updated:'].map((label, index) => (
          <div key={index} className="text-center">
            <span className={`block ${darkTheme ? 'text-gray-500' : 'text-gray-400'} font-semibold`}>{label}</span>
            <span className={`block ${index === 1 ? 'text-green-500 font-semibold' : darkTheme ? 'text-gray-500' : 'text-gray-400'}`}>
              {index === 0 ? 'Code Generator' : index === 1 ? 'Active' : 'October 2024'}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        className={`text-base ${darkTheme ? 'text-gray-600' : 'text-gray-300'} relative z-10`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        NoCodeSensei is an innovative code and project idea generator, empowering users to effortlessly brainstorm and explore new development concepts. By providing tailored suggestions and inspiration, it enhances creativity and accelerates project initiation for developers of all skill levels.
      </motion.p>

      {/* Metallic Shine Effect */}
      <style jsx>{`
        .metallic-effect {
          background-image: linear-gradient(135deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent);
          background-size: .5rem .5rem;
          animation: shine .5s infinite linear;
        }

        @keyframes shine {
          from {
            background-position: -200% -200%;
          }
          to {
            background-position: -100% -100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CurrentProject;