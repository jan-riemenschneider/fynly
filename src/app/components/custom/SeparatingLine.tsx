import clsx from 'clsx'

interface SeparatingLineProps {
  className?: string
}

export function SeparatingLine({ className }: SeparatingLineProps) {
  return <div className={clsx('border-primary w-24 border-b-2', className)} />
}
