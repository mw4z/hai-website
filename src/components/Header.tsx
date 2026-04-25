import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg viewBox="0 0 192 192" className="w-9 h-9">
            <defs>
              <linearGradient id="brandHdr" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00b894"/>
                <stop offset="100%" stopColor="#005c48"/>
              </linearGradient>
              <radialGradient id="glowHdr" cx="40%" cy="32%" r="58%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.22"/>
                <stop offset="60%" stopColor="#fff" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="vigHdr" cx="82%" cy="92%" r="70%">
                <stop offset="0%" stopColor="#000" stopOpacity="0.22"/>
                <stop offset="80%" stopColor="#000" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="192" height="192" rx="42" fill="url(#brandHdr)"/>
            <rect width="192" height="192" rx="42" fill="url(#glowHdr)"/>
            <rect width="192" height="192" rx="42" fill="url(#vigHdr)"/>
            <circle cx="96" cy="96" r="73.5" fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="0.8"/>
            <circle cx="96" cy="96" r="57"   fill="none" stroke="#fff" strokeOpacity="0.24" strokeWidth="1.4"/>
            <circle cx="96" cy="96" r="19.5" fill="#fff"/>
            <circle cx="96"    cy="39"    r="11.25" fill="#fff"/>
            <circle cx="145.5" cy="124.5" r="11.25" fill="#fff"/>
            <circle cx="46.5"  cy="124.5" r="11.25" fill="#fff"/>
          </svg>
          <span className="text-xl font-bold text-gray-900 dark:text-white">حي</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
          <Link href="/privacy" className="hover:text-primary-700 dark:hover:text-primary-400 transition-colors hidden md:inline">الخصوصية</Link>
          <Link href="/terms" className="hover:text-primary-700 dark:hover:text-primary-400 transition-colors hidden md:inline">الشروط</Link>
          <Link href="/contact" className="hover:text-primary-700 dark:hover:text-primary-400 transition-colors">تواصل معنا</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
