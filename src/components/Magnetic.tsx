'use client'

import { useRef, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { SPRING } from '@/lib/animations'
import { useFinePointer } from '@/hooks/useFinePointer'

/**
 * Gently pulls its child toward the cursor. Only active on fine pointers
 * (mouse/trackpad) and disabled when the user prefers reduced motion.
 * Motion values are used so cursor tracking never triggers a React re-render.
 */
export default function Magnetic({
  children,
  strength = 0.25,
  className = '',
}: {
  children: ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const finePointer = useFinePointer()

  const x = useSpring(useMotionValue(0), SPRING.magnetic)
  const y = useSpring(useMotionValue(0), SPRING.magnetic)

  const enabled = finePointer && !reduceMotion

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={enabled ? { x, y } : undefined}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  )
}
