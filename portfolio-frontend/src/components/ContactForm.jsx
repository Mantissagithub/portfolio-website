import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const ConnectWithMe = () => {
  const connectRef = useRef(null);

  // GSAP animation for fade-in on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate children of connectRef
      gsap.fromTo(connectRef.current.children, 
        { opacity: 0, y: 20 }, // Start state
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', stagger: 0.3 } // End state
      );
    }, connectRef);

    return () => ctx.revert(); // Clean up GSAP context
  }, []);

  const handleEmailClick = (e) => {
    e.preventDefault(); // Prevent default action
    window.location.href = "mailto:pradheep.raop@gmail.com"; // Navigate to email
  };

  return (
    <div
      ref={connectRef}
      className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 text-white px-6 py-10"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Connect With Me
      </motion.h2>

      {/* Social Icons */}
      <div className="flex space-x-8 mt-6">
        <motion.a
          href="https://www.linkedin.com/in/pradheep-rao-88a339250/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-blue-400 transition duration-300"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/Mantissagithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-gray-300 transition duration-300"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="mailto:pradheep.raop@gmail.com"
          onClick={handleEmailClick} // Use the click handler for email link
          className="text-5xl hover:text-red-400 transition duration-300"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <FaEnvelope />
        </motion.a>

        <motion.a
          href="https://x.com/rao_pradheep"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:text-blue-400 transition duration-300"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <FaTwitter />
        </motion.a>
      </div>

      {/* Subtitle */}
      <motion.p
        className="mt-8 text-center text-lg max-w-lg"
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Animate to visible
        transition={{ duration: 1.2, delay: 0.5 }} // Delay for subtitle appearance
      >
        Feel free to connect with me on any of these platforms. I’m always open to discussing new opportunities, ideas, or projects.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        className="mt-10 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl"
        whileHover={{ scale: 1.1 }}
        onClick={handleEmailClick} // Use the click handler for the button as well
      >
        Let’s Collaborate!
      </motion.button>
    </div>
  );
};

export default ConnectWithMe;