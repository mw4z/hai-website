import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <svg viewBox="0 0 192 192" className="w-9 h-9">
            <rect width="192" height="192" rx="42" fill="#15803d"/>
            <circle cx="96" cy="106" r="17" fill="#fff"/>
            <circle cx="96" cy="51" r="11" fill="#fff"/>
            <circle cx="144" cy="134" r="11" fill="#fff"/>
            <circle cx="48" cy="134" r="11" fill="#fff"/>
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
