export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs text-primary-dark">
        <span className="text-neutral-400 dark:text-neutral-600">{index}</span> / {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight break-keep sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">{description}</p>}
    </div>
  )
}
