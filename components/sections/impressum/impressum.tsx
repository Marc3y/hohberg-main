export function ImpressumSection() {
  return (
    <div className="flex-1 flex flex-col py-14 px-6 sm:px-12 lg:px-40 max-w-3xl mx-auto w-full gap-6">
      <h1 className="text-2xl lg:text-3xl font-bold text-[#2D5A3D]">Impressum</h1>

      <section className="flex flex-col gap-2">
        <h2 className="text-base font-semibold text-[#3D5260]">Betreiber / Herausgeber</h2>
        <p className="text-[#1C1C1C] leading-relaxed">
          Betreutes Wohnen Generationen Netzwerk Hohberg e.V.
          <br />
          Vertretungsberechtigt: 1. Vorsitzender Dirk Stegner
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-base font-semibold text-[#3D5260]">Geschäftsstelle</h2>
        <p className="text-[#1C1C1C] leading-relaxed">
          Hauptstraße 63, 77749 Hohberg
          <br />
          Servicezeiten: Montag, Dienstag und Donnerstag
          <br />
          von 8:30 Uhr – 11:30 Uhr
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-base font-semibold text-[#3D5260]">Kontakt</h2>
        <p className="text-[#1C1C1C] leading-relaxed">
          Tel.{' '}
          <a href="tel:078087556" className="underline underline-offset-2 hover:text-[#2D5A3D]">
            07808 / 7556
          </a>
          <br />
          E-Mail:{' '}
          <a
            href="mailto:kontakt@bw-generationennetzwerk.de"
            className="underline underline-offset-2 hover:text-[#2D5A3D]"
          >
            kontakt@bw-generationennetzwerk.de
          </a>
        </p>
      </section>
    </div>
  )
}

export default ImpressumSection
