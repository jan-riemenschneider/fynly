import ProductGrid from '@/components/ProductGrid'
import { Button } from '@/components/ui/button'
import { getFeaturedProducts } from '@/data/products'
import { Baby, Gift, Star, Tag } from 'lucide-react'
import Link from 'next/link'
import { SeparatingLine } from './components/custom/SeparatingLine'
import { TestinomialCard } from './components/custom/testimonialCard'
import { testimonials } from './data/testimonials'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="flex min-h-screen flex-col space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="realtive flex h-[60vh] flex-col items-center justify-center bg-[url(https://picsum.photos/200)] md:h-[80vh]">
        <div className="flex max-w-lg flex-col items-center">
          <h1 className="mb-4 text-white md:mb-6">Hey ich bin Lisa!</h1>
          <p className="mb-6 text-center text-white md:mb-8">
            Das sind unsere selbstgemachten Schnullerketten – jede mit viel
            Liebe und Sorgfalt gefertigt. Jede Kette ist ein echtes Unikat.
          </p>
          <Button asChild size={'lg'} className="mb-8" variant={'default'}>
            <Link href="/category/schnullerketten">Jetzt entdecken</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <h2 className="mb-4 md:mb-6">Unsere beliebtesten Produkte</h2>
            <p className="font-body mb-8 text-center md:mb-10">
              Entdecken Sie unsere meistverkauften handgefertigten
              Babyaccessoires, die mit Liebe hergestellt wurden.
            </p>
            <SeparatingLine className={'mb-8 md:mb-10'} />
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="container mx-auto px-6">
          <div className="mb-8 flex flex-col items-center md:mb-10">
            <h2 className="mb-8 md:mb-10">Warum unsere Produkte?</h2>
            <SeparatingLine />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-all">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-200">
                <Baby className="h-8 w-8" />
              </div>
              <h3 className="mb-2">Babysicher</h3>
              <p className="text-muted-foreground">
                Alle Materialien sind babyfreundlich und entsprechen den
                höchsten Sicherheitsstandards.
              </p>
            </div>
            <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-200">
                <Gift className="h-8 w-8" />
              </div>
              <h3 className="mb-2">Handgemacht</h3>
              <p className="text-muted-foreground">
                Jedes Stück wird mit Liebe von Hand gefertigt und ist ein
                einzigartiges Unikat.
              </p>
            </div>
            <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-all">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Tag className="h-8 w-8" />
              </div>
              <h3 className="mb-2">Personalisierbar</h3>
              <p className="text-muted-foreground">
                Viele unserer Produkte können nach Ihren Wünschen personalisiert
                werden.
              </p>
            </div>
            <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-all">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="mb-2">Qualität</h3>
              <p className="text-muted-foreground">
                Wir verwenden nur hochwertige Materialien für langlebige
                Produkte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container mx-auto px-6">
          <div className="mb-8 flex flex-col items-center md:mb-10">
            <h2 className="mb-8 md:mb-10">Was unsere Kunden sagen</h2>
            <SeparatingLine />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {testimonials.map(testimonial => (
              <TestinomialCard
                comment={testimonial.comment}
                name={testimonial.name}
                key={testimonial.id}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
