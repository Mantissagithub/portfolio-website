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
import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false); 
  const [showProjectModal, setShowProjectModal] = useState(false); 
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className={`min-h-screen ${darkTheme ? 'bg-[#2D004D] text-[#E0BBE4]' : 'bg-[#FFF8E7] text-[#2E2B5F]'} flex flex-col font-poppins`}>
      {/* Fixed AppBar */}
      <header className="fixed top-0 left-0 w-full z-50 p-6">
        <div className={`appbar bg-transparent backdrop-blur-lg max-w-7xl mx-auto`}>
          <AppBar onThemeToggle={handleThemeToggle} />
        </div>
      </header>
      <br />
      <br />

      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-[#2E2B5F] text-white rounded-full flex items-center justify-center hover:bg-[#6C5B7B]">
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="fixed top-16 right-0 bg-transparent p-6 rounded-lg z-50"
        >
          <TrafficLightNavigation 
            darkTheme={darkTheme} 
            onAboutClick={() => {
              setShowAboutModal(true);
              setIsMobileMenuOpen(false);
            }} 
            onProjectClick={() => {
              setShowProjectModal(true);
              setIsMobileMenuOpen(false);
            }} 
            onConnectClick={() => {
              setShowConnectModal(true);
              setIsMobileMenuOpen(false);
            }} 
          />
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center mt-20 space-y-4 px-6">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: 'easeOut' }} 
          className="flex items-center"
        >
          <MacStyleHi darkTheme={darkTheme} />
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold ml-4" 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Welcome to My Portfolio!
          </motion.h1>
        </motion.div>

        {/* Main Content */}
        <section className="w-full max-w-6xl px-4 mt-10 md:mt-20  mb-0bg-transparent">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }} 
          >
            <MainContent darkTheme={darkTheme} />
          </motion.div>
        </section>

        {/* Skills Carousel */}
        <section className="w-full max-w-8xl px-6 mt-10 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
          >
            <SkillsCarousel />
          </motion.div>
        </section>
      </main>

      {/* Side Navigation (hidden on small screens) */}
<motion.div 
  initial={{ opacity: 0, x: 100 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ delay: 1, duration: 1, ease: 'easeOut' }} 
  className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
>
  <TrafficLightNavigation 
    darkTheme={darkTheme} 
    onAboutClick={() => setShowAboutModal(true)} 
    onProjectClick={() => setShowProjectModal(true)} 
    onConnectClick={() => setShowConnectModal(true)} 
  />
</motion.div>
      {/* Modals */}
      {[{
        openState: showAboutModal,
        closeFunc: closeModal,
        contentComponent: <SummarizedAboutMe darkTheme={darkTheme} />,
      }, {
        openState: showProjectModal,
        closeFunc: closeProjectModal,
        contentComponent: <RecentProjectCompleted darkTheme={darkTheme} />,
      }, {
        openState: showConnectModal,
        closeFunc: closeConnectModal,
        contentComponent: <ConnectWithMe />,
      }].map((modalData) => (
        <Modal key={modalData.contentComponent.type.name} open={modalData.openState} onClose={modalData.closeFunc} closeAfterTransition BackdropProps={{ timeout: 500 }}>
          <Box sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              bgcolor: darkTheme ? 'rgba(45 ,0 ,77 ,0.95)' : 'rgba(255,248,231 ,0.95)',
              boxShadow: 24,
              borderRadius: '10px',
              width: '90%',
              maxWidth: '600px',
              overflowY: 'auto',
              p: '0'
            }}>
            <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className="flex flex-col justify-center items-center p-4">
              {modalData.contentComponent}
              <button onClick={modalData.closeFunc} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700">&times;</button>
            </motion.div>
          </Box>
        </Modal>
      ))}
    </div>
  );
};

export default Home;
