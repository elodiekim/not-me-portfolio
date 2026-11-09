import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const CONSUMER_STACK = ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'NativeWind', 'Zustand', 'TanStack Query']
const ADMIN_STACK = ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'TanStack Table']
const SHARED_STACK = ['Supabase', 'PostgreSQL', 'Row Level Security', 'Vercel']

const COPY = {
  ko: { consumer: '소비자 앱', admin: '운영 어드민', shared: '공용 백엔드' },
  en: { consumer: 'Consumer App', admin: 'Admin Dashboard', shared: 'Shared Backend' },
}

function BadgeGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-t border-neutral-200 pt-4 dark:border-neutral-800">
      <h3 className="mb-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">{title}</h3>
      <p className="font-mono text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{items.join('  ·  ')}</p>
    </div>
  )
}

export default function TechStack() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section id="stack" className="scroll-mt-14 py-20">
      <Container>
        <SectionHeading index="05" eyebrow="Stack" title="Tech Stack" />
        <div className="grid gap-6 sm:grid-cols-3">
          <BadgeGroup title={t.consumer} items={CONSUMER_STACK} />
          <BadgeGroup title={t.admin} items={ADMIN_STACK} />
          <BadgeGroup title={t.shared} items={SHARED_STACK} />
        </div>
      </Container>
    </section>
  )
}
