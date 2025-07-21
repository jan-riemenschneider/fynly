'use client'
import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Product } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart()

  return (
    <Card className="card-hover flex h-full w-full flex-grow flex-col overflow-hidden border-none">
      <CardHeader className="mb-2">
        <Link href={`/product/${product.id}`}>
          <div className="relative mb-3.5 aspect-square overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform"
              width={500}
              height={500}
            />
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></div>
                Auf Lager
              </span>
            </div>
          </div>
        </Link>
        <CardTitle className="line-clamp-1">
          <Link href={`/product/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto flex justify-between">
        <div className="space-x-2">
          <span className="inline-block text-lg font-semibold">
            {product.price.toFixed(2)}€
          </span>
          <span className="text-muted-foreground inline-block text-xs">
            inkl. MwSt.
          </span>
        </div>
        <Button
          onClick={() => addItem(product)}
          variant={'default'}
          size={'sm'}
        >
          <ShoppingCart className="h-4 w-4" />
          Zum Warenkorb
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
