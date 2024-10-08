import React from 'react';
import { GitHub } from '@mui/icons-material'; 
import { motion } from 'framer-motion'; 
import { useNavigate } from 'react-router-dom';

const RecentProjectCompleted = ({ darkTheme }) => {
  const navigate = useNavigate();

  return (
    <div className={`${darkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-xl p-4 w-full mx-auto mt-10 border-2 border-dashed ${darkTheme ? 'border-gray-700' : 'border-gray-300'} flex flex-col lg:flex-row`}>
      
      {/* Left Side: Image Section */}
      <div className="w-full lg:w-2/5 flex justify-center items-center bg-gray-800 rounded-lg p-2 mb-4 lg:mb-0">
        <img 
          src='https://media.istockphoto.com/id/973661382/photo/futuristic-background-of-global-business-network.jpg?s=2048x2048&w=is&k=20&c=AJXI__nV0Y-ItXR5--58odKwgYZNgMWhJBpsAsR97vw='
          alt="Project Image" 
          className="rounded-md shadow-lg w-full h-auto"
        />
      </div>

      {/* Right Side: Content Section */}
      <div className="w-full lg:w-3/5 pl-0 lg:pl-4">
        
        {/* First Line: Status and GitHub Icon */}
        <div className="flex justify-between items-center mb-2">
          {/* Status Button */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative rounded-full h-3 w-3 mr-2 shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                background: [
                  'radial-gradient(circle at center, #86efac 0%, #22c55e 100%)',
                  'radial-gradient(circle at center, #a7f3d0 0%, #34d399 100%)'
                ],
                filter: [
                  'blur(0px)',
                  'blur(2px)',
                  'blur(0px)'
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            />
            <span className="font-semibold text-sm">Completed (Features will be added as needed)</span>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            className="text-gray-500"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://github.com/Mantissagithub/chat-sphere/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-500 transition duration-300"
            >
              <GitHub fontSize="large" />
            </a>
          </motion.div>
        </div>

        {/* Project Title */}
        <motion.h2
          className="text-xl lg:text-2xl font-bold mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ChatSphere
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base lg:text-lg leading-relaxed mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A feature-rich chat application built using the MERN stack. It includes real-time messaging, group creation, and WebRTC for video calling.
        </motion.p>

        {/* Technologies Used */}
        <div className="flex flex-wrap mt-2">
          {['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'WebRTC', 'MUI Icons'].map((tech) => (
            <button key={tech} className={`m-1 px-3 py-1 rounded-full border border-transparent bg-opacity-20 ${darkTheme ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-200 text-gray-900 hover:bg-blue-300'} transition duration-300`}>
              {tech}
            </button>
          ))}
        </div>

        {/* More Projects Button */}
        <motion.button 
          className={`mt-4 px-4 py-2 rounded-full transition duration-300 ${darkTheme ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} shadow-md`}
          onClick={() => navigate('/projects')}
        >
          More Projects
        </motion.button>
      </div>
    </div>
  );
};

export default RecentProjectCompleted;