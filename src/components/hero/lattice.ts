// Geometry for the hero "Engineering Core" — shared by the WebGL scene and
// the static SVG fallback so both render the same sculpture. Pure math, no
// three.js import, so the fallback can use it without pulling in WebGL code.

export type Vec3 = [number, number, number]

export const NODE_COUNT = 42
export const LATTICE_RADIUS = 2.15
export const NEIGHBOURS = 2
// Every Nth node carries the brand accent
export const ACCENT_EVERY = 7

// Camera shared by both renderers so the projection matches
export const CAMERA_Z = 7
export const CAMERA_FOV = 40

// Small deterministic PRNG — the sculpture looks the same on every visit
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const distSq = (a: Vec3, b: Vec3) =>
  (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2

/** Fibonacci-sphere nodes with radial jitter, each linked to its nearest neighbours */
export function buildLattice() {
  const rand = mulberry32(7)
  const golden = Math.PI * (3 - Math.sqrt(5))
  const nodes: Vec3[] = []

  for (let i = 0; i < NODE_COUNT; i++) {
    const y = 1 - (i / (NODE_COUNT - 1)) * 2
    const ring = Math.sqrt(1 - y * y)
    const theta = golden * i
    const r = LATTICE_RADIUS * (0.86 + rand() * 0.26)
    nodes.push([Math.cos(theta) * ring * r, y * r, Math.sin(theta) * ring * r])
  }

  const seen = new Set<string>()
  const edges: [number, number][] = []
  nodes.forEach((node, i) => {
    nodes
      .map((other, j) => ({ j, d: distSq(node, other) }))
      .filter(({ j }) => j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, NEIGHBOURS)
      .forEach(({ j }) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`
        if (seen.has(key)) return
        seen.add(key)
        edges.push([i, j])
      })
  })

  return { nodes, edges }
}

/** Unit icosahedron (12 vertices, 30 edges) — the fallback's core silhouette */
export function buildIcosahedron(radius: number) {
  const t = (1 + Math.sqrt(5)) / 2
  const raw: Vec3[] = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ]
  const scale = radius / Math.hypot(1, t)
  const vertices = raw.map((v) => v.map((c) => c * scale) as Vec3)

  // Icosahedron edges are exactly the vertex pairs at the minimum distance
  const edgeSq = (2 * scale) ** 2
  const edges: [number, number][] = []
  for (let i = 0; i < vertices.length; i++)
    for (let j = i + 1; j < vertices.length; j++)
      if (Math.abs(distSq(vertices[i], vertices[j]) - edgeSq) < 1e-6)
        edges.push([i, j])

  return { vertices, edges }
}
