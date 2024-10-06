import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const ConnectWithMe = () => {
  const connectRef = useRef(null);

  // GSAP animation for fade-in on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(connectRef.current.children, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', stagger: 0.3 }
      );
    }, connectRef);

    return () => ctx.revert();
  }, []);

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:pradheep.raop@gmail.com";
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white px-6 py-10 rounded-lg shadow-2xl w-full lg:w-3/4 mx-auto mt-10 border border-purple-700">
      
      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Connect With Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row w-full">
        
        {/* Left Side: Social Icons */}
        <div ref={connectRef} className="lg:w-1/3 flex flex-col items-center mb-8 lg:mb-0">
          <div className="flex flex-col space-y-6 mt-4">
            <motion.a
              href="https://www.linkedin.com/in/pradheep-rao-88a339250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl hover:text-blue-500 transition duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://github.com/Mantissagithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl hover:text-gray-400 transition duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="mailto:pradheep.raop@gmail.com"
              onClick={handleEmailClick}
              className="text-5xl hover:text-red-500 transition duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <FaEnvelope />
            </motion.a>

            <motion.a
              href="https://x.com/rao_pradheep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-5xl hover:text-blue-400 transition duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </div>

        {/* Right Side: Content & CTA */}
        <div className="lg:w-2/3 lg:pl-10 text-center lg:text-left">
          <motion.p
            className="mt-6 text-lg max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Feel free to connect with me on any of these platforms. I’m always open to discussing new opportunities, ideas, or projects.
          </motion.p>

          <motion.button
            className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full shadow-xl hover:scale-105 transition duration-300 lg:w-auto mx-auto lg:mx-0"
            whileHover={{ scale: 1.1 }}
            onClick={handleEmailClick}
          >
            Let’s Collaborate!
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithMe;