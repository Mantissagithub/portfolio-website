//@ts-nocheck

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroPanel from './panels/homePanel'
import AboutPanel from './panels/aboutPanel'
import ExperiencePanel from './panels/experiencePanel'
import ContactPanel from './panels/contactPanel'
import ContactInfoPanel from './panels/contectInfoPanel'
import SymbioteBubble from './symbioteBubble'

const MainPage = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const panelVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 comic-page">
      <motion.div 
        className="col-span-1 md:col-span-8 row-span-2"
        variants={panelVariants}
        initial="hidden"
        animate={controls}
      >
        <HeroPanel />
      </motion.div>

      <motion.div 
        className="col-span-1 md:col-span-4"
        variants={panelVariants}
        initial="hidden"
        animate={controls}
      >
        <AboutPanel />
      </motion.div>

      <motion.div 
        className="col-span-1 md:col-span-8"
        variants={panelVariants}
        initial="hidden"
        animate={controls}
      >
        <ExperiencePanel />
        <SymbioteBubble 
        text="With great power comes great responsibility... and awesome code!" 
        className="col-span-1 md:col-span-3 md:col-start-10 md:row-start-2 mt-2 p-2 border-purple-600 border-2 rounded-lg text-white"
        />
        {/* <SymbioteBubble 
          text="Need a hand? We've got eight of them!" 
          className="text-xs md:text-base p-2 mt-3 border-purple-600 border-2 rounded-lg text-white"
          type="thought"
        /> */}
      </motion.div>
      
      <motion.div 
        className="col-span-1 md:col-span-8"
        variants={panelVariants}
        initial="hidden"
        animate={controls}
      >
        <ContactPanel />
      </motion.div>

      <motion.div 
        className="col-span-1 md:col-span-4 flex flex-col space-y-4"
        variants={panelVariants}
        initial="hidden"
        animate={controls}
      >
        <ContactInfoPanel />
        <SymbioteBubble 
        text="Did someone say debugging? Hold my coffee!" 
        className="col-span-1 md:col-span-3 md:col-start-10 md:row-start-2 mt-2 p-2 border-purple-600 border-2 rounded-lg text-white"
        type="thought"
        />
        <SymbioteBubble 
          text="Debugging? That's our favorite snack!" 
          className="col-span-1 md:col-span-3 md:col-start-10 md:row-start-2 mt-2 p-2 border-purple-600 border-2 rounded-lg text-white"
          type="thought"
        />
      </motion.div>

      <SymbioteBubble 
        text="We have the power of both front AND back end!" 
        className="col-span-1 md:col-span-4 md:col-start-9 md:row-start-1"
      />

      <SymbioteBubble 
        text="With great power comes great responsibility... and clean code!" 
        className="col-span-1 md:col-span-3 md:col-start-10 md:row-start-2 mt-2 p-2 border-purple-600 border-2 rounded-lg text-white"
      />

      {/* <SymbioteBubble 
        text="Need a hand? We've got eight of them!" 
        className="text-xs md:text-base p-2 mt-3 border-purple-600 border-2 rounded-lg text-white"
        type="thought"
      /> */}

      <SymbioteBubble 
        text="Debugging? That's our favorite snack!" 
        className="col-span-1 md:col-span-3 md:col-start-10 md:row-start-2 mt-2 p-2 border-purple-600 border-2 rounded-lg text-white"
        type="thought"
      />

      <SymbioteBubble 
        text="Your friendly neighborhood developer is sensing a disturbance in the code... 
             Time to unleash our symbiote debugging powers!" 
        className="col-span-1 md:col-span-4 md:col-start-9 md:row-start-2" 
        type="thought"
      />
    </div>
  )
}

export default MainPage
