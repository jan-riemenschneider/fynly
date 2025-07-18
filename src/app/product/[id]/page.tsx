"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import {
  getProductById,
  categoryTranslations,
  getImagesById,
} from "@/data/products";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import AccordionProdukt from "../../components/custom/Accordion";
import ProduktCarousel from "../../components/custom/ProduktCarousel";
import NextJsImage from "@/components/ui/nextJsImage";
import Lightbox from "yet-another-react-lightbox";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { addItem } = useCart();
  const product = id ? getProductById(id) : null;
  const getImages = getImagesById(id);
  const [lightboxOpen, setlightboxOpen] = useState(false);
  if (!product) {
    return (
      <div className="container-custom py-16 text-center bg-gray-50">
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
    <div className="p-6 bg-gray-50 flex-1">
      <Button variant="ghost" className="mb-6 pl-0" onClick={router.back}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Zurück
      </Button>
      <Lightbox
        open={lightboxOpen}
        close={() => setlightboxOpen(false)}
        slides={[image1, image2, image3]}
        render={{ slide: NextJsImage }}
        
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <AccordionProdukt />
      <h2>Das könnte dir gefallen</h2>
      <ProduktCarousel autoplay={true} images={getImages} />
    </div>
  );
}
