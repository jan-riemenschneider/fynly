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
    <div className="rounded-lg bg-gray-50 p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center text-yellow-400">
        {Array.from({ length: rating }, (_, i) => (
          <Star
            key={`testimonial-star-${i}`}
            className="h-4 w-4 fill-current"
          />
        ))}
      </div>
      <p className="text-muted-foreground mb-4">{comment}</p>
      <p className="text-card-foreground font-medium">- {name}.</p>
    </div>
  )
}
