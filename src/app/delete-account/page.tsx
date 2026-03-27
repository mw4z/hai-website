import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'حذف الحساب',
  description: 'كيفية حذف حسابك في تطبيق حي وما يحدث لبياناتك.',
}

export default function DeleteAccountPage() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">حذف الحساب</h1>
        <p className="text-sm text-gray-400 mb-4">كيفية حذف حسابك في تطبيق حي</p>

        <p className="text-sm text-gray-600 leading-relaxed mb-10">
          يحق لك حذف حسابك في تطبيق حي في أي وقت. يمكنك ذلك من داخل التطبيق مباشرة، أو عبر إرسال طلب بالبريد الإلكتروني إذا لم تستطع الوصول إلى التطبيق. هذه الصفحة توضح الطريقتين المتاحتين وما يحدث لبياناتك بعد الحذف.
        </p>

        {/* Clear explanation */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-8">
          <h2 className="text-base font-bold text-red-800 mb-2">⚠️ تنبيه مهم</h2>
          <p className="text-sm text-red-700 leading-relaxed">
            حذف الحساب إجراء نهائي ولا يمكن التراجع عنه. سيتم حذف بياناتك الشخصية بشكل دائم وإخفاء هوية محتواك المنشور سابقاً. لن تتمكن من استعادة حسابك أو بياناتك بعد الحذف.
          </p>
        </div>

        {/* Method 1: In-App */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
          <h2 className="text-base font-bold text-gray-900 mb-3">الطريقة الأولى: من داخل التطبيق</h2>
          <ol className="text-sm text-gray-600 space-y-2 list-decimal mr-5 leading-relaxed">
            <li>افتح تطبيق حي</li>
            <li>اذهب إلى صفحة <strong>الملف الشخصي</strong></li>
            <li>انزل إلى أسفل الصفحة</li>
            <li>اضغط على <strong>"حذف الحساب"</strong></li>
            <li>أكّد الحذف بكتابة <strong>"حذف"</strong> أو <strong>"DELETE"</strong></li>
            <li>سيتم حذف حسابك فوراً</li>
          </ol>
        </div>

        {/* Method 2: Email */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
          <h2 className="text-base font-bold text-gray-900 mb-3">الطريقة الثانية: عبر البريد الإلكتروني</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            إذا لم تستطع الوصول إلى التطبيق، أو تم إلغاء تثبيته، أو لم يعد لديك الجهاز المسجل عليه، يمكنك طلب حذف حسابك عبر البريد الإلكتروني:
          </p>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <p className="text-sm text-gray-600 mb-2">أرسل بريداً إلى:</p>
            <a href="mailto:support@hai-app.net?subject=طلب حذف حساب&body=أرغب في حذف حسابي. رقم الجوال المسجل:" className="text-primary-700 font-bold text-base underline">
              support@hai-app.net
            </a>
            <p className="text-xs text-gray-400 mt-2">
              يُرجى ذكر رقم الجوال المسجل في التطبيق. سنعالج طلبك خلال 48 ساعة.
            </p>
          </div>
        </div>

        {/* What happens */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">ماذا يحدث بعد حذف الحساب؟</h2>
        <div className="space-y-3 mb-8">
          {DELETION_EFFECTS.map((e, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-lg">{e.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-800">{e.title}</p>
                <p className="text-xs text-gray-500">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Data handling details */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">ماذا يحدث لبياناتك تحديداً؟</h2>
        <div className="bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100">
          <h3 className="text-sm font-bold text-gray-800 mb-3">بيانات تُحذف نهائياً:</h3>
          <ul className="text-sm text-gray-600 space-y-1 list-disc mr-5 mb-4">
            <li>الاسم الأول واسم العائلة</li>
            <li>رقم الجوال والبريد الإلكتروني</li>
            <li>صورة الملف الشخصي</li>
            <li>الإشعارات ورموز التحقق</li>
            <li>عناصر الكتالوج (لمقدمي الخدمات)</li>
          </ul>
          <h3 className="text-sm font-bold text-gray-800 mb-3">بيانات تُخفى هويتها:</h3>
          <ul className="text-sm text-gray-600 space-y-1 list-disc mr-5">
            <li>المنشورات والتعليقات السابقة تظهر باسم &quot;مستخدم محذوف&quot; بدلاً من اسمك الحقيقي</li>
            <li>لا يمكن ربط هذا المحتوى بهويتك بعد الحذف</li>
          </ul>
        </div>

        {/* Data retention */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
          <h2 className="text-base font-bold text-amber-800 mb-2">الاحتفاظ بالبيانات</h2>
          <p className="text-sm text-amber-700 leading-relaxed">
            قد نحتفظ ببعض السجلات المجهولة الهوية لأغراض أمنية أو قانونية لفترة محدودة وفقاً للأنظمة المعمول بها في المملكة العربية السعودية. لا تتضمن هذه السجلات أي معلومات شخصية قابلة للتعريف. يتم ذلك لحماية أمن المنصة ومنع إساءة الاستخدام.
          </p>
        </div>
      </div>
    </PageShell>
  )
}

const DELETION_EFFECTS = [
  { icon: '🗑️', title: 'حذف البيانات الشخصية', desc: 'الاسم، رقم الجوال، البريد، الصورة — كلها تُحذف نهائياً' },
  { icon: '👤', title: 'إخفاء الهوية', desc: 'المنشورات والتعليقات السابقة تظهر كـ "مستخدم محذوف"' },
  { icon: '🔒', title: 'إلغاء الجلسة', desc: 'يتم تسجيل خروجك فوراً من جميع الأجهزة' },
  { icon: '📦', title: 'حذف الكتالوج', desc: 'عناصر الكتالوج (لمقدمي الخدمات) تُحذف نهائياً' },
  { icon: '🔔', title: 'حذف الإشعارات', desc: 'جميع الإشعارات ورموز التحقق تُحذف' },
]
