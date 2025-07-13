"use client";
import React from "react";
import ProductCard from "./ProductCart";
import { Product } from "@/data/products";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (!products.length) {
    return <p className="text-center py-10">Keine Produkte gefunden.</p>;
  }

  return (
    <div className="grid grid-cols-1 items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
