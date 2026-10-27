import Container from './Container'

const LINKS = [
  { href: '#problem', label: '기획' },
  { href: '#walkthrough', label: '앱' },
  { href: '#admin', label: '어드민' },
  { href: '#engineering', label: '엔지니어링' },
  { href: '#stack', label: '스택' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <Container className="flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <img src="/logo/notme-icon-192.png" alt="" className="h-7 w-7 rounded-lg" />
          NotMe
        </a>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 sm:flex dark:text-neutral-400">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://not-me-admin.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Live Demo
        </a>
      </Container>
    </header>
  )
}
