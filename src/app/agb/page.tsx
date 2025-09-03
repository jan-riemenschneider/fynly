import { Section } from '@/components/sections/Section'

export default function TermsAndConditions() {
  return (
    <Section>
      <div className="col-span-12 flex flex-col justify-start gap-6 p-6">
        <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>

        <div className="space-y-2 md:space-y-4">
          <h2>1. Geltungsbereich</h2>
          <p>
            Diese AGB gelten für alle Bestellungen über unseren Onlineshop
            „fynly“, vertreten durch Lisa-Marie Aschoff.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>2. Vertragsabschluss</h2>
          <p>
            Die Darstellung der Produkte im Shop stellt kein rechtlich bindendes
            Angebot dar. Der Kaufvertrag kommt zustande, wenn wir deine
            Bestellung per E-Mail bestätigen oder die Ware versenden.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>3. Produkte und Personalisierung</h2>
          <p>
            Alle Produkte sind handgefertigte Unikate. Bei personalisierten
            Artikeln kann es zu leichten Abweichungen kommen. Diese stellen
            keinen Mangel dar. Bitte überprüfe die Angaben (z.B. Namen,
            Wunschtexte) sorgfältig vor dem Absenden der Bestellung.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>4. Preise und Versand</h2>
          <p>
            Alle Preise verstehen sich inkl. der gesetzlichen Mehrwertsteuer
            (sofern ausgewiesen) zzgl. Versandkosten. Die Versandkosten werden
            im Bestellvorgang angezeigt.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>5. Zahlung</h2>
          <p>
            Zahlungsmöglichkeiten sind: Vorkasse, PayPal, ggf. weitere Dienste
            (z.B. Klarna, Stripe). Die Zahlung ist unmittelbar nach
            Vertragsschluss fällig.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>6. Lieferung</h2>
          <p>
            Die Lieferung erfolgt innerhalb Deutschlands. Lieferzeiten können je
            nach Produkt variieren – insbesondere bei personalisierten Artikeln.
            Die voraussichtliche Lieferzeit wird im Shop angegeben.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>7. Widerrufsrecht</h2>
          <p>
            Verbrauchern steht grundsätzlich ein 14-tägiges Widerrufsrecht zu.
            Ausgenommen sind: personalisierte Artikel, Sonderanfertigungen nach
            Kundenspezifikation. Diese sind vom Widerruf ausgeschlossen (§ 312g
            Abs. 2 BGB).
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>8. Gewährleistung</h2>
          <p>Es gelten die gesetzlichen Mängelhaftungsrechte.</p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>9. Haftung</h2>
          <p>
            Wir haften unbeschränkt nur bei Vorsatz und grober Fahrlässigkeit.
            Bei leichter Fahrlässigkeit nur bei Verletzung wesentlicher
            Vertragspflichten und begrenzt auf den typischen Schaden.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <h2>10. Schlussbestimmungen</h2>
          <p>
            Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Sollten
            einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen
            wirksam.
          </p>
        </div>
      </div>
    </Section>
  )
}
