/** Realistic phone frame with app screen inside — pure CSS, no images */
export default function PhoneMockup({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full max-w-[180px] mx-auto">
        {/* Phone frame */}
        <div className="bg-gray-900 rounded-[28px] p-[6px] shadow-xl shadow-black/10">
          {/* Notch */}
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-20 h-[18px] bg-gray-900 rounded-b-2xl z-10" />
          {/* Screen */}
          <div className="bg-white rounded-[22px] overflow-hidden aspect-[9/19.5] relative">
            {/* Status bar */}
            <div className="h-7 bg-gray-900 flex items-center justify-between px-5 text-[7px] text-white font-medium">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-3 h-1.5 border border-white rounded-sm"><div className="w-2 h-full bg-white rounded-sm" /></div>
              </div>
            </div>
            {/* Content */}
            <div className="text-[6px] leading-tight" dir="rtl">
              {children}
            </div>
          </div>
        </div>
      </div>
      <span className="text-xs text-gray-400 font-medium">{label}</span>
    </div>
  )
}

/** Mini feed screen */
export function FeedScreen() {
  return (
    <div className="bg-gray-50 h-full">
      {/* Header */}
      <div className="bg-white px-2 py-1.5 flex items-center justify-between border-b border-gray-100">
        <span className="font-bold text-primary-600 text-[8px]">حي</span>
        <div className="w-3 h-3 bg-gray-100 rounded-full" />
      </div>
      {/* Categories */}
      <div className="flex gap-1 px-2 py-1 overflow-hidden">
        {['🏘️ الكل', '🔔 تنبيه', '🛒 سوق'].map(c => (
          <span key={c} className="bg-white px-1.5 py-0.5 rounded-full text-[5px] text-gray-500 whitespace-nowrap border border-gray-100">{c}</span>
        ))}
      </div>
      {/* Posts */}
      {[
        { cat: '🔔 تنبيه', title: 'انقطاع المياه غداً', color: 'bg-red-50 text-red-600' },
        { cat: '🛒 سوق', title: 'ثلاجة سامسونج للبيع', color: 'bg-amber-50 text-amber-600' },
        { cat: '🔧 خدمة', title: 'سباك متوفر اليوم', color: 'bg-blue-50 text-blue-600' },
      ].map((p, i) => (
        <div key={i} className="bg-white mx-2 mt-1.5 rounded-lg p-2 border border-gray-100">
          <div className="flex items-center gap-1 mb-1">
            <div className="w-3 h-3 bg-primary-100 rounded-full" />
            <span className="text-gray-400 text-[5px]">جار · منذ 3 س</span>
          </div>
          <span className={`text-[5px] px-1 py-0.5 rounded ${p.color} inline-block mb-0.5`}>{p.cat}</span>
          <p className="font-bold text-gray-800 text-[7px]">{p.title}</p>
          <div className="flex gap-2 mt-1.5 text-[5px] text-gray-300">
            <span>😊 3</span><span>💬 2</span>
          </div>
        </div>
      ))}
    </div>
  )
}

/** Mini ride screen */
export function RideScreen() {
  return (
    <div className="bg-gray-900 h-full text-white">
      <div className="px-2 py-1.5 flex items-center gap-1 border-b border-gray-700">
        <span className="text-[5px] text-gray-400">←</span>
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-0.5 text-[6px]">
            <span className="text-green-400">●</span>
            <span>حي الزايدي</span>
            <span className="text-gray-500">→</span>
            <span className="text-red-400">●</span>
            <span>العوالي</span>
          </div>
          <span className="text-[5px] text-gray-500">4.2 كم · ~8 دقائق</span>
        </div>
        <span className="bg-purple-500/20 text-purple-300 text-[5px] px-1 py-0.5 rounded">في الطريق</span>
      </div>
      {/* Trip info */}
      <div className="px-2 py-2">
        <div className="bg-gray-800 rounded-lg p-2 mb-2">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-4 h-4 bg-primary-600 rounded-full flex items-center justify-center text-[5px]">م</div>
            <div>
              <p className="text-[6px] font-bold">محمد</p>
              <p className="text-[5px] text-gray-400">⭐ 4.8 · 12 رحلة</p>
            </div>
          </div>
          <div className="text-[5px] text-gray-400">25 ريال · الوصول خلال 5 دقائق</div>
        </div>
        {/* Chat messages */}
        <div className="space-y-1">
          <div className="flex justify-start"><span className="bg-gray-700 text-[5px] px-1.5 py-0.5 rounded-lg">أنا في الطريق</span></div>
          <div className="flex justify-end"><span className="bg-primary-600 text-[5px] px-1.5 py-0.5 rounded-lg">تمام، أنا عند البوابة</span></div>
        </div>
      </div>
    </div>
  )
}

