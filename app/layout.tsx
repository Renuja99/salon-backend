import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const urbanist = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sapelka Admin Panel',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar/>
        {children}
        
      </body>
    </html>
  )
}
