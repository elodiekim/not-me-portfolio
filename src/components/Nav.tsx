import Container from './Container'
import { useLanguage } from '../i18n/LanguageContext'

const LINKS = {
  ko: [
    { href: '#problem', label: '기획' },
    { href: '#walkthrough', label: '앱' },
    { href: '#admin', label: '어드민' },
    { href: '#engineering', label: '엔지니어링' },
    { href: '#stack', label: '스택' },
  ],
  en: [
    { href: '#problem', label: 'Why' },
    { href: '#walkthrough', label: 'App' },
    { href: '#admin', label: 'Admin' },
    { href: '#engineering', label: 'Engineering' },
    { href: '#stack', label: 'Stack' },
  ],
}

export default function Nav() {
  const { lang, setLang } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <Container className="flex h-14 items-center justify-between">
        <a href="#top" className="rounded-md px-1.5 py-1 dark:bg-white">
          <img src="/logo/brand-logo.png" alt="NotMe" className="h-6 w-auto" />
        </a>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 sm:flex dark:text-neutral-400">
          {LINKS[lang].map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border border-neutral-300 text-xs font-semibold dark:border-neutral-700">
            <button
              type="button"
              onClick={() => setLang('ko')}
              className={`px-2.5 py-1 transition-colors ${lang === 'ko' ? 'bg-primary text-ink' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'}`}
            >
              KO
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 transition-colors ${lang === 'en' ? 'bg-primary text-ink' : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'}`}
            >
              EN
            </button>
          </div>
          <a
            href="https://not-me-admin.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Live Demo
          </a>
        </div>
      </Container>
    </header>
  )
}
