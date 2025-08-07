import { Minus, Plus } from 'lucide-react'
import { Button } from '../ui/button'

interface QuantitySelectorProps {
  amount: number
  setAmount: (value: number | ((prev: number) => number)) => void
}
export function QuantitySelector({ amount, setAmount }: QuantitySelectorProps) {
  const handleIncreaseQuantity = () => {
    setAmount(amount + 1)
  }

  const handleDecreaseQuantity = () => {
    if (amount === 0) return
    setAmount(amount - 1)
  }

  return (
    <div className="flex h-10 w-fit items-center justify-center rounded-md border">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10"
        onClick={handleDecreaseQuantity}
        aria-label="Reduce quantity"
      >
        <Minus className="h-5 w-5" />
      </Button>
      <span className="w-6 text-center">{amount}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10"
        onClick={handleIncreaseQuantity}
        aria-label="Increase quantity"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  )
}
