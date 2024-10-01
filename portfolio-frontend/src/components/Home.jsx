import React, { useState, useEffect } from 'react';
import AppBar from './AppBar'; // Import the AppBar component
import MainContent from './MainContent'; // Import the MainContent component
import TrafficLightNavigation from './TrafficLightNavigation'; // Import the TrafficLightNavigation component
import TypingHi from './TypingHi'; // Import the TypingHi component
import SkillsCarousel from './SkillsCarousel'; // Import the SkillsCarousel component
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  // Handle theme toggle
  const handleThemeToggle = (isDarkTheme) => {
    setDarkTheme(isDarkTheme);
  };

  useEffect(() => {
    // GSAP animations for the homepage content
    gsap.fromTo('.appbar', { y: -100 }, { y: 0, duration: 1, ease: 'power4.out' });
  }, []);

  return (
    <div 
      className={`min-h-screen ${darkTheme ? 'text-white' : 'text-black'} flex flex-col items-center justify-center font-roboto`}
      style={{
        backgroundImage: darkTheme
          ? "url('https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmQlMjBwaXhlbGF0ZWR8ZW58MHx8MHx8fDA%3D')"
          : "url('https://t4.ftcdn.net/jpg/05/32/28/59/360_F_532285934_qyYCy5BpdBGaM1DpL1SvlcvftOMuppCC.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* AppBar Component */}
      <div className="fixed top-0 left-0 w-full z-50 p-6">
        <div className="appbar bg-transparent backdrop-blur-lg rounded-lg shadow-lg px-6 py-4 max-w-7xl mx-auto">
          <AppBar onThemeToggle={handleThemeToggle} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mt-5 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center bg-transparent"
        >
          <TypingHi darkTheme={darkTheme} />
          <motion.h1 
            className="text-5xl font-bold ml-4" 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Welcome to My Portfolio
          </motion.h1>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
        className="w-full max-w-6xl px-4 mt-10 mr-2"
      >
        <MainContent darkTheme={darkTheme} />
      </motion.div>

      {/* Side Navigation */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="fixed top-1/2 right-8 transform -translate-y-1/2 mr-14 mb-13"
      >
        <TrafficLightNavigation darkTheme={darkTheme} />
      </motion.div>

      {/* Skills Carousel */}
      <div className="fixed bottom-0 left-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
          className="w-7xl px-6"
        >
          <SkillsCarousel />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
