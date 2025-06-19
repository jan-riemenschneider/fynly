"use client";
import React from "react";
import { useParams } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import {
  getProductsByCategory,
  categoryTranslations,
  ProductCategory,
} from "@/data/products";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();

  const validCategoryId = id as ProductCategory | undefined;

  const products = validCategoryId
    ? getProductsByCategory(validCategoryId)
    : [];

  const categoryName = validCategoryId
    ? categoryTranslations[validCategoryId]
    : "Kategorie";

  if (!products) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="heading-lg mb-4">Produkt nicht gefunden</h1>
        <p className="mb-8">
          Das gesuchte Produktkategorie konnte leider nicht gefunden werden.
        </p>
        <Button asChild>
          <Link href="/">Zurück zur Startseite</Link>
        </Button>
      </div>
    );
  }
  return (
    <div className="container-custom py-8">
      <header className="mb-10 text-center">
        <h1 className="mb-4">{categoryName}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Entdecken Sie unsere handgefertigten {categoryName} aus hochwertigen
          Materialien, perfekt für Ihren kleinen Liebling.
        </p>
      </header>

      <ProductGrid products={products} />
    </div>
  );
};

export default CategoryPage;
