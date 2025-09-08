import clsx from 'clsx'
import { JSX } from 'react'

interface TextProps {
  level: 'p' | 'small' | 'span'
  variant: 'body' | 'small' | 'span' | 'muted' | 'card' | 'inline' | 'price'
  children: React.ReactNode
  className?: string
}

export function Text({ level, children, className, variant }: TextProps) {
  const Tag = level as keyof JSX.IntrinsicElements

  const VARIANTS = {
    body: 'font-inter text-foreground text-base leading-relaxed',
    muted: 'font-inter text-muted-foreground text-base leading-relaxed',
    small: 'font-inter text-muted-foreground text-sm leading-relaxed block',
    inline: 'font-inter text-foreground text-base font-normal tracking-normal',
    card: 'font-inter text-card-foreground text-base leading-relaxed',
    price: 'font-inter text-gray-900 text-lg leading-relaxed font-medium block',
  } as const

  return <Tag className={clsx(VARIANTS[variant], className)}>{children}</Tag>
}
