"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { motion } from "framer-motion"
import { Button } from "./button"
import { cn } from "../../lib/utils"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, variant = "default", size = "default", className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("relative overflow-hidden group", className)}
        {...props}
      >
        <motion.span
          className="absolute inset-0 bg-white/10 rounded-md"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.span
          className="relative z-10 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </Button>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"
