import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const COPY = {
  ko: {
    title: '핵심 기술 의사결정 3가지',
    description: 'Supabase RLS와 Postgres 트리거로 비즈니스 규칙을 데이터베이스 레벨에서 강제한 사례들.',
    highlights: [
      {
        title: '동시 수락 경쟁 상태 방지',
        body: '두 명의 히어로가 같은 미션을 동시에 수락할 수 없도록, 미션 수락을 "status가 아직 open일 때만 성공하는" 조건부 업데이트로 원자적으로 처리.',
      },
      {
        title: '독립된 두 개의 게이트: RLS + 트리거',
        body: 'RLS는 "누가 이 row를 쓸 수 있는가", 트리거는 "어떤 상태 전이가 유효한가"를 각각 담당하도록 분리. 완료된 미션은 관리자를 포함해 그 누구도 되돌릴 수 없고, 관리자의 강제 취소는 사용자의 취소 이력(신뢰 지표)을 오염시키지 않도록 별도로 로깅.',
      },
      {
        title: 'UI에서 숨기는 것은 보안이 아니다',
        body: '미승인 히어로에게 화면에서 요청 목록을 숨겨도, REST API를 직접 호출하면 요청자 주소를 그대로 가져올 수 있었던 구멍을 발견 — SELECT RLS 정책 자체에 승인 조건을 넣어 API 레벨에서 막음.',
      },
    ],
  },
  en: {
    title: '3 Key Engineering Decisions',
    description: 'Cases where business rules are enforced at the database level with Supabase RLS and Postgres triggers.',
    highlights: [
      {
        title: 'Preventing Concurrent-Accept Race Conditions',
        body: 'Two Heroes can never accept the same mission — claiming is an atomic conditional update that only succeeds while status is still open.',
      },
      {
        title: 'Two Independent Gates: RLS + Trigger',
        body: 'RLS answers "who can write this row," a trigger answers "which state transition is valid" — kept separate. Completed missions can\'t be reversed by anyone, admins included, and an admin\'s forced cancel is logged separately so it doesn\'t pollute the user\'s cancellation history (a trust signal).',
      },
      {
        title: "Hiding It In The UI Isn't Security",
        body: 'Hiding the request list from unapproved Heroes in the UI still left a hole: calling the REST API directly returned requester addresses anyway. Closed it by putting the approval check in the SELECT RLS policy itself, at the API level.',
      },
    ],
  },
}

export default function Engineering() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section id="engineering" className="scroll-mt-14 bg-neutral-50 py-20 dark:bg-neutral-900/40">
      <Container>
        <SectionHeading eyebrow="Engineering" title={t.title} description={t.description} />
        <div className="grid gap-6 sm:grid-cols-3">
          {t.highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
