import Container from '../components/Container'
import { useLanguage } from '../i18n/LanguageContext'

const COPY = {
  ko: {
    headline: '바퀴벌레 제거 요청에서 시작한 온디맨드 마켓플레이스',
    subcopy: '기획, 디자인, 앱, 운영 어드민까지 — 혼자 만든 풀스택 MVP.',
    primaryCta: '앱 플로우 보기',
  },
  en: {
    headline: 'An on-demand marketplace, starting from cockroach removal requests',
    subcopy: 'Product, design, the app, and the ops admin — a solo full-stack MVP.',
    primaryCta: 'View App Flow',
  },
}

export default function Hero() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section id="top" className="pt-10 pb-14 sm:pt-16 sm:pb-20">
      <Container className="grid items-center gap-10 sm:grid-cols-2 sm:gap-12">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <img src="/logo/brand-logo.png" alt="NotMe" width={740} height={246} className="h-8 w-auto" />
            <span className="text-sm font-semibold text-primary-dark">Uber for Weird Problems</span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{t.headline}</h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">{t.subcopy}</p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:items-start">
            <a
              href="#walkthrough"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              {t.primaryCta}
            </a>
            <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <a
                href="https://not-me-admin.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 transition-colors hover:text-neutral-900 hover:underline dark:hover:text-neutral-100"
              >
                Admin Demo
              </a>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <a
                href="https://github.com/elodiekim/not-me"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 transition-colors hover:text-neutral-900 hover:underline dark:hover:text-neutral-100"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center sm:justify-end">
          <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl" aria-hidden />
          <img
            src="/screens/home-hero.png"
            alt="NotMe home screen — request help for a cockroach in seconds"
            width={390}
            height={844}
            className="w-full max-w-[280px] rounded-[2rem] border border-neutral-200 shadow-xl dark:border-neutral-800"
          />
        </div>
      </Container>
    </section>
  )
}
