import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { CreditCard } from 'lucide-react';
import CurrentProject from './CurrentProject';

const MainContent = ({ darkTheme = false }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    gsap.to(card, {
      rotationY: 5,
      rotationX: -5,
      ease: "power1.inOut",
      transformPerspective: 1000,
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    const shine = gsap.to(card, {
      backgroundPosition: '200% 50%',
      repeat: -1,
      duration: 3,
      ease: "sine.inOut"
    });

    return () => {
      shine.kill();
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <motion.div
        ref={cardRef}
        className={`w-full max-w-md aspect-[1.6/1] rounded-xl overflow-hidden shadow-2xl ${
          darkTheme ? 'bg-gray-900' : 'bg-white'
        } relative`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `linear-gradient(110deg, 
            ${darkTheme ? '#2c3e50, #34495e' : '#e0e0e0, #ffffff'} 45%, 
            ${darkTheme ? '#4a5568' : '#f0f0f0'} 50%, 
            ${darkTheme ? '#2c3e50, #34495e' : '#e0e0e0, #ffffff'} 55%)`,
          backgroundSize: '200% 100%',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex justify-between items-start">
            <motion.div
              className="rounded-full overflow-hidden w-16 h-16 border-2 border-primary"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="https://img.freepik.com/premium-photo/lego-figure-boy-with-glasses-shirt-that-says-hes_970933-5005.jpg?size=626&ext=jpg&ga=GA1.1.829029841.1727089904&semt=ais_hybrid"
                alt="Student Avatar"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <CreditCard className={`w-10 h-10 ${darkTheme ? 'text-gray-400' : 'text-gray-600'}`} />
          </div>
          
          <div>
            <h2 className={`text-2xl font-bold mb-1 ${darkTheme ? 'text-white' : 'text-gray-800'}`}>
              Pradheep P
            </h2>
            <motion.div
              className={`text-sm ${darkTheme ? 'text-gray-400' : 'text-gray-600'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Student ID: 12345678
            </motion.div>
          </div>
          
          <div className={`${darkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
            <h3 className="text-xs font-semibold mb-1">Current Project</h3>
            <CurrentProject darkTheme={darkTheme} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainContent;
