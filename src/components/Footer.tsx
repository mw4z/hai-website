import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 192 192" className="w-8 h-8">
                <rect width="192" height="192" rx="42" fill="#15803d"/>
                <circle cx="96" cy="106" r="17" fill="#fff"/>
                <circle cx="96" cy="51" r="11" fill="#fff"/>
                <circle cx="144" cy="134" r="11" fill="#fff"/>
                <circle cx="48" cy="134" r="11" fill="#fff"/>
              </svg>
              <span className="text-lg font-bold text-gray-900">حي — Hai</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              منصة مجتمعية لسكان الأحياء. تواصل مع جيرانك بشكل آمن ومنظم.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">قانوني</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/privacy" className="hover:text-primary-700 transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-primary-700 transition-colors">الشروط والأحكام</Link></li>
              <li><Link href="/delete-account" className="hover:text-primary-700 transition-colors">حذف الحساب</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">الدعم</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/contact" className="hover:text-primary-700 transition-colors">تواصل معنا</Link></li>
              <li><a href="mailto:support@haiapp.sa" className="hover:text-primary-700 transition-colors">support@haiapp.sa</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} حي — Hai. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  )
}
