'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'
import AnimatedBackground from './AnimatedBackground'
import HyperSpeedText from './HyperSpeedText'
import BlurReveal from './BlurReveal'
import MagneticButton from './MagneticButton'
import GradualBlur from './GradualBlur';
// Image imports removed - using direct paths

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          
          {/* Left Side - Dark Mode Image */}
          {theme === 'dark' && (
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
              className="order-2 lg:order-1 flex justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.6 }
                }}
                className="relative group"
              >
                <Image
                  src="/assets/images/Mohit Elante photo.jpeg"
                  alt="Mohit Singh Rawat"
                  width={400}
                  height={400}
                  className="w-80 h-80 object-cover object-center rounded-full shadow-2xl border-4 border-purple-500/50 group-hover:border-cyan-400/70 transition-all duration-500"
                  priority
                />
              </motion.div>
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center lg:text-left order-1 ${theme === 'light' ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <BlurReveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <HyperSpeedText 
                  text="Mohit Singh Rawat" 
                  className="gradient-text"
                />
              </h1>
            </BlurReveal>

            <BlurReveal delay={0.4}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
                Frontend Developer & React Specialist
              </p>
            </BlurReveal>

            <BlurReveal delay={0.6}>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about crafting beautiful user interfaces and interactive web experiences. 
                I specialize in React, Next.js, and modern frontend technologies to bring designs to life.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <MagneticButton
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 animate-glow"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Hire Me
                </MagneticButton>
                <MagneticButton
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-dark-100 transition-all duration-300"
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects
                </MagneticButton>
              </div>
            </BlurReveal>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start space-x-6 mb-12"
            >
              <a
                href="https://github.com/mohit-singh-rawat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-dark-100 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohit-singh-rawat-2a1112299/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-dark-100 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:rawat.mohitsingh7455@gmail.com"
                className="p-3 bg-gray-100 dark:bg-dark-100 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Light Mode Image */}
          {theme === 'light' && (
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
              className="order-2 lg:order-2 flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 2, -2, 0],
                  transition: { duration: 0.6 }
                }}
                className="relative group"
              >
                <Image
                  src="/assets/images/Mohit Portfolio photo.jpeg"
                  alt="Mohit Singh Rawat"
                  width={400}
                  height={400}
                  className="w-80 h-80 object-cover object-center rounded-full shadow-2xl border-4 border-blue-500/50 group-hover:border-purple-400/70 transition-all duration-500"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <ArrowDown className="animate-bounce text-gray-400" size={32} />
      </motion.div>
      
      <GradualBlur
        position="bottom"
        height="12rem"
        strength={8}
        divCount={10}
        opacity={1}
      />
    </section>
  )
}