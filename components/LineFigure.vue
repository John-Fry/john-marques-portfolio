<script setup lang="ts">
defineProps<{ variant: 'layers' | 'modules' | 'sequence' | 'tic-tac-toe' }>()
</script>

<template>
  <svg v-if="variant === 'layers'" viewBox="0 0 320 220" class="line-figure" aria-hidden="true">
    <path d="M160 28 272 91 160 154 48 91 160 28Z M48 112l112 63 112-63 M48 133l112 63 112-63" />
    <path d="M48 91v63l112 63 112-63V91 M160 154v63" class="faint" />
    <path d="M115 80c0-17 20-30 45-30s45 13 45 30M115 88h90M124 96h72" class="accent" />
  </svg>
  <svg v-else-if="variant === 'modules'" viewBox="0 0 320 220" class="line-figure" aria-hidden="true">
    <path d="m83 83 54-30 54 30v60l-54 30-54-30V83Zm85-42 54-30 54 30v60l-54 30-54-30V41ZM168 116l54-30 54 30v60l-54 30-54-30v-60Z" />
    <path d="m67 119 54-30 54 30v60l-54 30-54-30v-60Z" class="faint" />
    <path d="M125 75h24M210 34h24M210 109h24" class="accent" />
  </svg>
  <svg v-else-if="variant === 'tic-tac-toe'" viewBox="0 0 320 220" class="line-figure" aria-hidden="true">
    <path d="M127.33 32v156m65.34-156v156M62 84h196M62 136h196" />
    <path d="M150 48 170 68M170 48 150 68M215 152 235 172M235 152 215 172" class="accent" />
    <circle cx="94.67" cy="58" r="11" class="faint" />
    <circle cx="160" cy="110" r="11" class="faint" />
  </svg>
  <svg v-else viewBox="0 0 320 220" class="line-figure" aria-hidden="true">
    <path d="M47 170h208M65 158V90l32 18v50m-16 0V72l48 27v59m-16 0V52l64 36v70m-16 0V32l80 45v81" />
    <path d="M57 176h208M68 182h192" class="faint" />
    <path d="M74 153h182" class="accent" />
  </svg>
</template>
