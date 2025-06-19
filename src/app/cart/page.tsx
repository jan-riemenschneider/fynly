"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import Link from "next/link";

const Cart = () => {
  const { items, total, clearCart } = useCart();

  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP Error: ${response.status}`);
      }

      const result = await response.json();

      if (result.url) {
        window.location.href = result.url;
      }

      console.log("response:", result);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="heading-lg mb-4">Ihr Warenkorb ist leer</h1>
          <p className="text-muted-foreground mb-8">
            Sie haben noch keine Produkte in Ihrem Warenkorb. Entdecken Sie
            unsere handgefertigten Baby-Accessoires.
          </p>
          <Button asChild>
            <Link href="/">Jetzt einkaufen</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <h1 className="heading-lg mb-8">Ihr Warenkorb</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
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

              <Button asChild variant="ghost">
                <Link href="/">Weiter einkaufen</Link>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-medium mb-4">Bestellübersicht</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Zwischensumme</span>
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
              <p className="text-xs text-muted-foreground mt-1">inkl. MwSt.</p>
            </div>

            <Button className="w-full mt-6" size="lg" onClick={handleCheckout}>
              Zur Kasse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
