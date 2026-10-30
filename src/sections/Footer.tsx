import Container from '../components/Container'
import { useLanguage } from '../i18n/LanguageContext'

const COPY = {
  ko: { tagline: 'NotMe — 개인 사이드 프로젝트입니다.' },
  en: { tagline: 'NotMe — a personal side project.' },
}

export default function Footer() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <footer className="border-t border-neutral-200 py-12 dark:border-neutral-800">
      <Container className="flex flex-col items-center gap-4 text-center">
        <div className="flex gap-6 text-sm font-medium">
          <a href="https://github.com/elodiekim/not-me" target="_blank" rel="noreferrer" className="hover:text-primary-dark">
            GitHub — notme-app
          </a>
          <a href="https://github.com/elodiekim/not-me-admin" target="_blank" rel="noreferrer" className="hover:text-primary-dark">
            GitHub — notme-admin
          </a>
          <a href="mailto:elodiekim93@gmail.com" className="hover:text-primary-dark">
            Email
          </a>
        </div>
        <p className="text-xs text-neutral-400">{t.tagline}</p>
      </Container>
    </footer>
  )
}
