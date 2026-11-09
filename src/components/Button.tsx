import type { AnchorHTMLAttributes } from 'react'

const SIZES = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-5 py-2 text-sm',
  lg: 'px-6 py-3 text-sm',
}

export default function Button({
  size = 'md',
  className = '',
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { size?: keyof typeof SIZES }) {
  return (
    <a
      {...props}
      className={`group inline-flex items-center gap-2 rounded-sm bg-primary font-semibold text-ink transition-colors duration-150 hover:bg-primary-dark ${SIZES[size]} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  )
}
