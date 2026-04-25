import Link from 'next/link'
import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import ScrollReveal from '@/components/ScrollReveal'
import PhoneFrame from '@/components/PhoneMockup'

export const metadata: Metadata = {
  title: 'حي — Hai | منصة الحي',
  description: 'تنبيهات، خدمات، سوق محلي، ومشاوير — منصة واحدة تخدم حيّك بالكامل.',
}

export default function HomePage() {
  return (
    <PageShell>
      <ScrollReveal />

      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #006d57 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
          {/* Icon */}
          <div className="mx-auto w-20 h-20 rounded-3xl overflow-hidden shadow-xl shadow-primary-600/20 mb-8 animate-hero animate-float">
            <svg viewBox="0 0 192 192" className="w-full h-full">
              <defs>
                <linearGradient id="brandHero" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00b894"/>
                  <stop offset="100%" stopColor="#005c48"/>
                </linearGradient>
                <radialGradient id="glowHero" cx="40%" cy="32%" r="58%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.22"/>
                  <stop offset="60%" stopColor="#fff" stopOpacity="0"/>
                </radialGradient>
                <radialGradient id="vigHero" cx="82%" cy="92%" r="70%">
                  <stop offset="0%" stopColor="#000" stopOpacity="0.22"/>
                  <stop offset="80%" stopColor="#000" stopOpacity="0"/>
                </radialGradient>
              </defs>
              <rect width="192" height="192" rx="42" fill="url(#brandHero)"/>
              <rect width="192" height="192" rx="42" fill="url(#glowHero)"/>
              <rect width="192" height="192" rx="42" fill="url(#vigHero)"/>
              <circle cx="96" cy="96" r="73.5" fill="none" stroke="#fff" strokeOpacity="0.07" strokeWidth="0.8"/>
              <circle cx="96" cy="96" r="57"   fill="none" stroke="#fff" strokeOpacity="0.24" strokeWidth="1.4"/>
              <circle cx="96" cy="96" r="19.5" fill="#fff"/>
              <circle cx="96"    cy="39"    r="11.25" fill="#fff"/>
              <circle cx="145.5" cy="124.5" r="11.25" fill="#fff"/>
              <circle cx="46.5"  cy="124.5" r="11.25" fill="#fff"/>
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-5 leading-snug animate-hero-delay">
            كل شيء في حيّك،
            <br />
            <span className="text-primary-700 dark:text-primary-400">في مكان واحد</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-hero-delay-2">
            تنبيهات، خدمات، سوق محلي، ومشاوير — منصة واحدة تخدم حيّك بالكامل، بشكل منظّم وآمن.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-14 animate-hero-delay-2">
            {STATS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-700 dark:text-primary-400 animate-count" style={{ animationDelay: `${0.6 + i * 0.15}s` }}>{s.value}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Features ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">ماذا يقدم حي؟</h2>
          <p className="text-gray-500 dark:text-gray-400">كل ما تحتاجه في حيّك — في مكان واحد</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {FEATURES.map((f, i) => (
            <div key={i} className="animate-on-scroll group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg hover:shadow-primary-600/5 transition-all duration-300">
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">كيف يعمل؟</h2>
            <p className="text-gray-500 dark:text-gray-400">ثلاث خطوات بسيطة للبدء</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
            {STEPS.map((s, i) => (
              <div key={i} className="animate-on-scroll text-center">
                <div className="w-14 h-14 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-lg shadow-primary-600/25">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ App Screens ═══ */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center animate-on-scroll mb-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">من داخل التطبيق</h2>
            <p className="text-gray-500 dark:text-gray-400">واجهة بسيطة وسهلة الاستخدام</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 stagger">
            {SCREENS.map((s, i) => (
              <div key={i} className="animate-on-scroll">
                <PhoneFrame src={s.src} label={s.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">الأسئلة الشائعة</h2>
          </div>
          <div className="space-y-3 stagger">
            {FAQ.map((q, i) => (
              <details key={i} className="animate-on-scroll bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-5 group hover:border-primary-200 dark:hover:border-primary-800 transition-colors duration-200">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{q.q}</span>
                  <span className="text-primary-600 dark:text-primary-400 group-open:rotate-180 transition-transform duration-300 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">{q.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center animate-on-scroll">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 md:p-14 shadow-2xl shadow-primary-600/20">
            <h2 className="text-3xl font-bold text-white mb-4">جاهز تخدم حيّك؟</h2>
            <p className="text-primary-100 mb-8 text-lg">حمّل التطبيق الآن واستفد من خدمات حيّك</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://apps.apple.com/us/app/%D8%AD%D9%8A/id6761731680"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Hai on the App Store"
                className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 transition-colors px-6 py-3 rounded-xl text-sm font-semibold shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM260.6 85.1c28-33.2 25.4-63.5 24.6-74.5-24.7 1.4-53.3 16.8-69.6 35.7-18 20.3-28.6 45.5-26.3 73.9 26.7 2 51.1-11.7 71.3-35.1z"/>
                </svg>
                <span>حمّل من App Store</span>
              </a>
              <span className="bg-white/10 text-white px-6 py-3 rounded-xl text-sm font-medium backdrop-blur-sm border border-white/20">
                قريباً على Google Play
              </span>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

const STATS = [
  { value: '3', label: 'مدن' },
  { value: '50+', label: 'حي' },
  { value: '13', label: 'فئة محتوى' },
]

const FEATURES = [
  { icon: '🔔', title: 'تنبيهات الحي', desc: 'اعرف وش يصير في حيّك أول بأول — انقطاع مياه، أمن، صيانة.' },
  { icon: '🛒', title: 'سوق محلي', desc: 'بيع واشتري من ناس قريبة منك — أثاث، إلكترونيات، أغراض متنوعة.' },
  { icon: '🔧', title: 'خدمات موثوقة', desc: 'ابحث عن اللي يساعدك — سباك، كهربائي، مشاوير.' },
  { icon: '🕌', title: 'أخبار المسجد', desc: 'أوقات الصلاة وإعلانات مسجدك.' },
  { icon: '🚗', title: 'مشاوير', desc: 'اطلب مشوار من جار أو اعرض توصيلة — بتنسيق مباشر وآمن.' },
  { icon: '⭐', title: 'سمعة وثقة', desc: 'نظام سمعة يبني الثقة بين الجيران ويكافئ المساهمين.' },
]

const STEPS = [
  { title: 'سجّل برقمك', desc: 'تسجيل سريع برقم جوالك السعودي. بدون بريد إلكتروني أو كلمة مرور.' },
  { title: 'حدد حيّك', desc: 'يتم تحديد حيّك تلقائياً عبر GPS أو تختاره يدوياً.' },
  { title: 'استفد وساهم', desc: 'اطلب خدمة، بيع واشتري، بلّغ عن مشكلة، أو ساعد جيرانك — وابنِ سمعتك.' },
]

/*
 * Screenshots: Drop real app screenshots into public/screenshots/
 * Name them: feed.png, ride.png, chat.png, profile.png, catalog.png, etc.
 * They'll appear inside phone frames automatically.
 */
const SCREENS = [
  { src: '/screenshots/feed.png', label: 'الرئيسية' },
  { src: '/screenshots/chat.png', label: 'المحادثات' },
  { src: '/screenshots/ride.png', label: 'المشاوير' },
  { src: '/screenshots/profile.png', label: 'الملف الشخصي' },
]

const FAQ = [
  { q: 'هل التطبيق مجاني؟', a: 'نعم، حي مجاني بالكامل. لا توجد رسوم تسجيل أو اشتراك.' },
  { q: 'كيف يتم تحديد الحي؟', a: 'يتم تحديد حيّك تلقائياً عبر الموقع الجغرافي (GPS) أو يمكنك اختياره يدوياً من القائمة.' },
  { q: 'هل بياناتي آمنة؟', a: 'نعم. لا نشارك بياناتك مع أطراف خارجية. يمكنك حذف حسابك في أي وقت.' },
  { q: 'هل يمكنني حذف حسابي؟', a: 'نعم. يمكنك حذف حسابك من داخل التطبيق أو عبر صفحة حذف الحساب في موقعنا.' },
  { q: 'ما المدن المتوفرة؟', a: 'حالياً متوفر في مكة المكرمة، جدة، والرياض. سيتم التوسع لمدن أخرى قريباً.' },
]
