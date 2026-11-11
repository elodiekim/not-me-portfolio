import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const COPY = {
  ko: {
    title: '가장 급하고, 가장 설명하기 어려운 순간부터',
    body1: '집 안에 바퀴벌레가 나타났을 때 필요한 건 검색 결과나 예약 폼이 아니라, 지금 바로 도움을 줄 수 있는 사람입니다.',
    body2: 'NotMe는 그 짧고 난감한 순간에 “내가 직접 해결하지 않아도 된다”는 선택지를 만드는 서비스로 시작했습니다.',
    quote: '"낯선 생활 문제를, 필요한 순간에 가까운 사람에게 맡길 수 있을까?"',
    closing:
      '첫 MVP에서는 바퀴벌레 제거 하나에만 집중했습니다. 요청부터 매칭, 완료, 리뷰까지의 한 흐름이 실제로 작동하는지 확인하는 것이 우선이었기 때문입니다.',
  },
  en: {
    title: (
      <>
        Starting with the moment that&apos;s most urgent
        <br />— and hardest to explain
      </>
    ),
    body1: "When a cockroach shows up in your home, what you need isn't search results or a booking form — it's someone who can help right now.",
    body2: "NotMe started as a way to offer one choice, in that short, awkward moment: you don't have to handle it yourself.",
    quote: '"Could an unfamiliar, everyday problem be handed off to someone nearby, right when you need it?"',
    closing:
      'The first MVP focused on just one thing: cockroach removal. What mattered most was proving that one loop — request, match, complete, review — actually works.',
  },
}

export default function Problem() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section id="problem" className="scroll-mt-14 py-20">
      <Container>
        <SectionHeading index="04" eyebrow="The starting point" title={t.title} />
        <div className="max-w-2xl space-y-4 text-pretty break-keep text-neutral-700 dark:text-neutral-300">
          <p>{t.body1}</p>
          <p>{t.body2}</p>
          <blockquote className="border-l-2 border-primary py-1 pl-6 text-lg font-medium text-ink dark:text-neutral-100">
            {t.quote}
          </blockquote>
          <p>{t.closing}</p>
        </div>
      </Container>
    </section>
  )
}
