import { Check } from 'lucide-react'

export function Checkmark() {
  return (
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-rose-100">
      <Check className="h-4 w-4 text-rose-600" />
    </div>
  )
}
