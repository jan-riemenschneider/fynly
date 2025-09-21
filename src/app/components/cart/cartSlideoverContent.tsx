'use client'
import CartItem from '@/components/cart/cartItem'
import { Text } from '@/components/typography/text'
import { Badge } from '@/components/ui/badge'
import { ButtonLoading } from '@/components/ui/loadingButton'
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCart } from '@/context/CartContext'
import { handleCheckout } from '@/lib/handleCheckout'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FaStripe } from 'react-icons/fa'

const CartSlideoverContent = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [customizationCost, setCustomizationCost] = useState(0)
  const {
    totalItems,
    items,
    clearCart,
    total,
    setCartOpen,
    isCartOpen,
    calculateTaxes,
  } = useCart()

  useEffect(() => {
    const cost = items.reduce(
      (cost, item) => (item.customization ? cost + 5 * item.quantity : cost),
      0
    )
    setCustomizationCost(cost)
  }, [items])

  const tax = calculateTaxes(total)

  const summary = [
    {
      label: 'Zwischensumme',
      value: total.toFixed(2) + ' €',
      variant: 'inline',
    },
    {
      label: 'Versand',
      value: '4.90 €',
      variant: 'inline',
    },
    ...(customizationCost > 0
      ? [
          {
            label: 'Sonderanfertigung',
            value: customizationCost.toFixed(2) + ' €',
            variant: 'inline',
          },
        ]
      : []),
    {
      label: 'Enthaltene MwSt. (19%)',
      value: tax.toFixed(2) + ' €',
      variant: 'inline',
    },
    {
      label: 'Gesamtsumme',
      value: total + customizationCost.toFixed(2) + ' €',
      variant: 'price',
    },
  ]
  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetTrigger>
        <NavigationMenuLink className="relative hover:cursor-pointer">
          <Badge className="absolute -end-2 -top-3.5 h-5 min-w-5 rounded-full p-1.5 tabular-nums">
            {totalItems}
          </Badge>
          <ShoppingBag className="margin-0 padding-0 hover:text-primary focus:text-primary text-foreground relative h-6 w-6"></ShoppingBag>
        </NavigationMenuLink>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader className="border-b">
          <SheetTitle asChild>
            <h3>Warenkorb</h3>
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <span className="mb-4">Dein Warenkorb ist leer</span>
          </div>
        )}

        {items.length > 0 && (
          <>
            <div className="flow-root px-6">
              <ul role="list" className="my-6 divide-gray-200">
                {items.map(item => (
                  <CartItem
                    key={
                      item.customization
                        ? `${item.product.id}-custom`
                        : `${item.product.id}`
                    }
                    id={item.product.id}
                    name={item.product.name}
                    price={item.product.price}
                    publicId={item.product.publicId}
                    quantity={item.quantity}
                    customization={item.customization?.name}
                    clearCart={clearCart}
                  />
                ))}
              </ul>
            </div>
            <div className="mb-6 flex flex-1 flex-col justify-end">
              <div className="border-t border-gray-300 p-6">
                <div>
                  {summary.map((item, i) => (
                    <div
                      key={i}
                      className="mb-2 flex justify-between border-b-1 pb-2 last:mb-0 last:border-b-0 last:pb-0"
                    >
                      <Text level="p" variant={item.variant}>
                        {item.label}
                      </Text>
                      <Text level="span" variant={item.variant}>
                        {item.value}
                      </Text>
                    </div>
                  ))}
                </div>

                <ButtonLoading
                  size="lg"
                  className="mt-10 w-full bg-[#635BFF] hover:bg-[#625de4]"
                  loading={isLoading}
                  onClick={async () => {
                    setIsLoading(true)
                    try {
                      await handleCheckout(items)
                    } catch (err) {
                      console.error('Checkout fehlgeschlagen', err)
                    } finally {
                      setCartOpen(false)
                      setIsLoading(false)
                    }
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-extrabold text-white">
                      Bezahle mit
                    </span>
                    <FaStripe className="size-12" />
                    <ArrowRight className="size-4" />
                  </div>
                </ButtonLoading>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default CartSlideoverContent
