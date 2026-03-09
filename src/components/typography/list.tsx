import clsx from 'clsx'

interface ListProps {
  children: React.ReactNode
  className?: string
}

export function List({ children, className }: ListProps) {
  return (
    <ul
      className={clsx(
        'font-inter text-foreground flex list-disc flex-col gap-2 leading-8',
        className
      )}
    >
      {children}
    </ul>
  )
}

interface ListItemProps {
  children: React.ReactNode
  className?: string
}

List.Item = function ListItem({ children, className }: ListItemProps) {
  return <li className={clsx('list-none text-base', className)}>{children}</li>
}
