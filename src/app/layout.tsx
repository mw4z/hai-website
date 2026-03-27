import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'حي — Hai | منصة الحي',
    template: '%s | حي — Hai',
  },
  description: 'منصة مجتمعية لسكان الأحياء في السعودية. تواصل مع جيرانك، اطلب خدمات، بيع واشتري، واطلب مشاوير — كل شيء في حيّك.',
  metadataBase: new URL('https://hai-app.net'),
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'حي — Hai',
    description: 'منصة الحي — تواصل مع جيرانك بشكل آمن ومنظم',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'Hai',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
