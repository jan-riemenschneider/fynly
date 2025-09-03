import { Section } from '@/components/sections/Section'

export default function Contact() {
  return (
    <Section>
      <div className="col-span-12 items-center">
        <div className="mb-6">
          <h1 className="mb-2 text-center">Kontakt</h1>
          <p className="text-center">
            Haben Sie Fragen oder spezielle Wünsche? Kontaktieren Sie uns.
          </p>
        </div>

        <div className="h-fit w-fit rounded-lg bg-gray-50 p-6 shadow-sm mx-auto">
          <h2 className="mb-6">Kontaktinformationen</h2>

          <div className="space-y-4">
            <div>
              <h3>Adresse:</h3>
              <p>Berliner Straße 62b, 63477 Maintal</p>
            </div>

            <div>
              <h3>Email:</h3>
              <p>lmaschoff@googlemail.com</p>
            </div>

            <div>
              <h3>Öffnungszeiten:</h3>
              <p>24/7</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
