'use client'
import ProductGrid from '@/components/grids/productGrid'
import { Section } from '@/components/sections/Section'
import { Heading } from '@/components/typography/heading'
import { Text } from '@/components/typography/text'
import { Button } from '@/components/ui/button'
import { Feature } from '@/components/ui/feature'
import { features } from '@/data/feature'
import { getFeaturedProducts } from '@/data/products'
import { testimonials } from '@/data/testimonials'
import { CldImage } from 'next-cloudinary'
import { TestinomialCard } from './components/cards/testimonialCard'
export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  return (
    <>
      <Section fullWidth background="bg-white">
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2">
          <div>
            <Heading variant="xl" level={1} className="font-playfair mb-8">
              Handgemachte Schnullerketten – liebevoll & sicher für dein Baby
            </Heading>
            <Text variant="SubHeading" level="p" className="mb-8 max-w-2xl">
              Unsere Schnullerketten werden mit viel Liebe handgefertigt,
              geprüft nach EU-Norm und sind frei von BPA. So kannst du deinem
              Kind Sicherheit und Stil zugleich schenken.
            </Text>
            <Button variant="default" size="lg">
              Jetzt entdecken
            </Button>
          </div>
          <CldImage
            src={'Schnullerkette-1/one'}
            alt={'Schnullerkette-2/one'}
            className="bg-white-50 mb-1 cursor-pointer object-scale-down last:mb-0"
            width={1000}
            height={1000}
            quality="80"
            format="auto"
            loading="eager"
          />
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
