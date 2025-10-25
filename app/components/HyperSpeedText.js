'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HyperSpeedText({ text, className = '' }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 50 + Math.random() * 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.span>
  )
}