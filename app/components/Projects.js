'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { useState } from 'react'
import BlurReveal from './BlurReveal'
import ShapeBlur from './ShapeBlur'
import MagneticButton from './MagneticButton'
import ElectricBorder from './ElectricBorder'
import GradualBlur from './GradualBlur'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Interactive Dashboard UI',
      description: 'A modern, animated dashboard interface with smooth transitions and micro-interactions built with React and Framer Motion.',
      longDescription: 'Built with React, Next.js, and Framer Motion. Features include animated charts, smooth page transitions, responsive design, and beautiful micro-interactions. The dashboard showcases modern UI/UX principles with stunning visual effects.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Animated Portfolio Website',
      description: 'A stunning portfolio website with advanced animations, smooth scrolling, and interactive elements.',
      longDescription: 'Developed using React and Next.js with Framer Motion for animations. Features include smooth page transitions, animated components, responsive design, and modern UI patterns. Showcases advanced frontend development skills.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      tech: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'React Component Library',
      description: 'A comprehensive React component library with beautiful animations and modern design patterns.',
      longDescription: 'A complete component library built with React and styled with Tailwind CSS. Features reusable components, smooth animations, accessibility features, and comprehensive documentation. Perfect for rapid UI development.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      tech: ['React', 'Tailwind CSS', 'Storybook', 'TypeScript', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Interactive Landing Page',
      description: 'A high-converting landing page with stunning animations and modern design elements.',
      longDescription: 'Built with Next.js and enhanced with Framer Motion animations. Features include scroll-triggered animations, interactive elements, optimized performance, and conversion-focused design. Demonstrates advanced frontend techniques.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'React', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-300 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <BlurReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development
          </p>
        </BlurReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <ElectricBorder
                color="#3b82f6"
                speed={0.5}
                chaos={0.3}
                thickness={1}
                style={{ borderRadius: 12 }}
              >
                <div className="bg-white dark:bg-dark-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <MagneticButton
                    onClick={() => setSelectedProject(project.id)}
                    className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                  >
                    <Eye size={16} />
                    View Details
                  </MagneticButton>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-dark-100 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null
                
                return (
                  <div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <a
                          href={project.liveUrl}
                          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors flex items-center gap-2"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
      
      <GradualBlur
        position="top"
        height="8rem"
        strength={2.5}
        divCount={6}
        opacity={0.7}
      />
      
      <GradualBlur
        position="bottom"
        height="8rem"
        strength={2.5}
        divCount={6}
        opacity={0.7}
      />
    </section>
  )
}