"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card className="overflow-hidden card-hover border-none max-w-sm">
      <CardHeader className="mb-2">
        <Link href={`/product/${product.id}`}>
          <div className="aspect-square overflow-hidden mb-3.5 relative">
            <Image
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform"
              width={500}
              height={500}
            />
            <div className="absolute top-3 right-3">
              <span
                className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 
                 text-xs font-medium px-2.5 py-1 rounded-full"
              >
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Auf Lager
              </span>
            </div>
          </div>
        </Link>
        <CardTitle>
          <Link href={`/product/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="space-x-1.5">
          <span className="text-lg font-semibold">
            {product.price.toFixed(2)}€
          </span>
          <span className="text-muted-foreground text-xs">inkl. MwSt.</span>
        </div>
        <Button
          onClick={() => addItem(product)}
          className="px-4 py-2"
          variant={"default"}
        >
          <ShoppingCart className="h-4 w-4" /> Zum Warenkorb
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
