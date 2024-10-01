import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiHuggingface } from "react-icons/si"; // Hugging Face icon
import { gsap } from 'gsap';

const MultiModalEmotionRecognitionProject = ({ darkTheme }) => {
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
        <h2 className="text-3xl font-semibold mb-4">Multi Modal Emotion Recognition</h2>
        <div className="flex space-x-4">
          <a href="https://github.com/Mantissagithub/multi-modal-emotion-recognition" target="_blank" rel="noopener noreferrer">
            <FaGithub className={`text-${darkTheme ? 'gray-300' : 'gray-600'} text-3xl hover:text-gray-400 transition-colors duration-300 mb-4`} />
          </a>
          <a href="https://huggingface.co/spaces/Pradheep1647/multi-modal-emotion-recognition" target="_blank" rel="noopener noreferrer">
            <SiHuggingface className={`text-${darkTheme ? 'gray-300' : 'gray-600'} text-3xl hover:text-gray-400 transition-colors duration-300 mb-4`} />
          </a>
        </div>
      </div>

      <p className="text-md mb-4">
        This application allows users to analyze emotions from videos using state-of-the-art models for both audio and visual content. You can upload videos (maximum length of 2 minutes) to extract emotions from both speech and facial expressions in real-time. The app employs OpenAI's Whisper model for audio emotion detection and Cardiff NLP's RoBERTa model for emotion recognition in text, alongside Salesforce's BLIP model for visual analysis. Users can easily upload video files, and the app will analyze both audio and visual components to display emotions in real-time. The models have been meticulously selected to ensure optimal performance for this multimodal emotion recognition task.
      </p>

      <div className="flex flex-wrap gap-2">
        {['OpenAI Whisper', 'Cardiff NLP RoBERTa', 'Salesforce BLIP', 'J-Hartmann DistilRoBERTa'].map((tool) => (
          <span
            key={tool}
            className={`text-sm m-2 px-4 py-2 rounded-full border border-transparent bg-opacity-20 ${darkTheme ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-200 text-gray-900 hover:bg-blue-300'} transition duration-300`}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Updated Research Papers Section */}
      <div className="mt-6">
        <p className="text-lg font-semibold mb-2">Research Papers:</p>
        <ul className="list-inside list-disc space-y-2 text-sm">
          <li>
            <a
              href="https://arxiv.org/abs/2109.00859"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              RoBERTa Sentiment & Emotion Analysis
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/abs/2201.12086"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              BLIP - Bootstrapping Language-Image Pre-training
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/abs/2106.05237"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              DistilRoBERTa for Emotion Recognition
            </a>
          </li>
          <li>
            <a
              href="https://arxiv.org/abs/2006.15766"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Whisper - Speech Recognition
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default MultiModalEmotionRecognitionProject;
