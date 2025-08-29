import clsx from 'clsx'
import { JSX } from 'react'

interface TextProps {
  level: 'p' | 'small' | 'span' | 'ul' | 'li'
  variant: 'body' | 'small' | 'span' | 'list' | 'listItem' | 'muted'
  children: React.ReactNode
  className?: string
}

export function Text({ level, children, className, variant }: TextProps) {
  const Tag = level as keyof JSX.IntrinsicElements

  const variants = {
    body: 'font-inter text-foreground text-base leading-relaxed',
    muted: 'font-inter text-muted-foreground text-base leading-relaxed',
    small: 'font-inter text-muted-foreground text-base leading-relaxed',
    span: 'font-inter text-foreground text-base font-normal tracking-normal',
    list: 'font-inter text-foreground list-disc leading-8',
    listItem: 'text-base list-none',
  }

  return <Tag className={clsx(variants[variant], className)}>{children}</Tag>
}
