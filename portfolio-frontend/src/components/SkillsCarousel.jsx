import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaDatabase } from 'react-icons/fa'; 
import { SiTailwindcss, SiJavascript, SiTypescript, SiFlask, SiSocketdotio, SiWebrtc, SiFramer, SiMui } from 'react-icons/si';
import { DiMongodb } from "react-icons/di";

const skills = [
  { name: 'MongoDB', icon: <DiMongodb /> },
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
  { name: 'Framer-motion', icon: <SiFramer />},
  { name: 'Material UI', icon: <SiMui />}
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
    <div className="overflow-hidden w-full bg-transparent p-4 relative">
      <div ref={carouselRef} className="flex space-x-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white text-black rounded-lg p-6 shadow-lg transition-transform duration-500 hover:bg-gray-200 hover:scale-105"
          >
            <span className="text-3xl mr-3">{skill.icon}</span>
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;