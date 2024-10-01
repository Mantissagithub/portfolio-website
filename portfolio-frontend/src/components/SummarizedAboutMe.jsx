import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const SummarizedAboutMe = ({ darkTheme }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-section", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    });

    // Clean up GSAP context to avoid issues on re-render
    return () => ctx.revert();
  }, []);

  return (
    <div className={`flex items-center justify-center bg-transparent mt-0`}>
      <motion.div
        className={`about-section ${darkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} p-8 rounded-lg shadow-xl max-w-2xl w-full max-h-[70vh] overflow-y-auto text-center transition-all duration-300`} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold mb-6">Hi, I'm Pradheep!</h1>
        <p className="text-lg mb-4 leading-relaxed">
          A Computer Science student at VIT with a passion for web development and machine learning. 
          I have hands-on experience building efficient and scalable solutions with React, Python, and more.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Currently, I'm focused on autonomous systems and multi-modal emotion recognition, aiming to innovate with technology.
        </p>
        
        {/* Read More Button */}
        <button className={`mt-4 px-6 py-3 rounded-full transition duration-300 font-semibold ${darkTheme ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-500 text-white hover:bg-blue-400'} shadow-md transform hover:scale-105`}>
          Read More
        </button>
      </motion.div>
    </div>
  );
};

export default SummarizedAboutMe;