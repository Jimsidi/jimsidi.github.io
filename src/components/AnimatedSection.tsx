import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Props {
  children: React.ReactNode
  delay?: number
}

function AnimatedSection({ children, delay = 0 }: Props) {
  const [ref, inView] = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
