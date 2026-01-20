import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { CookieBanner } from '@/components/cookie-banner'
import { ConditionalAnalytics } from '@/components/conditional-analytics'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Groupe Capdis - Au service de la mesure',
  description: 'CAPDIS SARL - Experts en métrologie et instruments de mesure industrielle au Luxembourg',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <CookieBanner />
        <ConditionalAnalytics />
      </body>
    </html>
  )
}
