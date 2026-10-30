import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

const CONSUMER_STACK = ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'NativeWind', 'Zustand', 'TanStack Query']
const ADMIN_STACK = ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'TanStack Table']
const SHARED_STACK = ['Supabase', 'PostgreSQL', 'Row Level Security', 'Vercel']

const COPY = {
  ko: { consumer: 'Consumer App', admin: 'Admin Dashboard', shared: 'Shared Backend' },
  en: { consumer: 'Consumer App', admin: 'Admin Dashboard', shared: 'Shared Backend' },
}

function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">
      {label}
    </span>
  )
}

function BadgeGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-neutral-500 dark:text-neutral-400">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item} label={item} />
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  const { lang } = useLanguage()
  const t = COPY[lang]

  return (
    <section id="stack" className="py-20">
      <Container>
        <SectionHeading eyebrow="Stack" title="Tech Stack" />
        <div className="grid gap-8 sm:grid-cols-3">
          <BadgeGroup title={t.consumer} items={CONSUMER_STACK} />
          <BadgeGroup title={t.admin} items={ADMIN_STACK} />
          <BadgeGroup title={t.shared} items={SHARED_STACK} />
        </div>
      </Container>
    </section>
  )
}
