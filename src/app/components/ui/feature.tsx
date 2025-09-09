import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import clsx from 'clsx'
import { LucideIcon } from 'lucide-react'
interface FeatureProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export function Feature({
  icon: Icon,
  title,
  description,
  color,
}: FeatureProps) {
  return (
    <div className="flex flex-col items-center rounded-lg bg-gray-50 p-6 text-center shadow-sm transition-shadow hover:shadow-md">
      <div
        className={clsx(
          'mb-4 flex h-16 w-16 items-center justify-center rounded-full',
          color
        )}
      >
        <Icon className="h-8 w-8 text-gray-800" />
      </div>
      <Heading level={3} variant="md" className="mb-2">
        {title}
      </Heading>
      <Text level="p" variant="muted">
        {description}
      </Text>
    </div>
  )
}
