import { useEffect, useRef, type VideoHTMLAttributes } from 'react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

// React sets `muted` as a DOM property, not an HTML attribute, so by the time the
// browser's autoplay gate checks for it, `autoplay` has often already fired and been
// silently rejected (the element isn't muted yet as far as that one-time check sees).
// Calling play() ourselves once mounted — after the muted property is definitely
// applied — sidesteps the race entirely.
function AutoplayVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    ref.current?.play().catch(() => {})
  }, [])

  return <video ref={ref} {...props} />
}

const USER_FLOW = {
  ko: [
    { src: '/screens/user-flow/01-request.png', label: '요청하기', desc: '문제 종류와 위치를 보내면 주변 히어로에게 요청이 전달됩니다.' },
    { src: '/screens/user-flow/02-searching.png', label: '매칭 중', desc: '수락 전까지 요청 상태를 확인합니다.' },
    { src: '/screens/user-flow/03-mission-status.png', label: '진행 확인', desc: '수락된 히어로와 미션 상태를 확인합니다.' },
    { src: '/screens/user-flow/04-complete-review.png', label: '완료와 리뷰', desc: '완료 후 경험을 기록합니다.' },
  ],
  en: [
    { src: '/screens/user-flow/01-request.png', label: 'Create Request', desc: 'Picks a weird problem (cockroach removal) and submits the request in seconds.' },
    { src: '/screens/user-flow/02-searching.png', label: 'Finding a Hero', desc: 'Waits while NotMe matches the request with a nearby Hero in real time.' },
    { src: '/screens/user-flow/03-mission-status.png', label: 'Mission Status', desc: "Tracks the Hero's progress live, from accepted to on the way." },
    { src: '/screens/user-flow/04-complete-review.png', label: 'Complete & Review', desc: 'Rates the Hero and leaves a review once the mission is done.' },
  ],
}

const HERO_FLOW = {
  ko: [
    { src: '/screens/hero-flow/01-nearby-missions.png', label: '근처 미션 목록', desc: '근처에 올라온 요청들을 둘러보고 도울 미션을 고릅니다.' },
    { src: '/screens/hero-flow/02-mission-detail.png', label: '미션 상세', desc: '리워드·요청자·위치를 확인한 뒤 미션을 수락합니다.' },
    { src: '/screens/hero-flow/03-active-mission.png', label: '진행 중 미션', desc: '이동 중 상태를 실시간으로 업데이트합니다.' },
    { src: '/screens/hero-flow/04-reward-earned.png', label: '리워드 획득', desc: '미션을 완료하면 바로 리워드를 받습니다.' },
  ],
  en: [
    { src: '/screens/hero-flow/01-nearby-missions.png', label: 'Nearby Missions', desc: 'Browses nearby open requests and picks one to help with.' },
    { src: '/screens/hero-flow/02-mission-detail.png', label: 'Mission Detail', desc: 'Reviews the reward, requester, and location before accepting.' },
    { src: '/screens/hero-flow/03-active-mission.png', label: 'Active Mission', desc: 'Updates status in real time as the Hero heads to the location.' },
    { src: '/screens/hero-flow/04-reward-earned.png', label: 'Reward Earned', desc: 'Collects the reward the moment the mission is marked complete.' },
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

function ScreenGrid({ title, screens }: { title: string; screens: { src: string; label: string; desc: string }[] }) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold text-neutral-500 dark:text-neutral-400">{title}</h3>
      <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-4">
        {screens.map((screen, i) => (
          <figure key={screen.src} className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <img src={screen.src} alt={screen.label} width={780} height={1688} className="w-full" loading="lazy" />
            <figcaption className="border-t border-neutral-200 bg-neutral-50 px-3 py-3 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                {String(i + 1).padStart(2, '0')} · {screen.label}
              </div>
              <p className="mt-1 text-[11px] leading-snug break-keep text-neutral-500 dark:text-neutral-400">{screen.desc}</p>
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
    <section id="walkthrough" className="scroll-mt-14 bg-neutral-50 py-20 dark:bg-neutral-900/40">
      <Container>
        <SectionHeading eyebrow="Product" title={t.title} description={t.description} />

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">{t.userFlow}</h3>
            <div className="mx-auto w-full max-w-[280px] rounded-2xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
              <AutoplayVideo src="/videos/user-flow.mp4" width={390} height={844} muted loop playsInline className="w-full rounded-lg" />
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">{t.heroFlow}</h3>
            <div className="mx-auto w-full max-w-[280px] rounded-2xl border border-neutral-200 bg-white p-3 dark:border-neutral-800 dark:bg-neutral-950">
              <AutoplayVideo src="/videos/hero-flow.mp4" width={390} height={844} muted loop playsInline className="w-full rounded-lg" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-12">
          <ScreenGrid title={t.userFlow} screens={USER_FLOW[lang]} />
          <ScreenGrid title={t.heroFlow} screens={HERO_FLOW[lang]} />
        </div>
      </Container>
    </section>
  )
}
