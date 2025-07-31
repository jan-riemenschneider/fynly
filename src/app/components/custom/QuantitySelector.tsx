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
    <div className="flex max-w-25 items-center justify-center rounded-md border">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={handleDecreaseQuantity}
        aria-label="Reduce quantity"
      >
        <Minus className="h-3 w-3" />
      </Button>
      <span className="w-8 text-center">{amount}</span>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={handleIncreaseQuantity}
        aria-label="Increase quantity"
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  )
}
