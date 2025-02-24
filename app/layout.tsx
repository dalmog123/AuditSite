import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'למידה דיגיטלית - ביקורת חשבונות',
  description: 'אתר שמסכם את החומר בקורס ביקורת חשבונות באוניברסיטה הפתוחה',
  generator: 'Almog Dror',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
