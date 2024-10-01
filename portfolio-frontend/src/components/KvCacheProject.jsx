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
      className={`p-6 rounded-lg shadow-md mb-8 transition-transform transform hover:scale-105 ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold mb-4">KV Cache for Transformers</h2>
        <a href="https://github.com/YourGithubUsername/kv-cache-transformers" target="_blank" rel="noopener noreferrer">
          <FaGithub className={`text-${darkTheme ? 'gray-300' : 'gray-600'} text-3xl hover:text-gray-400 transition-colors duration-300 mb-4`} />
        </a>
      </div>

      <p className="text-md mb-4">
        The KV Cache for Transformers is a simple yet effective implementation inspired by the concept of key-value caching in machine learning models. This project aims to enhance the efficiency of transformer architectures by storing previously computed key and value pairs, allowing for faster inference times during sequential processing. The cache optimizes memory usage and computational resources, making it an ideal solution for large-scale applications in natural language processing and beyond. With a focus on clarity and performance, this implementation serves as a foundational step towards more advanced caching strategies in deep learning.
      </p>

      <div className="flex flex-wrap gap-2">
        {['Python', 'TensorFlow', 'PyTorch', 'NumPy', 'Caching', 'Machine Learning', 'Transformers', 'Deep Learning'].map((tool) => (
          <span key={tool} className={`text-sm m-2 px-4 py-2 rounded-full border border-transparent bg-opacity-20 ${darkTheme ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-200 text-gray-900 hover:bg-blue-300'} transition duration-300`}>{tool}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default KVCacheProject;