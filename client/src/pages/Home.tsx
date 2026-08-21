import { ArrowDown, ArrowLeft, Bell, Check, Copy, Download, LockKeyhole, QrCode, ShieldCheck, Sparkles, Table2 } from "lucide-react";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "wouter";

// هوية الصفحة: نسخة هاتفية هادئة مستوحاة من المرجع، RTL، واضحة للأولياء، مع CTA مباشر.
const APK_URL = "https://github.com/nadjimlab/quratie/releases/download/v1.0.0/Qiraati-v1.0.0.apk";
const RELEASE_URL = "https://github.com/nadjimlab/quratie/releases/tag/v1.0.0";
const REPO_URL = "https://github.com/nadjimlab/quratie";

const benefits = [
  { icon: Bell, title: "تذكيرات الواجبات", body: "إشعار قبل موعد التسليم بوقت كافٍ، حتى لا يُفاجأ التلميذ صباحاً.", tone: "amber" },
  { icon: "🎒", title: "تحضير الحقيبة", body: "قائمة يومية بما يلزم أخذه، تُبنى من جدول اليوم الدراسي.", tone: "mint" },
  { icon: Table2, title: "الجدول الأسبوعي", body: "كل حصة وكل مادة في مكان واحد، بلا بحث عن ورقة الجدول الضائعة.", tone: "blue" },
];

