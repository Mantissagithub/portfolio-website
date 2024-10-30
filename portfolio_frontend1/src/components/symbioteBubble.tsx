//@ts-nocheck

import { motion } from 'framer-motion'

interface SymbioteBubbleProps {
  text: string
  className?: string
  type?: 'speech' | 'thought'
}

const SymbioteBubble: React.FC<SymbioteBubbleProps> = ({ text, className = '', type = 'speech' }) => {
  const bubbleClass = type === 'speech' ? 'symbiote-speech-bubble' : 'symbiote-thought-bubble'

  return (
    <motion.div
      className={`${bubbleClass} ${className} bg-gray-800 p-4 rounded-lg shadow-lg relative border-2 border-purple-600`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <p className="text-sm font-bold text-purple-300">{text}</p>
    </motion.div>
  )
}

export default SymbioteBubble