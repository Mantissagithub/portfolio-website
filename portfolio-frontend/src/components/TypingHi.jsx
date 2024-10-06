import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// Import Noto Sans from Google Fonts for Indian languages
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;700&family=Noto+Sans+Telugu:wght@400;700&family=Noto+Sans+Malayalam:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

// List of greetings in different languages
const greetings = [
  { text: 'Hi', font: 'inherit' },
  { text: 'Ciao', font: 'inherit' },
  { text: 'Hola', font: 'inherit' },
  { text: 'Bonjour', font: 'inherit' },
  { text: 'Hallo', font: 'inherit' },
  { text: 'こんにちは', font: 'inherit' }, // Japanese
  { text: '안녕하세요', font: 'inherit' }, // Korean
];

const MacStyleHi = ({ darkTheme }) => {
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0].text);
  const [currentFont, setCurrentFont] = useState(greetings[0].font);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeGreeting = () => {
      const { text, font } = greetings[currentIndex];
      setCurrentGreeting(text);
      setCurrentFont(font);

      // Change the greeting every 4 seconds
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % greetings.length);
      }, 4000);

      return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
    };

    // Trigger the greeting change
    changeGreeting();
  }, [currentIndex]);

  // Framer Motion variants for sliding and fading
  const greetingVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
      },
    },
  };

  // GSAP for the smooth waving hand emoji
  useEffect(() => {
    const hand = document.querySelector(".wave-emoji");
    gsap.to(hand, {
      rotate: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1.5,
    });
  }, []);

  return (
    <div className={`flex items-center justify-center p-6 md:p-10 rounded-lg shadow-lg ${darkTheme ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <motion.div
        key={currentGreeting} // Key ensures Framer Motion correctly transitions between greetings
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={greetingVariants}
        className="flex items-center"
      >
        {/* macOS-style greeting animation */}
        <motion.h1
          className={`text-4xl md:text-6xl font-bold tracking-tight`}
          style={{ fontFamily: currentFont, color: darkTheme ? '#1a202c' : '#f7fafc' }}
        >
          {currentGreeting}
        </motion.h1>
      </motion.div>

      {/* Waving hand emoji */}
      <motion.span
        className="inline-block ml-3 md:ml-5 text-4xl md:text-6xl wave-emoji"
        whileHover={{ scale: 1.2 }} // Subtle hover effect
        style={{ filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))' }} // Subtle shadow for emoji
      >
        👋😊
      </motion.span>
    </div>
  );
};

export default MacStyleHi;
