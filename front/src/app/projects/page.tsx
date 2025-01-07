'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Code, Layers, Zap } from 'lucide-react'

interface Technology {
  name: string
  icon: string
}

interface Project {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
  image: string
  technologies: Technology[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    description: "Revolutionizing data insights with machine learning algorithms.",
    icon: <Zap size={24} />,
    color: "from-blue-500 to-purple-500",
    image: "/placeholder.svg?height=400&width=600&text=AI+Analytics",
    technologies: [
      { name: "TensorFlow", icon: "/placeholder.svg?height=20&width=20&text=TF" },
      { name: "Python", icon: "/placeholder.svg?height=20&width=20&text=Py" },
      { name: "React", icon: "/placeholder.svg?height=20&width=20&text=Re" }
    ]
  },
  {
    id: 2,
    title: "Quantum Encryption",
    description: "Next-gen security protocols using quantum computing principles.",
    icon: <Code size={24} />,
    color: "from-green-500 to-teal-500",
    image: "/placeholder.svg?height=400&width=600&text=Quantum+Encryption",
    technologies: [
      { name: "Q#", icon: "/placeholder.svg?height=20&width=20&text=Q#" },
      { name: "Python", icon: "/placeholder.svg?height=20&width=20&text=Py" },
      { name: "Azure Quantum", icon: "/placeholder.svg?height=20&width=20&text=AQ" }
    ]
  },
  {
    id: 3,
    title: "Neural Interface",
    description: "Bridging human cognition with digital systems seamlessly.",
    icon: <Layers size={24} />,
    color: "from-red-500 to-pink-500",
    image: "/placeholder.svg?height=400&width=600&text=Neural+Interface",
    technologies: [
      { name: "C++", icon: "/placeholder.svg?height=20&width=20&text=C++" },
      { name: "CUDA", icon: "/placeholder.svg?height=20&width=20&text=CUDA" },
      { name: "TensorFlow", icon: "/placeholder.svg?height=20&width=20&text=TF" }
    ]
  },
]

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-transparent text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Innovative Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gray-900 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />
            </div>
            <div className="relative z-10 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-br ${project.color}`}>
                  {project.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0, scale: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-full p-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" className="text-black">
                    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                      <path d="M10.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.586 10 10.293 6.707a1 1 0 0 1 0-1.414z"/>
                      <path d="M4 10a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"/>
                    </g>
                  </svg>
                </motion.div>
              </div>
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center bg-gray-800 rounded-full px-3 py-1">
                    <Image src={tech.icon} alt={tech.name} width={20} height={20} className="mr-2" />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0`}
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredProject === project.id ? 0.1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

