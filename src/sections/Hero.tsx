import Container from '../components/Container'
import { useLanguage } from '../i18n/LanguageContext'

const COPY = {
  ko: {
    subcopy: (
      <>
        바퀴벌레 제거 요청 하나로 스코프를 좁힌 온디맨드 마켓플레이스 MVP.
        <br />
        기획부터 디자인, 소비자 앱, 운영 어드민까지 혼자 만들었습니다.
      </>
    ),
    watchDemo: '데모 영상 보기',
  },
  en: {
    subcopy: (
      <>
        An on-demand marketplace MVP scoped down to one request: cockroach removal.
        <br />I built it solo — product, design, the consumer app, and the ops admin dashboard.
      </>
    ),
    watchDemo: 'Watch Demo Video',
  },
}

export default function Hero() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section id="top" className="pt-20 pb-24 text-center sm:pt-28">
      <Container>
        <img src="/logo/notme-icon-512.png" alt="NotMe logo" className="mx-auto h-20 w-20 rounded-3xl shadow-lg" />
        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-6xl">NotMe</h1>
        <p className="mt-3 text-lg font-medium text-primary-dark sm:text-xl">Uber for Weird Problems</p>
        <p className="mx-auto mt-6 max-w-xl text-balance text-neutral-600 dark:text-neutral-400">{t.subcopy}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#walkthrough"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {t.watchDemo}
          </a>
          <a
            href="https://not-me-admin.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            Admin Live Demo
          </a>
          <a
            href="https://github.com/elodiekim/not-me"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            GitHub
          </a>
        </div>
      </Container>
    </section>
  )
}
