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

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1gD4mpB1WguT8_Klqm2kzwxOC94oXBNHD/view?usp=sharing'; // Update with your actual file path
    link.download = 'Pradheep_Resume.pdf';
    link.click();
  };

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
          I'm a Computer Science student at Vellore Institute of Technology (VIT).
          My passion lies in building efficient and scalable web solutions, working with technologies like React, Python, machine learning frameworks and ROS2 Humble.
        </p>
        {/* <p className="text-lg mb-4 leading-relaxed">
          I have completed internships at Valsco Technologies and eBramha Techworks, where I developed a multi-modal emotion recognition system and led the creation of 10 client websites. Currently, I’m also part of Team Vyadh, working on autonomous systems for a rover.
        </p> */}
        <p className="text-lg mb-4 leading-relaxed">
          My technical skills span web development (MERN Stack), machine learning (Transformer, NLP, NLU, LLMs), and computer vision (OpenCV, YOLO). I have a keen interest in building innovative systems that solve real-world problems.
        </p>
        {/* <p className="text-lg mb-6 leading-relaxed">
          Fluent in multiple programming languages like Python, C++, and JavaScript, I’m always eager to learn and implement cutting-edge technologies in my projects.
        </p> */}
        
        {/* Download Resume Button */}
        <button 
          onClick={handleDownloadResume}
          className={`mt-4 px-6 py-3 rounded-full transition duration-300 font-semibold ${darkTheme ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-500 text-white hover:bg-blue-400'} shadow-md transform hover:scale-105`}
        >
          Resume
        </button>
      </motion.div>
    </div>
  );
};

export default SummarizedAboutMe;
