import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const USER_FLOW = {
  ko: [
    { src: '/screens/user-flow/01-request.png', label: '요청 생성' },
    { src: '/screens/user-flow/02-searching.png', label: '히어로 찾는 중' },
    { src: '/screens/user-flow/03-mission-status.png', label: '미션 진행 상태' },
    { src: '/screens/user-flow/04-complete-review.png', label: '완료 & 리뷰' },
  ],
  en: [
    { src: '/screens/user-flow/01-request.png', label: 'Create Request' },
    { src: '/screens/user-flow/02-searching.png', label: 'Finding a Hero' },
    { src: '/screens/user-flow/03-mission-status.png', label: 'Mission Status' },
    { src: '/screens/user-flow/04-complete-review.png', label: 'Complete & Review' },
  ],
}

const HERO_FLOW = {
  ko: [
    { src: '/screens/hero-flow/01-nearby-missions.png', label: '근처 미션 목록' },
    { src: '/screens/hero-flow/02-mission-detail.png', label: '미션 상세' },
    { src: '/screens/hero-flow/03-active-mission.png', label: '진행 중 미션' },
    { src: '/screens/hero-flow/04-reward-earned.png', label: '리워드 획득' },
  ],
  en: [
    { src: '/screens/hero-flow/01-nearby-missions.png', label: 'Nearby Missions' },
    { src: '/screens/hero-flow/02-mission-detail.png', label: 'Mission Detail' },
    { src: '/screens/hero-flow/03-active-mission.png', label: 'Active Mission' },
    { src: '/screens/hero-flow/04-reward-earned.png', label: 'Reward Earned' },
  ],
}

const COPY = {
  ko: { title: 'User & Hero 플로우', description: '요청 → 매칭 → 완료 → 리뷰까지, 두 역할의 전체 루프가 실제 Supabase 데이터로 동작합니다.', userFlow: 'User 플로우', heroFlow: 'Hero 플로우' },
  en: {
    title: 'User & Hero Flow',
    description: 'Request → match → complete → review — the full loop for both roles runs on real Supabase data.',
    userFlow: 'User Flow',
    heroFlow: 'Hero Flow',
  },
}

function ScreenGrid({ title, screens }: { title: string; screens: { src: string; label: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-neutral-500 dark:text-neutral-400">{title}</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {screens.map((screen) => (
          <figure key={screen.src} className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <img src={screen.src} alt={screen.label} className="w-full" loading="lazy" />
            <figcaption className="bg-neutral-50 px-3 py-2 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
              {screen.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function Walkthrough() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section id="walkthrough" className="bg-neutral-50 py-20 dark:bg-neutral-900/40">
      <Container>
        <SectionHeading eyebrow="Product" title={t.title} description={t.description} />

        <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <video src="/videos/side-by-side.mp4" autoPlay muted loop playsInline className="w-full" />
        </div>

        <div className="mt-12 grid gap-10">
          <ScreenGrid title={t.userFlow} screens={USER_FLOW[lang]} />
          <ScreenGrid title={t.heroFlow} screens={HERO_FLOW[lang]} />
        </div>
      </Container>
    </section>
  )
}
