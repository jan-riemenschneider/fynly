"use client";
import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartItem = ({ id, name, price, image, quantity }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  const handleIncreaseQuantity = () => {
    updateQuantity(id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    } else {
      removeItem(id);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b last:border-b-0">
      <div className="w-full sm:w-20 h-20 bg-muted rounded overflow-hidden flex-shrink-0 mb-2 sm:mb-0">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 sm:ml-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <Link
          className="text-base font-medium hover:text-primary truncate max-w-[200px]"
          href={`/product/${id}`}
        >
          {name}
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center border rounded-md">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={handleDecreaseQuantity}
              aria-label="Reduce quantity"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center">{quantity}</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={handleIncreaseQuantity}
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <div className="font-medium text-right min-w-[80px]">
            {(price * quantity).toFixed(2)} €
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={() => removeItem(id)}
            aria-label="Remove"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
