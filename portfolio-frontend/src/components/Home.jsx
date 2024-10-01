import React, { useState, useEffect } from 'react';
import AppBar from './AppBar';
import MainContent from './MainContent';
import TrafficLightNavigation from './TrafficLightNavigation';
import TypingHi from './TypingHi';
import SkillsCarousel from './SkillsCarousel';
import SummarizedAboutMe from './SummarizedAboutMe';
import RecentProjectCompleted from './RecentProjectCompleted';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { Box, Modal } from '@mui/material';

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false); 
  const [showProjectModal, setShowProjectModal] = useState(false); 

  const handleThemeToggle = (isDarkTheme) => {
    setDarkTheme(isDarkTheme);
  };

  useEffect(() => {
    gsap.fromTo('.appbar', { y: -100 }, { y: 0, duration: 1, ease: 'power4.out' });
  }, []);

  const closeModal = () => setShowAboutModal(false);
  const closeProjectModal = () => setShowProjectModal(false);

  return (
    <div
      className={`min-h-screen ${darkTheme ? 'text-white' : 'text-black'} flex flex-col items-center justify-center font-roboto`}
      style={{
        backgroundImage: darkTheme
          ? "url('https://images.unsplash.com/photo-1503455637927-730bce8583c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmQlMjBwaXhlbGF0ZWR8ZW58MHx8MHx8fDA%3D')"
          : "url('https://t4.ftcdn.net/jpg/05/32/28/59/360_F_532285934_qyYCy5BpdBGaM1DpL1SvlcvftOMuppCC.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
          transition={{ duration: 1.2, ease: 'easeOut' }}
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
        transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
        className="fixed top-1/2 right-8 transform -translate-y-1/2 mr-14 mb-13"
      >
        <TrafficLightNavigation
          darkTheme={darkTheme}
          onAboutClick={() => setShowAboutModal(true)}
          onProjectClick={() => setShowProjectModal(true)}
        />
      </motion.div>

      {/* Skills Carousel */}
      <div className="fixed bottom-0 left-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
          className="w-full px-6"
        >
          <SkillsCarousel />
        </motion.div>
      </div>

      {/* Modal for About Me */}
      <Modal
        open={showAboutModal}
        onClose={closeModal}
        aria-labelledby="about-modal"
        aria-describedby="modal-about-me"
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor : 'rgba(255, 255, 255, 0.6)',
            boxShadow: 24,
            borderRadius: '10px',
            width: '90%',
            maxWidth: '600px',
            height: 'auto',
            overflowY: 'auto',
            p: 0,
            m: 0,
          }}
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex flex-col justify-center items-center p-4 bg-transparent"
          >
            <SummarizedAboutMe darkTheme={darkTheme} />
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 hover:scale-110"
            >
              &times;
            </button>
          </motion.div>
        </Box>
      </Modal>

      {/* Modal for Projects */}
      <Modal
        open={showProjectModal}
        onClose={closeProjectModal}
        aria-labelledby="project-modal"
        aria-describedby="modal-project-details"
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'rgba(255, 255, 255, 0.6)',
            boxShadow: 24,
            borderRadius: '10px',
            width: '90%',
            maxWidth: '600px',
            height: 'auto',
            overflowY: 'auto',
            p: 0,
            m: 0,
          }}
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="flex flex-col justify-center items-center p-4 bg-transparent"
          >
            <RecentProjectCompleted darkTheme={darkTheme} /> 
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 hover:scale-110"
            >
              &times;
            </button>
          </motion.div>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
