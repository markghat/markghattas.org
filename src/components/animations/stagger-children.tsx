"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  threshold?: number
}

export function StaggerChildren({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  threshold = 0.1,
}: StaggerChildrenProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function StaggerItem({ children, className = "", direction = "up" }: StaggerItemProps) {
  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  }

  const item = {
    hidden: { opacity: 0, ...directionOffset[direction] },
    show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
