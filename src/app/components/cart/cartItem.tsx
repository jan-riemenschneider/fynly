'use client'
import { Button } from '@/components/ui/button'
import { CldImage } from 'next-cloudinary'

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
  customization?: string
  publicId: string[]
  clearCart: () => void
}

const CartItem = ({
  id,
  name,
  price,
  quantity,
  publicId,
  clearCart,
}: CartItemProps) => {
  /* const { removeItem, setQuantity } = useCart() */

  /*  const handleQuantityChange = (newAmount: number) => {
    setQuantity(id, newAmount, customization)
  } */

  return (
    <li className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border bg-gray-50">
        <CldImage
          alt={name}
          src={publicId[0]}
          width={300}
          height={300}
          quality={60}
          className="size-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div className="flex items-center justify-between">
          <h3>
            <a href={`/product/${id}`}>{name}</a>
          </h3>
          <p className="ml-4">{price.toFixed(2)} €</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Stück {quantity}</p>
          <Button
            variant="link"
            size="link"
            className="text-primary font-medium"
            onClick={clearCart}
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
