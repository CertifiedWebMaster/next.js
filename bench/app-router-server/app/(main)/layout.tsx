import '../globals.css'
import { geistFontClasses } from '../font'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${geistFontClasses}`} lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: 'var(--font-sans)' }}>{children}</body>
    </html>
  )
}
