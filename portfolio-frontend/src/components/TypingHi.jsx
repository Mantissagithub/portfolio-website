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
  // { text: 'नमस्ते', font: 'inherit' }, // Hindi
  // { text: 'வணக்கம்', font: "'Noto Sans Tamil', sans-serif" }, // Tamil
  // { text: 'സ്വാഗതം', font: "'Noto Sans Malayalam', sans-serif" }, // Malayalam
  // { text: 'స్వాగతం', font: "'Noto Sans Telugu', sans-serif" }, // Telugu
  // { text: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', font: 'inherit' }, // Punjabi
  // { text: 'আদাব', font: 'inherit' }, // Bengali
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

      // Change the greeting every 3 seconds
      const timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % greetings.length);
      }, 3000);

      return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
    };

    // Trigger the greeting change
    changeGreeting();
  }, [currentIndex]);

  // Framer Motion variants for the macOS-style fade-in text animation
  const letterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
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
    <div className={`flex items-center justify-center p-8 rounded-lg ${darkTheme ? 'bg-white' : 'bg-black'}`}>
      {/* macOS-style greeting animation */}
      <motion.h1
        className={`text-5xl md:text-6xl font-extrabold tracking-tight flex items-center`}
        style={{ fontFamily: currentFont, color: darkTheme ? 'black' : 'white' }}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08 }} // Similar to macOS's staggered effect
      >
        {currentGreeting.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Waving hand emoji */}
      <motion.span
        className="inline-block ml-4 text-5xl wave-emoji"
        whileHover={{ scale: 1.2 }} // Subtle hover effect
      >
        👋😊
      </motion.span>
    </div>
  );
};

export default MacStyleHi;
