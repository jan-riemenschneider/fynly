'use client'
import CartItem from '@/components/cart/cartItem'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
  const { totalItems, items, clearCart, total, setCartOpen, isCartOpen } =
    useCart()

  useEffect(() => {
    const cost = items.reduce(
      (cost, item) => (item.customization ? cost + 5 * item.quantity : cost),
      0
    )
    setCustomizationCost(cost)
  }, [items])

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
            <span className="mb-4">
              {'Dein Warenkorb ist leer'.toUpperCase()}
            </span>
          </div>
        )}

        {items.length > 0 && (
          <div className="flex flex-col space-y-5 overflow-auto p-6">
            <h2 className="mb-4 text-lg font-medium">
              Artikel ({items.length})
            </h2>

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
                folderPath={item.product.folderPath}
                quantity={item.quantity}
                customization={item.customization?.name}
              />
            ))}

            <div className="flex justify-between">
              <Button variant="outline" onClick={clearCart}>
                Warenkorb leeren
              </Button>
            </div>

            <div className="mt-3 flex flex-col">
              <h2 className="text-primary-foreground pb-3 text-lg font-semibold">
                Bestellübersicht
              </h2>
              <hr className="my-2 border-gray-200"></hr>
              <div className="space-y-3 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Zwischensumme</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
                {customizationCost > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Individualisierung
                    </span>
                    <span>{customizationCost.toFixed(2)} €</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Versand</span>
                  <span>4.99 €</span>
                </div>
              </div>
              <hr className="my-4 border-gray-200"></hr>
              <div className="flex items-center justify-between text-lg font-medium">
                <span>Gesamtsumme</span>
                <span>{(total + 4.99 + customizationCost).toFixed(2)} €</span>
              </div>
              <p className="text-muted-foreground mt-2 text-xs">inkl. MwSt.</p>
            </div>

            <ButtonLoading
              size="lg"
              className="mt-4 w-full bg-[#635BFF] px-4 py-3 hover:bg-[#5A54E6]"
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
                <span className="font-extrabold text-white">Bezahle mit</span>
                <FaStripe className="size-12" />
                <ArrowRight className="size-4" />
              </div>
            </ButtonLoading>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default CartSlideoverContent
