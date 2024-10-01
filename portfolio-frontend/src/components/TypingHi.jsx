import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

// List of greetings in different languages
const greetings = ['Hi', 'Ciao', 'Hola', 'Bonjour', 'Hallo', 'こんにちは', '안녕하세요'];

const TypingHi = () => {
  const [currentGreeting, setCurrentGreeting] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingTimeout;

    // Typing effect using GSAP
    const typeGreeting = () => {
      const currentText = greetings[currentIndex];
      gsap.to({}, { // Empty gsap tween for timing
        duration: currentText.length * 0.1, // Adjust speed based on text length
        onUpdate: function () {
          const progress = Math.round(this.progress() * currentText.length);
          setCurrentGreeting(currentText.substring(0, progress));
        },
        onComplete: () => {
          // Move to next greeting after a short delay
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % greetings.length); // Loop through greetings
          }, 1000); // 1-second delay between greetings
        },
      });
    };

    // Trigger the typing effect
    typingTimeout = setTimeout(typeGreeting, 500); // Initial delay before typing starts

    // Cleanup timeout
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [currentIndex]); // Re-run on greeting change

  return (
    <div className="flex flex-col items-center justify-center bg-black p-8 rounded-lg">
      {/* Typing greeting */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
        {currentGreeting}
        <motion.span
          className="inline-block ml-4 text-5xl"
          animate={{
            rotate: [0, -10, 10], // Rotate slightly anticlockwise and clockwise
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          👋 {/* Waving hand emoji */}
        </motion.span>
      </h1>
    </div>
  );
};

export default TypingHi;