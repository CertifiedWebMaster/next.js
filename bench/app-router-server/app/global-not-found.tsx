import { geistFontClasses } from './font'

export default function GlobalNotFound() {
  return (
    <html className={`${geistFontClasses}`} lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: 'var(--font-sans)' }}>not found</body>
    </html>
  )
}
