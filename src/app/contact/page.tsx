export default function Contact() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-6">
      <div className="mb-6">
        <h1 className="mb-2 text-center">Kontakt</h1>
        <p className="text-center">
          Haben Sie Fragen oder spezielle Wünsche? Kontaktieren Sie uns.
        </p>
      </div>

      <div className="h-fit w-fit rounded-lg bg-gray-50 p-6 shadow-sm">
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
  )
}
