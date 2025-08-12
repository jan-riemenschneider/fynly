'use client'
import { Button } from '@/components/ui/button'
import { useProductsUrls } from '@/hooks/useProductUrls'
import { Loader2Icon, Trash2 } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { QuantitySelector } from './custom/QuantitySelector'

interface CartItemProps {
  id: string
  name: string
  price: number
  quantity: number
  folderPath: string
  customization?: string
}

const CartItem = ({
  id,
  name,
  price,
  quantity,
  folderPath,
  customization,
}: CartItemProps) => {
  const { removeItem, setQuantity } = useCart()

  const handleQuantityChange = (newAmount: number) => {
    setQuantity(id, newAmount, customization)
  }

  const urls = useProductsUrls(folderPath)

  return (
    <>
      <div className="mt-4 flex h-auto items-center space-x-6">
        <div className="bg-muted flex-1/3 overflow-hidden rounded">
          {urls.length > 0 ? (
            <CldImage
              src={urls[0].src}
              alt={name}
              width={50}
              height={50}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white">
              <Loader2Icon className="animate-spin" />
            </div>
          )}
        </div>

        <div className="flex flex-2/3 flex-col gap-3">
          <Link
            className="hover:text-primary max-w-[200px] truncate text-base font-medium text-wrap"
            href={`/product/${id}`}
          >
            {name}
          </Link>

          <QuantitySelector
            amount={quantity}
            setAmount={handleQuantityChange}
          />

          <div className="flex items-center space-x-1">
            <div className="text-right font-medium">
              {(price * quantity).toFixed(2)} €
            </div>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-destructive h-8 w-8"
              onClick={() => removeItem(id, customization)}
              aria-label="Remove"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      {customization && (
        <div className="flex items-center space-x-2">
          <small>Deine Personalisierung:</small>
          <p className="text-primary">{customization}</p>
        </div>
      )}
    </>
  )
}

export default CartItem
