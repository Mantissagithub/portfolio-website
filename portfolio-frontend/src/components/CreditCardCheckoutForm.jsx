import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';

const CreditCardCheckoutForm = ({ darkTheme }) => {
  // GSAP animation on hover
  const handleHover = (e) => {
    gsap.to(e.target, {
      scale: 1.02,
      duration: 0.3,
    });
  };

  const handleHoverOut = (e) => {
    gsap.to(e.target, {
      scale: 1,
      duration: 0.3,
    });
  };

  return (
    <motion.div
      className={`p-6 rounded-lg shadow-lg mb-8 transition-transform transform hover:scale-105 ${
        darkTheme
          ? 'bg-[#2C3E50] text-[#ECF0F1]'
          : 'bg-[#ECF0F1] text-[#2C3E50]'
      }`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mb-4 tracking-wide">Credit Card Checkout</h2>
        <a
          href="https://github.com/yourusername/credit-card-checkout"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className={`text-${darkTheme ? 'gray-300' : 'gray-600'} text-3xl hover:text-gray-400 transition-colors duration-300 mb-4`}
          />
        </a>
      </div>

      {/* Project Description */}
      <p className="text-md mb-4 leading-relaxed">
        The Credit Card Checkout Form is a dynamic interface designed using HTML, CSS, JS, and Bootstrap. It allows users to select products from a dropdown menu, with prices that update in real-time based on their selection. The form is responsive and user-friendly, ensuring a seamless checkout experience.
      </p>

      {/* Expert Level */}
      <div className="mb-4">
        <span
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            darkTheme
              ? 'bg-[#34495E] text-white'
              : 'bg-[#BDC3C7] text-[#2C3E50]'
          }`}
        >
          Expert Level: Basic
        </span>
      </div>

      {/* Technology Stack */}
      <div className="flex flex-wrap gap-2">
        {['HTML', 'CSS', 'JavaScript', 'Bootstrap'].map((tool) => (
          <span
            key={tool}
            className={`text-sm m-1 px-4 py-2 rounded-full border border-transparent bg-opacity-20 ${
              darkTheme
                ? 'bg-[#34495E] text-white hover:bg-[#2C3E50]'
                : 'bg-[#BDC3C7] text-[#2C3E50] hover:bg-[#BDC3C7]'
            } transition duration-300`}
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default CreditCardCheckoutForm;