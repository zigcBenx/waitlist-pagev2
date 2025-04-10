import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'From Code to Business',
  description: 'A guide to starting a business as a full time developer',
  keywords: ['From Code to Business', 'Starting a business', 'Full time developer'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
