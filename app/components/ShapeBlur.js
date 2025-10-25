'use client'

import { motion } from 'framer-motion'

export default function ShapeBlur({ children, className = '' }) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1.1,
          filter: 'blur(20px)'
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="relative z-10"
        whileHover={{ 
          filter: 'drop-shadow(0 10px 20px rgba(59, 130, 246, 0.3))'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}