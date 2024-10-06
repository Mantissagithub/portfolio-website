import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SummarizedAboutMe = ({ darkTheme }) => {
  const ticketRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ticketRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }, ticketRef);

    return () => ctx.revert();
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1gD4mpB1WguT8_Klqm2kzwxOC94oXBNHD/view?usp=sharing'; 
    link.download = 'Pradheep_Resume.pdf';
    link.click();
  };

  return (
    <div className="flex items-center justify-center bg-transparent mt-0">
      <motion.div
        ref={ticketRef}
        className={`relative about-section ${darkTheme ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} p-6 rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto transition-all duration-300 border-2 border-dashed ${darkTheme ? 'border-gray-700' : 'border-gray-300'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg p-4">
          {/* Top Section */}
          <div className={`flex justify-between items-center px-4 py-2 ${darkTheme ? 'bg-gray-800' : 'bg-white'} rounded-t-lg border-b border-dashed ${darkTheme ? 'border-gray-700' : 'border-gray-300'}`}>
            <div className="text-left">
              <h2 className="text-xl font-bold">Boarding Pass</h2>
              <p className="text-sm">VIT University</p>
            </div>
            <div className="text-right">
              <h3 className="text-lg font-semibold">Destination: Full Stack Developer</h3>
              <p className="text-sm">Class: Expert</p>
            </div>
          </div>

          {/* Avatar and Introduction */}
          <div className={`flex items-center ${darkTheme ? 'bg-gray-900' : 'bg-white'} p-4 border-b border-dashed ${darkTheme ? 'border-gray-700' : 'border-gray-300'} rounded-b-lg`}>
            <img 
              src="https://img.freepik.com/premium-photo/child-with-black-curly-hair-white-lab-coat_978914-10549.jpg?w=826" 
              alt="Pradheep's Avatar" 
              className="rounded-full w-24 h-24 mr-6 shadow-md"
            />
            <div className="flex-grow text-left">
              <h1 className="text-3xl font-extrabold mb-2">Hello, I'm Pradheep!</h1>
              <p className="text-lg leading-relaxed">
                A passionate Computer Science student at VIT, I thrive on crafting innovative web solutions. My toolkit includes React, Python, and the latest technologies like ROS2 Humble.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className={`p-4 border-b border-dashed ${darkTheme ? 'border-gray-700' : 'border-gray-300'} rounded-b-lg text-black`}>
            <h2 className="text-2xl font-bold mb-2">Technical Expertise</h2>
            <p className="text-lg leading-relaxed mb-4">
              I specialize in full-stack web development (MERN Stack), machine learning (Transformers, NLP, NLU), and computer vision (OpenCV, YOLO). My mission? To tackle real-world challenges with scalable tech solutions.
            </p>
          </div>

          {/* Footer Section */}
          <div className={`flex justify-between items-center ${darkTheme ? 'bg-gray-800' : 'bg-white'} p-4 rounded-b-lg`}>
            <div className="flex items-center">
              <h3 className="font-semibold text-xl mr-2">Seat:</h3>
              <p className="text-lg">A1</p>
            </div>
            <div className="flex items-center">
              <button 
                onClick={handleDownloadResume}
                className={`px-6 py-3 rounded-full font-semibold z-10 relative transition-all duration-300 shadow-md ${darkTheme ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-600 text-white hover:bg-blue-500'} transform hover:scale-105`}
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
            <div className="absolute top-0 left-[-150%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-45 transition-transform duration-[2000ms] ease-in-out hover:translate-x-[200%]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SummarizedAboutMe;