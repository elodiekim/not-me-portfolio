import Container from '../components/Container'
import { useLanguage } from '../i18n/LanguageContext'

const COPY = {
  ko: { tagline: 'NotMe — 개인 사이드 프로젝트입니다.', builtBy: 'Built solo by' },
  en: { tagline: 'NotMe — a personal side project.', builtBy: 'Built solo by' },
}

export default function Footer() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <footer className="border-t border-neutral-200 py-12 dark:border-neutral-800">
      <Container className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {t.builtBy} <span className="font-semibold text-neutral-900 dark:text-neutral-100">Elodie</span>
        </p>
        <div className="flex gap-6 font-mono text-xs">
          <a href="https://www.linkedin.com/in/elodie-sujung" target="_blank" rel="noreferrer" className="hover:text-primary-dark">
            LinkedIn
          </a>
          <a href="https://github.com/elodiekim/not-me" target="_blank" rel="noreferrer" className="hover:text-primary-dark">
            notme-app
          </a>
          <a href="https://github.com/elodiekim/not-me-admin" target="_blank" rel="noreferrer" className="hover:text-primary-dark">
            notme-admin
          </a>
          <a href="mailto:elodiekim93@gmail.com" className="hover:text-primary-dark">
            elodiekim93@gmail.com
          </a>
        </div>
        <p className="text-xs text-neutral-400">{t.tagline}</p>
      </Container>
    </footer>
  )
}
