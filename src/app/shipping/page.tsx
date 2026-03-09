import { Section } from "../../components/sections/Section";

export default function Shipping() {
  return (
    <Section>
      <div className="col-span-12 mx-auto flex max-w-4xl flex-col gap-10 px-6 py-10">
        <h1 className="text-4xl font-bold tracking-tight">Zahlung & Versand</h1>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Zahlung</h2>
          <p>
            Du hast die Moeglichkeit, deine Bestellung ueber Stripe Checkout zu
            bezahlen. Je nach Verfuegbarkeit koennen dort unter anderem PayPal,
            Apple Pay, Kreditkarte oder SEPA-Lastschrift angeboten werden.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Zahlung ueber Stripe Checkout
          </h2>
          <p>
            Nach Absenden der Bestellung wirst du zum Stripe Checkout
            weitergeleitet. Dort erfolgt durch Abschluss des Bezahlvorgangs die
            Buchung.
          </p>
          <p>
            Der Versand erfolgt, sobald wir einen Zahlungseingang feststellen
            konnten und alle Artikel verfuegbar sind.
          </p>
          <p>
            Eine abweichende Lieferadresse kann nur vor Abschluss des
            Bestellvorgangs eingetragen werden, danach ist eine Aenderung nicht
            mehr moeglich.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Liefer- und Versandkosten
          </h2>
          <p>Wie bekommst du deine Ware?</p>
          <p>
            Pakete verschicken wir schnell und sicher mit einem von uns
            ausgewaehlten Versanddienstleister. Nach dem Versand erhaeltst du
            eine Versandbestaetigung per E-Mail.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Was ist, wenn ich nicht zu Hause bin?
          </h2>
          <p>
            Solltest du die Lieferung nicht annehmen koennen, erfolgt je nach
            Versanddienstleister eine Benachrichtigung oder ein weiterer
            Zustellversuch. Artikel, die nicht zugestellt werden konnten und
            dadurch an uns zurueckgesendet wurden, werden nur ein zweites Mal an
            dich versandt, wenn die anfallenden Versandkosten von dir uebernommen
            werden.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Die Lieferzeit?
          </h2>
          <p>
            Die Lieferzeit entnimmst du bitte der Produktbeschreibung. Bei
            personalisierten Artikeln kann sich die Lieferzeit im Einzelfall
            verlaengern.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Versandkosten</h2>
          <p>Innerhalb von Deutschland betragen die Versandkosten 4,99 EUR.</p>
          <p>Alle Preise inkl. der gesetzlichen Mehrwertsteuer.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Ruecksendung?</h2>
          <p>Naehere Informationen dazu findest du im Widerrufsrecht.</p>
        </div>
      </div>
    </Section>
  );
}
