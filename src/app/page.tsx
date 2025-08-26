import ProductGrid from '@/components/ProductGrid'
import { getFeaturedProducts } from '@/data/products'
import { HandHeart, Settings, Shield, Star } from 'lucide-react'
import { TestinomialCard } from './components/custom/testimonialCard'
import { testimonials } from './data/testimonials'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="flex min-h-screen flex-col gap-16 md:gap-24 lg:gap-28">
      {/* Hero Section */}
      <section className="realtive flex h-[60vh] flex-col items-center justify-center bg-[url(https://picsum.photos/200)] md:h-[80vh]">
        <div className="flex max-w-lg flex-col items-center">
          <h1 className="mb-4 text-white md:mb-6">Hey ich bin Lisa!</h1>
          <p className="mb-6 text-center text-white md:mb-8">
            Entdecke unsere handgemachten Schnullerketten – liebevoll gefertigt
            und jedes Stück ein echtes Unikat.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="text-center md:text-left">
          <h2 className="mb-4">Unsere handgemachten Favoriten</h2>
          <p className="text-muted-foreground mb-10">
            Jedes Stück erzählt eine Geschichte und wird mit Liebe zum Detail
            gefertigt.
          </p>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      <section>
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-center md:text-left">
            Unsere Versprechen an dich
          </h2>

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

      <section>
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-center md:text-left">
            Das sagen glückliche Eltern über uns
          </h2>

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
