import { Text } from '@/components/typography/text'
import { Star } from 'lucide-react'

interface TestinomialCardProps {
  comment: string
  name: string
  rating: number
}

export function TestinomialCard({
  comment,
  name,
  rating,
}: TestinomialCardProps) {
  return (
    <div className="flex flex-col rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center text-yellow-400">
        {Array.from({ length: rating }, (_, i) => (
          <Star
            key={`testimonial-star-${i}`}
            className="h-4 w-4 fill-current"
          />
        ))}
      </div>
      <Text level="p" variant="muted" className="mb-4">
        {comment}
      </Text>
      <Text level="p" variant="card" className="mt-auto">
        {name}
      </Text>
    </div>
  )
}
