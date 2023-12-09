import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Power Desenvolvimento Humano',
  description: 'Site da Power Desenvolvimento Humano',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={inter.className + " scroll-smooth scroll-pt-12"}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
