import { Section } from '@/components/sections/Section'

export default function AboutStorySection() {
  const shopName = 'Fynly' // z.B. 'Fynnly'

  return (
    <Section className="bg-white">
      <div className="col-span-12 mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Die Geschichte hinter {shopName}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Alles begann mit unseren ersten selbstgemachten Schnullerketten für
            die Familie – liebevoll per Hand gefertigt, sicher in der Auswahl
            der Materialien und mit einem Auge fürs Detail. Die Resonanz war
            riesig: Verwandte und Freunde waren begeistert und wollten sofort
            eigene Stücke. Aus diesem kleinen Familienprojekt wurde Schritt für
            Schritt ein eigener Onlineshop.
          </p>
        </div>
      </div>
    </Section>
  )
}
