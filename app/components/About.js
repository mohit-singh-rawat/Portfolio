'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap, Smartphone } from 'lucide-react'
import BlurReveal from './BlurReveal'
import ShapeBlur from './ShapeBlur'
import GradualBlur from './GradualBlur'

export default function About() {
  const skills = [
    'React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'Redux Thunk',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion', 'Material UI', 'React Bootstrap', 
    'Git', 'Responsive Design', 'UI/UX Design', 'Frontend Development', 'Web Animations'
  ]

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Expert in React, Next.js, and modern JavaScript frameworks'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful interfaces with modern design principles'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Modern Animations',
      description: 'Smooth animations and micro-interactions with Framer Motion'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Design',
      description: 'Mobile-first approach with modern UI/UX principles'
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-dark-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <BlurReveal className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900 dark:text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            I'm a passionate frontend developer with expertise in building modern web applications. 
            Currently working as a Web Developer at RowthTech, I specialize in creating stunning user interfaces 
            and interactive experiences using React, Next.js, and modern frontend technologies.
          </p>
        </BlurReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <BlurReveal delay={0.2}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">My Journey</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
              With a strong foundation in frontend technologies, I've been crafting 
              beautiful user interfaces that make a difference. My experience spans from building interactive 
              React components to developing performant Next.js applications with stunning animations.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm particularly passionate about modern UI/UX design, smooth animations, and creating 
              intuitive user experiences that delight users and solve real-world problems.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <ShapeBlur key={index}>
                <div className="p-4 sm:p-6 bg-white dark:bg-dark-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8">{feature.icon}</div>
                  </div>
                  <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base text-gray-900 dark:text-white">{feature.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </ShapeBlur>
            ))}
          </BlurReveal>
        </div>

        <BlurReveal delay={0.6}>
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-gray-900 dark:text-white">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-0">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-full text-xs sm:text-sm font-medium hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </BlurReveal>
      </div>
      
      <GradualBlur
        position="top"
        height="6rem"
        strength={2}
        divCount={5}
        opacity={0.6}
      />
      
      <GradualBlur
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        opacity={0.6}
      />
    </section>
  )
}