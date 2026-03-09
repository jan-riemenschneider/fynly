import { Section } from "../../components/sections/Section";

export default function LegalNotice() {
  return (
    <Section>
      <div className="col-span-12 mx-auto flex max-w-4xl flex-col gap-10 px-6 py-10">
        <h1 className="text-4xl font-bold tracking-tight">Impressum</h1>

        <div className="space-y-3">
          <p>Thomas Aschoff</p>
          <p>Am Krebsbach 28</p>
          <p>63486 Bruchkoebel</p>
          <p>Telefon: 06181-4348598</p>
          <p>Telefax: 06181-4348598</p>
          <p>E-Mail: thomas.aschoff@bebes-onlineshop.de</p>
          <p>Internet: www.bebes-onlineshop.de</p>
        </div>

        <div className="space-y-3">
          <p>
            Umsatzsteuer-Identifikationsnummer gemaess § 27a
            Umsatzsteuergesetz (UStG): DE259721028
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
