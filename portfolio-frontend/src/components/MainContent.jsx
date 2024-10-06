import React from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import CurrentProject from './CurrentProject'; // Import the CurrentProject component

const MainContent = ({ darkTheme }) => {
  const titles = [
    'MERN Stack Developer', 
    'Emerging Machine Learning Enthusiast', 
    'ROS2 Developer in Training', 
  ];

  return (
    <div className={`flex justify-center items-center p-6 bg-transparent`}> {/* Background color based on theme */}
      {/* Main Card */}
      <div className={`rounded-2xl shadow-xl w-full lg:w-3/4 flex flex-col md:flex-row p-8 ${darkTheme ? 'bg-gray-900' : 'bg-gray-50'}`}> {/* Card background based on theme */}
        
        {/* Left Section: Avatar and Name */}
        <motion.div
          className="flex flex-col justify-center items-center md:w-1/3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <div className={`rounded-full ${darkTheme ? 'bg-gray-800' : 'bg-gray-300'} p-1 overflow-hidden shadow-lg mb-4`}>
            <img
              src="https://img.freepik.com/premium-photo/lego-figure-boy-with-glasses-shirt-that-says-hes_970933-5005.jpg?size=626&ext=jpg&ga=GA1.1.829029841.1727089904&semt=ais_hybrid"
              alt="Avatar"
              className="rounded-full w-full"
            />
          </div>

          {/* Name */}
          <h2 className={`text-xl font-bold ${darkTheme ? 'text-white' : 'text-gray-800'}`}>Pradheep P</h2>

          {/* Animated Title with Typing Effect */}
          <motion.div
            className={`title text-lg font-medium mt-2 ${darkTheme ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ReactTypingEffect
              text={titles} // Array of titles
              speed={100} // Speed of typing
              eraseSpeed={50} // Speed of erasing
              typingDelay={500} // Delay before typing starts
              eraseDelay={2000} // Delay before erasing starts
              cursor="|" // Custom cursor
            />
          </motion.div>
        </motion.div>

        {/* Right Section: CurrentProject Component */}
        <div className="md:w-2/3 mt-6 md:mt-0 md:ml-6 flex flex-col justify-between">
          <motion.div
            className="flex-grow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <CurrentProject darkTheme={darkTheme} /> {/* Replace the previous card with the CurrentProject component */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
