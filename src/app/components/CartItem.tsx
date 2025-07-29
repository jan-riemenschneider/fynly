'use client'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { QuantitySelector } from './custom/QuantitySelector'

interface CartItemProps {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

const CartItem = ({ id, name, price, image, quantity }: CartItemProps) => {
  const { setQuantity, removeItem } = useCart()

  const handleIncreaseQuantity = () => {
    setQuantity(id, quantity + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(id, quantity - 1)
    } else {
      removeItem(id)
    }
  }

  return (
    <div className="mt-4 flex h-auto items-center space-x-6">
      <div className="bg-muted flex-1/3 overflow-hidden rounded">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-2/3 flex-col gap-3">
        <Link
          className="hover:text-primary max-w-[200px] truncate text-base font-medium text-wrap"
          href={`/product/${id}`}
        >
          {name}
        </Link>

        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

        <div className="flex items-center space-x-1">
          <div className="text-right font-medium">
            {(price * quantity).toFixed(2)} €
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-destructive h-8 w-8"
            onClick={() => removeItem(id)}
            aria-label="Remove"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
