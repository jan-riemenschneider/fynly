"use client";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { FaStripe } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { handleCheckout } from "../../lib/handleCheckout";
import { Text } from "../typography/text";
import { Badge } from "../ui/badge";
import { ButtonLoading } from "../ui/loadingButton";
import { NavigationMenuLink } from "../ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import CartItem from "./cartItem";

const CartSlideoverContent = () => {
  const shippingCost = 4.99;
  const [isLoading, setIsLoading] = useState(false);
  const {
    totalItems,
    items,
    clearCart,
    total,
    setCartOpen,
    isCartOpen,
    calculateTaxes,
    priceFormatter,
  } = useCart();

  const customizationCost = items.reduce(
    (cost, item) =>
      item.customization
        ? cost + item.customization.price * item.quantity
        : cost,
    0,
  );
  const subtotal = total - customizationCost;

  const totalWithShipping = total + shippingCost;
  const tax = calculateTaxes(totalWithShipping);

  const summary = [
    {
      label: "Zwischensumme",
      value: priceFormatter.format(subtotal),
      variant: "inline",
    },

    ...(customizationCost > 0
      ? [
          {
            label: "Sonderanfertigung",
            value: priceFormatter.format(customizationCost),
            variant: "inline",
          },
        ]
      : []),
    {
      label: "Versand",
      value: priceFormatter.format(shippingCost),
      variant: "inline",
    },
    {
      label: "Enthaltene MwSt. (19%)",
      value: priceFormatter.format(tax),
      variant: "inline",
    },
    {
      label: "Gesamtsumme",
      value: priceFormatter.format(totalWithShipping),
      variant: "price",
    },
  ];
  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetTrigger>
        <NavigationMenuLink className="relative hover:cursor-pointer">
          <Badge
            variant="prize"
            suppressHydrationWarning
            className="hover: absolute -end-2 -top-3.5 h-5 min-w-5 rounded-full p-1.5 tabular-nums"
          >
            {totalItems}
          </Badge>
          <ShoppingBag className="margin-0 padding-0 text-foreground relative h-6 w-6"></ShoppingBag>
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
                {items.map((item) => (
                  <CartItem
                    key={
                      item.customization
                        ? `${item.product.id}-${item.customization.name}`
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
                    setIsLoading(true);
                    try {
                      await handleCheckout(items);
                    } catch (err) {
                      console.error("Checkout fehlgeschlagen", err);
                    } finally {
                      setCartOpen(false);
                      setIsLoading(false);
                    }
                  }}
                >
                  <div className="flex w-full items-center justify-center gap-2  text-white">
                    <span className="text-lg font-extrabold">Weiter zu</span>
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
  );
};

export default CartSlideoverContent;
