"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
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
        <div className="aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
            width={50}
            height={50}
          />
        </div>
      </Link>
      <CardTitle>
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg">{product.name}</h3>
        </Link>
      </CardTitle>
      <CardContent className="pt-4">
        <p className="text-md text-muted-foreground">{product.description}</p>
        <p className="text-lg font-semibold mt-1">
          {product.price.toFixed(2)} €
        </p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => addItem(product)}
          className="w-full gap-2"
          variant={"default"}
        >
          <ShoppingCart className="h-4 w-4" /> Zum Warenkorb
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
