'use client'

import { useRef, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { HOVER_LIFT, SPRING, TILT } from '@/lib/animations'
import { useFinePointer } from '@/hooks/useFinePointer'

/**
 * Shared card surface: low-angle cursor-following tilt, hover lift, and a
 * soft highlight that tracks the pointer. Pointer position lives in motion
 * values / CSS variables, so moving the mouse never re-renders React.
 * Touch devices and reduced-motion users get a static card.
 */
export default function TiltCard({
  children,
  className = '',
  max = TILT.max,
  lift = true,
  glare = true,
}: {
  children: ReactNode
  className?: string
  max?: number
  lift?: boolean
  glare?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const finePointer = useFinePointer()
  const enabled = finePointer && !reduceMotion

  // 0..1 across the card; 0.5 is centre (flat)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), SPRING.tilt)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), SPRING.tilt)

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!enabled || !el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    px.set(x)
    py.set(y)
    el.style.setProperty('--glare-x', `${x * 100}%`)
    el.style.setProperty('--glare-y', `${y * 100}%`)
  }

  const reset = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      whileHover={enabled && lift ? HOVER_LIFT : undefined}
      transition={SPRING.soft}
      style={
        enabled
          ? { rotateX, rotateY, transformPerspective: TILT.perspective }
          : undefined
      }
      className={`group/tilt relative ${className}`}
    >
      {children}
      {glare && enabled && (
        <span aria-hidden className='tilt-glare' />
      )}
    </motion.div>
  )
}
