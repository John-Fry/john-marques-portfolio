<script setup lang="ts">
import type * as ThreeTypes from 'three'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const host = ref<HTMLDivElement | null>(null)
const columns = 112
const rows = 84
const planeWidth = 72
const planeHeight = 54
const wellDepth = 14
const sigma = 11.5
const planeTilt = -1.05

const vertexShader = `
uniform float uDepth;
uniform float uSigma;
uniform float uTime;
varying float vField;

void main() {
  vec3 displaced = position;
  float distanceSquared = dot(position.xy, position.xy);
  float field = exp(-distanceSquared / (2.0 * uSigma * uSigma));
  float radius = sqrt(distanceSquared);
  float depthPulse = 1.0 + sin(uTime * 0.3) * 0.035;
  float waveBand = smoothstep(2.5, 7.0, radius) * (1.0 - smoothstep(14.0, 25.0, radius));
  float travelingWave = sin(radius * 0.72 - uTime * 0.72) * 0.62 * waveBand;
  float surfaceDrift = sin(position.x * 0.16 + position.y * 0.12 + uTime * 0.22) * 0.14;
  displaced.z = -uDepth * field * depthPulse + travelingWave + surfaceDrift * field;
  vField = field;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
`

const gridFragmentShader = `
uniform vec3 uBaseColor;
uniform vec3 uAccentColor;
uniform float uOpacity;
varying float vField;

void main() {
  float influence = smoothstep(0.03, 0.72, vField);
  vec3 color = mix(uBaseColor, uAccentColor, influence * 0.28);
  float alpha = uOpacity * (0.82 + influence * 0.18);
  gl_FragColor = vec4(color, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`

const glowFragmentShader = `
uniform vec3 uGlowColor;
uniform float uTime;
varying float vField;

void main() {
  float glow = vField * vField;
  float pulse = 0.88 + sin(uTime * 0.42) * 0.12;
  gl_FragColor = vec4(uGlowColor, glow * 0.1 * pulse);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`

let renderer: ThreeTypes.WebGLRenderer | undefined
let planeGeometry: ThreeTypes.PlaneGeometry | undefined
let lineGeometry: ThreeTypes.BufferGeometry | undefined
let glowMaterial: ThreeTypes.ShaderMaterial | undefined
let gridMaterial: ThreeTypes.ShaderMaterial | undefined
let resizeObserver: ResizeObserver | undefined
let intersectionObserver: IntersectionObserver | undefined
let scene: ThreeTypes.Scene | undefined
let camera: ThreeTypes.PerspectiveCamera | undefined
let meshGroup: ThreeTypes.Group | undefined
let animationFrame = 0
let elapsedTime = 0
let visible = true

function draw() {
  if (!renderer || !scene || !camera || !glowMaterial || !gridMaterial) return
  glowMaterial.uniforms.uTime.value = elapsedTime
  gridMaterial.uniforms.uTime.value = elapsedTime
  renderer.render(scene, camera)
}

function stopAnimation() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  animationFrame = 0
}

function animate(timestamp: number) {
  elapsedTime = timestamp * 0.001
  draw()
  if (visible && !document.hidden) animationFrame = requestAnimationFrame(animate)
  else animationFrame = 0
}

function syncAnimation() {
  stopAnimation()
  if (visible && !document.hidden) animationFrame = requestAnimationFrame(animate)
  else draw()
}

