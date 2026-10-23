'use client'

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  BufferGeometry,
  Color,
  EdgesGeometry,
  Float32BufferAttribute,
  IcosahedronGeometry,
  MathUtils,
  Object3D,
  SphereGeometry,
  type Group,
  type InstancedMesh,
  type Mesh,
} from 'three'
import {
  ACCENT_EVERY,
  CAMERA_FOV,
  CAMERA_Z,
  NODE_COUNT,
  buildLattice,
} from './lattice'

// Lazy-loaded hero sculpture: a satin faceted core inside a sparse
// neural-network lattice. Three draw calls for the sculpture, no shadows,
// no post-processing; rendering stops whenever the hero is off-screen.

const ACCENT = '#dc2626'

const PALETTE = {
  dark: {
    core: '#1e293b',
    node: '#cbd5e1',
    edge: '#94a3b8',
    edgeOpacity: 0.22,
    ambient: 0.35,
    key: 1.6,
    rim: 2.2,
  },
  light: {
    core: '#475569',
    node: '#475569',
    edge: '#64748b',
    edgeOpacity: 0.3,
    ambient: 0.8,
    key: 1.8,
    rim: 1.4,
  },
} as const

type Pointer = { x: number; y: number }

function Sculpture({
  dark,
  pointer,
}: {
  dark: boolean
  pointer: React.RefObject<Pointer>
}) {
  const tilt = useRef<Group>(null)
  const spin = useRef<Group>(null)
  const core = useRef<Mesh>(null)
  const nodesRef = useRef<InstancedMesh>(null)
  const palette = dark ? PALETTE.dark : PALETTE.light

  const { nodes, geometries } = useMemo(() => {
    const { nodes, edges } = buildLattice()
    const linePositions = edges.flatMap(([a, b]) => [...nodes[a], ...nodes[b]])
    const lines = new BufferGeometry()
    lines.setAttribute('position', new Float32BufferAttribute(linePositions, 3))

    const shellSource = new IcosahedronGeometry(1.32, 1)
    const shell = new EdgesGeometry(shellSource)
    shellSource.dispose()

    return {
      nodes,
      geometries: {
        core: new IcosahedronGeometry(1, 1),
        shell,
        node: new SphereGeometry(0.045, 12, 12),
        lines,
      },
    }
  }, [])

  // Geometries passed as props aren't auto-disposed by R3F
  useEffect(
    () => () => Object.values(geometries).forEach((g) => g.dispose()),
    [geometries]
  )

  // Instance transforms are static; colours follow the theme
  useLayoutEffect(() => {
    const mesh = nodesRef.current
    if (!mesh) return
    const dummy = new Object3D()
    const base = new Color(palette.node)
    const accent = new Color(ACCENT)
    nodes.forEach((p, i) => {
      const isAccent = i % ACCENT_EVERY === 0
      dummy.position.set(...p)
      dummy.scale.setScalar(isAccent ? 1.4 : 1)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      mesh.setColorAt(i, isAccent ? accent : base)
    })
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [nodes, palette.node])

  useFrame((_, delta) => {
    if (!tilt.current || !spin.current || !core.current) return
    // Clamp so a resumed tab doesn't jump
    const dt = Math.min(delta, 1 / 20)
    const { x, y } = pointer.current

    // Idle: slow continuous drift
    spin.current.rotation.y += dt * 0.12
    core.current.rotation.x += dt * 0.08

    // Pointer: critically-damped follow toward the cursor
    const t = tilt.current
    t.rotation.x = MathUtils.damp(t.rotation.x, y * 0.35, 3, dt)
    t.rotation.y = MathUtils.damp(t.rotation.y, x * 0.5, 3, dt)

    // Scroll parallax: drift up and recede as the hero leaves the viewport
    const progress = Math.min(window.scrollY / window.innerHeight, 1)
    t.position.y = MathUtils.damp(t.position.y, progress * 0.9, 4, dt)

    // Entrance: settle from slightly smaller
    const s = MathUtils.damp(t.scale.x, 1 - progress * 0.12, 2.5, dt)
    t.scale.setScalar(s)
  })

  return (
    <group ref={tilt} scale={0.85}>
      <group ref={spin}>
        <mesh ref={core} geometry={geometries.core}>
          <meshStandardMaterial
            color={palette.core}
            metalness={0.65}
            roughness={0.32}
            flatShading
          />
        </mesh>

        <lineSegments geometry={geometries.shell}>
          <lineBasicMaterial color={ACCENT} transparent opacity={0.4} />
        </lineSegments>

        <lineSegments geometry={geometries.lines}>
          <lineBasicMaterial
            color={palette.edge}
            transparent
            opacity={palette.edgeOpacity}
          />
        </lineSegments>

        <instancedMesh
          ref={nodesRef}
          args={[geometries.node, undefined, NODE_COUNT]}
        >
          <meshStandardMaterial metalness={0.2} roughness={0.5} />
        </instancedMesh>
      </group>
    </group>
  )
}

export default function EngineeringCore({
  dark,
  maxDpr = 1.5,
  onReady,
  onLost,
}: {
  dark: boolean
  maxDpr?: number
  onReady?: () => void
  onLost?: () => void
}) {
  const wrap = useRef<HTMLDivElement>(null)
  const pointer = useRef<Pointer>({ x: 0, y: 0 })
  const [visible, setVisible] = useState(true)
  const palette = dark ? PALETTE.dark : PALETTE.light

  // Stop the render loop entirely while the hero is scrolled away
  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Track the cursor across the whole viewport (the canvas itself sits behind
  // content and never receives pointer events). Mouse only — touch drags are
  // scrolls, not intent to steer the sculpture.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div ref={wrap} className='absolute inset-0'>
      <Canvas
        frameloop={visible ? 'always' : 'never'}
        dpr={[1, maxDpr]}
        camera={{ position: [0, 0, CAMERA_Z], fov: CAMERA_FOV }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener('webglcontextlost', () => onLost?.())
          // Reveal after the first frame has actually been drawn
          requestAnimationFrame(() => requestAnimationFrame(() => onReady?.()))
        }}
      >
        <ambientLight intensity={palette.ambient} />
        <directionalLight position={[3, 4, 5]} intensity={palette.key} />
        <directionalLight
          position={[-4, -2, -3]}
          intensity={palette.rim}
          color={ACCENT}
        />
        <Sculpture dark={dark} pointer={pointer} />
      </Canvas>
    </div>
  )
}
