"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { getProductById, categoryTranslations } from "@/data/products";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Carousel } from "../../components/ui/carousel";
import { useCart } from "@/context/CartContext";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { addItem, items } = useCart();
  const product = id ? getProductById(id) : null;
  console.log(items);

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="heading-lg mb-4">Produkt nicht gefunden</h1>
        <p className="mb-8">
          Das gesuchte Produkt konnte leider nicht gefunden werden.
        </p>
        <Button asChild>
          <Link href="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <Button variant="ghost" className="mb-6 pl-0" onClick={router.back}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Zurück
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted rounded-lg overflow-hidden">
          <Carousel />
        </div>

        <div>
          <div className="mb-6">
            <Link
              href={`/category/${product.category}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {categoryTranslations[product.category]}
            </Link>
            <h1 className="heading-lg mt-2">{product.name}</h1>
            <p className="text-2xl font-bold mt-2">
              {product.price.toFixed(2)} €
            </p>
          </div>

          <div className="mb-6">
            <h2 className="font-medium mb-2">Beschreibung</h2>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h2 className="font-medium mb-2">Verfügbare Farben</h2>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-muted text-sm"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Button
            className="w-full mt-4 gap-2"
            size="lg"
            onClick={() => addItem(product)}
          >
            <ShoppingCart className="h-5 w-5" />
            {product.inStock ? "In den Warenkorb" : "Nicht verfügbar"}
          </Button>

          <div className="mt-6 text-sm text-muted-foreground">
            <p>✓ Handgefertigt mit Liebe</p>
            <p>✓ Aus hochwertigen Materialien</p>
            <p>✓ Sicher für Babys und Kleinkinder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
