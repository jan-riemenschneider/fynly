import { Star } from 'lucide-react'

interface TestinomialCardProps {
  comment: string
  name: string
}

export function TestinomialCard({ comment, name }: TestinomialCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4">{comment}</p>
      <p className="text-card-foreground font-medium">- {name}.</p>
    </div>
  )
}
