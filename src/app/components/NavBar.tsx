"use client";
import React, { useState } from "react";
import { ShoppingCart, Menu, X, Baby } from "lucide-react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { categoryTranslations } from "../data/products";

const Navbar = () => {
  const { items } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-yellow-100 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Baby className="h-8 w-8 text-primary" />
            <span className="text-xl font-serif font-bold">BabyBastelei</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {Object.entries(categoryTranslations).map(([key, value]) => (
              <Link
                key={key}
                href={`/category/${key}`}
                className="font-medium hover:text-primary transition-colors"
              >
                {value}
              </Link>
            ))}
            <Link
              href="/ContactPage"
              className="font-medium hover:text-primary transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2">
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}  
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white p-4 border-t">
          <div className="flex flex-col space-y-4">
            {Object.entries(categoryTranslations).map(([key, value]) => (
              <Link
                key={key}
                href={`/category/${key}`}
                className="font-medium p-2 hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {value}
              </Link>
            ))}
            <Link
              href="/ContactPage"
              className="font-medium p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
