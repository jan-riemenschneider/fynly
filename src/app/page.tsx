import ProductGrid from '@/components/ProductGrid'
import { Button } from '@/components/ui/button'
import { getFeaturedProducts } from '@/data/products'
import {
  HandHeart,
  Handshake,
  Heart,
  Settings,
  Shield,
  Star,
} from 'lucide-react'
import Link from 'next/link'
import { SeparatingLine } from './components/custom/SeparatingLine'
import { TestinomialCard } from './components/custom/testimonialCard'
import { testimonials } from './data/testimonials'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="flex min-h-screen flex-col gap-16 md:gap-24">
      {/* Hero Section */}
      <section className="realtive flex h-[60vh] flex-col items-center justify-center bg-[url(https://picsum.photos/200)] md:h-[80vh]">
        <div className="flex max-w-lg flex-col items-center">
          <h1 className="mb-4 text-white md:mb-6">Hey ich bin Lisa!</h1>
          <p className="mb-6 text-center text-white md:mb-8">
            Entdecke unsere handgemachten Schnullerketten – liebevoll gefertigt
            und jedes Stück ein echtes Unikat.
          </p>
          <Button asChild size={'lg'} className="mb-8" variant={'default'}>
            <Link href="/category/schnullerketten">Jetzt entdecken</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}

      <section>
        <div className="container mx-auto flex flex-col items-center px-6">
          <h2 className="mb-12 flex flex-wrap items-center justify-center gap-2 text-center md:mb-14">
            {'Unsere handgemachten Favoriten für dich'.toUpperCase()}
            <Heart className="text-3xl text-red-700" />
          </h2>
          <SeparatingLine className="mb-12 md:mb-14" />
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* Features Section */}
      <section>
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <h2 className="mb-12 flex items-center justify-center gap-2 md:mb-14">
              {'Unsere Versprechen an dich'.toUpperCase()}
              <Handshake className="text-primary text-3xl" />
            </h2>
            <SeparatingLine className="mb-12 md:mb-14" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
                <Shield className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="mb-2">Babysicher</h3>
              <p className="text-muted-foreground">
                100% schadstofffrei, speichelfest und nach höchsten
                Sicherheitsstandards geprüft – für unbeschwertes Spielen.
              </p>
            </div>

            <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-200">
                <HandHeart className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="mb-2">Handgemacht</h3>
              <p className="text-muted-foreground">
                Jedes Stück wird mit Liebe von Hand gefertigt und bleibt ein
                echtes Unikat.
              </p>
            </div>

            <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-200">
                <Settings className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="mb-2">Personalisierbar</h3>
              <p className="text-muted-foreground">
                Gestalte dein Accessoire mit Namen oder Initialen – so
                einzigartig wie dein Baby.
              </p>
            </div>

            <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-200">
                <Star className="h-8 w-8 text-gray-700" />
              </div>
              <h3 className="mb-2">Höchste Qualität</h3>
              <p className="text-muted-foreground">
                Hochwertige Materialien für langlebige Produkte, perfekt für den
                Alltag mit deinem Kind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <h2 className="mb-12 text-center md:mb-14">
              {'Das sagen glückliche Eltern über uns'.toUpperCase()}
            </h2>
            <SeparatingLine className="mb-12 md:mb-14" />
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
