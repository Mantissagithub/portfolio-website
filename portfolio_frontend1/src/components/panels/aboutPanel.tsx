//@ts-nocheck
import { motion } from 'framer-motion'

const AboutPanel = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden border-2 border-purple-600 flex flex-col md:flex-row">
      {/* Left Section: Image, Button, and Mini-Bio */}
      <div className="flex flex-col items-center md:w-1/3 space-y-4">
        {/* Image */}
        <motion.img
          src="https://cdn.openart.ai/uploads/image_TRbm5Qfm_1691602752524_512.webp"
          alt="Pradheep's Avatar"
          className="w-36 h-36 rounded-full border-4 border-purple-600 shadow-lg mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1Wr99txEZ1m0wHssIa98ps6LhkxUKWPeQ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-yellow-500 text-gray-800 font-bold rounded-full text-center shadow-md cursor-pointer comic-button"
          style={{
            display: 'block',
            textDecoration: 'none',
            width: 'fit-content'
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05, rotate: -5 }}
          whileTap={{ scale: 0.95, rotate: 5 }}
        >
          RESUME!
        </motion.a>

        {/* Mini-Bio
        <motion.div
          className="text-center text-sm text-purple-200 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>
            Passionate about technology and constantly seeking new challenges, I’ve delved into full-stack development
            and machine learning. With a solid foundation in MERN and a drive to create meaningful software, I’m
            dedicated to crafting seamless experiences.
          </p>
        </motion.div> */}
      </div>

      {/* Right Section: About Me Content */}
      <div className="flex-1 md:w-2/3 ml-4 space-y-3">
        <motion.h2
          className="text-2xl font-bold mb-2 comic-title text-purple-300"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-sm text-purple-200 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I’m a developer focused on building with the MERN stack, exploring machine learning, and experimenting with
          robotics using ROS2. My projects range from chat applications to emotion recognition systems, always with a
          goal to learn and grow in each.
        </motion.p>
        <motion.p
          className="text-sm text-purple-200 leading-tight mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I enjoy blending different technologies like React, Node.js, and AI to create interactive and adaptive
          applications. There’s always more to learn, and I’m excited to keep exploring.
        </motion.p>
      </div>

      <motion.div
        className="absolute -top-2 -right-2 bg-purple-600 p-2 rounded-bl-lg shadow-md transform rotate-12"
        initial={{ rotate: 45, opacity: 0 }}
        animate={{ rotate: 12, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="text-xs font-bold text-white">CHOMP!</p>
      </motion.div>
    </div>
  )
}

export default AboutPanel
