//@ts-nocheck

import { motion } from 'framer-motion'
import HeroPanel from './panels/homePanel'
import AboutPanel from './panels/aboutPanel'
import ExperiencePanel from './panels/experiencePanel'
import ProjectsPanel from './panels/projectsPanel'
import ContactPanel from './panels/contactPanel'
import SymbioteBubble from './symbioteBubble'

const ComicPage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 comic-page">
      <motion.div className="col-span-8 row-span-2 comic-panel" initial={{ y: 100, opacity: 0 }}>
        <HeroPanel />
      </motion.div>
      <motion.div className="col-span-4 comic-panel" initial={{ y: 100, opacity: 0 }}>
        <AboutPanel />
      </motion.div>
      <motion.div className="col-span-4 comic-panel" initial={{ y: 100, opacity: 0 }}>
        <ExperiencePanel />
      </motion.div>
      <motion.div className="col-span-6 comic-panel" initial={{ y: 100, opacity: 0 }}>
        <ProjectsPanel />
      </motion.div>
      <motion.div className="col-span-6 comic-panel" initial={{ y: 100, opacity: 0 }}>
        <ContactPanel />
      </motion.div>
      <SymbioteBubble text="We are Venom... I mean, we are full-stack developers!" className="col-span-4 col-start-9 row-start-1" />
      <SymbioteBubble text="Our code sense is tingling... We sense a bug in the matrix!" className="col-span-4 col-start-9 row-start-2" type="thought" />
    </div>
  )
}

export default ComicPage