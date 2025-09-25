'use client'
import CldImage from '@/components/cloudinary/CldImageWrapper'
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
      <Section
        fullWidth
        className="h-screen bg-[url('/handgemachte.png')] bg-[length:100%_100%] bg-center"
      >
        <div className="col-span-12 mb-10 lg:col-span-7">
          <Heading
            variant="xl"
            level={1}
            className="font-flowers text-primary-foreground mb-6 text-center md:mb-10 lg:text-start"
          >
            handgemachte
          </Heading>
          <Heading
            variant="xl"
            level={2}
            className="font-rasa text-primary-foreground mb-6 max-w-full border-b-3 border-dotted border-white pb-6 text-center lg:max-w-fit lg:text-start"
          >
            BABY ACCESSOIRES
          </Heading>
          <Text
            variant="SubHeading"
            level="p"
            className="font-inter text-primary-foreground mb-12 max-w-full text-center lg:max-w-3xl lg:text-start"
          >
            GEPRÜFT NACH EU-NORM, BPA FREI UND OHNE CHEMIKALIEN
          </Text>
          <Button
            variant="default"
            size="lg"
            className="w-full rounded-md lg:w-md"
          >
            Jetzt entdecken
          </Button>
        </div>
        <div className="col-span-12 mx-auto lg:col-span-5">
          <CldImage
            alt={'hero-section'}
            src={'hero-section'}
            width={400}
            height={400}
            quality={60}
            className="object-contain"
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
