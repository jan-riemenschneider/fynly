"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  
  const { addItem } = useCart();

  return (
    <Card className="overflow-hidden card-hover border-none">
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <Image
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
            width={50}
            height={50}
          />
        </div>
      </Link>
      <CardContent className="pt-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium truncate">{product.name}</h3>
        </Link>
        <p className="text-lg font-semibold mt-1">
          {product.price.toFixed(2)} €
        </p>
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1 mt-2">
            <span className="text-xs text-muted-foreground">Farben:</span>
            <div className="flex gap-1">
              {product.colors.map((color, index) => (
                <span key={index} className="text-xs">
                  {color}
                  {index < product.colors.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => addItem(product)}
          className="w-full gap-2"
        >
          <ShoppingCart className="h-4 w-4" /> Zum Warenkorb
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
