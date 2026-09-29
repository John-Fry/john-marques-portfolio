export type Locale = 'en' | 'pt'

export function useLocale() {
  const locale = useState<Locale>('portfolio-locale', () => 'en')

  const setLocale = (value: Locale) => {
    locale.value = value
    if (import.meta.client) localStorage.setItem('portfolio-locale', value)
  }

  onMounted(() => {
    const stored = localStorage.getItem('portfolio-locale') as Locale | null
    if (stored === 'en' || stored === 'pt') locale.value = stored
  })

  return { locale, setLocale }
}
