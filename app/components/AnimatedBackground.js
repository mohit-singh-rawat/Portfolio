'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(147,51,234,0.4) 50%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
      
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.6) 0%, rgba(59,130,246,0.3) 50%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          x: mousePosition.x * 0.5 - 100,
          y: mousePosition.y * 0.5 - 100,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 150 }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
          }}
          animate={{
            y: [null, -20, 20, -10, 0],
            x: [null, 10, -10, 5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}