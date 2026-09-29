<script setup lang="ts">
import { motion } from 'motion-v'
import { capabilities, copy, experience, projects } from '~/data/portfolio'

const { locale, setLocale } = useLocale()
const text = computed(() => copy[locale.value])
const navTargets = ['#work', '#experience', '#capabilities', '#contact']

useHead(() => ({ htmlAttrs: { lang: locale.value === 'pt' ? 'pt-BR' : 'en' } }))
</script>

<template>
  <main>
    <header class="site-header container">
      <a href="#top" class="wordmark" aria-label="John Marques home">JM<span>.</span></a>
      <nav aria-label="Primary navigation">
        <a v-for="(item, index) in text.nav" :key="item" :href="navTargets[index]">{{ item }}</a>
      </nav>
      <div class="header-actions">
        <a href="https://github.com/John-Fry" target="_blank" rel="noreferrer" class="github-link">GitHub <span>↗</span></a>
        <div class="language-switcher" aria-label="Language selector">
          <button :class="{ active: locale === 'en' }" @click="setLocale('en')">EN</button>
          <span>/</span>
          <button :class="{ active: locale === 'pt' }" @click="setLocale('pt')">PT</button>
        </div>
      </div>
    </header>

    <section id="top" class="hero container">
      <HeroMesh />
      <motion.div class="hero-copy" :initial="{ opacity: 0, y: 28 }" :animate="{ opacity: 1, y: 0 }" :transition="{ duration: 0.7, ease: 'easeOut' }">
        <p class="eyebrow"><span class="status-dot"></span>{{ text.availability }}</p>
        <p class="figure-label">{{ text.heroKicker }}</p>
        <h1>{{ text.heroTitle.before }}<ScrambleText :text="text.heroTitle.accent" />{{ text.heroTitle.after }}<br><span class="hero-title-ending">{{ text.heroTitle.ending }}</span><span class="hero-cursor" aria-hidden="true">.</span><span class="scramble-text__sr-only">.</span></h1>
        <p class="hero-text">{{ text.heroText }}</p>
        <div class="hero-actions">
          <a href="#work" class="button button-solid">{{ text.viewWork }} <span>↓</span></a>
          <a href="#contact" class="button button-quiet">{{ text.contact }} <span>↗</span></a>
        </div>
      </motion.div>
      <div class="hero-visual">
        <div class="iris iris-one"></div><div class="iris iris-two"></div><div class="iris-core"></div>
      </div>
      <div class="hero-bottom"><span>SCROLL TO EXPLORE</span><span>BASED IN BRAZIL · AVAILABLE REMOTELY</span></div>
    </section>

    <section id="work" class="section container">
      <div class="section-heading">
        <div><p class="figure-label">01 / {{ text.expertise }}</p><h2>{{ text.projects }}</h2></div>
        <p>{{ text.projectsText }}</p>
      </div>
      <div class="project-list">
        <motion.article v-for="project in projects" :key="project.title.en" class="project" :initial="{ opacity: 0, y: 25 }" :while-in-view="{ opacity: 1, y: 0 }" :viewport="{ once: true, amount: 0.25 }" :while-hover="{ y: -4 }">
          <div class="project-art"><LineFigure :variant="project.figure as 'layers' | 'modules' | 'sequence' | 'tic-tac-toe'" /></div>
          <div class="project-info"><p class="figure-label">{{ project.index }} / {{ project.type[locale] }}</p><h3>{{ project.title[locale] }}</h3><p>{{ project.description[locale] }}</p><ul><li v-for="tag in project.tags" :key="tag">{{ tag }}</li></ul></div>
          <a :href="project.url" target="_blank" rel="noreferrer" class="project-link" :aria-label="`${text.viewProject}: ${project.title[locale]}`">↗</a>
        </motion.article>
      </div>
    </section>

    <section id="experience" class="section section-band">
      <div class="container"><div class="section-heading"><div><p class="figure-label">02 / CAREER LOG</p><h2>{{ text.experience }}</h2></div><p>{{ text.experienceText }}</p></div>
        <div class="timeline">
          <motion.article v-for="item in experience" :key="item.role.en + item.period.en" class="timeline-item" :initial="{ opacity: 0, y: 18 }" :while-in-view="{ opacity: 1, y: 0 }" :viewport="{ once: true, amount: 0.15 }">
            <p class="timeline-period">
              {{ item.period[locale] }}
              <span v-if="item.duration">{{ item.duration[locale] }}</span>
            </p>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>{{ item.role[locale] }}</h3>
              <p class="company">{{ item.company[locale] }} <span>· {{ item.context[locale] }}</span></p>
              <p class="timeline-summary">{{ item.note[locale] }}</p>
              <ul class="timeline-highlights"><li v-for="highlight in item.highlights[locale]" :key="highlight">{{ highlight }}</li></ul>
              <ul class="timeline-tags"><li v-for="tag in item.tags" :key="tag">{{ tag }}</li></ul>
            </div>
          </motion.article>
        </div>
      </div>
    </section>

    <section id="capabilities" class="section container">
      <div class="section-heading"><div><p class="figure-label">03 / TOOLKIT</p><h2>{{ text.capabilities }}</h2></div><p>{{ text.capabilitiesText }}</p></div>
      <div class="capability-grid"><article v-for="item in capabilities" :key="item.label" class="capability"><p class="figure-label">{{ item.label }}</p><LineFigure :variant="item.figure as 'layers' | 'modules' | 'sequence' | 'tic-tac-toe'" /><h3>{{ item.title[locale] }}</h3><p>{{ item.text[locale] }}</p></article></div>
    </section>

    <section id="contact" class="contact-section container"><p class="figure-label">04 / CONTACT</p><h2>{{ text.contactTitle.replace(/\.$/, '') }}<span class="hero-cursor" aria-hidden="true">.</span><span class="scramble-text__sr-only">.</span></h2><p>{{ text.contactText }}</p><a class="contact-email" href="https://www.linkedin.com/in/john-marques-818710217/" target="_blank" rel="noreferrer">{{ locale === 'pt' ? 'Vamos conversar no LinkedIn' : 'Let’s connect on LinkedIn' }} <span>↗</span></a><div class="contact-links"><a href="https://github.com/John-Fry" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></section>
    <footer class="container"><span>© {{ new Date().getFullYear() }} John Marques</span><span>{{ text.footer.replace(/\.$/, '') }}<span class="accent-period">.</span></span></footer>
  </main>
</template>
