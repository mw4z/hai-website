import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'تواصل معنا',
  description: 'تواصل مع فريق دعم تطبيق حي.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">تواصل معنا</h1>
        <p className="text-sm text-gray-400 mb-2">نحن هنا لمساعدتك</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-10">
          سواء كان لديك استفسار عام، مشكلة تقنية، أو طلب حذف حساب — فريق الدعم جاهز لمساعدتك.
        </p>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="text-2xl mb-3">📧</div>
            <h3 className="font-bold text-gray-900 mb-1">البريد الإلكتروني</h3>
            <p className="text-sm text-gray-500 mb-3">للاستفسارات العامة والدعم الفني</p>
            <a href="mailto:support@hai-app.net" className="text-primary-700 font-semibold text-sm">
              support@hai-app.net
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="text-2xl mb-3">📱</div>
            <h3 className="font-bold text-gray-900 mb-1">من داخل التطبيق</h3>
            <p className="text-sm text-gray-500 mb-3">أسرع طريقة للتواصل</p>
            <p className="text-sm text-gray-600">الملف الشخصي → المساعدة → الدعم الفني</p>
          </div>
        </div>

        {/* Common topics */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">مواضيع شائعة</h2>
        <div className="space-y-3 mb-10">
          {TOPICS.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">{t.title}</h3>
              <p className="text-xs text-gray-500">{t.desc}</p>
              {t.link && (
                <Link href={t.link} className="text-xs text-primary-700 underline mt-1 inline-block">{t.linkText}</Link>
              )}
            </div>
          ))}
        </div>

        {/* Response time */}
        <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
          <h3 className="font-bold text-primary-800 mb-2">وقت الاستجابة</h3>
          <p className="text-sm text-primary-700 leading-relaxed">
            نسعى للرد على جميع الاستفسارات خلال 24-48 ساعة عمل. للطلبات العاجلة (مثل حذف الحساب أو مشكلة أمنية)، يُرجى ذكر ذلك في عنوان الرسالة.
          </p>
        </div>

        {/* Quick links */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <h3 className="text-sm font-bold text-gray-400 mb-3">روابط مفيدة</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/privacy" className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">سياسة الخصوصية</Link>
            <Link href="/terms" className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">الشروط والأحكام</Link>
            <Link href="/delete-account" className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">حذف الحساب</Link>
          </div>
        </div>
      </div>
    </PageShell>
  )
}

const TOPICS = [
  { title: 'مشكلة في تسجيل الدخول', desc: 'تأكد من استخدام رقم جوال سعودي صالح. إذا لم يصلك رمز التحقق، انتظر دقيقة وأعد المحاولة.', link: null, linkText: null },
  { title: 'الإبلاغ عن محتوى مخالف', desc: 'يمكنك الإبلاغ عن أي منشور من داخل التطبيق. اضغط على النقاط الثلاث (⋮) واختر "إبلاغ".', link: null, linkText: null },
  { title: 'حذف الحساب', desc: 'يمكنك حذف حسابك من داخل التطبيق أو عبر صفحتنا المخصصة.', link: '/delete-account', linkText: 'صفحة حذف الحساب' },
  { title: 'طلب أن تصبح مشرف حي', desc: 'إذا كان حسابك عمره أكثر من 7 أيام ولديك سمعة كافية، يمكنك التقديم من صفحة الملف الشخصي.', link: null, linkText: null },
]
