import { Section } from "../../components/sections/Section";

export default function TermsAndConditions() {
  return (
    <Section>
      <div className="col-span-12 mx-auto flex max-w-4xl flex-col gap-10 px-6 py-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Allgemeine Geschaeftsbedingungen (AGB)
        </h1>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            § 1 Geltungsbereich, Kundeninformationen
          </h2>
          <p>
            Die folgenden allgemeinen Geschaeftsbedingungen (AGB) regeln das
            Vertragsverhaeltnis zwischen Thomas Aschoff (bebes-onlineshop.de)
            und Verbrauchern, die ueber unseren Shop Waren kaufen. Die
            Vertragssprache ist Deutsch.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            § 2 Vertragsschluss
          </h2>
          <p>
            (1) Die Angebote im Internet stellen eine unverbindliche
            Aufforderung an Sie dar, Waren zu kaufen.
          </p>
          <p>
            (2) Sie koennen ein oder mehrere Produkte in den Warenkorb legen.
            Im Laufe des Bestellprozesses geben Sie Ihre Daten und Wuensche
            bzgl. Zahlungsart, Liefermodalitaeten etc. ein. Erst mit dem
            Anklicken des Bestellbuttons geben Sie ein verbindliches Angebot auf
            Abschluss eines Kaufvertrags ab.
          </p>
          <p>
            (3) Mit der unverzueglich per E-Mail versandten Zugangsbestaetigung
            wird gleichzeitig auch die Annahme des Angebots erklaert und der
            Kaufvertrag damit abgeschlossen.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            § 3 Kundeninformation: Speicherung des Vertragstextes
          </h2>
          <p>
            Ihre Bestellung mit Einzelheiten zum geschlossenen Vertrag (z.B.
            Art des Produkts, Preis etc.) wird von uns gespeichert. Die AGB
            schicken wir Ihnen zu, Sie koennen die AGB aber auch nach
            Vertragsschluss jederzeit ueber unsere Webseite aufrufen. Als
            registrierter Kunde koennen Sie auf Ihre vergangenen Bestellungen
            ueber den Kunden LogIn-Bereich (Meine Bestellungen) zugreifen.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            § 4 Kundeninformation: Korrekturhinweis
          </h2>
          <p>
            Sie koennen Ihre Eingaben vor Abgabe der Bestellung jederzeit mit
            der Loeschtaste berichtigen. Wir informieren Sie auf dem Weg durch
            den Bestellprozess ueber weitere Korrekturmoeglichkeiten. Den
            Bestellprozess koennen Sie auch jederzeit durch Schliessen des
            Browser-Fensters komplett beenden.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            § 5 Eigentumsvorbehalt
          </h2>
          <p>
            Der Kaufgegenstand bleibt bis zur vollstaendigen Bezahlung unser
            Eigentum.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            § 6 Gesetzliche Maengelhaftungsrechte
          </h2>
          <p>Fuer unsere Waren bestehen gesetzliche Maengelhaftungsrechte.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            § 7 Haftungsbeschraenkung
          </h2>
          <p>
            Wir schliessen die Haftung fuer leicht fahrlaessige
            Pflichtverletzungen aus, sofern diese keine vertragswesentlichen
            Pflichten, Schaeden aus der Verletzung des Lebens, des Koerpers oder
            der Gesundheit, Garantien oder Ansprueche nach dem
            Produkthaftungsgesetz (ProdHaftG) betreffen. Gleiches gilt fuer
            Pflichtverletzungen unserer Erfuellungsgehilfen und unserer
            gesetzlichen Vertreter. Zu den vertragswesentlichen Pflichten gehoert
            insbesondere die Pflicht, Ihnen die Sache zu uebergeben und Ihnen
            das Eigentum daran zu verschaffen. Weiterhin haben wir Ihnen die
            Sache frei von Sach- und Rechtsmaengeln zu verschaffen.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            § 8 Verbraucherinformation: Teilnahme an einem Streitbeilegungsverfahren
          </h2>
          <p>
            Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
          </p>
        </div>

        <div className="space-y-3">
          <p>
            Dieses Dokument wurde erstellt und wird aktualisiert mit der
            Technologie der janolaw AG.
          </p>
        </div>
      </div>
    </Section>
  );
}
