import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

import '../slick/slick.css'
import '../slick/slick-theme.css'

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LH',
  description: 'Land&House',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
