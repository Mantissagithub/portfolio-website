import { motion } from 'framer-motion'

interface Project {
  name: string
  description: string
  image: string
  technologies: string[]
  link: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-purple-600 z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 comic-title text-purple-300">{project.name}</h3>
        <p className="text-purple-200 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-purple-700 text-purple-200 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-200"
        >
          View Project
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard