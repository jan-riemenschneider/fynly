'use client'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
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
  customization,
  quantity,
  publicId,
}: CartItemProps) => {
  const { removeItem, setQuantity } = useCart()

  const handleQuantityChange = (newAmount: number) => {
    setQuantity(id, newAmount, customization)
  }

  return (
    <li className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border bg-gray-50">
        <CldImage
          alt={name}
          src={publicId[0]}
          width={300}
          height={300}
          quality={60}
          className="size-full object-contain"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <Heading variant="sm" level={3}>
              {name}
            </Heading>
            <Text level="span" variant="price">
              {price.toFixed(2)} €
            </Text>
          </div>
          <div className="flex flex-wrap space-x-1">
            <Text level="span" variant="muted">
              Wunschname:
            </Text>
            <Text level="span" variant="inline">
              {customization}
            </Text>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Stück {quantity}</p>
          <Button
            variant="link"
            size="link"
            className="text-primary font-medium"
            onClick={() => removeItem(id, customization)}
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
