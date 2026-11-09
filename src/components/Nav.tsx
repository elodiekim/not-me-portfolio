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
          <button
            type="button"
            role="switch"
            aria-checked={lang === 'en'}
            aria-label={lang === 'ko' ? 'Switch language to English' : '언어를 한국어로 전환'}
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="flex items-center gap-2 py-1"
          >
            <span className={`font-mono text-[11px] transition-colors ${lang === 'ko' ? 'text-ink dark:text-neutral-100' : 'text-neutral-400 dark:text-neutral-600'}`}>KO</span>
            <span className="relative h-4 w-[34px] shrink-0 rounded-full border-[1.5px] border-ink dark:border-neutral-100">
              <span
                className={`absolute top-[1px] left-[1px] h-[10px] w-[10px] rounded-full bg-ink transition-transform duration-150 dark:bg-neutral-100 ${lang === 'en' ? 'translate-x-4' : ''}`}
              />
            </span>
            <span className={`font-mono text-[11px] transition-colors ${lang === 'en' ? 'text-ink dark:text-neutral-100' : 'text-neutral-400 dark:text-neutral-600'}`}>EN</span>
          </button>
          <Button href="https://not-me-admin.vercel.app" target="_blank" rel="noreferrer" size="sm" variant="secondary">
            Live Demo
          </Button>
        </div>
      </Container>
    </header>
  )
}
