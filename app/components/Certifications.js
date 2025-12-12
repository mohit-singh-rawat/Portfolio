'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, Download, Trophy, Target, Zap, Users, Code, BookOpen, Star, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

import BlurReveal from './BlurReveal'
import MagneticButton from './MagneticButton'
import GradualBlur from './GradualBlur'

export default function Certifications() {
  const [hoveredCert, setHoveredCert] = useState(null)
  const [hoveredAchievement, setHoveredAchievement] = useState(null)
  const [particles, setParticles] = useState([])

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10
    }))
    setParticles(newParticles)
  }, [])

  const certifications = [
    {
      id: 1,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: '2023',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-teal-900/20',
      skills: ['React', 'Hooks', 'Redux', 'Context API'],
      level: 'Advanced',
      hours: '40+ Hours'
    },
    {
      id: 2,
      title: 'Next.js & React',
      issuer: 'Udemy',
      date: '2023',
      icon: '▲',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20',
      skills: ['Next.js', 'SSR', 'SSG', 'API Routes'],
      level: 'Expert',
      hours: '35+ Hours'
    },
    {
      id: 3,
      title: 'JavaScript Algorithms',
      issuer: 'freeCodeCamp',
      date: '2022',
      icon: '🎯',
      color: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      level: 'Advanced',
      hours: '30+ Hours'
    },
    {
      id: 4,
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2022',
      icon: '📱',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20',
      skills: ['HTML5', 'CSS3', 'Responsive Design'],
      level: 'Expert',
      hours: '25+ Hours'
    }
  ]

  const achievements = [
    { 
      icon: Trophy, 
      emoji: '🏆', 
      label: 'Projects Delivered', 
      value: '9+',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      description: 'Successfully completed projects'
    },
    { 
      icon: Star, 
      emoji: '⭐', 
      label: 'Client Satisfaction', 
      value: '98%',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      description: 'Average client rating'
    },
    { 
      icon: Zap, 
      emoji: '🚀', 
      label: 'Performance Boost', 
      value: '40%',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      description: 'Average performance improvement'
    },
    { 
      icon: Users, 
      emoji: '💼', 
      label: 'Years Experience', 
      value: '2+',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      description: 'Professional development experience'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-dark-300 dark:via-dark-300 dark:to-dark-200 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.3, 1, 1.3]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <BlurReveal className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <motion.div
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-4 -right-4 text-2xl"
            >
              ✨
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="text-gray-900 dark:text-white">Certifications & </span>
              <span className="gradient-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional certifications and key achievements that showcase my expertise
          </motion.p>
        </BlurReveal>

        {/* Achievements Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredAchievement(index)}
                onHoverEnd={() => setHoveredAchievement(null)}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${achievement.bgColor} backdrop-blur-sm border border-white/30 dark:border-gray-700/30 p-6 text-center cursor-pointer group`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                animate={{
                  rotateY: hoveredAchievement === index ? 10 : 0,
                  rotateX: hoveredAchievement === index ? 5 : 0,
                  scale: hoveredAchievement === index ? 1.05 : 1,
                  y: hoveredAchievement === index ? -10 : 0
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 rounded-2xl`}
                  animate={{ opacity: hoveredAchievement === index ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Icon */}
                <motion.div
                  animate={{
                    y: hoveredAchievement === index ? [-2, 2, -2] : 0,
                    rotate: hoveredAchievement === index ? [0, 5, -5, 0] : 0
                  }}
                  transition={{
                    duration: 2,
                    repeat: hoveredAchievement === index ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                  className="relative z-10 mb-4"
                >
                  <div className="relative">
                    <motion.div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.div
                      className="absolute -top-2 -right-2 text-2xl"
                      animate={{
                        scale: hoveredAchievement === index ? [1, 1.3, 1] : 1,
                        rotate: hoveredAchievement === index ? [0, 180, 360] : 0
                      }}
                      transition={{
                        duration: 1,
                        repeat: hoveredAchievement === index ? Infinity : 0
                      }}
                    >
                      {achievement.emoji}
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div 
                  className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}
                  animate={{
                    scale: hoveredAchievement === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.value}
                </motion.div>
                <div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {achievement.label}
                </div>
                <motion.div 
                  className="text-xs text-gray-600 dark:text-gray-400"
                  animate={{
                    opacity: hoveredAchievement === index ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {achievement.description}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredCert(cert.id)}
              onHoverEnd={() => setHoveredCert(null)}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${cert.bgGradient} backdrop-blur-sm border border-white/30 dark:border-gray-700/30 p-6 cursor-pointer group`}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              animate={{
                rotateY: hoveredCert === cert.id ? 8 : 0,
                rotateX: hoveredCert === cert.id ? 8 : 0,
                scale: hoveredCert === cert.id ? 1.05 : 1,
                y: hoveredCert === cert.id ? -15 : 0
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Animated Border */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 rounded-2xl`}
                animate={{ opacity: hoveredCert === cert.id ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Certificate Badge */}
              <motion.div
                animate={{
                  rotate: hoveredCert === cert.id ? [0, 360] : 0
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut"
                }}
                className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>

              {/* Floating Sparkles */}
              <AnimatePresence>
                {hoveredCert === cert.id && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: [0, (i - 1) * 30],
                          y: [0, -20 - i * 10]
                        }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 1
                        }}
                        className="absolute top-4 left-4 pointer-events-none"
                      >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>

              <div className="relative z-10">
                {/* Icon and Level */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className="text-5xl"
                    animate={{
                      scale: hoveredCert === cert.id ? 1.2 : 1,
                      rotate: hoveredCert === cert.id ? [0, 10, -10, 0] : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {cert.icon}
                  </motion.div>
                  <motion.div
                    className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cert.color} text-white shadow-md`}
                    animate={{
                      scale: hoveredCert === cert.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {cert.level}
                  </motion.div>
                </div>

                <motion.h3 
                  className="font-bold text-gray-900 dark:text-white mb-3 text-lg leading-tight"
                  animate={{
                    color: hoveredCert === cert.id ? '#6366f1' : undefined
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {cert.title}
                </motion.h3>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cert.date} | {cert.hours}
                    </p>
                  </div>
                  <motion.div
                    animate={{
                      rotate: hoveredCert === cert.id ? 360 : 0
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <BookOpen className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>

                <motion.div 
                  className="flex flex-wrap gap-2"
                  animate={{
                    y: hoveredCert === cert.id ? -2 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {cert.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-3 py-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200/50 dark:border-gray-600/50 hover:text-white transition-all duration-300 ${
                        cert.color === 'from-blue-500 to-cyan-500' ? 'hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500' :
                        cert.color === 'from-green-500 to-emerald-500' ? 'hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500' :
                        cert.color === 'from-purple-500 to-pink-500' ? 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' :
                        cert.color === 'from-orange-500 to-red-500' ? 'hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500' :
                        cert.color === 'from-indigo-500 to-purple-500' ? 'hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500' :
                        'hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          {/* Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"
          />

          <div className="relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-white/30 dark:border-gray-700/30">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to work together?
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Download my resume or connect with me on LinkedIn to discuss opportunities
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <MagneticButton
                onClick={async () => {
                  try {
                    const response = await fetch('/resume.html');
                    const htmlContent = await response.text();
                    
                    const pdfResponse = await fetch('/api/generate-pdf', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({ html: htmlContent })
                    });
                    
                    if (pdfResponse.ok) {
                      const blob = await pdfResponse.blob();
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'Mohit_Singh_Rawat_Resume_Updated.pdf';
                      document.body.appendChild(a);
                      a.click();
                      window.URL.revokeObjectURL(url);
                      document.body.removeChild(a);
                    }
                  } catch (error) {
                    console.error('Error downloading resume:', error);
                  }
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  initial={false}
                />
                <motion.div
                  className="relative z-10"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Download className="w-5 h-5" />
                </motion.div>
                <span className="relative z-10">Download Resume</span>
              </MagneticButton>
              
              <MagneticButton
                onClick={() => window.open('https://www.linkedin.com/in/mohit-singh-rawat-2a1112299/', '_blank')}
                className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.div>
                View LinkedIn
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <GradualBlur position="top" height="6rem" strength={2} divCount={5} opacity={0.6} />
      <GradualBlur position="bottom" height="6rem" strength={2} divCount={5} opacity={0.6} />
    </section>
  )
}