function createGridGeometry(THREE: typeof import('three'), source: ThreeTypes.PlaneGeometry) {
  const sourcePositions = source.getAttribute('position') as ThreeTypes.BufferAttribute
  const segments = columns * (rows + 1) + rows * (columns + 1)
  const positions = new Float32Array(segments * 2 * 3)
  let offset = 0

  const writeVertex = (index: number) => {
    positions[offset++] = sourcePositions.getX(index)
    positions[offset++] = sourcePositions.getY(index)
    positions[offset++] = sourcePositions.getZ(index)
  }

  for (let row = 0; row <= rows; row++) {
    for (let column = 0; column < columns; column++) {
      const start = row * (columns + 1) + column
      writeVertex(start)
      writeVertex(start + 1)
    }
  }

  for (let column = 0; column <= columns; column++) {
    for (let row = 0; row < rows; row++) {
      const start = row * (columns + 1) + column
      writeVertex(start)
      writeVertex(start + columns + 1)
    }
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.computeBoundingSphere()
  return geometry
}

onMounted(async () => {
  if (!host.value) return
  const THREE = await import('three')

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(40, 1, 0.1, 180)
  camera.position.set(0, 16, 34)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.setClearColor(0x000000, 0)
  renderer.domElement.setAttribute('aria-hidden', 'true')
  host.value.appendChild(renderer.domElement)

  planeGeometry = new THREE.PlaneGeometry(planeWidth, planeHeight, columns, rows)
  lineGeometry = createGridGeometry(THREE, planeGeometry)

  const displacementUniforms = {
    uDepth: { value: wellDepth },
    uSigma: { value: sigma },
    uTime: { value: 0 }
  }

  glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      ...displacementUniforms,
      uGlowColor: { value: new THREE.Color('#526641') }
    },
    vertexShader,
    fragmentShader: glowFragmentShader,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide
  })
  gridMaterial = new THREE.ShaderMaterial({
    uniforms: {
      ...displacementUniforms,
      uBaseColor: { value: new THREE.Color('#69745c') },
      uAccentColor: { value: new THREE.Color('#a5ca70') },
      uOpacity: { value: 0.34 }
    },
    vertexShader,
    fragmentShader: gridFragmentShader,
    transparent: true,
    depthWrite: false
  })

  meshGroup = new THREE.Group()
  meshGroup.rotation.x = planeTilt
  const glowSurface = new THREE.Mesh(planeGeometry, glowMaterial)
  glowSurface.renderOrder = 0
  const grid = new THREE.LineSegments(lineGeometry, gridMaterial)
  grid.frustumCulled = false
  grid.renderOrder = 1
  meshGroup.add(glowSurface, grid)
  scene.add(meshGroup)

  const render = () => {
    if (!host.value || !renderer || !camera || !meshGroup || !scene) return
    const width = host.value.clientWidth
    const height = host.value.clientHeight
    if (!width || !height) return

    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()

    const visual = host.value.parentElement?.querySelector('.hero-visual')
    const visualBounds = visual?.getBoundingClientRect()
    const hostBounds = host.value.getBoundingClientRect()
    if (visualBounds) {
      const centerX = visualBounds.left + visualBounds.width / 2 - hostBounds.left
      const centerY = visualBounds.top + visualBounds.height / 2 - hostBounds.top
      const ndcX = (centerX / width) * 2 - 1
      const ndcY = 1 - (centerY / height) * 2
      const rayPoint = new THREE.Vector3(ndcX, ndcY, 0.5).unproject(camera)
      const rayDirection = rayPoint.sub(camera.position).normalize()
      const focus = camera.position.clone().addScaledVector(rayDirection, camera.position.length())
      const wellOffset = new THREE.Vector3(0, 0, -wellDepth).applyEuler(meshGroup.rotation)
      meshGroup.position.copy(focus).sub(wellOffset)
    }

    draw()
  }

  resizeObserver = new ResizeObserver(render)
  resizeObserver.observe(host.value)
  const visual = host.value.parentElement?.querySelector('.hero-visual')
  if (visual) resizeObserver.observe(visual)
  intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    syncAnimation()
  })
  intersectionObserver.observe(host.value)
  document.addEventListener('visibilitychange', syncAnimation)
  render()
  syncAnimation()
})

onBeforeUnmount(() => {
  stopAnimation()
  resizeObserver?.disconnect()
  intersectionObserver?.disconnect()
  document.removeEventListener('visibilitychange', syncAnimation)
  planeGeometry?.dispose()
  lineGeometry?.dispose()
  glowMaterial?.dispose()
  gridMaterial?.dispose()
  renderer?.dispose()
})
</script>

<template>
  <div ref="host" class="hero-mesh" aria-hidden="true"></div>
</template>
