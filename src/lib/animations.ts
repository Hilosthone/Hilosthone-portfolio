// Shared motion tokens — every section pulls timing/easing from here so the
// whole portfolio moves with one consistent "feel".
import type { Transition, Variants } from 'framer-motion'

// Soft expo-out curve: quick start, long silky settle
export const EASE_OUT = [0.22, 1, 0.36, 1] as const

export const DURATION = {
  fast: 0.25,
  base: 0.5,
  slow: 0.8,
} as const

export const STAGGER = 0.08

export const SPRING = {
  // UI feedback (buttons, pills, icons)
  snappy: { type: 'spring', stiffness: 400, damping: 30, mass: 0.6 },
  // Cards and larger surfaces
  soft: { type: 'spring', stiffness: 220, damping: 24, mass: 0.8 },
  // Magnetic follow — loose but never wobbly
  magnetic: { type: 'spring', stiffness: 180, damping: 16, mass: 0.4 },
  // Cursor-following tilt — heavier so cards feel like physical objects
  tilt: { stiffness: 150, damping: 18, mass: 0.6 },
} as const satisfies Record<string, Transition>

// Card depth limits — kept low so text never skews out of readability
export const TILT = {
  max: 5, // degrees
  perspective: 1000, // px
} as const

// Hover lift shared by every card type
export const HOVER_LIFT = { y: -6 } as const
export const PRESS = { scale: 0.97 } as const

export const BASE_TRANSITION: Transition = {
  duration: DURATION.base,
  ease: EASE_OUT,
}

// Reveal once, slightly before the element is fully in view
export const VIEWPORT = { once: true, margin: '-80px' } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_OUT },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: BASE_TRANSITION },
}

// Horizontal entrance used by alternating layouts (timeline, about)
export const fadeSide = (from: 'left' | 'right'): Variants => ({
  hidden: { opacity: 0, x: from === 'left' ? -24 : 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE_OUT },
  },
})

export const staggerContainer = (
  stagger: number = STAGGER,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
})
