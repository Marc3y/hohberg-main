import { Navigation } from '@/components/navigation'
import Person from '@/components/sections/vorstand/person'
import { TopBar } from '@/components/top-bar'
import { StaticImageData } from 'next/image'
import {
  AndreasMoser,
  BaerbelKammerer,
  ChristianeRoswag,
  ChristineGoeppert,
  ChristophTeichmann,
  DirkStegner,
  GerdaSchaeuble,
  MarianneWoerter,
  MartinRoswag,
  VeraEhret,
} from '../../lib/vorstandpictures'
import { Footer } from '@/components/footer'
import { BottomBar } from '@/components/bottom-bar'

interface PersonProp {
  title: string
  description: string
  img: StaticImageData
}

const persons: PersonProp[] = [
  {
    title: 'Dirk Stegner – 1. Vorsitzender',
    description:
      'Jahrgang 1970, gelernter Papiermacher und Papieringenieur, Gebietsverkaufsleiter für Papierchemikalien beim Marktführer Solenis. Ich bin zum Betreuten Wohnen gekommen wie die „Jungfrau zum Kind". Das Thema generationsübergreifende Netzwerkarbeit finde ich aber sehr interessant und wichtig in unserer heutigen Gesellschaft.',
    img: DirkStegner,
  },
  {
    title: 'Martin Roswag – 1. Stellvertretender Vorsitzender',
    description:
      'Ich bin 1962 im Münsterland geboren und lebe seit über 20 Jahren hier in der Ortenau. Beruflich bin ich Maschinenbauingenieur und betreibe ein kleines Zaunbauunternehmen. Ich bin begeistert davon, wie in einer so kleinen Dorfgemeinschaft ein Verein entstehen kann, in dem sich neben zahlreichen Ehrenamtlichen über 35 Mitarbeiter dafür engagieren, Menschen in ihrem Alltag zu unterstützen und Generationen zu verbinden.',
    img: MartinRoswag,
  },
  {
    title: 'Christiane Roswag – 2. Stellvertretende Vorsitzende',
    description:
      'Ich bin Jahrgang 1962 und arbeite für eine Klinik in der Finanzbuchhaltung. Ich habe mich schon seit meiner Jugend für die ehrenamtliche Arbeit mit Kindern und Senioren/innen engagiert. Deshalb freue ich mich auf zukünftige Aktivitäten mit allen Generationen.',
    img: ChristianeRoswag,
  },
]

const owners: PersonProp[] = [
  {
    title: 'Vera Ehret',
    description:
      'Ich bin Jahrgang 1987 und wohne in Hofweier. Schon in meiner Jugend war mir klar, dass ich gerne mit älteren Menschen zusammen arbeite. Seit über 20 Jahren bin ich nun in der Altenpflege tätig. Aber auch die Kinder und Jugendlichen liegen mir am Herzen, so engagiere ich mich seit 15 Jahren als Übungsleiterin im Kinderturnen.',
    img: VeraEhret,
  },
  {
    title: 'Christine Göppert',
    description:
      'Ich bin Jahrgang 1966 und seit vielen Jahren in mehreren Vereinen ehrenamtlich tätig, weil es meine Überzeugung ist, dass man sich engagieren muss, wenn man etwas bewegen will.',
    img: ChristineGoeppert,
  },
  {
    title: 'Bärbel Kammerer',
    description:
      'Ich bin Jahrgang 1958 und habe über 40 Jahre im Kindergarten gearbeitet. Ich habe mich in verschiedenen Bereichen ehrenamtlich engagiert, tue das weiterhin. Ich finde es wichtig, dass die Senioren durch den Verein unterstützt werden, deshalb arbeite ich gerne mit.',
    img: BaerbelKammerer,
  },
  {
    title: 'Andreas Moser',
    description:
      'Ich komme aus Diersburg und bin Jahrgang 1966. Von Beruf bin ich Krankenpfleger und arbeite seit über 25 Jahren in der Palliativpflege. In meinem Beruf bekomme ich viel mit, was die ambulante Versorgung betrifft, und weiß, dass unser Verein etwas Besonderes im Bereich Senioren darstellt. Deshalb arbeite ich auch gerne in der Vorstandschaft mit.',
    img: AndreasMoser,
  },
  {
    title: 'Gerda Schäuble',
    description:
      'Ich bin Jahrgang 1953, seit 2009 arbeite ich in der Seniorenbegegnung Niederschopfheim ehrenamtlich, 2012 übernahm ich die Leitung und seit 2011 unterstütze ich die Arbeit im Vorstand. Für mich ist es sehr wichtig, für die Senioren da zu sein.',
    img: GerdaSchaeuble,
  },
  {
    title: 'Christoph Teichmann',
    description:
      'Jahrgang 1977. Seit 25 Jahren bin ich in der Finanzdienstleistungsbranche tätig, davon die letzten 7 Jahre bei der Deutschen Ärzteversicherung. Mir macht es viel Spaß, in der Gemeinde vor allem den Senioren etwas zu bieten und ihnen damit eine schöne Abwechslung zu schenken.',
    img: ChristophTeichmann,
  },
  {
    title: 'Marianne Wörter',
    description:
      'Ich bin Jahrgang 1958 und wohne in Diersburg. Als Krankenschwester habe ich 20 Jahre, bis zu meiner Rente, in der ambulanten Pflege gearbeitet. Die Senioren/innen sind mir sehr ans Herz gewachsen, deshalb engagiere ich mich gerne in der Seniorenbegegnung in Diersburg.',
    img: MarianneWoerter,
  },
]

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <TopBar />
      <Navigation />
      <main>
        <div className="mx-auto max-w-4xl py-14 px-6 lg:px-12">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#2D5A3D] mb-10">Vorstandschaft</h1>
          <div className="flex flex-col gap-10">
            {persons.map((person) => (
              <Person
                key={person.title}
                title={person.title}
                description={person.description}
                img={person.img}
              />
            ))}
          </div>

          <h2 className="text-xl font-bold text-[#2D5A3D] mt-14 mb-8">Beisitzer</h2>
          <div className="flex flex-col gap-10">
            {owners.map((person) => (
              <Person
                key={person.title}
                title={person.title}
                description={person.description}
                img={person.img}
              />
            ))}
          </div>
        </div>
        <Footer />
        <BottomBar />
      </main>
    </div>
  )
}
