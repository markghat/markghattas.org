"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
}

export function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}
