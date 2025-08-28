import clsx from 'clsx'

interface SeparatingLineProps {
  className?: string
}

export function SeparatingLine({ className }: SeparatingLineProps) {
  return <div className={clsx('border-gray-400/50  w-full border-b-1', className)} />
}
