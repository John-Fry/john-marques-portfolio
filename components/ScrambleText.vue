<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{ text: string; duration?: number }>(), {
  duration: 850
})

const displayedText = ref(props.text)
const scaleX = ref(1)
const root = ref<HTMLElement | null>(null)
const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789#?'
let animationFrame = 0

function cancelAnimation() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  animationFrame = 0
}

function animateText() {
  cancelAnimation()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !root.value) {
    displayedText.value = props.text
    scaleX.value = 1
    return
  }

  const characters = Array.from(props.text)
  const context = document.createElement('canvas').getContext('2d')
  if (!context) return

  context.font = getComputedStyle(root.value).font
  const targetWidth = context.measureText(props.text).width
  const startedAt = performance.now()

  const tick = (now: number) => {
    const progress = Math.min((now - startedAt) / props.duration, 1)
    displayedText.value = characters.map((character, index) => {
      const revealAt = 0.12 + (index / characters.length) * 0.76
      if (progress >= revealAt || progress === 1) return character
      return alphabet[Math.floor(Math.random() * alphabet.length)]
    }).join('')

    const currentWidth = context.measureText(displayedText.value).width
    scaleX.value = currentWidth ? targetWidth / currentWidth : 1

    if (progress < 1) animationFrame = requestAnimationFrame(tick)
    else {
      displayedText.value = props.text
      scaleX.value = 1
      animationFrame = 0
    }
  }

  animationFrame = requestAnimationFrame(tick)
}

onMounted(animateText)
watch(() => props.text, animateText)
onBeforeUnmount(cancelAnimation)
</script>

<template>
  <span ref="root" class="scramble-text" :aria-label="text" @pointerenter="animateText">
    <span class="scramble-text__reserve" aria-hidden="true">{{ text }}</span>
    <span class="scramble-text__visual" aria-hidden="true" :style="{ transform: `scaleX(${scaleX})` }">{{ displayedText }}</span>
    <span class="scramble-text__sr-only">{{ text }}</span>
  </span>
</template>
