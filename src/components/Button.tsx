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
      className={`inline-flex items-center gap-1.5 rounded-lg bg-primary font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/30 ${SIZES[size]} ${className}`}
    >
      {children}
    </a>
  )
}
