import Link from 'next/link'
import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'حي — Hai | منصة الحي',
  description: 'تواصل مع جيرانك، اطلب خدمات، بيع واشتري، واطلب مشاوير — كل شيء في حيّك.',
}

export default function HomePage() {
  return (
    <PageShell>
      {/* ═══ Hero ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
          {/* Icon */}
          <div className="mx-auto w-20 h-20 rounded-3xl overflow-hidden shadow-lg mb-6">
            <svg viewBox="0 0 192 192" className="w-full h-full">
              <rect width="192" height="192" rx="42" fill="#15803d"/>
              <circle cx="96" cy="106" r="17" fill="#fff"/>
              <circle cx="96" cy="51" r="11" fill="#fff"/>
              <circle cx="144" cy="134" r="11" fill="#fff"/>
              <circle cx="48" cy="134" r="11" fill="#fff"/>
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            اعرف جيرانك، وخلّ جيرانك يعرفونك
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            حي هي منصة مجتمعية لسكان الأحياء في السعودية. تنبيهات، خدمات، سوق محلي، ومشاوير — كل شيء في حيّك، منظّم وآمن.
          </p>
          <p className="text-sm text-gray-400">متوفر في مكة · جدة · الرياض</p>
        </div>
      </section>

      {/* ═══ Features ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">ماذا يقدم حي؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ How It Works ═══ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">كيف يعمل؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Screenshots placeholder ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">من داخل التطبيق</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-gray-100 rounded-2xl aspect-[9/16] flex items-center justify-center text-gray-300">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">سيتم إضافة صور واقعية من التطبيق قريباً</p>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">الأسئلة الشائعة</h2>
          <div className="space-y-4">
            {FAQ.map((q, i) => (
              <details key={i} className="bg-white rounded-2xl border border-gray-100 p-5 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {q.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">{q.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">جاهز تعرف جيرانك؟</h2>
        <p className="text-gray-500 mb-6">حمّل التطبيق الآن وانضم لحيّك</p>
        <p className="text-sm text-gray-400">سيتوفر قريباً على App Store و Google Play</p>
      </section>
    </PageShell>
  )
}

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
  { title: 'تفاعل مع جيرانك', desc: 'انشر، تفاعل، اطلب خدمة، أو ساعد جار — وابنِ سمعتك.' },
]

const FAQ = [
  { q: 'هل التطبيق مجاني؟', a: 'نعم، حي مجاني بالكامل. لا توجد رسوم تسجيل أو اشتراك.' },
  { q: 'كيف يتم تحديد الحي؟', a: 'يتم تحديد حيّك تلقائياً عبر الموقع الجغرافي (GPS) أو يمكنك اختياره يدوياً من القائمة.' },
  { q: 'هل بياناتي آمنة؟', a: 'نعم. لا نشارك بياناتك مع أطراف خارجية. يمكنك حذف حسابك في أي وقت.' },
  { q: 'هل يمكنني حذف حسابي؟', a: 'نعم. يمكنك حذف حسابك من داخل التطبيق أو عبر صفحة حذف الحساب في موقعنا.' },
  { q: 'ما المدن المتوفرة؟', a: 'حالياً متوفر في مكة المكرمة، جدة، والرياض. سيتم التوسع لمدن أخرى قريباً.' },
]
