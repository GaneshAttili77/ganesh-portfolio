import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useSeen } from '../hooks/useSeen'

type Props = { children: ReactNode; delay?: number; y?: number; className?: string }

export default function Reveal({ children, delay = 0, y = 32, className }: Props) {
  const [ref, seen] = useSeen<HTMLDivElement>()
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={seen ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
