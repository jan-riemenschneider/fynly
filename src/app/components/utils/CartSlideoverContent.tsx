"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/CartItem";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { ButtonLoading } from "../ui/loadingButton";

const CartSlideoverContent = () => {
  const [toggleShopping, setToggleShopping] = useState(false);

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

            <Link href="/cart">
              <ButtonLoading className="w-full py-3 px-4 mt-4">
                Express Checkout
              </ButtonLoading>
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSlideoverContent;
