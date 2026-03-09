import { Section } from "../../components/sections/Section";

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

        <div className="mx-auto h-fit w-fit rounded-lg bg-gray-50 p-6 shadow-sm">
          <h2 className="mb-6">Kontaktinformationen</h2>

          <div className="space-y-4">
            <div>
              <h3>Name:</h3>
              <p>Thomas Aschoff</p>
            </div>

            <div>
              <h3>Adresse:</h3>
              <p>Am Krebsbach 28, 63486 Bruchkoebel</p>
            </div>

            <div>
              <h3>Email:</h3>
              <p>thomas.aschoff@bebes-onlineshop.de</p>
            </div>

            <div>
              <h3>Telefon:</h3>
              <p>06181-4348598</p>
            </div>

            <div>
              <h3>Telefax:</h3>
              <p>06181-4348598</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
