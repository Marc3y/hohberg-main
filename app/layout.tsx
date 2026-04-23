import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const baseUrl = 'https://www.bw-generationennetzwerk.de'

export const metadata: Metadata = {
  title: 'Generationen Netzwerk Hohberg e.V.',
  description:
    'Betreutes Wohnen – Generationen Netzwerk Hohberg e.V. Wir verbinden Jung und Alt in Hohberg: ambulanter Dienst, Seniorenbegegnung und gegenseitige Unterstützung.',
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Generationen Netzwerk Hohberg e.V.',
    description:
      'Ambulanter Dienst, Seniorenbegegnung und generationsübergreifende Unterstützung in Hohberg.',
    url: baseUrl,
    siteName: 'Generationen Netzwerk Hohberg e.V.',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Generationen Netzwerk Hohberg e.V.',
    description: 'Ambulanter Dienst, Seniorenbegegnung und generationsübergreifende Unterstützung in Hohberg.',
  },
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-inter`}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  )
}
