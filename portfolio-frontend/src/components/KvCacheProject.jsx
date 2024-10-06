import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';

const KVCacheProject = ({ darkTheme }) => {
  // GSAP animation on hover
  const handleHover = (e) => {
    gsap.to(e.target, {
      scale: 1.0005,
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
        darkTheme ? 'bg-[#2C3E50] text-[#ECF0F1]' : 'bg-[#ECF0F1] text-[#2C3E50]'
      }`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mb-4 tracking-wide">KV Cache for Transformers</h2>
        <a
          href="https://github.com/YourGithubUsername/kv-cache-transformers"
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
        The KV Cache for Transformers is a simple yet effective implementation inspired by the concept of key-value caching in machine learning models. This project aims to enhance the efficiency of transformer architectures by storing previously computed key and value pairs, allowing for faster inference times during sequential processing. The cache optimizes memory usage and computational resources, making it an ideal solution for large-scale applications in natural language processing and beyond. With a focus on clarity and performance, this implementation serves as a foundational step towards more advanced caching strategies in deep learning.
      </p>

      {/* Expert Level */}
      <div className="mb-4">
        <span
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            darkTheme ? 'bg-purple-600 text-white' : 'bg-purple-200 text-[#2E2B5F]'
          }`}
        >
          Expert Level: Intermediate
        </span>
      </div>

      {/* Technology Stack */}
      <div className="flex flex-wrap gap-2">
        {['Python', 'TensorFlow', 'PyTorch', 'NumPy', 'Caching', 'Machine Learning', 'Transformers', 'Deep Learning'].map(
          (tool) => (
            <span
              key={tool}
              className={`text-sm m-1 px-4 py-2 rounded-full border border-transparent bg-opacity-20 ${
                darkTheme
                  ? 'bg-purple-500 text-white hover:bg-purple-400'
                  : 'bg-blue-200 text-[#2E2B5F] hover:bg-blue-300'
              } transition duration-300`}
            >
              {tool}
            </span>
          )
        )}
      </div>
    </motion.div>
  );
};

export default KVCacheProject;