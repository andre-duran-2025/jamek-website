"use client"

import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter({ 
  value, 
  duration = 2,
  suffix = '',
  prefix = '',
  className = '' 
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  
  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0
  })
  
  const display = useTransform(spring, (current) => {
    return Math.round(current).toLocaleString()
  })

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}