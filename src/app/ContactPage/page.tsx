export default function Contact() {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="heading-lg text-center mb-2">Kontakt</h1>
        <p className="text-center text-muted-foreground mb-8 px-3">
          Haben Sie Fragen oder spezielle Wünsche? Kontaktieren Sie uns.
        </p>

        <div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="heading-sm mb-4">Kontaktinformationen</h2>

            <div
              className="space-y-4
            "
            >
              <div>
                <p className="font-medium">Adresse:</p>
                <p className="text-muted-foreground">
                  Berliner Straße 62b, 63477 Maintal
                </p>
              </div>

              <div>
                <p className="font-medium">Email:</p>
                <p className="text-muted-foreground">
                  lmaschoff@googlemail.com
                </p>
              </div>

              <div>
                <p className="font-medium">Telefon:</p>
                <p className="text-muted-foreground">+49 123 4567890</p>
              </div>

              <div>
                <p className="font-medium">Öffnungszeiten:</p>
                <p className="text-muted-foreground">24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
