import clsx from 'clsx'

interface SeparatingLineProps {
  className?: string
}

export function SeparatingLine({ className }: SeparatingLineProps) {
  return <div className={clsx('border-primary/50 w-24 border-b-1', className)} />
}
