import {
  ACCENT_EVERY,
  CAMERA_FOV,
  CAMERA_Z,
  buildIcosahedron,
  buildLattice,
  type Vec3,
} from './lattice'

// Static SVG rendering of the hero sculpture. Shown on first paint, while the
// WebGL scene loads, and permanently for reduced-motion / no-WebGL / low-power
// devices. Projected with the same camera as the 3D scene so the crossfade
// between the two is seamless.

const SIZE = 400
const HALF_HEIGHT = CAMERA_Z * Math.tan(((CAMERA_FOV / 2) * Math.PI) / 180)
const SCALE = SIZE / 2 / HALF_HEIGHT

// Fixed precision keeps server and client markup identical
const r1 = (n: number) => Math.round(n * 10) / 10

function project([x, y, z]: Vec3) {
  const p = CAMERA_Z / (CAMERA_Z - z)
  return { x: r1(SIZE / 2 + x * p * SCALE), y: r1(SIZE / 2 - y * p * SCALE), depth: z }
}

const lattice = buildLattice()
const latticePts = lattice.nodes.map(project)
const core = buildIcosahedron(1.15)
const corePts = core.vertices.map(project)

export default function CoreFallback({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={`h-full w-full motion-safe:animate-[core-breathe_9s_ease-in-out_infinite] ${className}`}
      aria-hidden
      focusable='false'
    >
      <g className='stroke-slate-400/40 dark:stroke-slate-500/35' strokeWidth={0.8}>
        {lattice.edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={latticePts[a].x}
            y1={latticePts[a].y}
            x2={latticePts[b].x}
            y2={latticePts[b].y}
          />
        ))}
      </g>

      <g className='stroke-red-600/50' strokeWidth={1.1} fill='none'>
        {core.edges.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={corePts[a].x}
            y1={corePts[a].y}
            x2={corePts[b].x}
            y2={corePts[b].y}
          />
        ))}
      </g>

      {latticePts.map((p, i) => {
        const accent = i % ACCENT_EVERY === 0
        // Nodes further from the camera are smaller and fainter
        const near = (p.depth + 2.5) / 5
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={r1((accent ? 3.6 : 2.6) * (0.7 + near * 0.5))}
            className={accent ? 'fill-red-600' : 'fill-slate-500 dark:fill-slate-300'}
            opacity={r1(0.45 + near * 0.5)}
          />
        )
      })}
    </svg>
  )
}
