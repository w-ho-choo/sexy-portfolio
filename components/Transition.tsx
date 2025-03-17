'use client'

import { AnimatePresence, motion } from 'framer-motion'

export default function Transition({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
