import Container from './Container'
import Button from './Button'
import { useLanguage } from '../i18n/LanguageContext'

const LINKS = {
  ko: [
    { href: '#walkthrough', label: '앱' },
    { href: '#admin', label: '어드민' },
    { href: '#engineering', label: '엔지니어링' },
    { href: '#problem', label: '기획' },
    { href: '#stack', label: '스택' },
  ],
  en: [
    { href: '#walkthrough', label: 'App' },
    { href: '#admin', label: 'Admin' },
    { href: '#engineering', label: 'Engineering' },
    { href: '#problem', label: 'Why' },
    { href: '#stack', label: 'Stack' },
  ],
}

export default function Nav() {
  const { lang, setLang } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <Container className="flex h-14 items-center justify-between">
        <a href="#top">
          <img src="/logo/brand-logo.png" alt="NotMe" width={740} height={246} className="h-6 w-auto dark:hidden" />
          <img src="/logo/brand-logo-dark.png" alt="NotMe" width={740} height={246} className="hidden h-6 w-auto dark:block" />
        </a>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 sm:flex dark:text-neutral-400">
          {LINKS[lang].map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-sm font-semibold">
            <button
              type="button"
              onClick={() => setLang('ko')}
              aria-pressed={lang === 'ko'}
              className={`px-1 py-1 transition-colors ${lang === 'ko' ? 'text-ink dark:text-neutral-100' : 'text-neutral-400 hover:text-neutral-600 dark:text-neutral-600 dark:hover:text-neutral-400'}`}
            >
              KO
            </button>
            <span className="text-neutral-300 dark:text-neutral-700">·</span>
            <button
              type="button"
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-1 py-1 transition-colors ${lang === 'en' ? 'text-ink dark:text-neutral-100' : 'text-neutral-400 hover:text-neutral-600 dark:text-neutral-600 dark:hover:text-neutral-400'}`}
            >
              EN
            </button>
          </div>
          <Button href="https://not-me-admin.vercel.app" target="_blank" rel="noreferrer" size="sm">
            Live Demo
          </Button>
        </div>
      </Container>
    </header>
  )
}
