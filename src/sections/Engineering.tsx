import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const COPY = {
  ko: {
    title: '기술적 의사결정',
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
      {
        title: '서비스 롤 키 없는 운영 어드민',
        body: 'Admin 앱은 Supabase의 관리자 API를 전혀 쓰지 않고, profiles.is_admin 플래그 + RLS 정책만으로 권한 모델을 구성. 운영 프론트엔드가 민감한 시크릿을 들고 있을 필요가 없어짐.',
      },
      {
        title: '자기 자신에게 권한 상승 금지',
        body: '본인 프로필의 is_admin/is_active/hero_approved는 본인도, 다른 일반 유저도 못 바꾸게 — 관리자가 본인 행을 수정할 때도 트리거가 변경 가능한 컬럼을 화이트리스트로 제한.',
      },
      {
        title: '진짜 읽기 전용인 공개 데모 계정',
        body: '이 포트폴리오 사이트에 올라간 데모 로그인은 기존 admin 정책을 하나도 건드리지 않고, 쓰기 커맨드마다 restrictive 정책 하나씩만 추가해서 전체 쓰기 경로를 차단 — 지금 보고 있는 이 사이트 자체가 그 설계의 결과물.',
      },
    ],
  },
  en: {
    title: 'Engineering Decisions',
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
      {
        title: 'An Admin App With No Service-Role Key',
        body: "The admin app never touches Supabase's admin API — its entire authorization model is a profiles.is_admin flag plus RLS policies. The ops frontend never needs to hold a sensitive secret.",
      },
      {
        title: 'No Self-Escalation',
        body: "Nobody — not even an admin — can change their own is_admin/is_active/hero_approved. A trigger whitelists exactly which columns an admin may touch, even on their own row.",
      },
      {
        title: "A Public Demo Account That's Actually Read-Only",
        body: 'The demo login on this very site was added without touching a single existing admin policy — one restrictive policy per write command blocks every write path. This site is itself a product of that design.',
      },
    ],
  },
}

export default function Engineering() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section id="engineering" className="bg-neutral-50 py-20 dark:bg-neutral-900/40">
      <Container>
        <SectionHeading eyebrow="Engineering" title={t.title} description={t.description} />
        <div className="grid gap-6 sm:grid-cols-2">
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
