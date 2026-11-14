import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

type Vector3Ref = React.MutableRefObject<THREE.Vector3>

const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec2 vUv;
  void main() {
    vNormal = normal;
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec2 vUv;
  void main() {
    vec3 n = normalize(vNormal);
    float rim = pow(0.55 - dot(n, vec3(0.0, 1.0, 0.0)), 3.2);
    vec3 c1 = vec3(0.56, 0.50, 0.96); // soft lavender
    vec3 c2 = vec3(0.68, 0.84, 1.00); // soft sky
    vec3 c3 = vec3(0.96, 0.93, 1.00); // cream
    float h = sin(vUv.y * 3.4 + uTime * 0.25) * 0.5 + 0.5;
    vec3 base = mix(c1, c2, vUv.y);
    base = mix(base, c3, h);
    vec3 color = base * 0.82 + n * 0.14 + vec3(rim * 0.35);
    float pulse = 0.96 + 0.04 * sin(uTime * 1.4);
    gl_FragColor = vec4(color * pulse, 1.0);
  }
`

// Runs inside <Canvas>, so R3F hooks are valid here (React is unified via symlinks).
// Both the shader time uniform and the gentle mouse-reactive camera drift are
// advanced in the same frame loop. The material is kept in a ref so its uniform
// is mutated through the ref rather than through the prop itself.
function OrbitAnimator({ material, mouse }: { material: THREE.ShaderMaterial; mouse: Vector3Ref }) {
  const materialRef = useRef(material)

  useFrame((state) => {
    const m = materialRef.current
    if (!m) return
    m.uniforms.uTime.value = state.clock.elapsedTime
    const cam = state.camera as THREE.PerspectiveCamera
    // very gentle mouse-reactive camera drift
    const tx = THREE.MathUtils.lerp(cam.position.x, mouse.current.x * 12, 0.07)
    const ty = THREE.MathUtils.lerp(cam.position.y, -mouse.current.y * 12, 0.07)
    cam.position.x = tx
    cam.position.y = ty
  })
  return null
}

export function SoftOrbit() {
  const mouse = useRef(new THREE.Vector3(0, 0, 0))
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(24, 3), [])
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 } },
        vertexShader,
        fragmentShader,
        side: THREE.DoubleSide,
      }),
    [],
  )
  const meshRef = useRef<THREE.Mesh<THREE.IcosahedronGeometry, THREE.ShaderMaterial> | null>(null)

  return (
    <div
      className="canvas-wrap"
      style={{ width: '100%', maxWidth: 640, height: 580, margin: '0 auto 40px' }}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouse.current.set(
          (e.clientX - rect.left) / rect.width - 0.5,
          (e.clientY - rect.top) / rect.height - 0.5,
          0,
        )
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 92], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%', display: 'block', background: 'transparent' }}
      >
        <OrbitControls
          minDistance={64}
          maxDistance={160}
          autoRotate
          autoRotateSpeed={0.16}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[45, 55, 45]} intensity={1.1} />
        <pointLight position={[-45, -30, 50]} intensity={0.45} />
        <OrbitAnimator material={material} mouse={mouse} />
        <mesh ref={meshRef} geometry={geometry} material={material} />
      </Canvas>
    </div>
  )
}
