import { Section } from '@/components/custom/Section'
import ProductGrid from '@/components/ProductGrid'
import { Button } from '@/components/ui/button'
import { getFeaturedProducts } from '@/data/products'
import { HandHeart, Settings, Shield, Star } from 'lucide-react'
import { TestinomialCard } from './components/custom/testimonialCard'
import { testimonials } from './data/testimonials'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      <Section>
        <div className="col-span-12 items-center md:col-span-6">
          <h1 className="mb-4 text-3xl font-bold md:mb-6 md:text-5xl">
            Produktname
          </h1>
          <p className="mb-4 text-base text-gray-600 md:mb-6 md:text-xl">
            Kurze Beschreibung oder Slogan
          </p>
          <Button className="">Jetzt bestellen</Button>
        </div>
        <div className="col-span-12 md:col-span-6">
          <h1 className="mb-4 text-3xl font-bold md:mb-6 md:text-5xl">
            Produktname
          </h1>
          <p className="mb-4 text-base text-gray-600 md:mb-6 md:text-xl">
            Kurze Beschreibung oder Slogan
          </p>
          <Button className="">Jetzt bestellen</Button>
        </div>
      </Section>

      <Section fullWidth background={'bg-white'} className="">
        <div className="col-span-12 text-center md:text-left">
          <h2 className="mb-4">Unsere handgemachten Favoriten</h2>
          <p className="text-muted-foreground mb-14">
            Jedes Stück erzählt eine Geschichte und wird mit Liebe zum Detail
            gefertigt.
          </p>
        </div>
        <ProductGrid products={featuredProducts} />
      </Section>

      <Section>
        <h2 className="col-span-12 mb-14 text-center md:text-left">
          Unsere Versprechen an dich
        </h2>

        <div className="col-span-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-200">
              <Shield className="h-8 w-8 text-gray-800" />
            </div>
            <h3 className="mb-2">Babysicher</h3>
            <p className="text-muted-foreground">
              100% schadstofffrei, speichelfest und nach höchsten
              Sicherheitsstandards geprüft – für unbeschwertes Spielen.
            </p>
          </div>

          <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-200">
              <HandHeart className="h-8 w-8 text-gray-800" />
            </div>
            <h3 className="mb-2">Handgemacht</h3>
            <p className="text-muted-foreground">
              Jedes Stück wird mit Liebe von Hand gefertigt und bleibt ein
              echtes Unikat.
            </p>
          </div>

          <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-200">
              <Settings className="h-8 w-8 text-gray-800" />
            </div>
            <h3 className="mb-2">Personalisierbar</h3>
            <p className="text-muted-foreground">
              Gestalte dein Accessoire mit Namen oder Initialen – so einzigartig
              wie dein Baby.
            </p>
          </div>

          <div className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-200">
              <Star className="h-8 w-8 text-gray-800" />
            </div>
            <h3 className="mb-2">Höchste Qualität</h3>
            <p className="text-muted-foreground">
              Hochwertige Materialien für langlebige Produkte, perfekt für den
              Alltag mit deinem Kind.
            </p>
          </div>
        </div>
      </Section>

      <Section fullWidth background="bg-white">
        <h2 className="col-span-12 mb-14 text-center md:text-left">
          Das sagen glückliche Eltern über uns
        </h2>

        <div className="col-span-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {testimonials.map(testimonial => (
            <TestinomialCard
              comment={testimonial.comment}
              name={testimonial.name}
              key={testimonial.id}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
