'use client'

import { useEffect, useState } from 'react'

const QUERY = '(hover: hover) and (pointer: fine)'

/**
 * True on mouse/trackpad devices. Pointer-driven effects (magnetic, tilt,
 * spotlights) gate on this so touch devices get plain, predictable UI.
 */
export function useFinePointer() {
  const [fine, setFine] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const update = () => setFine(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return fine
}
