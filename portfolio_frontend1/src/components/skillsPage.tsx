'use client'

// import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  FileType,
  FileCode,
  FileJson,
  Coffee,
  Globe,
  Atom,
  Server,
  Database,
  Brain,
  Zap,
  Box,
  Flame,
  Layers,
  Eye,
  Wrench,
  GitBranch,
  Container,
  Cpu,
  Terminal,
  Bot,
  FastForward,
  Sparkles,
} from "lucide-react"

const skillCategories = [
  {
    name: "Programming",
    icon: Code2,
    skills: [
      { name: "JavaScript", icon: FileJson },
      { name: "TypeScript", icon: FileType },
      { name: "Python", icon: FileType },
      { name: "C++", icon: FileCode },
      { name: "C", icon: FileCode },
      { name: "Java", icon: Coffee },
    ],
  },
  {
    name: "Web Development",
    icon: Globe,
    skills: [
      { name: "React.js", icon: Atom },
      { name: "Next.js", icon: FastForward },
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "FastAPI", icon: Zap },
      { name: "Tailwind CSS", icon: Sparkles },
      { name: "MUI", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "Prisma ORM", icon: Database },
    ],
  },
  {
    name: "AI/ML",
    icon: Brain,
    skills: [
      { name: "Deep Learning", icon: Zap },
      { name: "NLP", icon: Box },
      { name: "Transformers", icon: Flame },
      { name: "Computer Vision", icon: Eye },
      { name: "LLM", icon: Brain },
    ],
  },
  {
    name: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Container },
      { name: "ROS2", icon: Cpu },
      { name: "Apache Kafka", icon: Server },
      { name: "Apache Airflow", icon: Zap },
      { name: "Linux/Unix", icon: Terminal },
      { name: "Ollama", icon: Bot },
      { name: "Raspberry Pi", icon: Cpu },
    ],
  },
]

export default function ComicSkillsShowcase() {
  return (
    <div className="bg-gray-900 p-8 rounded-lg shadow-2xl relative overflow-hidden border-4 border-purple-600">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => {
          const CategoryIcon = category.icon
          return (
            <motion.div
              key={category.name}
              className="skill-category bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
              initial={{ opacity : 0, y : 20 }}
              animate={{ opacity : 1 , y : 0 }}
              transition={{ duration : 0.5 , delay : index * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600 rounded-bl-full opacity-10"></div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300 comic-title flex items-center">
                <CategoryIcon className="w-8 h-8 mr-2 text-purple-400" />
                {category.name}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                      whileHover={{ scale : 1.05 , rotate : [-1 , 1 , -1 , 1 , 0] }}
                      whileTap={{ scale : 0.95 }}
                    >
                      <SkillIcon className="w-8 h-8 mb-2 text-purple-300" />
                      <span className="text-sm text-white text-center">{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        className="absolute -bottom-2 -right-2 bg-purple-600 p-3 rounded-tl-lg shadow-md transform rotate-6"
        initial={{ rotate : 45 , opacity : 0 }}
        animate={{ rotate : 6 , opacity : 1 }}
        transition={{ duration : 0.5 , delay : skillCategories.length * 0.1 }}
      >
        <p className="text-sm font-bold text-white comic-title">SKILLS ABSORBED!</p>
      </motion.div>

      <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <pattern id="skill-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-grid)" />
      </svg>
    </div>
  )
}