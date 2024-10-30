import { motion } from 'framer-motion'
import ProjectCard from './projectsCard'

const projects = [
  {
    name: "ChatSphere",
    description: "A dynamic chat application that bonds users in real-time. Like a symbiote, it adapts to any group or friend, creating instant connections with WebRTC for voice and video. The interface comes alive with Tailwind CSS, GSAP, and Framer Motion animations.",
    image: "https://i.pinimg.com/736x/7d/db/2b/7ddb2b250be055a0d6a88becc59ae48c.jpg",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Socket.io", "Tailwind CSS", "GSAP", "Framer Motion"],
    link: "https://github.com/Mantissagithub/cat-hackathon-website"
  },
  {
    name: "Venom Emotion Recognition",
    description: "A multi-modal emotion recognition system that binds audio and visual inputs to capture human emotions with symbiotic precision. Built with advanced AI models like Whisper and BLIP, it empowers users to analyze emotions in real-time by uploading short video clips.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo6N2uER2fzSQlbaE5-RlLz_6Ipwzs5okCA&s",
    technologies: ["OpenAI Whisper", "Cardiff NLP RoBERTa", "Salesforce BLIP", "DistilRoBERTa"],
    link: "https://github.com/Mantissagithub/multi-modal-emotion-recognition"
  },
  {
    name: "Symbiote Summarizer",
    description: "A project that bonds with audio data, converting speech to text and generating compact summaries with a symbiote's precision. Built with cutting-edge NLP models, it transforms YouTube audio into cohesive written content.",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/12/the-two-spider-man-miles-morales-and-peter-parker-argue-1.jpg",
    technologies: ["Transformers", "PyTorch", "Whisper", "BART", "BERTSum", "Pegasus"],
    link: "https://github.com/Mantissagithub/speech-to-text-summarization"
  },
  {
    name: "Venomous Gesture Control",
    description: "An intuitive hand gesture control system that fuses computer vision with robotics, built with ROS2 and OpenCV. This symbiotic system empowers users to command a TurtleBot3 within Gazebo using the precision of hand gestures, bringing an immersive, interactive layer to robotic navigation.",
    image: "https://assets.vogue.in/photos/6484e6ce93d81bc6030fcef8/4:3/w_1144,h_858,c_limit/Miles%20Morales.png",
    technologies: ["Python", "OpenCV", "MediaPipe", "ROS2 Humble", "Gazebo"],
    link: "https://github.com/Mantissagithub/opencv-game-simple"
  },
  {
    name: "Venom Vision",
    description: "A real-time object detection system that identifies items with lethal precision, using YOLOv8 on a custom dataset. Built to strike fast and accurate, just like a symbiote honing in on its prey.",
    image: "https://4.bp.blogspot.com/-18lZ8-3YmCI/VN9n4riiKGI/AAAAAAAAiz0/2YUDX5gfN6A/s1600/mtu5_2-3.gif",
    technologies: ["YOLOv8", "Roboflow", "Google Colab", "OpenCV", "TensorFlow", "Python"],
    link: "https://github.com/Mantissagithub/yolo-object-detection"
  },
  {
    name: "Course Selling Application",
    description: "A robust platform that connects educators and learners like a symbiote. Built with Next.js and TypeScript, it features dual interfaces for admins and students, enabling seamless course management and enrollment.",
    image: "https://www.looper.com/img/gallery/all-the-different-ways-spider-man-has-made-money/peter-parker-and-spider-man-teachers-1638992932.jpg",
    technologies: ["Next.js", "TypeScript", "Material-UI", "JWT Authentication", "Axios"],
    link: "https://github.com/Mantissagithub/next-app"
  }
]

const ProjectsPage = () => {
  return (
    <div className="comic-page">
      <motion.h2
        className="text-4xl font-bold mb-8 comic-title text-purple-300 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Symbiotic Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* GitHub Button */}
      <motion.a
        href="https://github.com/Mantissagithub"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 p-4 bg-yellow-500 text-gray-800 font-bold rounded-full text-center shadow-md cursor-pointer comic-button mx-auto z-10"
        style={{
          display: 'block',
          textDecoration: 'none',
          width: 'fit-content'
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Check Out My GitHub for more projects!
      </motion.a>
      
    </div>
  )
}

export default ProjectsPage