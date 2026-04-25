import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 192 192" className="w-8 h-8">
                <defs>
                  <linearGradient id="brandFtr" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00b894"/>
                    <stop offset="100%" stopColor="#005c48"/>
                  </linearGradient>
                  <radialGradient id="glowFtr" cx="40%" cy="32%" r="58%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.22"/>
                    <stop offset="60%" stopColor="#fff" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="vigFtr" cx="82%" cy="92%" r="70%">
                    <stop offset="0%" stopColor="#000" stopOpacity="0.22"/>
                    <stop offset="80%" stopColor="#000" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <rect width="192" height="192" rx="42" fill="url(#brandFtr)"/>
                <rect width="192" height="192" rx="42" fill="url(#glowFtr)"/>
                <rect width="192" height="192" rx="42" fill="url(#vigFtr)"/>
                <circle cx="96" cy="96" r="73.5" fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="0.8"/>
                <circle cx="96" cy="96" r="57"   fill="none" stroke="#fff" strokeOpacity="0.24" strokeWidth="1.4"/>
                <circle cx="96" cy="96" r="19.5" fill="#fff"/>
                <circle cx="96"    cy="39"    r="11.25" fill="#fff"/>
                <circle cx="145.5" cy="124.5" r="11.25" fill="#fff"/>
                <circle cx="46.5"  cy="124.5" r="11.25" fill="#fff"/>
              </svg>
              <span className="text-lg font-bold text-gray-900 dark:text-white">حي — Hai</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              منصة خدمات الأحياء. تنبيهات، خدمات، سوق محلي، ومشاوير — كل شيء في حيّك.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">قانوني</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/privacy" className="hover:text-primary-700 dark:hover:text-primary-400 transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-primary-700 dark:hover:text-primary-400 transition-colors">الشروط والأحكام</Link></li>
              <li><Link href="/delete-account" className="hover:text-primary-700 dark:hover:text-primary-400 transition-colors">حذف الحساب</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">الدعم</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/contact" className="hover:text-primary-700 dark:hover:text-primary-400 transition-colors">تواصل معنا</Link></li>
              <li><a href="mailto:support@hai-app.net" className="hover:text-primary-700 dark:hover:text-primary-400 transition-colors">support@hai-app.net</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()} حي — Hai. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}
