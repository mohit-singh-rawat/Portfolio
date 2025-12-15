'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight, Heart, ThumbsUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import BlurReveal from './BlurReveal'
import GradualBlur from './GradualBlur'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [autoPlay, setAutoPlay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'RowthTech Team',
      role: 'CTO, RowthTech',
      company: 'RowthTech',
      image: 'https://ui-avatars.com/api/?name=RT&background=3b82f6&color=fff&size=200',
      rating: 5,
      color: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20',
      text: 'Mohit is an exceptional frontend developer with deep expertise in React and Next.js. He delivered 9+ production applications with outstanding quality and performance. His attention to detail and modern UI/UX implementation skills are remarkable.',
      highlight: '9+ production applications',
      emoji: '🚀'
    },
    {
      id: 2,
      name: 'Healthcare Client',
      role: 'Product Manager',
      company: 'Probill EHR',
      image: 'https://ui-avatars.com/api/?name=HC&background=10b981&color=fff&size=200',
      rating: 5,
      color: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20',
      text: 'Working with Mohit on our healthcare platform was excellent. He implemented HIPAA-compliant features and delivered a robust EHR system. His technical skills and problem-solving abilities exceeded our expectations.',
      highlight: 'HIPAA-compliant features',
      emoji: '🏥'
    },
    {
      id: 3,
      name: 'E-commerce Client',
      role: 'Business Owner',
      company: 'Mozimo',
      image: 'https://ui-avatars.com/api/?name=EC&background=f59e0b&color=fff&size=200',
      rating: 5,
      color: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20',
      text: 'Mohit built our e-commerce platform with exceptional attention to user experience. The site is fast, responsive, and beautiful. Sales increased by 35% after launch. Highly recommended!',
      highlight: '35% sales increase',
      emoji: '🛒'
    },
    {
      id: 4,
      name: 'Fintech Client',
      role: 'CEO',
      company: 'AccountPro',
      image: 'https://ui-avatars.com/api/?name=FC&background=8b5cf6&color=fff&size=200',
      rating: 5,
      color: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-900/20 dark:via-indigo-900/20 dark:to-blue-900/20',
      text: 'Outstanding work on our financial management platform. Mohit delivered a complex application with clean code, excellent performance, and intuitive UI. A true professional!',
      highlight: 'clean code & performance',
      emoji: '💰'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
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
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-dark-200 dark:via-dark-200 dark:to-dark-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-60 -right-60 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.4]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-60 -left-60 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <BlurReveal className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-900 dark:text-white">Client </span>
            <span className="gradient-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Testimonials</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What clients and colleagues say about working with me
          </motion.p>
        </BlurReveal>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative mx-2 sm:mx-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: -45 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${testimonials[currentIndex].bgGradient} backdrop-blur-sm border border-white/30 dark:border-gray-700/30 shadow-2xl`}
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
              >
                {/* Floating Quote */}
                <motion.div
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Quote className="w-5 h-5 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                {/* Emoji Badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 sm:-top-6 left-4 sm:left-8 text-2xl sm:text-4xl bg-white dark:bg-gray-800 rounded-full p-2 sm:p-3 shadow-lg"
                >
                  {testimonials[currentIndex].emoji}
                </motion.div>

                <div className="pt-6 sm:pt-8">
                  <motion.p 
                    className="text-base sm:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6 sm:mb-8 italic font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <motion.div 
                      className="flex items-center gap-3 sm:gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <motion.img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-4 border-white shadow-lg flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="min-w-0">
                        <h4 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className={`text-xs sm:text-sm font-semibold bg-gradient-to-r ${testimonials[currentIndex].color} bg-clip-text text-transparent`}>
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="flex gap-1 self-start sm:self-auto"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                          whileHover={{ scale: 1.3, rotate: 180 }}
                        >
                          <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-6 sm:w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(testimonial.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br ${testimonial.bgGradient} backdrop-blur-sm border border-white/20 dark:border-gray-700/30 p-4 sm:p-6 cursor-pointer group`}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              animate={{
                rotateY: hoveredCard === testimonial.id ? 5 : 0,
                rotateX: hoveredCard === testimonial.id ? 5 : 0,
                scale: hoveredCard === testimonial.id ? 1.05 : 1,
                y: hoveredCard === testimonial.id ? -10 : 0
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} opacity-0 rounded-2xl`}
                animate={{ opacity: hoveredCard === testimonial.id ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Hearts */}
              <motion.div
                animate={{
                  y: [-2, 2, -2],
                  opacity: hoveredCard === testimonial.id ? 1 : 0
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-2 right-2"
              >
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow-md flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                    >
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <motion.p 
                  className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4"
                  animate={{ opacity: hoveredCard === testimonial.id ? 1 : 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  "{testimonial.text.substring(0, 100)}..."
                </motion.p>

                <motion.div
                  className="mt-3 sm:mt-4 flex items-center justify-between"
                  animate={{ y: hoveredCard === testimonial.id ? 0 : 10, opacity: hoveredCard === testimonial.id ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className={`text-xs font-semibold bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent truncate`}>
                    {testimonial.highlight}
                  </span>
                  <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <GradualBlur position="top" height="6rem" strength={2} divCount={5} opacity={0.6} />
      <GradualBlur position="bottom" height="6rem" strength={2} divCount={5} opacity={0.6} />
    </section>
  )
}
