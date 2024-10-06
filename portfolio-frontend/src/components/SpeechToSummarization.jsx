import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { gsap } from 'gsap';

const SpeechToTextProject = ({ darkTheme }) => {
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
          ? 'bg-[#400060] text-[#E0BBE4]'
          : 'bg-[#FFF8E7] text-[#4B0082]'
      }`}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold mb-4 tracking-wide">Speech to Text Summarization</h2>
        <a
          href="https://github.com/yourusername/speech-to-text-summarization"
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
        Welcome to the Speech to Text Summarization project! This innovative repository transforms audio from YouTube videos into written text and summarizes it using advanced NLP models. The project utilizes the Whisper model for accurate transcription of spoken content, extracting audio seamlessly from videos. Following transcription, it employs state-of-the-art summarization techniques with Pegasus, BART, and BERTSum models, ensuring concise and coherent summaries.
      </p>

      {/* Expert Level */}
      <div className="mb-4">
        <span
          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
            darkTheme
              ? 'bg-purple-600 text-white'
              : 'bg-purple-200 text-[#2E2B5F]'
          }`}
        >
          Expert Level: Advanced
        </span>
      </div>

      {/* Technology Stack */}
      <div className="flex flex-wrap gap-2">
        {['Transformers', 'PyTorch', 'Whisper', 'BART', 'BERTSum', 'Pegasus'].map((tool) => (
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
        ))}
      </div>
    </motion.div>
  );
};

export default SpeechToTextProject;