/** Mini chat screen */
export function ChatScreen() {
  return (
    <div className="bg-gray-50 h-full">
      <div className="bg-white px-2 py-1.5 flex items-center gap-1.5 border-b border-gray-100">
        <span className="text-[5px] text-gray-400">←</span>
        <div className="w-3.5 h-3.5 bg-primary-100 rounded-full flex items-center justify-center text-[5px] text-primary-700 font-bold">خ</div>
        <span className="text-[7px] font-bold text-gray-800">خالد</span>
      </div>
      <div className="p-2 space-y-1.5">
        <div className="flex justify-start"><span className="bg-white border border-gray-100 text-[6px] text-gray-700 px-2 py-1 rounded-xl rounded-br-sm max-w-[70%]">السلام عليكم، الثلاجة لسا متوفرة؟</span></div>
        <div className="flex justify-end"><span className="bg-primary-600 text-white text-[6px] px-2 py-1 rounded-xl rounded-bl-sm max-w-[70%]">وعليكم السلام، أيوا متوفرة</span></div>
        <div className="flex justify-start"><span className="bg-white border border-gray-100 text-[6px] text-gray-700 px-2 py-1 rounded-xl rounded-br-sm max-w-[70%]">كم السعر النهائي؟</span></div>
        <div className="flex justify-end"><span className="bg-primary-600 text-white text-[6px] px-2 py-1 rounded-xl rounded-bl-sm max-w-[70%]">1200 ريال قابل للتفاوض</span></div>
        <div className="flex justify-start"><span className="bg-white border border-gray-100 text-[6px] text-gray-700 px-2 py-1 rounded-xl rounded-br-sm max-w-[70%]">📍 هذا موقعي</span></div>
        <div className="flex justify-end"><span className="bg-primary-600 text-white text-[6px] px-2 py-1 rounded-xl rounded-bl-sm max-w-[70%]">تمام أجيك الآن</span></div>
      </div>
      {/* Input */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 py-1.5 flex items-center gap-1">
        <div className="w-3 h-3 bg-gray-100 rounded-full text-[5px] flex items-center justify-center text-gray-400">📷</div>
        <div className="flex-1 bg-gray-100 rounded-full px-2 py-0.5 text-[5px] text-gray-300">اكتب رسالة...</div>
        <div className="w-3 h-3 bg-primary-600 rounded-full" />
      </div>
    </div>
  )
}

/** Mini profile screen */
export function ProfileScreen() {
  return (
    <div className="bg-gray-50 h-full">
      {/* Cover + Avatar */}
      <div className="h-12 bg-gradient-to-l from-primary-600 to-primary-800 relative">
        <div className="absolute -bottom-3 right-3 w-8 h-8 bg-white rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-primary-700 shadow">إ</div>
      </div>
      <div className="pt-5 px-2">
        <p className="font-bold text-[8px] text-gray-900">إياد الغامدي</p>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[5px] text-gray-400">🛠 مقدم خدمة</span>
          <span className="text-[5px] bg-green-50 text-green-600 px-1 py-0.5 rounded-full">موثوق</span>
        </div>
        <p className="text-[5px] text-gray-400 mt-0.5">حي الزايدي · مكة المكرمة</p>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-1 mx-2 mt-2">
        {[{ v: '206', l: 'سمعة' }, { v: '12', l: 'منشور' }, { v: '2026', l: 'انضممت' }].map((s, i) => (
          <div key={i} className="bg-white rounded-lg py-1.5 text-center border border-gray-100">
            <div className="text-[8px] font-bold text-gray-900">{s.v}</div>
            <div className="text-[4px] text-gray-400">{s.l}</div>
          </div>
        ))}
      </div>
      {/* Sections */}
      <div className="mx-2 mt-2 space-y-1">
        {['نقاط السمعة', 'الحساب', 'نبذة عنك', 'الإعدادات'].map((s, i) => (
          <div key={i} className="bg-white rounded-lg px-2 py-1.5 flex items-center justify-between border border-gray-100">
            <span className="text-[6px] font-medium text-gray-700">{s}</span>
            <span className="text-[6px] text-gray-300">‹</span>
          </div>
        ))}
      </div>
    </div>
  )
}
