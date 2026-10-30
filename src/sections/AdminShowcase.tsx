import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const COPY = {
  ko: {
    description:
      '소비자 앱과 완전히 분리된 내부 운영 툴. 데이터 테이블, 권한 분리, 집계 쿼리를 보여주기 위한 의도적인 포트폴리오 결과물이기도 합니다.',
    scope: [
      { title: 'Missions', body: '전체 상태의 미션 목록, 필터링. 멈춰있거나 방치된 요청은 관리자가 직접 취소.' },
      { title: 'Users', body: '가입자 목록. 문제가 있는 계정을 비활성화하고, 신규 히어로 신청을 승인.' },
      { title: 'Stats', body: '총 미션 수, 완료율, 가입 추이, 평균 히어로 평점 — 차트 없이 숫자 카드로만.' },
    ],
    ctaText: '읽기 전용 데모 계정으로 직접 로그인해서 둘러볼 수 있습니다. 쓰기 권한은 DB 정책 레벨에서 차단되어 있어요.',
    ctaButton: 'Live Demo 체험하기',
  },
  en: {
    description:
      "An internal ops tool, fully separate from the consumer app. Also a deliberate portfolio artifact — built to show data tables, authorization boundaries, and aggregate queries.",
    scope: [
      { title: 'Missions', body: 'Full mission list across every status, with filters. Admins can manually cancel stuck or abandoned requests.' },
      { title: 'Users', body: 'Signup list. Disable problem accounts and approve new Hero applications.' },
      { title: 'Stats', body: 'Total missions, completion rate, signup trend, average Hero rating — number cards only, no charts.' },
    ],
    ctaText: 'Log in with a read-only demo account and explore it yourself. Write access is blocked at the database policy level.',
    ctaButton: 'Try the Live Demo',
  },
}

export default function AdminShowcase() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section id="admin" className="py-20">
      <Container>
        <SectionHeading eyebrow="Operations" title="Admin Dashboard" description={t.description} />

        <img
          src="/screens/admin/dashboard.png"
          alt="NotMe Admin dashboard — KPI cards, mission status summary, recent missions table"
          className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800"
        />

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {t.scope.map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl bg-primary/10 p-5">
          <p className="text-sm text-ink dark:text-neutral-100">{t.ctaText}</p>
          <a
            href="https://not-me-admin.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="ml-auto shrink-0 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {t.ctaButton}
          </a>
        </div>
      </Container>
    </section>
  )
}
