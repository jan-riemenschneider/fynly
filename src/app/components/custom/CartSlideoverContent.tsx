'use client'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ShoppingBag } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import CartItem from '@/components/CartItem'
import { NavigationMenuLink } from '../ui/navigation-menu'
import { ButtonLoading } from '../ui/loadingButton'
import { handleCheckout } from '../../lib/handleCheckout'
import { useState } from 'react'

const CartSlideoverContent = () => {
  const { totalItems, items, clearCart, total, setCartOpen, isCartOpen } =
    useCart()
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <NavigationMenuLink className="hover:cursor-pointer">
        <SheetTrigger className="relative hover:cursor-pointer">
          <Badge className="absolute bottom-6 left-5 h-5 min-w-4 rounded-full px-1 tabular-nums">
            {totalItems}
          </Badge>
          <ShoppingBag className="margin-0 padding-0 h-6 w-6 text-gray-900"></ShoppingBag>
        </SheetTrigger>
      </NavigationMenuLink>

      <SheetContent side="right">
        <SheetHeader className="bg-accentshadow-sm border-b">
          <SheetTitle>Dein Warenkorb</SheetTitle>
        </SheetHeader>

        {items.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-6 px-4 py-8 text-center">
            <h2 className="text-xl font-semibold">Dein Warenkorb ist leer</h2>
            <p className="text-muted-foreground text-sm">
              Füge jetzt Produkte hinzu und starte deinen Einkauf!
            </p>
            <Link href="/shop" aria-label="Zur Shop-Seite">
              <Button variant={'default'} onClick={() => setCartOpen(false)}>
                Jetzt einkaufen
              </Button>
            </Link>
          </div>
        )}

        {items.length > 0 && (
          <div className="flex flex-col space-y-5 overflow-auto p-6">
            <h2 className="mb-4 text-lg font-medium">
              Artikel ({items.length})
            </h2>

            {items.map(item => (
              <CartItem
                key={item.product.id}
                id={item.product.id}
                name={item.product.name}
                price={item.product.price}
                image={item.product.images[0]}
                quantity={item.quantity}
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
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Versand</span>
                  <span>4.99 €</span>
                </div>
              </div>
              <hr className="my-4 border-gray-200"></hr>
              <div className="flex items-center justify-between text-lg font-medium">
                <span>Gesamtsumme</span>
                <span>{(total + 4.99).toFixed(2)} €</span>
              </div>
              <p className="text-muted-foreground mt-2 text-xs">inkl. MwSt.</p>
            </div>

            <ButtonLoading
              className="mt-4 w-full px-4 py-3"
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
              Express Checkout
            </ButtonLoading>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default CartSlideoverContent
