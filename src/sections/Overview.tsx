import Container from '../components/Container'
import { useLanguage } from '../i18n/LanguageContext'

const COPY = {
  ko: ['1인 기획·디자인·풀스택 개발', '소비자 앱 + 운영 어드민', '요청부터 리뷰까지 실제 데이터로 동작'],
  en: ['Solo — product, design, full-stack', 'Consumer app + ops admin', 'Request to review, running on real data'],
}

export default function Overview() {
  const { lang } = useLanguage()
  const items = COPY[lang]

  return (
    <div className="border-t border-neutral-200 py-5 dark:border-neutral-800">
      <Container>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm break-keep text-neutral-500 sm:justify-start dark:text-neutral-400">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
