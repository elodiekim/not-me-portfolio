import type { AnchorHTMLAttributes } from 'react'

const SIZES = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-5 py-2 text-sm',
  lg: 'px-6 py-3 text-sm',
}

const VARIANTS = {
  primary: 'bg-charcoal text-cream hover:opacity-90',
  secondary: 'border border-neutral-300 text-ink hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-600',
}

export default function Button({
  size = 'md',
  variant = 'primary',
  className = '',
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { size?: keyof typeof SIZES; variant?: keyof typeof VARIANTS }) {
  return (
    <a
      {...props}
      className={`inline-block rounded-sm font-semibold transition-colors duration-150 ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {children}
    </a>
  )
}
