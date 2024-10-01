import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';

const MicrogradProject = ({ darkTheme }) => {
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
        <h2 className="text-3xl font-semibold mb-4">Building Micrograd from Scratch</h2>
        <a href="https://github.com/Mantissagithub/building-micrograd-from-scratch" target="_blank" rel="noopener noreferrer">
          <FaGithub className={`text-${darkTheme ? 'gray-300' : 'gray-600'} text-3xl hover:text-gray-400 transition-colors duration-300 mb-4`} />
        </a>
      </div>

      <p className="text-md mb-4">
        Welcome to the playground of neural networks! This repository is a delightful journey through constructing a mini neural network from scratch, inspired by Andrej Karpathy’s tutorials. We dive deep into the mechanics of neural networks, unraveling layers, MLPs, and the inner workings of PyTorch and Numpy. Buckle up for a ride through math, code, and a dash of magic!
      </p>

      <div className="flex flex-wrap gap-2">
        {['Neurons', 'Layers', 'Multi-Layer Perceptron', 'Backpropagation', 'PyTorch', 'Numpy'].map((tool) => (
          <span key={tool} className={`text-sm m-2 px-4 py-2 rounded-full border border-transparent bg-opacity-20 ${darkTheme ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-200 text-gray-900 hover:bg-blue-300'} transition duration-300`}>{tool}</span>
        ))}
      </div>
      <br />

      {/* <p className="text-md mb-4">
        Ever wondered how those fancy neural networks work under the hood? Here, we build our own from scratch, demystifying neurons as tiny calculators that perform math tricks. Layers group these neurons together for more complex tasks, while a Multi-Layer Perceptron (MLP) stacks them to transform raw data into polished outputs. Training is where the real fun begins as the MLP learns from its mistakes using backpropagation, much like teaching a puppy to fetch!
      </p> */}

      <p className="text-md mb-4">
        A big shout-out to Andrej Karpathy for his educational videos that inspired this project! If you're eager to see it in action and learn more about neural networks, check out the full video here: 
        <a href="https://youtu.be/VMj-3S1tku0?si=QzthDYUryyXNI28G" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"> Watch Now</a>.
      </p>
    </motion.div>
  );
};

export default MicrogradProject;