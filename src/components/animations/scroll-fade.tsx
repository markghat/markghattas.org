"use client"

import { motion } from "framer-motion"
import { ReactNode, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface ScrollFadeProps {
  children: ReactNode
  threshold?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export function ScrollFade({
  children,
  threshold = 0.1,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollFadeProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setHasAnimated(true)
    }
  }, [inView])

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      animate={
        inView || hasAnimated
          ? {
              opacity: 1,
              y: 0,
              x: 0,
            }
          : {}
      }
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
