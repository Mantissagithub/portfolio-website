import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa'; 
import { SiTailwindcss, SiJavascript, SiTypescript, SiFlask, SiSocketdotio, SiWebrtc } from 'react-icons/si';

const skills = [
  { name: 'MongoDB', icon: <FaDatabase /> },
  { name: 'ReactJS', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'C/C++', icon: '💻' },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Socket.io', icon: <SiSocketdotio /> },
  { name: 'WebRTC', icon: <SiWebrtc /> },
];

const SkillsCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // GSAP for smooth looping transitions with ease and delay between transitions
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut', duration: 6 } });

    tl.to(carouselRef.current, {
      x: '-=100%',
      onComplete: () => {
        const firstChild = carouselRef.current.firstChild;
        carouselRef.current.appendChild(firstChild); // Move first skill to the end
        gsap.set(carouselRef.current, { x: '0%' }); // Reset position
      },
    });
  }, []);

  return (
    <div className="overflow-hidden w-full bg-transparent p-4 relative mt-0">
      <motion.div
        ref={carouselRef}
        className="flex space-x-6"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center bg-white text-black rounded-lg p-6 shadow-lg 
            transition-transform duration-500 hover:bg-gray-200 hover:scale-105"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-3xl mr-3">{skill.icon}</span>
            <span className="text-lg font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsCarousel;
