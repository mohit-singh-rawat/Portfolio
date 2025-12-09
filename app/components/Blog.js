'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, Tag, Eye, Heart, Share2 } from 'lucide-react'
import { useState, useEffect } from 'react'
import BlurReveal from './BlurReveal'
import GradualBlur from './GradualBlur'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredPost, setHoveredPost] = useState(null)
  const [filteredPosts, setFilteredPosts] = useState([])

  const categories = ['All', 'React', 'Next.js', 'JavaScript', 'Web Development', 'UI/UX']

  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern React Applications with Next.js 14',
      excerpt: 'Explore the latest features of Next.js 14 and how to build performant React applications with server components and app router.',
      category: 'Next.js',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      tags: ['Next.js', 'React', 'Server Components'],
      views: 1250,
      likes: 89,
      color: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
    },
    {
      id: 2,
      title: 'Advanced React Hooks: Custom Hooks for Better Code',
      excerpt: 'Learn how to create powerful custom React hooks that make your code more reusable, maintainable, and elegant.',
      category: 'React',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      tags: ['React', 'Hooks', 'JavaScript'],
      views: 980,
      likes: 67,
      color: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox: When to Use Which',
      excerpt: 'A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each layout method.',
      category: 'Web Development',
      date: '2024-01-05',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      tags: ['CSS', 'Layout', 'Web Development'],
      views: 756,
      likes: 45,
      color: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20'
    },
    {
      id: 4,
      title: 'Optimizing Web Performance: A Developer\'s Guide',
      excerpt: 'Essential techniques for improving web performance, from code splitting to image optimization and caching strategies.',
      category: 'Web Development',
      date: '2023-12-28',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      tags: ['Performance', 'Optimization', 'Web Development'],
      views: 1420,
      likes: 112,
      color: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      id: 5,
      title: 'React State Management: Redux vs Zustand vs Context',
      excerpt: 'Compare different state management solutions for React applications and learn when to use each approach.',
      category: 'React',
      date: '2023-12-20',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      tags: ['React', 'State Management', 'Redux'],
      views: 892,
      likes: 73,
      color: 'from-cyan-500 to-blue-600',
      bgGradient: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20'
    },
    {
      id: 6,
      title: 'Modern JavaScript ES2024 Features You Should Know',
      excerpt: 'Discover the latest JavaScript features and how they can improve your development workflow and code quality.',
      category: 'JavaScript',
      date: '2023-12-15',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop',
      tags: ['JavaScript', 'ES2024', 'Modern JS'],
      views: 1156,
      likes: 94,
      color: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
    },
    {
      id: 7,
      title: 'Design Systems: Building Consistent UI Components',
      excerpt: 'Learn how to create and maintain a design system that ensures consistency across your applications.',
      category: 'UI/UX',
      date: '2023-12-10',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
      tags: ['Design Systems', 'UI/UX', 'Components'],
      views: 634,
      likes: 52,
      color: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20'
    },
    {
      id: 8,
      title: 'Next.js App Router: Complete Migration Guide',
      excerpt: 'Step-by-step guide to migrating from Pages Router to App Router in Next.js with practical examples.',
      category: 'Next.js',
      date: '2023-12-05',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop',
      tags: ['Next.js', 'App Router', 'Migration'],
      views: 1089,
      likes: 87,
      color: 'from-indigo-500 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20'
    }
  ]

  useEffect(() => {
    const filtered = selectedCategory === 'All' 
      ? blogPosts 
      : blogPosts.filter(post => post.category === selectedCategory)
    setFilteredPosts(filtered)
  }, [selectedCategory])

  // Initialize filteredPosts on component mount
  useEffect(() => {
    setFilteredPosts(blogPosts)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-dark-300 dark:via-dark-200 dark:to-dark-100 relative overflow-hidden">
      {/* Animated Background */}
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
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
            <span className="text-gray-900 dark:text-white">Latest </span>
            <span className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Blog Posts</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights, tutorials, and thoughts on web development, React, and modern frontend technologies
          </motion.p>
        </BlurReveal>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-600'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                layout
                onHoverStart={() => setHoveredPost(post.id)}
                onHoverEnd={() => setHoveredPost(null)}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${post.bgGradient} backdrop-blur-sm border border-white/30 dark:border-gray-700/30 cursor-pointer group`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                animate={{
                  rotateY: hoveredPost === post.id ? 5 : 0,
                  rotateX: hoveredPost === post.id ? 5 : 0,
                  scale: hoveredPost === post.id ? 1.02 : 1,
                  y: hoveredPost === post.id ? -10 : 0
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${post.color} opacity-0 rounded-2xl`}
                  animate={{ opacity: hoveredPost === post.id ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    animate={{
                      scale: hoveredPost === post.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    animate={{
                      opacity: hoveredPost === post.id ? 0.8 : 0.4
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${post.color} text-white`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span suppressHydrationWarning>{new Date(post.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats and Read More */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    
                    <motion.div
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium cursor-pointer"
                      animate={{
                        x: hoveredPost === post.id ? 5 : 0
                      }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add your navigation logic here
                        console.log('Reading post:', post.title);
                        // Example: router.push(`/blog/${post.id}`) or window.open(post.url)
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Posts Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen className="w-5 h-5" />
            <span>View All Posts</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}