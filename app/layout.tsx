import type { Metadata } from 'next'
import { Space_Grotesk, Bebas_Neue, Great_Vibes } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
})

const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
})

export const metadata: Metadata = {
  title: 'TEDx BITS Goa | Ideas Worth Spreading',
  description: 'TEDx BITS Goa is an independently organized TED event at BITS Pilani K K Birla Goa Campus, bringing together brilliant minds to share ideas that matter.',
  keywords: ['TEDx', 'BITS Goa', 'BITS Pilani', 'TED', 'Ideas', 'Innovation', 'Technology', 'Goa'],
  authors: [{ name: 'TEDx BITS Goa Team' }],
  openGraph: {
    title: 'TEDx BITS Goa | Ideas Worth Spreading',
    description: 'TEDx BITS Goa is an independently organized TED event at BITS Pilani K K Birla Goa Campus.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEDx BITS Goa | Ideas Worth Spreading',
    description: 'TEDx BITS Goa is an independently organized TED event at BITS Pilani K K Birla Goa Campus.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${bebasNeue.variable} ${greatVibes.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
