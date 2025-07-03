"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/CartItem";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { ButtonLoading } from "../ui/loadingButton";
import { handleCheckout } from "../../lib/handleCheckout";

const CartSlideoverContent = () => {
  const [toggleShopping, setToggleShopping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { totalItems, items, clearCart, total } = useCart();

  return (
    <Sheet open={toggleShopping} onOpenChange={setToggleShopping}>
      <NavigationMenuLink className="hover:cursor-pointer">
        <SheetTrigger className="relative hover:cursor-pointer">
          <Badge className="h-5 min-w-4 rounded-full px-1 tabular-nums absolute left-5 bottom-6">
            {totalItems}
          </Badge>
          <ShoppingBag className="h-6 w-6 margin-0 padding-0"></ShoppingBag>
        </SheetTrigger>
      </NavigationMenuLink>

      <SheetContent side="right">
        <SheetHeader className="bg-accentshadow-sm border-b">
          <SheetTitle>Dein Warenkorb</SheetTitle>
        </SheetHeader>

        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-6 px-4 py-8 text-center h-full">
            <h2 className="text-xl font-semibold">Dein Warenkorb ist leer</h2>
            <p className="text-sm text-muted-foreground">
              Füge jetzt Produkte hinzu und starte deinen Einkauf!
            </p>
            <Link href="/shop" aria-label="Zur Shop-Seite">
              <Button
                variant={"default"}
                onClick={() => setToggleShopping(false)}
              >
                Jetzt einkaufen
              </Button>
            </Link>
          </div>
        )}

        {items.length > 0 && (
          <div className="p-6 flex flex-col space-y-5">
            <h2 className="text-lg font-medium mb-4">
              Artikel ({items.length})
            </h2>

            {items.map((item) => (
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

            <div className="flex flex-col mt-3">
              <h2 className="text-lg font-semibold text-primary-foreground pb-3">
                Bestellübersicht
              </h2>
              <hr className="border-gray-200 my-2"></hr>
              <div className="space-y-3 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Zwischensumme</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Versand</span>
                  <span>4.99 €</span>
                </div>
              </div>
              <hr className="border-gray-200 my-4"></hr>
              <div className="flex justify-between font-medium text-lg items-center">
                <span>Gesamtsumme</span>
                <span>{(total + 4.99).toFixed(2)} €</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">inkl. MwSt.</p>
            </div>

            <ButtonLoading
              className="w-full py-3 px-4 mt-4"
              loading={isLoading}
              onClick={async () => {
                setIsLoading(true);
                try {
                  await handleCheckout(items);
                } catch (err) {
                  console.error("Checkout fehlgeschlagen", err);
                } finally {
                  setToggleShopping(false);
                  setIsLoading(false);
                }
              }}
            >
              Express Checkout
            </ButtonLoading>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSlideoverContent;
