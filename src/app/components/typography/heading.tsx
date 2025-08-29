import clsx from 'clsx'
import { JSX } from 'react'
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  variant: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  className?: string
}

export function Heading({ level, children, className, variant }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  const variants = {
    xl: 'font-inter text-5xl font-bold tracking-tight text-balance text-gray-950 lg:text-6xl',
    lg: 'font-inter text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl',
    md: 'font-inter text-lg font-medium tracking-tight text-gray-800 lg:text-xl',
    sm: 'font-inter text-lg font-medium tracking-tight text-gray-700',
  }

  return <Tag className={clsx(variants[variant], className)}>{children}</Tag>
}
