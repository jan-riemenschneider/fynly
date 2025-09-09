import ProductGrid from '@/components/grids/productGrid'
import { Section } from '@/components/sections/Section'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Button } from '@/components/ui/button'
import { Feature } from '@/components/ui/feature'
import { features } from '@/data/feature'
import { getFeaturedProducts } from '@/data/products'
import { testimonials } from '@/data/testimonials'
import { TestinomialCard } from './components/cards/testimonialCard'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      <Section>
        <div className="col-span-12 items-center md:col-span-6">
          <Heading variant="xl" level={1}>
            Produktname
          </Heading>
          <Text level="p" variant="muted">
            Kurze Beschreibung oder Slogan
          </Text>
          <Button>Jetzt bestellen</Button>
        </div>
      </Section>

      <Section fullWidth background={'bg-gray-50'} className="">
        <div className="col-span-12 text-center md:text-left">
          <Heading level={2} variant="lg" className="mb-4">
            Unsere handgemachten Favoriten
          </Heading>
          <Text level="p" variant="muted" className="mb-14">
            Jedes Stück erzählt eine Geschichte und wird mit Liebe zum Detail
            gefertigt.
          </Text>
        </div>
        <ProductGrid products={featuredProducts} />
      </Section>

      <Section>
        <Heading
          level={2}
          variant="lg"
          className="col-span-12 mb-14 text-center md:text-left"
        >
          Unsere Versprechen an dich
        </Heading>

        <div className="col-span-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          {features.map(feature => (
            <Feature
              key={feature.id}
              color={feature.color}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Section>

      <Section fullWidth background="bg-gray-50">
        <Heading
          level={2}
          variant="lg"
          className="col-span-12 mb-14 text-center md:text-left"
        >
          Das sagen glückliche Eltern über uns
        </Heading>

        <div className="col-span-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
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
