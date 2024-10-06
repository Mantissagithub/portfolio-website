import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';

const GestureRecognitionProject = ({ darkTheme }) => {
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
          ? 'bg-[#2C3E50] text-[#ECF0F1]' // Dark theme colors
          : 'bg-[#ECF0F1] text-[#2C3E50]' // Light theme colors
      }`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mb-4 tracking-wide">Hand Gesture Movement Game</h2>
        <a
          href="https://github.com/Mantissagithub/opencv-game-simple"
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
        The Hand Gesture Movement system enables controlling a TurtleBot3 in the Gazebo simulator using hand gestures, built with ROS2 Humble nodes. Using OpenCV and MediaPipe, the system processes hand gestures to control the robot's movement, interpreting different finger counts as directional commands. This integration of computer vision with robotics allows for intuitive control of the TurtleBot3 in real-time, enhancing interaction in a simulated environment.
      </p>

      {/* Expert Level */}
      <div className="mb-4">
        <span
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            darkTheme
              ? 'bg-[#2980B9] text-white' // Dark theme expert level color
              : 'bg-[#3498DB] text-white' // Light theme expert level color
          }`}
        >
          Expert Level: Intermediate
        </span>
      </div>

      {/* Technology Stack */}
      <div className="flex flex-wrap gap-2">
        {['Python', 'OpenCV', 'MediaPipe', 'ROS2 Humble', 'Gazebo'].map((tool) => (
          <span
            key={tool}
            className={`text-sm m-1 px-4 py-2 rounded-full border border-transparent bg-opacity-20 ${
              darkTheme
                ? 'bg-[#2980B9] text-white hover:bg-[#3498DB]' // Dark theme tech stack color
                : 'bg-[#3498DB] text-[#2C3E50] hover:bg-[#2980B9]' // Light theme tech stack color
            } transition duration-300`}
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default GestureRecognitionProject;