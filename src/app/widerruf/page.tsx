import { Section } from "../../components/sections/Section";

export default function RevocationPolicy() {
  return (
    <Section>
      <div className="col-span-12 mx-auto flex max-w-4xl flex-col gap-10 px-6 py-10">
        <h1 className="text-4xl font-bold tracking-tight">Widerrufsrecht</h1>

        <div className="space-y-3">
          <p>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gruenden
            diesen Vertrag zu widerrufen.
          </p>

          <p>
            Die Widerrufsfrist betraegt vierzehn Tage ab dem Tag, an dem Sie
            oder ein von Ihnen benannter Dritter, der nicht der Befoerderer ist,
            die Waren in Besitz genommen haben bzw. hat.
          </p>

          <p>
            Um Ihr Widerrufsrecht auszuueben, muessen Sie uns (Thomas Aschoff,
            Am Krebsbach 28, 63486 Bruchkoebel,
            thomas.aschoff@bebes-onlineshop.de, Telefon: 06181-4348598, Telefax:
            06181-4348598) mittels einer eindeutigen Erklaerung (z.B. ein mit
            der Post versandter Brief, Telefax oder E-Mail) ueber Ihren
            Entschluss, diesen Vertrag zu widerrufen, informieren. Sie koennen
            dafuer das beigefuegte Muster-Widerrufsformular verwenden, das
            jedoch nicht vorgeschrieben ist.
          </p>

          <p>
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
            Mitteilung ueber die Ausuebung des Widerrufsrechts vor Ablauf der
            Widerrufsfrist absenden.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">
            Folgen des Widerrufs
          </h2>
          <p>
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen,
            die wir von Ihnen erhalten haben, einschliesslich der Lieferkosten
            (mit Ausnahme der zusaetzlichen Kosten, die sich daraus ergeben,
            dass Sie eine andere Art der Lieferung als die von uns angebotene,
            guenstigste Standardlieferung gewaehlt haben), unverzueglich und
            spaetestens binnen vierzehn Tagen ab dem Tag zurueckzuzahlen, an dem
            die Mitteilung ueber Ihren Widerruf dieses Vertrags bei uns
            eingegangen ist.
          </p>
          <p>
            Fuer diese Rueckzahlung verwenden wir dasselbe Zahlungsmittel, das
            Sie bei der urspruenglichen Transaktion eingesetzt haben, es sei
            denn, mit Ihnen wurde ausdruecklich etwas anderes vereinbart; in
            keinem Fall werden Ihnen wegen dieser Rueckzahlung Entgelte
            berechnet. Wir koennen die Rueckzahlung verweigern, bis wir die
            Waren wieder zurueckerhalten haben oder bis Sie den Nachweis
            erbracht haben, dass Sie die Waren zurueckgesandt haben, je nachdem,
            welches der fruehere Zeitpunkt ist.
          </p>
          <p>
            Sie haben die Waren unverzueglich und in jedem Fall spaetestens
            binnen vierzehn Tagen ab dem Tag, an dem Sie uns ueber den Widerruf
            dieses Vertrags unterrichten, an uns zurueckzusenden oder zu
            uebergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der
            Frist von vierzehn Tagen absenden.
          </p>
          <p>Sie tragen die unmittelbaren Kosten der Ruecksendung der Waren.</p>
          <p>
            Sie muessen fuer einen etwaigen Wertverlust der Waren nur aufkommen,
            wenn dieser Wertverlust auf einen zur Pruefung der Beschaffenheit,
            Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang
            mit ihnen zurueckzufuehren ist.
          </p>
        </div>

        <div className="space-y-3">
          <p>
            Dieses Dokument wurde erstellt und wird aktualisiert mit der
            Technologie der janolaw AG.
          </p>
        </div>

        <div className="space-y-3">
          <p>
            (Wenn Sie den Vertrag widerrufen wollen, dann fuellen Sie bitte
            dieses Formular aus und senden Sie es zurueck.)
          </p>
          <p>An</p>
          <p>Thomas Aschoff</p>
          <p>Am Krebsbach 28</p>
          <p>63486 Bruchkoebel</p>
          <p>Telefax: 06181-4348598</p>
          <p>thomas.aschoff@bebes-onlineshop.de</p>
          <p>
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen
            Vertrag ueber den Kauf der folgenden Waren (*) / die Erbringung der
            folgenden Dienstleistung (*)
          </p>
          <p>_______________________________________________</p>
          <p>_______________________________________________</p>
          <p>
            Bestellt am ___________________ (*)/erhalten am
            _______________________ (*)
          </p>
          <p>
            Name des/der Verbraucher(s) ______________________________________
          </p>
          <p>Anschrift des/der Verbraucher(s)</p>
          <p>_________________________________</p>
          <p>_________________________________</p>
          <p>_________________________________</p>
          <p>Datum:________________</p>
          <p>
            Unterschrift des/der
            Verbraucher(s):___________________________________________
          </p>
          <p>(nur bei Mitteilung auf Papier)</p>
          <p>(*) Unzutreffendes streichen</p>
        </div>
      </div>
    </Section>
  );
}
