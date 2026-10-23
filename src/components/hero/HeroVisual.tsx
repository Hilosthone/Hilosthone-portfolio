'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useReducedMotion } from 'framer-motion'
import { useTheme } from 'next-themes'
import CoreFallback from './CoreFallback'

// three.js + R3F live in their own chunk and never block first paint
const EngineeringCore = dynamic(() => import('./EngineeringCore'), {
  ssr: false,
})

type Mode = 'static' | 'webgl'

type DeviceNavigator = Navigator & {
  connection?: { saveData?: boolean }
  deviceMemory?: number
}

/**
 * Decides whether this device should get the real-time scene. Data-saver,
 * low-end touch devices and software-rendered WebGL keep the static SVG.
 */
function canRenderWebGL() {
  const nav = navigator as DeviceNavigator
  if (nav.connection?.saveData) return false

  // Phones keep the SVG: touch can't steer the sculpture anyway, so the real-
  // time scene would only cost battery, data and main-thread time
  const coarse = window.matchMedia('(pointer: coarse)').matches
  if (coarse && window.matchMedia('(max-width: 767px)').matches) return false
  if (coarse && ((nav.hardwareConcurrency ?? 8) <= 4 || (nav.deviceMemory ?? 8) < 4))
    return false

  try {
    const canvas = document.createElement('canvas')
    const opts = { failIfMajorPerformanceCaveat: true }
    return !!(canvas.getContext('webgl2', opts) ?? canvas.getContext('webgl', opts))
  } catch {
    return false
  }
}

/**
 * Decorative hero sculpture. The SVG version paints immediately (and is the
 * permanent fallback); the WebGL version mounts when the browser is idle and
 * crossfades in once its first frame is drawn.
 */
export default function HeroVisual({ className = '' }: { className?: string }) {
  const reduceMotion = useReducedMotion()
  const { resolvedTheme } = useTheme()
  const [mode, setMode] = useState<Mode>('static')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (reduceMotion || !canRenderWebGL()) {
      setMode('static')
      setReady(false)
      return
    }

    // Wait for the page to finish loading, then for a genuinely idle moment,
    // so the 3D chunk never competes with hydration or first interaction
    let idleId = 0
    let timerId = 0
    const start = () => setMode('webgl')
    const scheduleIdle = () => {
      if ('requestIdleCallback' in window) idleId = window.requestIdleCallback(start)
      else timerId = setTimeout(start, 1000) as unknown as number
    }

    if (document.readyState === 'complete') scheduleIdle()
    else window.addEventListener('load', scheduleIdle, { once: true })

    return () => {
      window.removeEventListener('load', scheduleIdle)
      if (idleId) window.cancelIdleCallback(idleId)
      if (timerId) clearTimeout(timerId)
    }
  }, [reduceMotion])

  const fallBack = () => {
    setMode('static')
    setReady(false)
  }

  return (
    <div aria-hidden className={`pointer-events-none select-none ${className}`}>
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <CoreFallback />
      </div>

      {mode === 'webgl' && (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            ready ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <EngineeringCore
            dark={resolvedTheme === 'dark'}
            onReady={() => setReady(true)}
            onLost={fallBack}
          />
        </div>
      )}
    </div>
  )
}
