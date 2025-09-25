import clsx from 'clsx'
import { JSX } from 'react'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  variant?: keyof typeof variants
  className?: string
  children: React.ReactNode
  as?: keyof JSX.IntrinsicElements
}

const variants = {
  xl: 'text-5xl font-bold tracking-tight lg:leading-20 leading-15 text-balance text-gray-900 lg:text-8xl',
  lg: 'text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl',
  md: 'text-lg font-medium tracking-tight text-gray-800 lg:text-xl',
  sm: 'text-lg font-medium tracking-tight text-gray-700',
  footer: 'text-lg font-semibold tracking-tight text-gray-800',
} as const

export function Heading({
  level,
  variant = 'lg',
  className,
  children,
  as,
}: HeadingProps) {
  const SemanticTag = `h${level}` as keyof JSX.IntrinsicElements
  const Tag = as ?? SemanticTag

  return <Tag className={clsx(variants[variant], className)}>{children}</Tag>
}
