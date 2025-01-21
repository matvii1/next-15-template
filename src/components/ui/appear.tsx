'use client'
import { motion } from 'motion/react'

export default function Appear({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      transition={{ duration: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 100, damping: 14 },
        },
      }}
      viewport={{ once: true }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  )
}
