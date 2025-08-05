'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useCart } from '@/context/CartContext'
import type { Product } from '@/data/products'
import { useProductsUrls } from '@/hooks/useProductUrls'
import { Loader2Icon, ShoppingCart } from 'lucide-react'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart()

  const urls = useProductsUrls(product.folderPath)
  return (
    <Card className="flex h-full w-full flex-grow flex-col overflow-hidden">
      <Link href={`/product/${product.id}`}>
        <div className="relative mb-4 aspect-square overflow-hidden">
          {urls.length > 0 ? (
            <CldImage
              src={urls[0].src}
              alt={product.name}
              className="h-full w-full object-cover duration-300 hover:scale-95"
              width={400}
              height={400}
              quality="auto"
              format="auto"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white">
              <Loader2Icon className="animate-spin" />
            </div>
          )}
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Auf Lager
            </span>
          </div>
        </div>
      </Link>
      <CardHeader className="mb-2">
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
          onClick={() => addItem(product, 1)}
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
