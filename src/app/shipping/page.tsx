import { Section } from '@/components/sections/Section'

export default function Shipping() {
  return (
    <Section>
      <div className="col-span-12 flex flex-col justify-start gap-6 p-6">
        <h1>Versand & Lieferung</h1>

        <div className="space-y-2 md:space-y-4">
          <h2>Versandkosten</h2>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <p className="font-bold">Innerhalb Deutschlands:</p>
              <p>4,99 € pro Bestellung</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Kostenloser Versand:</p>
              <p>ab 50 € Bestellwert</p>
            </div>
          </div>
          <p>Alle Preise verstehen sich inkl. gesetzlicher Mehrwertsteuer.</p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>Lieferzeiten</h2>
          <div className="space-y-1">
            <div className="flex space-x-2">
              <p className="font-bold">Standardversand:</p>
              <p>3-5 Werktage</p>
            </div>
            <div className="flex space-x-2">
              <p className="font-bold">Bearbeitungszeit:</p>
              <p>1-2 Werktage</p>
            </div>
          </div>
          <p>Alle Preise verstehen sich inkl. gesetzlicher Mehrwertsteuer.</p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>Versandpartner</h2>
          <p>
            Wir versenden ausschließlich mit DHL für eine sichere und
            zuverlässige Zustellung.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>Verpackung</h2>
          <ul className="list-inside list-disc">
            <li>Umweltfreundliche Verpackungsmaterialien</li>
            <li>Liebevoll verpackt für den sicheren Transport</li>
            <li>Jede Bestellung wird sorgfältig geprüft</li>
          </ul>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>Liefergebiete</h2>
          <p className="font-bold">
            Aktuell liefern wir nur innerhalb Deutschlands.
          </p>
          <p>
            Bei Fragen zum Versand in andere Länder kontaktieren Sie uns gerne.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>Sendungsverfolgung</h2>
          <p>Nach dem Versand erhalten Sie automatisch:</p>
          <ul className="list-inside list-disc">
            <li>Versandbestätigung per E-Mail</li>
            <li>Tracking-Nummer zur Sendungsverfolgung</li>
            <li>Link zur DHL-Sendungsverfolgung</li>
          </ul>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>Lieferadresse ändern</h2>
          <p>
            Solange Ihre Bestellung noch nicht versandt wurde, können Sie die
            Lieferadresse ändern. Kontaktieren Sie uns einfach per E-Mail.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>Abwesenheit bei Lieferung</h2>
          <p>Bei Ihrer Abwesenheit:</p>
          <ul className="list-inside list-disc">
            <li>Zustellung an Nachbarn (nach Absprache)</li>
            <li>Hinterlegung in Packstation (falls angegeben)</li>
            <li>Benachrichtigung zur Abholung in der nächsten Postfiliale</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
