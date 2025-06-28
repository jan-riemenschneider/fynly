"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "../ui/button";
import CartItem from "../CartItem";

const CartSlideoverContent = () => {
  const [toggleShopping, setToggleShopping] = useState(false);

  const { totalItems, items, clearCart, total } = useCart();

  return (
    <Sheet open={toggleShopping} onOpenChange={setToggleShopping}>
      <SheetTrigger>
        <ShoppingCart className="h-6 w-6 relative margin-0 padding-0" />
        <Badge className="absolute -top-2 -right-2 h-4 w-4 rounded-full text-xs flex items-center justify-center p-0">
          {totalItems}
        </Badge>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="bg-accent shadow-sm">
          <SheetTitle>Dein Warenkorb</SheetTitle>
        </SheetHeader>
        {items.length === 0 && (
          <div className="flex flex-col text-center mx-5 gap-4">
            <ShoppingCart className="h-20 w-20 mx-auto text-muted-foreground" />
            <p className="text-muted-foreground">
              Du haben noch keine Produkte in deinem Warenkorb 🙁
            </p>
            <Link href={"/"} className="mt-3">
              <Button className="" onClick={() => setToggleShopping(false)}>
                Jetzt einkaufen
              </Button>
            </Link>
          </div>
        )}
        {items.length > 0 && (
          <div className="py-8">
            <div className="grid grid-cols-1 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-lg font-medium mb-4">
                    Artikel ({items.length})
                  </h2>

                  <div>
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
                  </div>

                  <div className="mt-6 flex justify-between">
                    <Button variant="outline" onClick={clearCart}>
                      Warenkorb leeren
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-lg p-6 sticky top-24">
                  <h2 className="text-lg font-medium mb-4">Bestellübersicht</h2>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Zwischensumme
                      </span>
                      <span>{total.toFixed(2)} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Versand</span>
                      <span>4.99 €</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-medium text-lg">
                      <span>Gesamtsumme</span>
                      <span>{(total + 4.99).toFixed(2)} €</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      inkl. MwSt.
                    </p>
                  </div>
                  <Link href="/cart">
                    <Button
                      className="w-full mt-6"
                      size="lg"
                      onClick={() => setToggleShopping(false)}
                    >
                      Zur Kasse
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSlideoverContent;
