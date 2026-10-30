import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const COPY = {
  ko: {
    title: '왜 바퀴벌레 제거부터 시작했나',
    intro:
      'NotMe는 "이상하고 애매한 집안 문제"를 전부 다루는 걸 최종 목표로 하지만, MVP는 하나의 가설만 검증하도록 의도적으로 좁혔습니다.',
    quote: '"사람들은 바퀴벌레가 나타났을 때, 앱으로 즉시 근처 사람에게 제거를 요청할 의향이 있는가?"',
    body1:
      '스파이더, 벌, 무거운 짐, 높은 곳 전구 교체 같은 다른 카테고리는 전부 "앞으로 확장 가능한 비전"으로만 남겨두고, 실제 개발은 바퀴벌레 제거 하나에 집중했습니다. 기능을 넓히는 대신 하나의 흐름을 끝까지 완성도 있게 만드는 쪽을 택했습니다.',
    body2:
      '리뷰는 User → Hero 단방향, 평점은 단순 산술 평균 — 둘 다 샘플이 적을 때의 변동성 같은 더 정교한 설계가 가능하다는 걸 알면서도, 신호가 생기기 전까지는 일부러 보류한 결정입니다. "지금 필요하지 않은 걸 먼저 만들지 않는다"는 원칙을 프로덕트 문서에도, 코드에도 동일하게 적용했습니다.',
  },
  en: {
    title: 'Why Start With Cockroach Removal?',
    intro:
      "NotMe's long-term goal is to handle any weird, awkward household problem — but the MVP was deliberately narrowed to validate a single hypothesis.",
    quote: '"When a cockroach shows up, are people willing to use an app to request immediate help from someone nearby?"',
    body1:
      "Other categories — spiders, bees, heavy lifting, changing a lightbulb you can't reach — stayed on the roadmap as future vision only. Actual development focused on cockroach removal alone. Instead of spreading across features, I chose to polish one complete flow end to end.",
    body2:
      'Reviews are one-directional (User → Hero), and ratings are a simple arithmetic mean — both could be more sophisticated (e.g. handling small-sample volatility), but I deliberately held off until there\'s a real signal to justify it. The same "don\'t build what you don\'t need yet" principle shows up in the product docs and in the code.',
  },
}

export default function Problem() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section id="problem" className="py-20">
      <Container>
        <SectionHeading eyebrow="Why" title={t.title} />
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-neutral-700 dark:text-neutral-300">{t.intro}</p>
            <blockquote className="mt-6 rounded-2xl bg-primary/10 p-6 text-lg font-medium text-ink dark:text-neutral-100">
              {t.quote}
            </blockquote>
          </div>
          <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
            <p>{t.body1}</p>
            <p>{t.body2}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
