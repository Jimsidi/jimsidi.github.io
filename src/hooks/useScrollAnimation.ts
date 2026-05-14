import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollAnimation() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return [ref, inView] as const
}
