import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa'; 
import { SiTailwindcss, SiJavascript, SiTypescript, SiFlask, SiSocketdotio, SiWebrtc, SiFramer, SiMui, SiExpress, SiOpencv } from 'react-icons/si';
import { DiMongodb } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from 'framer-motion';

const skills = [
  { name: 'MongoDB', icon: <DiMongodb /> },
  { name: 'ReactJS', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Next.JS', icon: <RiNextjsLine /> },
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
  { name: 'Framer-motion', icon: <SiFramer />},
  { name: 'Material UI', icon: <SiMui />},
  { name: 'OpenCV', icon: <SiOpencv />},
  { name: 'Firebase', icon: <IoLogoFirebase />},
];

const SkillsCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const carouselWidth = carousel.scrollWidth;

    // Clone the items to create a seamless scroll
    const items = [...carousel.children];
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });

    // GSAP infinite scrolling animation
    gsap.to(carousel, {
      x: `-${carouselWidth}px`,
      duration: 30, // Increased duration for slower scrolling
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % carouselWidth}px`, // Modifies the x position to create endless scrolling
      },
    });
  }, []);

  return (
    <div className="overflow-hidden w-full bg-transparent p-4 relative shadow-lg rounded-lg">
      <div ref={carouselRef} className="flex space-x-12 p-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center bg-white text-black rounded-lg p-8 shadow-md transition-transform duration-300 hover:bg-gray-200 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-4xl mr-3">{skill.icon}</span>
            <span className="text-lg font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
