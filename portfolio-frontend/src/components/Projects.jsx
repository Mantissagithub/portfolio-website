import React, { useState } from 'react';
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

  // GSAP Fade-in animation for each project on mount
  const fadeIn = (element) => {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.3
    });
  };

  // Function to navigate back to home
  const handleBackToHome = () => {
    window.location.href = '/'; // Adjust this path as necessary
  };

  return (
    <div
      className={`min-h-screen ${darkTheme ? 'text-white' : 'text-black'} flex flex-col items-center justify-center font-roboto`}
      style={{
        backgroundImage: darkTheme
          ? "url('https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmQlMjBwaXhlbGF0ZWR8ZW58MHx8MHx8fDA%3D')"
          : "url('https://t4.ftcdn.net/jpg/05/32/28/59/360_F_532285934_qyYCy5BpdBGaM1DpL1SvlcvftOMuppCC.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background 0.5s ease',
      }}
    >
      {/* Back to Home Button */}
      <button
        onClick={handleBackToHome}
        className="fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-600 transition duration-300"
      >
        Back to Home
      </button>

      {/* Header Row */}
      <motion.div
        className="flex justify-between items-center w-full max-w-5xl mb-10 px-8 mt-8"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className={`text-6xl font-bold tracking-tight bg-clip-text text-black`}>
          PROJECTS
        </h1>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-3xl p-4 rounded-full bg-gray-800 dark:bg-white hover:shadow-lg transition-all duration-300"
        >
          {darkTheme ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </motion.div>

      {/* Separator Line */}
      <motion.hr
        className={`w-full max-w-4xl border-t ${darkTheme ? 'border-gray-700' : 'border-gray-400'} mb-10`}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.8 }}
      />

      {/* Project List */}
      <motion.div
        className="space-y-12 w-full max-w-7xl px-6 mb-6"
        ref={fadeIn}
      >
        <ChatSphereProject darkTheme={darkTheme} />
        <MultiModalEmotionRecognitionProject darkTheme={darkTheme} />
        <GestureRecognitionProject darkTheme={darkTheme} />
        <SpeechToTextProject darkTheme={darkTheme} />
        <YoloObjectDetectionProject darkTheme={darkTheme} />
        <CourseSellingAppProject darkTheme={darkTheme} />
        <MicrogradProject darkTheme={darkTheme} />
        <VyadhTeamWebsite darkTheme={darkTheme} />
        <PanoramicImageStitchingProject darkTheme={darkTheme} />
        <KVCacheProject darkTheme={darkTheme} />
        <CreditCardCheckoutForm darkTheme={darkTheme} />
        <TodoAppProject darkTheme={darkTheme} />
      </motion.div>
    </div>
  );
};

export default Projects;