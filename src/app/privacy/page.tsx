import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'سياسة الخصوصية',
  description: 'سياسة الخصوصية لتطبيق حي — كيف نجمع ونستخدم ونحمي بياناتك.',
}

export default function PrivacyPage() {
  return (
    <PageShell>
      <article className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">سياسة الخصوصية</h1>
        <p className="text-sm text-gray-400 mb-10">آخر تحديث: مارس 2026</p>

        <div className="prose-custom">
          <Section title="1. مقدمة">
            <p>مرحباً بك في تطبيق حي ("التطبيق"). نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتك عند استخدامك للتطبيق.</p>
          </Section>

          <Section title="2. البيانات التي نجمعها">
            <h4>بيانات الحساب:</h4>
            <ul>
              <li>رقم الجوال (للتحقق عبر رمز OTP)</li>
              <li>الاسم الأول واسم العائلة</li>
              <li>الجنس (اختياري — يمكن اختيار "أفضل عدم التحديد")</li>
              <li>البريد الإلكتروني (اختياري)</li>
              <li>صورة الملف الشخصي (اختياري)</li>
            </ul>
            <h4>بيانات الموقع:</h4>
            <ul>
              <li>الموقع الجغرافي (GPS) لتحديد الحي — يُستخدم فقط عند التسجيل أو تغيير الحي أو طلب مشوار</li>
              <li>لا نتتبع موقعك بشكل مستمر</li>
            </ul>
            <h4>المحتوى الذي تنشره:</h4>
            <ul>
              <li>المنشورات والتعليقات والتفاعلات</li>
              <li>الصور المرفوعة</li>
              <li>الرسائل الخاصة بين المستخدمين</li>
              <li>تقييمات المستخدمين</li>
            </ul>
            <h4>بيانات تقنية:</h4>
            <ul>
              <li>نوع المتصفح والجهاز</li>
              <li>عنوان IP</li>
              <li>تفضيلات اللغة</li>
            </ul>
          </Section>

          <Section title="3. كيف نستخدم بياناتك">
            <ul>
              <li>إنشاء وإدارة حسابك</li>
              <li>تحديد حيّك وعرض المحتوى المناسب</li>
              <li>تمكين التواصل بين المستخدمين</li>
              <li>حماية المجتمع عبر نظام الإبلاغ والإشراف</li>
              <li>تحسين تجربة الاستخدام</li>
            </ul>
          </Section>

          <Section title="4. مشاركة البيانات">
            <p>لا نبيع بياناتك لأطراف خارجية. قد نشارك بيانات محدودة في الحالات التالية:</p>
            <ul>
              <li>بناءً على طلب قانوني من جهة حكومية مختصة</li>
              <li>لحماية حقوقنا القانونية أو سلامة المستخدمين</li>
              <li>مع مزودي خدمات تقنية (استضافة، رسائل SMS) بموجب اتفاقيات حماية بيانات</li>
            </ul>
          </Section>

          <Section title="5. حماية البيانات">
            <ul>
              <li>تشفير الاتصالات عبر HTTPS</li>
              <li>مصادقة آمنة عبر JWT</li>
              <li>صلاحيات محددة حسب الدور</li>
              <li>سجل إشرافي لجميع الإجراءات الإدارية</li>
            </ul>
          </Section>

          <Section title="6. حقوقك">
            <ul>
              <li><strong>الوصول:</strong> يمكنك عرض بياناتك من صفحة الملف الشخصي</li>
              <li><strong>التعديل:</strong> يمكنك تعديل اسمك وبريدك وصورتك في أي وقت</li>
              <li><strong>الحذف:</strong> يمكنك حذف حسابك من داخل التطبيق أو عبر <a href="/delete-account">صفحة حذف الحساب</a></li>
              <li><strong>الإبلاغ:</strong> يمكنك الإبلاغ عن محتوى أو مستخدمين مخالفين</li>
              <li><strong>الحظر:</strong> يمكنك حظر أي مستخدم لمنعه من رؤية محتواك أو التواصل معك</li>
            </ul>
          </Section>

          <Section title="7. الاحتفاظ بالبيانات">
            <p>نحتفظ ببياناتك طالما حسابك نشط. عند حذف حسابك:</p>
            <ul>
              <li>تتم إزالة بياناتك الشخصية (الاسم، الجوال، البريد، الصورة)</li>
              <li>يتم إخفاء هوية المحتوى المنشور سابقاً (يظهر كـ "مستخدم محذوف")</li>
              <li>قد نحتفظ ببعض السجلات لأغراض أمنية أو قانونية لفترة محدودة</li>
            </ul>
          </Section>

          <Section title="8. ملفات تعريف الارتباط">
            <p>نستخدم ملفات تعريف الارتباط (cookies) لتخزين تفضيلات اللغة وجلسة المستخدم فقط. لا نستخدم ملفات تتبع إعلانية.</p>
          </Section>

          <Section title="9. تعديلات على السياسة">
            <p>قد نحدّث هذه السياسة من وقت لآخر. سنُعلمك بالتغييرات الجوهرية عبر إشعار داخل التطبيق.</p>
          </Section>

          <Section title="10. تواصل معنا">
            <p>لأي استفسار حول الخصوصية:</p>
            <ul>
              <li>البريد الإلكتروني: <a href="mailto:support@hai-app.net">support@hai-app.net</a></li>
              <li>صفحة الدعم: <a href="/contact">تواصل معنا</a></li>
            </ul>
          </Section>
        </div>
      </article>
    </PageShell>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-sm text-gray-600 leading-relaxed space-y-2 [&_ul]:list-disc [&_ul]:mr-5 [&_ul]:space-y-1 [&_h4]:font-semibold [&_h4]:text-gray-800 [&_h4]:mt-3 [&_h4]:mb-1 [&_a]:text-primary-700 [&_a]:underline">
        {children}
      </div>
    </section>
  )
}
