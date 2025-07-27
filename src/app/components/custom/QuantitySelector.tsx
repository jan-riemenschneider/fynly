import { Minus, Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Button } from '../ui/button'

export function QuantitySelector({ id }) {
  const { updateQuantity, getItemQuantity } = useCart()
  const quantity = getItemQuantity(id)

  const displayQuantity = quantity || 1

  const handleIncreaseQuantity = () => {
    updateQuantity(id, displayQuantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (displayQuantity > 1) {
      updateQuantity(id, displayQuantity - 1)
    }
  }

  return (
    <div className="flex max-w-25 items-center justify-center rounded-md border">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-none"
        onClick={handleDecreaseQuantity}
        aria-label="Reduce quantity"
      >
        <Minus className="h-3 w-3" />
      </Button>
      <span className="w-8 text-center">{displayQuantity}</span>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-none"
        onClick={handleIncreaseQuantity}
        aria-label="Increase quantity"
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  )
}
