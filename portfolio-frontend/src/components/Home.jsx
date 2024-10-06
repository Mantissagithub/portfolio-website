import React, { useState, useEffect } from 'react';
import AppBar from './AppBar';
import MainContent from './MainContent';
import TrafficLightNavigation from './TrafficLightNavigation';
import MacStyleHi from './TypingHi';
import SkillsCarousel from './SkillsCarousel';
import SummarizedAboutMe from './SummarizedAboutMe';
import RecentProjectCompleted from './RecentProjectCompleted';
import ConnectWithMe from './ContactForm';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { Box, Modal } from '@mui/material';

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false); 
  const [showProjectModal, setShowProjectModal] = useState(false); 
  const [showConnectModal, setShowConnectModal] = useState(false);

  const handleThemeToggle = (isDarkTheme) => {
    setDarkTheme(isDarkTheme);
  };

  useEffect(() => {
    gsap.fromTo('.appbar', { y: -100 }, { y: 0, duration: 1, ease: 'power4.out' });
  }, []);

  const closeModal = () => setShowAboutModal(false);
  const closeProjectModal = () => setShowProjectModal(false);
  const closeConnectModal = () => setShowConnectModal(false);

  return (
    <div
      className={`min-h-screen ${darkTheme ? 'bg-[#2D004D] text-[#E0BBE4]' : 'bg-[#FFF8E7] text-[#2E2B5F]'} flex flex-col items-center justify-center font-poppins`}
    >
      {/* AppBar Component */}
      <div className="fixed top-0 left-0 w-full z-50 p-6">
        <div className={`appbar bg-transparent backdrop-blur-lg max-w-7xl mx-auto`}>
          <AppBar onThemeToggle={handleThemeToggle} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mt-5 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex items-center"
        >
          <MacStyleHi darkTheme={darkTheme} />
          <motion.h1
            className="text-5xl font-bold ml-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Welcome to My Portfolio!
          </motion.h1>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
        className={`w-full max-w-6xl px-4 mt-10 bg-transparent`}
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
          onConnectClick={() => setShowConnectModal(true)}
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
            bgcolor: darkTheme ? 'rgba(45, 0, 77, 0.95)' : 'rgba(255, 248, 231, 0.95)',
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
            className="flex flex-col justify-center items-center p-4"
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
            bgcolor: darkTheme ? 'rgba(45, 0, 77, 0.95)' : 'rgba(255, 248, 231, 0.95)',
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
            className="flex flex-col justify-center items-center p-4"
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

      {/* Modal for Connect */}
      <Modal
        open={showConnectModal}
        onClose={closeConnectModal}
        aria-labelledby="connect-modal"
        aria-describedby="modal-connect-me"
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
            bgcolor: darkTheme ? 'rgba(45, 0, 77, 0.95)' : 'rgba(255, 248, 231, 0.95)',
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
            className="flex flex-col justify-center items-center p-4"
          >
            <ConnectWithMe darkTheme={darkTheme} />
            {/* Close Button */}
            <button
              onClick={closeConnectModal}
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
