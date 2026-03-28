import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'حي — Hai | منصة الحي',
    template: '%s | حي — Hai',
  },
  description: 'منصة خدمات الأحياء في السعودية. تنبيهات، خدمات، سوق محلي، ومشاوير — كل شيء في حيّك، منظّم وآمن.',
  metadataBase: new URL('https://hai-app.net'),
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'حي — Hai',
    description: 'منصة خدمات الحي — تنبيهات، خدمات، سوق محلي، ومشاوير في حيّك',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'Hai',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('hai_web_theme');if(t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
