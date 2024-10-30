//@ts-nocheck

import { motion } from 'framer-motion'

const ProjectsPanel = () => {
  const projects = [
    { name: "Symbiote CMS", desc: "Content Mastery System", icon: "/symbiote-cms-icon.svg" },
    { name: "Klyntar Analytics", desc: "Alien data visualization", icon: "/klyntar-analytics-icon.svg" },
    { name: "Venom Social Network", desc: "Bonding social platform", icon: "/venom-social-icon.svg" },
  ]

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg relative overflow-hidden border-2 border-purple-600">
      <motion.h2
        className="text-2xl font-bold mb-4 comic-title text-purple-300"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Our Symbiotic Projects
      </motion.h2>
      <div className="grid grid-cols-3 gap-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-2 rounded shadow relative overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          >
            <img src={project.icon} alt={project.name} className="w-8 h-8 mb-2" />
            <h3 className="font-bold text-sm text-purple-300">{project.name}</h3>
            <p className="text-xs text-purple-200">{project.desc}</p>
            <motion.div
              className="absolute -bottom-1 -right-1 bg-purple-600 p-1 rounded-tl-lg shadow-sm transform rotate-6"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 6, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + 0.2 * index }}
            >
              <p className="text-xs font-bold text-white">BOND!</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.img
        src="/symbiote-web.svg"
        alt="Symbiote Web"
        className="absolute -top-8 right-4 w-16 h-16 transform rotate-180"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 1, type: 'spring' }}
      />
    </div>
  )
}

export default ProjectsPanel