import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';
import CurrentProject from './CurrentProject'; // Import the CurrentProject component

const MainContent = () => {
  const titles = ['Full Stack Developer', 'ML Beginner', 'ROS Beginner']; // Titles to animate

  return (
    <div className="flex justify-center items-center bg-transparent p-6"> {/* Added gradient background */}
      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-xl w-full lg:w-3/4 flex flex-col md:flex-row p-8"> {/* Increased padding and width */}
        
        {/* Left Section: Avatar and Name */}
        <motion.div
          className="flex flex-col justify-center items-center md:w-1/3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <div className="rounded-full bg-gray-300 p-1 overflow-hidden shadow-lg mb-4">
            <img
              src="https://img.freepik.com/premium-photo/lego-figure-boy-with-glasses-shirt-that-says-hes_970933-5005.jpg?size=626&ext=jpg&ga=GA1.1.829029841.1727089904&semt=ais_hybrid"
              alt="Avatar"
              className="rounded-full w-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-xl font-bold text-gray-700">Pradheep P</h2>

          {/* Animated Title with Typing Effect */}
          <motion.div
            className="title text-lg font-medium text-gray-500 mt-2"
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

        {/* Right Section: Replace Card Content with CurrentProject */}
        <div className="md:w-2/3 mt-6 md:mt-0 md:ml-6 flex flex-col justify-between">
          <motion.div
            className="flex-grow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <CurrentProject /> {/* Replace the previous card with the CurrentProject component */}

            {/* Contribution Section: Text Input with Placeholder */}
            <div className="mt-6 text-center text-black">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 bg-gray-300"
                placeholder="Feel free to contribute or give any suggestions!"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
