'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Plataforma",
    description: "Desarrollo de una plataforma de comercio electrónico con características personalizadas.",
    image: "/placeholder.svg?height=400&width=600&text=E-commerce+Platform",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Aplicación Web para Gestión",
    description: "Una aplicación web avanzada para la gestión de inventarios y pedidos en tiempo real.",
    image: "/placeholder.svg?height=400&width=600&text=Management+Web+App",
    tags: ["Vue.js", "Express", "PostgreSQL", "WebSockets"],
    link: "#"
  },
  {
    title: "Landing Page Promocional",
    description: "Diseño y desarrollo de una landing page optimizada para conversiones y campañas publicitarias.",
    image: "/placeholder.svg?height=400&width=600&text=Promotional+Landing+Page",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "A/B Testing"],
    link: "#"
  },
  {
    title: "App Móvil de Fitness",
    description: "Aplicación móvil para seguimiento de rutinas de ejercicio y nutrición personalizada.",
    image: "/placeholder.svg?height=400&width=600&text=Fitness+Mobile+App",
    tags: ["React Native", "Firebase", "Machine Learning", "HealthKit"],
    link: "#"
  },
  {
    title: "Dashboard de Análisis",
    description: "Panel de control interactivo para visualización de datos empresariales en tiempo real.",
    image: "/placeholder.svg?height=400&width=600&text=Analytics+Dashboard",
    tags: ["D3.js", "Python", "Flask", "BigQuery"],
    link: "#"
  },
  {
    title: "Plataforma de Aprendizaje",
    description: "Sistema de gestión de aprendizaje con cursos interactivos y seguimiento de progreso.",
    image: "/placeholder.svg?height=400&width=600&text=Learning+Platform",
    tags: ["Angular", "Django", "Redis", "AWS"],
    link: "#"
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-purple-500/50 text-white text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <motion.a
          href={project.link}
          className="inline-flex items-center text-white font-semibold group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          Ver Proyecto
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="relative bg-gray-900 py-24">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("/placeholder.svg?height=1080&width=1920&text=Abstract+Background")' }} />
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Proyectos Que Inspiran
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Descubre cómo transformamos ideas en soluciones digitales innovadoras que impulsan el éxito de nuestros clientes.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center bg-purple-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300"
          >
            Ver Todos los Proyectos
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

