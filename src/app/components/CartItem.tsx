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
    <div className="flex items-center space-x-6 mt-4 h-auto">
      <div className="flex-1/3 bg-muted rounded overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-2/3 flex-col gap-3 ">
        <Link
          className="text-base font-medium hover:text-primary truncate max-w-[200px] text-wrap"
          href={`/product/${id}`}
        >
          {name}
        </Link>

        <div className="flex items-center justify-center border rounded-md max-w-25">
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

        <div className="flex items-center space-x-1">
          <div className="font-medium text-right">
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
