import { Minus, Plus } from 'lucide-react'
import { Button } from '../ui/button'

export function QuantitySelector({ quantity, setQuantity }) {
  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quantity === 0) {
      return
    }
    setQuantity(prev => prev - 1)
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
      <span className="w-8 text-center">{quantity}</span>
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
