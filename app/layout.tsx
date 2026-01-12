import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Landing Page',
  description: 'React + Next.js Landing Page Demo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
