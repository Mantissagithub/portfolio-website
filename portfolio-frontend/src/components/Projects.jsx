import React, { useState, useEffect } from 'react';
import ChatSphereProject from './ChatSphereProject';
import { FaMoon, FaSun } from 'react-icons/fa';
import MultiModalEmotionRecognitionProject from './MultiModalEmotionRecognition';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import GestureRecognitionProject from './GestureRecognition';
import SpeechToTextProject from './SpeechToSummarization';
import YoloObjectDetectionProject from './yoloObjectDetection';
import CourseSellingAppProject from './NextCourseSellingApp';
import MicrogradProject from './MicrogradProject';
import VyadhTeamWebsite from './VyadhTeamWebsite';
import PanoramicImageStitchingProject from './PanaromicImageProject';
import KVCacheProject from './KvCacheProject';
import CreditCardCheckoutForm from './CreditCardCheckoutForm';
import TodoAppProject from './ToDoProject';

const Projects = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    gsap.from(".project-item", {
      opacity: 0,
      y: 20,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power1.out',
      clearProps: 'all',
    });
  }, []);

  const handleBackToHome = () => {
    window.location.href = '/'; // Adjust this path as necessary
  };

  return (
    <div
      className={`min-h-screen ${
        darkTheme ? 'text-[#E0BBE4]' : 'text-[#4B0082]'
      } flex flex-col items-center justify-center font-roboto transition-all duration-500`}
      style={{
        backgroundColor: darkTheme ? '#2D004D' : '#FFF8E7',
      }}
    >
      {/* Back to Home Button */}
      <button
        onClick={handleBackToHome}
        className={`fixed top-4 left-4 p-2 rounded-full shadow-lg transition duration-300 z-10 ${
          darkTheme ? 'bg-[#A971FF] text-[#F7E7F0] hover:bg-[#A971FF]/80' : 'bg-[#9B5DE5] text-white hover:bg-[#9B5DE5]/80'
        }`}
      >
        Back to Home
      </button>
      <br />
      <br />
      
      {/* Header Row */}
      <motion.div
        className="flex justify-between items-center w-full max-w-5xl mb-10 px-8 mt-8"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${
            darkTheme ? 'text-[#F7E7F0]' : 'text-[#4B0082]'
          }`}
        >
          PROJECTS
        </h1>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`text-2xl sm:text-3xl p-4 rounded-full transition-all duration-300 ${
            darkTheme ? 'bg-[#A971FF] text-[#F7E7F0]' : 'bg-[#FFF3DF] text-[#4B0082] hover:bg-[#9B5DE5]/80'
          }`}
        >
          {darkTheme ? (
            <FaSun className="text-[#F7E7F0]" />
          ) : (
            <FaMoon className="text-[#4B0082]" />
          )}
        </button>
      </motion.div>

      {/* Separator Line */}
      <motion.hr
        className={`w-full max-w-4xl mb-10 border-t transition-all duration-500 ${
          darkTheme ? 'border-[#400060]' : 'border-[#9B5DE5]'
        }`}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.8 }}
      />

      {/* Project Grid Container */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-6 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
      >
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <ChatSphereProject darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <MultiModalEmotionRecognitionProject darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <GestureRecognitionProject darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <SpeechToTextProject darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <YoloObjectDetectionProject darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <CourseSellingAppProject darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <MicrogradProject darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <VyadhTeamWebsite darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <PanoramicImageStitchingProject darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <KVCacheProject darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <CreditCardCheckoutForm darkTheme={darkTheme} />
        </motion.div>
        <motion.div className="project-item" whileHover={{ scale: 1.05 }}>
          <TodoAppProject darkTheme={darkTheme} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
