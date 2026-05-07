import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const TITLE = "GTM Hackathon | LatAm's First Go-to-Market Hackathon"
const DESCRIPTION =
  "Colombia & Mexico's premier go-to-market event. 300+ founders, operators, and growth leaders — 48 hours of real execution, real challenges, real results. Bogota May 9-10, Mexico City May 23-24, 2026."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'GTM Hackathon — LatAm\'s First Go-to-Market Hackathon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-twitter.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
