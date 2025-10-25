'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function BlurReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        filter: 'blur(10px)', 
        opacity: 0, 
        y: 50 
      }}
      animate={isInView ? { 
        filter: 'blur(0px)', 
        opacity: 1, 
        y: 0 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}