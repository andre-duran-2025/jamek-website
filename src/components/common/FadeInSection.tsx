"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  duration?: number
}

export default function FadeInSection({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  duration = 0.6
}: FadeInSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50, opacity: 0 }
      case 'down':
        return { y: -50, opacity: 0 }
      case 'left':
        return { x: -50, opacity: 0 }
      case 'right':
        return { x: 50, opacity: 0 }
      case 'none':
        return { opacity: 0 }
      default:
        return { y: 50, opacity: 0 }
    }
  }

  const getFinalPosition = () => {
    return { 
      x: 0, 
      y: 0, 
      opacity: 1 
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}