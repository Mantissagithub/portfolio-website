//@ts-nocheck

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const HeroPanel = () => {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (panelRef.current) {
      gsap.to(panelRef.current, {
        backgroundPosition: '100% 100%',
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      })
    }
  }, [])

  return (
    <div
      ref={panelRef}
      className="relative h-[100px] sm:h-[150px] bg-gradient-to-br from-purple-900 to-gray-900 rounded-lg overflow-hidden shadow-lg bg-[length:100%_100%] p-4 sm:p-8"
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-4 comic-title text-purple-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Pradheep
        </motion.h1>
        <motion.p
          className="text-lg sm:text-2xl text-purple-200 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full-Stack Developer (MERN) | ML Enthusiast | ROS2 Explorer
        </motion.p>
      </div>
      <motion.div
        className="absolute top-2 right-2 hidden sm:block bg-purple-800 text-purple-200 p-2 sm:p-4 rounded-tl-2xl rounded-br-2xl shadow-lg transform rotate-3"
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 6 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="font-bold text-xs sm:text-sm">Bonded with cutting-edge tech...</p>
      </motion.div>
      <motion.img
        src="https://e7.pngegg.com/pngimages/488/409/png-clipart-venom-illustration-marvel-avengers-alliance-spider-man-eddie-brock-venom-venom-fictional-character-desktop-wallpaper.png"
        alt="Symbiote Tendrils"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-[0.05] sm:opacity-[0.1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </div>
  )
}

export default HeroPanel