const installSteps = [
  { number: "01", title: "نزّل الملف الرسمي", body: "اضغط على زر التنزيل وانتظر اكتمال ملف APK." },
  { number: "02", title: "اسمح لهذا المصدر", body: "فعّل السماح للمتصفح مؤقتاً عندما يطلب Android ذلك." },
  { number: "03", title: "ثبّت وافتح", body: "افتح الملف من التنزيلات ثم أضف ملف التلميذ." },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const copyLink = async () => {
    try {
      await navigator.clipboard?.writeText(APK_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main dir="rtl" className="reference-page min-h-screen overflow-hidden bg-[#f8f4e9] text-[#112c3d]">
      <header className="reference-header sticky top-0 z-50 border-b border-white/10 bg-[#0f2b3d] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="العودة إلى الصفحة الرئيسية">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#159a6a] p-2 shadow-[0_8px_22px_rgba(21,154,106,.25)]"><img src="assets/qiraati-mark.png" alt="" className="h-full w-full object-contain" /></span>
            <span className="font-display text-xl font-black">قِرائتي</span>
          </Link>
          <span className="trust-pill-reference inline-flex items-center gap-2 rounded-full border border-[#159a6a]/50 bg-[#159a6a]/10 px-4 py-2 text-xs font-bold text-[#98e3c3]"><Check className="h-4 w-4" /> تطبيق رسمي وآمن</span>
        </div>
      </header>

      <section className="reference-hero px-5 pb-16 pt-16 sm:pb-20 sm:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
          <div className="relative z-10 animate-rise lg:text-right">
            <p className="mb-5 text-center text-sm font-bold text-[#1d8860] sm:text-base lg:text-right">لأولياء التلاميذ في الجزائر · الإصدار v1.0.0</p>
            <h1 className="text-center font-display text-[2.55rem] font-black leading-[1.25] tracking-[-.035em] text-[#112c3d] sm:text-6xl lg:text-right">كل يوم دراسي يبدأ <span className="text-[#1d9568]">بخطة أوضح</span>، لا بفوضى الصباح</h1>
            <p className="mx-auto mt-7 max-w-2xl text-center text-lg leading-9 text-[#607077] sm:text-2xl sm:leading-[2.1] lg:mx-0 lg:text-right">قِرائتي يرتّب جدول ابنك، يذكّره بالواجبات، ويحضر له الحقيبة المدرسية الصحيحة — كل هذا من هاتفك، بدون تعقيد.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a href={APK_URL} className="reference-download inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#159a6a] px-8 py-4 text-lg font-black text-white shadow-[0_16px_32px_rgba(21,154,106,.28)] transition duration-200 hover:-translate-y-1 hover:bg-[#1eaa78] active:scale-[.97] sm:w-auto"><ArrowDown className="h-5 w-5" /> تحميل التطبيق الآن</a>
              <a href="#features" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#d9d3c3] bg-white/45 px-7 py-4 text-base font-extrabold text-[#244454] transition hover:bg-white sm:w-auto">شاهد كيف يعمل <ArrowLeft className="h-4 w-4" /></a>
            </div>
            <p className="mt-5 text-center text-sm font-semibold text-[#718086] lg:text-right">ملف APK مباشر خارج متجر Google Play · التثبيت يستغرق أقل من دقيقة</p>
          </div>
          <div className="hero-preview relative mx-auto w-full max-w-md lg:order-first">
            <span className="hero-version absolute -right-2 -top-4 z-20 rounded-full border border-[#159a6a]/30 bg-white px-4 py-2 text-xs font-black text-[#16845b] shadow-sm">✓ ملف رسمي · v1.0.0</span>
            <div className="schedule-paper overflow-hidden rounded-[1.7rem] border border-[#d9d2c2] bg-[#fffdf7] p-6 shadow-[0_26px_55px_rgba(15,43,61,.14)] sm:p-8">
              <div className="mb-6 flex items-center justify-between"><h2 className="font-display text-xl font-black">جدول يوم الأحد</h2><span className="stamp">الأسبوع الحالي</span></div>
              {[{time:"08:00", title:"رياضيات", detail:"إحضار كراس التمارين", color:"#159a6a"}, {time:"10:00", title:"علوم الطبيعة", detail:"تذكير: تسليم الفرض غداً", color:"#d6a138"}, {time:"13:00", title:"تربية بدنية", detail:"لباس رياضي", color:"#0f2b3d"}].map((row) => <div key={row.time} className="flex items-center gap-3 border-b border-dashed border-[#d9d1c0] py-4 last:border-b-0"><span className="w-12 shrink-0 text-sm font-black text-[#6c787a]">{row.time}</span><span className="h-10 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: row.color }} /><span><strong className="block font-display text-lg font-extrabold">{row.title}</strong><small className="mt-1 block text-xs text-[#6c787a]">{row.detail}</small></span></div>)}
              <div className="mt-5 border-t border-dashed border-[#d9d1c0] pt-5"><p className="mb-3 font-display text-sm font-extrabold text-[#5d6b6d]">✓ الحقيبة المدرسية</p><div className="space-y-2 text-sm font-bold"><span className="flex items-center gap-2"><Check className="h-4 w-4 rounded bg-[#159a6a] p-0.5 text-white" /> كراس الرياضيات</span><span className="flex items-center gap-2"><Check className="h-4 w-4 rounded bg-[#159a6a] p-0.5 text-white" /> فرض العلوم</span></div></div>
            </div>
            <div className="hero-note absolute -bottom-5 -left-3 rounded-2xl border border-white bg-[#0f2b3d] px-4 py-3 text-xs font-extrabold text-[#a5e8cb] shadow-[0_16px_30px_rgba(15,43,61,.2)]">صباح مرتب يبدأ من هنا</div>
          </div>
        </div>
      </section>

      <section className="reference-trust-band bg-[#0f2b3d] px-5 py-14 text-center text-white sm:py-16">
        <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-3 sm:gap-6">
          <div><strong className="block font-display text-4xl font-black text-[#92e4c0]">100٪</strong><span className="mt-2 block text-base text-white/65">مجاني للاستعمال</span></div>
          <div><strong className="block font-display text-3xl font-black text-[#92e4c0]">بدون إعلانات</strong><span className="mt-3 block text-base text-white/65">تجربة نظيفة لطفلك</span></div>
          <div><strong className="block font-display text-3xl font-black text-[#92e4c0]">Nadjim Lab</strong><span className="mt-3 block text-base text-white/65">المطوّر الرسمي للتطبيق</span></div>
        </div>
      </section>

      <section id="features" className="reference-features px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center"><p className="mb-4 text-sm font-black text-[#1d8860]">تفاصيل تصنع فرقاً في الصباح</p><h2 className="font-display text-3xl font-black leading-tight sm:text-5xl">ثلاث خطوات تنهي فوضى الحقيبة والجدول</h2><p className="mt-5 text-lg leading-9 text-[#68777b]">مزايا عملية تساعد الأسرة على رؤية اليوم الدراسي كما هو، في مكان واضح.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((item) => { const Icon = item.icon; return <article key={item.title} className="reference-benefit rounded-[1.35rem] border border-[#ded8c9] bg-[#fffdf7] p-7 shadow-[0_10px_30px_rgba(48,66,56,.04)]"><span className={`benefit-icon ${item.tone}`}>{typeof Icon === "string" ? Icon : <Icon className="h-6 w-6" />}</span><h3 className="mt-6 font-display text-2xl font-extrabold">{item.title}</h3><p className="mt-3 text-base leading-8 text-[#68777b]">{item.body}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="reference-schedule border-y border-[#dfd8c9] bg-[#fffdf7] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="mb-2 text-sm font-black text-[#1d8860]">معاينة من داخل التطبيق</p><h2 className="font-display text-3xl font-black sm:text-4xl">جدول يوم الأحد</h2></div><span className="text-sm font-bold text-[#718086]">الأسبوع الحالي</span></div>
          <div className="schedule-paper rounded-[1.6rem] border border-[#ded8c9] bg-[#f8f4e9] p-6 shadow-[0_18px_45px_rgba(48,66,56,.07)] sm:p-10">
            {[{time:"08:00", title:"رياضيات", detail:"إحضار كراس التمارين", color:"#159a6a"}, {time:"10:00", title:"علوم الطبيعة", detail:"تذكير: تسليم الفرض غداً", color:"#d6a138"}, {time:"13:00", title:"تربية بدنية", detail:"لباس رياضي", color:"#0f2b3d"}].map((row) => <div key={row.time} className="flex items-center gap-4 border-b border-dashed border-[#d9d1c0] py-5 last:border-b-0"><span className="w-14 shrink-0 text-sm font-black text-[#6c787a]">{row.time}</span><span className="h-10 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: row.color }} /><span><strong className="block font-display text-xl font-extrabold">{row.title}</strong><small className="mt-1 block text-sm text-[#6c787a]">{row.detail}</small></span></div>)}
            <div className="mt-5 border-t border-dashed border-[#d9d1c0] pt-5"><p className="mb-3 font-display text-base font-extrabold text-[#5d6b6d]">✓ الحقيبة المدرسية</p><div className="grid gap-2 sm:grid-cols-3"><span className="inline-flex items-center gap-2 text-sm font-bold"><Check className="h-4 w-4 rounded bg-[#159a6a] p-0.5 text-white" /> كراس الرياضيات</span><span className="inline-flex items-center gap-2 text-sm font-bold"><Check className="h-4 w-4 rounded bg-[#159a6a] p-0.5 text-white" /> فرض العلوم</span><span className="inline-flex items-center gap-2 text-sm font-bold text-[#6c787a]"><span className="h-4 w-4 rounded border border-[#cfc6b4]" /> اللباس الرياضي</span></div></div>
          </div>
        </div>
      </section>

      <section className="reference-install bg-[#f8f4e9] px-5 py-20 sm:py-24"><div className="mx-auto max-w-5xl"><div className="text-center"><p className="mb-3 text-sm font-black text-[#1d8860]">واضح من البداية</p><h2 className="font-display text-3xl font-black sm:text-5xl">من التنزيل إلى أول يوم</h2></div><div className="mt-12 grid gap-8 md:grid-cols-3">{installSteps.map((step) => <div key={step.number} className="reference-step text-center md:text-right"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#159a6a] font-display text-sm font-black text-white md:mx-0">{step.number}</span><h3 className="mt-5 font-display text-xl font-extrabold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-[#68777b]">{step.body}</p></div>)}</div><div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href={APK_URL} className="reference-download inline-flex items-center gap-3 rounded-2xl bg-[#159a6a] px-7 py-4 font-black text-white shadow-[0_12px_25px_rgba(21,154,106,.22)] transition hover:-translate-y-1"><Download className="h-5 w-5" /> تحميل ملف APK</a><Link href="/install" className="inline-flex items-center gap-2 rounded-2xl border border-[#d9d3c3] bg-white px-6 py-4 font-extrabold text-[#244454]">عرض التعليمات كاملة <ArrowLeft className="h-4 w-4" /></Link></div></div></section>

      <section className="reference-safety bg-[#0f2b3d] px-5 py-16 text-white"><div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><div className="flex items-center gap-3"><ShieldCheck className="h-6 w-6 text-[#92e4c0]" /><h2 className="font-display text-2xl font-extrabold">حمّل من المصدر الرسمي</h2></div><p className="mt-4 max-w-2xl text-sm leading-8 text-white/70">سيطلب Android تأكيد التثبيت من مصدر غير معروف لأن التطبيق خارج Google Play. فعّل السماح للمتصفح مؤقتاً ثم أوقفه بعد التثبيت إذا رغبت.</p><div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={copyLink} className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-white/15">{copied ? <Check className="h-4 w-4 text-[#92e4c0]" /> : <Copy className="h-4 w-4" />} {copied ? "تم نسخ الرابط" : "نسخ رابط التنزيل"}</button><a href={RELEASE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold text-[#92e4c0] hover:bg-white/10">سجل الإصدارات <ArrowLeft className="h-4 w-4" /></a></div></div><div className="rounded-2xl bg-white p-4 text-[#0f2b3d]"><div className="mb-2 flex items-center justify-center gap-2 text-xs font-extrabold"><QrCode className="h-4 w-4 text-[#159a6a]" /> نزّل من هاتف آخر</div><QRCodeSVG value={APK_URL} size={142} bgColor="#ffffff" fgColor="#0f2b3d" level="H" title="رمز تنزيل تطبيق Qiraati" /></div></div></section>

      <footer className="border-t border-[#dfd8c9] bg-[#f8f4e9] px-5 py-9 text-center text-sm text-[#68777b]"><p>© 2026 قِرائتي — من تطوير Nadjim Lab. تطبيق تنظيم دراسي لتلاميذ الجزائر.</p><div className="mt-4 flex flex-wrap items-center justify-center gap-5 font-bold"><Link href="/privacy" className="hover:text-[#159a6a]">سياسة الخصوصية</Link><Link href="/install" className="hover:text-[#159a6a]">دليل التثبيت</Link><a href={REPO_URL} target="_blank" rel="noreferrer" className="hover:text-[#159a6a]">المستودع الرسمي</a><span>v1.0.0</span></div></footer>
    </main>
  );
}
