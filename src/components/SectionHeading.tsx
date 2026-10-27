export default function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary-dark">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">{description}</p>}
    </div>
  )
}
