/* Style: ورق المدرسة المعاصر — واجهة RTL تحريرية دافئة، عاجي/حبر بحري/نعناعي جزائري، مع أولوية واضحة لزر تنزيل Qiraati. */
import { ArrowDownToLine, ArrowLeft, Check, Copy, Download, FileCheck2, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Link } from "wouter";

const APK_URL = "https://github.com/nadjimyahiaoui1992-lab/quratie/releases/download/v1.0.0/app-release.apk";
const RELEASE_URL = "https://github.com/nadjimyahiaoui1992-lab/quratie/releases/tag/v1.0.0";
const REPO_URL = "https://github.com/nadjimyahiaoui1992-lab/quratie";

const steps = [
  { number: "01", title: "نزّل الملف الرسمي", body: "اضغط على زر التنزيل من هذه الصفحة، وانتظر حتى يكتمل تحميل ملف APK." },
  { number: "02", title: "اسمح بالتثبيت", body: "إذا طلب Android السماح للمتصفح بتثبيت تطبيقات غير معروفة، فعّل السماح لهذا المصدر فقط." },
  { number: "03", title: "ثبّت Qiraati", body: "افتح الملف من مجلد التنزيلات واضغط تثبيت، ثم افتح التطبيق وابدأ بإضافة ملف التلميذ." },
];

export default function Home() {
  const [copied, setCopied] = useState(false);
  const copyLink = async () => {
    await navigator.clipboard?.writeText(APK_URL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main dir="rtl" className="paper-page min-h-screen overflow-hidden bg-[#f7f3eb] text-[#142b3d]">
      <div className="relative">
        <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#62c7a4]/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-[34rem] h-96 w-96 rounded-full bg-[#e2a92d]/10 blur-3xl" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-10">
          <Link href="/" className="group flex items-center gap-3" aria-label="العودة إلى الصفحة الرئيسية">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#142b3d] p-2 shadow-[0_10px_30px_rgba(20,43,61,.18)] transition-transform duration-200 group-hover:-rotate-3">
              <img src="assets/qiraati-mark.png" alt="" className="h-full w-full object-contain" />
            </span>
            <span>
              <span className="block font-display text-xl font-extrabold tracking-tight">Qiraati</span>
              <span className="block text-[11px] font-semibold text-[#61707a]">تنظيم يومك الدراسي</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-bold text-[#52636d] md:flex">
            <a href="#why" className="transition-colors hover:text-[#142b3d]">لماذا Qiraati؟</a>
            <Link href="/install" className="transition-colors hover:text-[#142b3d]">طريقة التثبيت</Link>
            <a href={RELEASE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#0b8d6a]">سجل الإصدارات <ArrowLeft className="h-4 w-4" /></a>
          </nav>
          <a href={APK_URL} className="hidden items-center gap-2 rounded-full bg-[#62c7a4] px-5 py-3 text-sm font-extrabold text-[#102b38] shadow-[0_10px_24px_rgba(98,199,164,.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#75d4b2] active:scale-[.97] sm:inline-flex">
            <Download className="h-4 w-4" /> تنزيل التطبيق
          </a>
        </header>

        <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-28 lg:pt-20">
          <div className="relative z-10 max-w-2xl animate-rise">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#62c7a4]/35 bg-white/70 px-4 py-2 text-xs font-extrabold text-[#0b8d6a] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" /> الإصدار العام الأول · v1.0.0
            </div>
            <h1 className="font-display text-5xl font-black leading-[1.15] tracking-[-.04em] text-[#142b3d] sm:text-6xl lg:text-[5.2rem]">
              كل يوم دراسي<br /><span className="text-[#0b8d6a]">يبدأ بخطة أوضح.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-9 text-[#52636d] sm:text-xl">
              Qiraati تطبيق عملي يساعد الولي والتلميذ على ترتيب الجدول، متابعة المهام اليومية، وحفظ ملف التلميذ في مكان واضح وآمن.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={APK_URL} className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#142b3d] px-7 py-4 text-base font-extrabold text-white shadow-[0_16px_30px_rgba(20,43,61,.2)] transition duration-200 hover:-translate-y-1 hover:bg-[#1e4157] active:scale-[.97]">
                <ArrowDownToLine className="h-5 w-5 text-[#62c7a4] transition-transform group-hover:translate-y-0.5" />
                تنزيل Qiraati مباشرة
              </a>
              <Link href="/install" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#cbd8d1] bg-white/60 px-6 py-4 text-base font-extrabold text-[#31505d] transition duration-200 hover:border-[#62c7a4] hover:bg-white active:scale-[.97]">
                كيف أثبته؟ <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-bold text-[#70808a]">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#0b8d6a]" /> ملف Release موقّع</span>
              <span className="inline-flex items-center gap-2"><FileCheck2 className="h-4 w-4 text-[#0b8d6a]" /> Android 8.0+</span>
              <span className="inline-flex items-center gap-2"><Smartphone className="h-4 w-4 text-[#0b8d6a]" /> خارج المتجر</span>
            </div>
          </div>

          <div className="relative min-h-[430px] lg:min-h-[560px]">
            <div className="absolute inset-x-0 top-0 h-full rounded-[2.5rem] border border-[#d5e4d9] bg-[#e6efe7] notebook-lines shadow-[inset_0_0_0_1px_rgba(20,43,61,.05)]" />
            <div className="absolute -right-5 top-8 h-44 w-44 rounded-full border-[22px] border-[#e2a92d]/30" />
            <div className="relative z-10 mx-auto h-[420px] w-[235px] translate-y-8 rounded-[2.4rem] border-[7px] border-[#0f2332] bg-[#142b3d] p-3 shadow-[0_30px_30px_rgba(20,43,61,.22)] transition-transform duration-500 hover:-translate-y-1 sm:h-[480px] sm:w-[270px]">
              <div className="relative h-full overflow-hidden rounded-[1.7rem] bg-[#f7f3eb] p-4">
                <div className="flex items-center justify-between text-[9px] font-black text-[#0b8d6a]"><span>Qiraati</span><span className="stamp">اليوم</span></div>
                <div className="mt-7 h-20 rounded-2xl bg-[#142b3d] p-4 text-white"><p className="text-[9px] font-bold text-[#b4ead7]">صباح مرتب</p><p className="mt-2 text-sm font-black">ابدأ يومك بهدوء</p></div>
                <div className="mt-4 grid grid-cols-2 gap-2">{["الجدول", "التلميذ", "المهام", "التنبيهات"].map((label, i) => <div key={label} className={`rounded-xl p-3 text-[9px] font-black ${i === 0 ? "bg-[#62c7a4]/25 text-[#0b8d6a]" : "bg-white text-[#52636d]"}`}>{label}</div>)}</div>
                <div className="absolute bottom-5 left-4 right-4 rounded-xl border border-[#dfe7df] bg-white p-3"><div className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-lg bg-[#62c7a4]/20 text-[#0b8d6a]"><Check className="h-3 w-3" /></span><span className="text-[9px] font-extrabold text-[#0b8d6a]">جاهز ليوم أوضح</span></div></div>
              </div>
            </div>
            <div className="absolute bottom-9 right-6 z-20 max-w-[210px] rounded-2xl border border-white/70 bg-white/90 p-4 shadow-[0_18px_40px_rgba(20,43,61,.12)] backdrop-blur">
              <div className="mb-2 flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-lg bg-[#62c7a4]/20 text-[#0b8d6a]"><Check className="h-4 w-4" /></span><span className="text-xs font-extrabold text-[#0b8d6a]">جاهز ليوم أوضح</span></div>
              <p className="text-xs font-semibold leading-5 text-[#52636d]">الجدول، ملف التلميذ، والتنبيهات في مساحة واحدة.</p>
            </div>
          </div>
        </section>
      </div>

      <section id="why" className="relative border-y border-[#dfe7df] bg-[#fffdf8] px-5 py-20 lg:px-10"><span className="side-note">دليل الولي · 2026/2027</span>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div><p className="mb-3 text-sm font-black tracking-wide text-[#0b8d6a]">مصمم للحياة الدراسية اليومية</p><h2 className="font-display text-4xl font-black leading-tight text-[#142b3d] sm:text-5xl">أقل تشتتًا.<br />أكثر حضورًا.</h2></div>
            <p className="max-w-2xl text-lg leading-9 text-[#61707a]">من لحظة فتح التطبيق، كل شيء يذهب إلى مكانه الطبيعي: معلومات التلميذ، جدول الأسبوع، والمهام التي تساعد الولي على بدء اليوم بهدوء.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3 paper-cards">
            {[{icon: "01", title: "منظم وواضح", body: "واجهة بسيطة تحفظ التفاصيل المهمة دون ازدحام أو قوائم مربكة."}, {icon: "02", title: "مناسب للعائلة", body: "مصمم ليستخدمه الولي والتلميذ معًا في إيقاع اليوم الحقيقي."}, {icon: "03", title: "جاهز الآن", body: "نسخة Android Release متاحة للتنزيل المباشر خارج المتجر."}].map((item) => <article key={item.icon} className="group rounded-[1.75rem] border border-[#e3e9e1] bg-[#f7f3eb] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#62c7a4]/60 hover:shadow-[0_18px_45px_rgba(20,43,61,.08)]"><span className="font-display text-sm font-black text-[#e2a92d]">{item.icon}</span><h3 className="mt-9 font-display text-2xl font-extrabold text-[#142b3d]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#61707a]">{item.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_.85fr] lg:items-center lg:px-10"><span className="section-tab">تحميل مباشر</span>
        <div><p className="mb-3 text-sm font-black text-[#0b8d6a]">تنزيل مباشر وآمن</p><h2 className="font-display text-4xl font-black leading-tight text-[#142b3d] sm:text-5xl">ابدأ بخطوة<br />واحدة فقط.</h2><p className="mt-5 max-w-xl text-lg leading-9 text-[#61707a]">اضغط تنزيل، ثم اتبع التعليمات القصيرة. لا تحتاج إلى حساب، ولا إلى متجر وسيط، ولا إلى خطوات تقنية معقدة.</p><a href={APK_URL} className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#62c7a4] px-6 py-4 font-extrabold text-[#102b38] shadow-[0_14px_30px_rgba(98,199,164,.22)] transition duration-200 hover:-translate-y-1 active:scale-[.97]"><Download className="h-5 w-5" /> تنزيل ملف APK</a></div>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d5e4d9] bg-[#e8efe8] p-8 notebook-lines"><div className="install-sketch mx-auto max-w-sm"><div className="sketch-phone"><div className="sketch-screen"><span className="h-2 w-16 rounded-full bg-[#62c7a4]" /><span className="mt-5 h-16 w-full rounded-xl bg-[#142b3d]" /><div className="mt-3 grid grid-cols-2 gap-2"><span className="h-10 rounded-lg bg-white" /><span className="h-10 rounded-lg bg-white" /></div></div></div><div className="sketch-arrow">↓</div><div className="sketch-check"><Check className="h-5 w-5" /> ثبّت بأمان</div></div><div className="absolute bottom-6 left-7 rounded-xl bg-[#e2a92d] px-4 py-3 text-sm font-extrabold text-[#142b3d] shadow-xl">3 خطوات بسيطة</div></div>
      </section>

      <section className="bg-[#142b3d] px-5 py-20 text-white lg:px-10"><div className="mx-auto max-w-7xl"><span className="side-note side-note-dark">مسار التثبيت · بدون تعقيد</span><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-3 text-sm font-black text-[#62c7a4]">طريقة التثبيت</p><h2 className="font-display text-4xl font-black leading-tight sm:text-5xl">من التنزيل<br />إلى أول يوم.</h2></div><Link href="/install" className="inline-flex items-center gap-2 text-sm font-extrabold text-[#b4ead7] transition hover:text-white">عرض التعليمات كاملة <ArrowLeft className="h-4 w-4" /></Link></div><div className="install-path mt-14 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-3">{steps.map((step) => <div key={step.number} className="relative"><span className="font-display text-sm font-black text-[#e2a92d]">{step.number}</span><h3 className="mt-6 text-xl font-extrabold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-white/65">{step.body}</p></div>)}</div></div></section>

      <section className="bg-[#fffdf8] px-5 py-16 lg:px-10"><div className="mx-auto max-w-3xl rounded-[2rem] border border-[#dfe7df] bg-[#f7f3eb] p-7 sm:p-10"><div className="flex items-start gap-4"><ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-[#0b8d6a]" /><div><h2 className="font-display text-xl font-extrabold text-[#142b3d]">تنبيه أمان مهم</h2><p className="mt-2 text-sm leading-7 text-[#61707a]">حمّل Qiraati من هذا الرابط الرسمي فقط. سيطلب Android تأكيد التثبيت من مصدر غير معروف لأن التطبيق خارج Google Play. يمكنك تفعيل السماح للمتصفح مؤقتًا ثم إيقافه بعد التثبيت.</p></div></div><div className="mt-7 flex flex-col gap-3 sm:flex-row"><button onClick={copyLink} className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#cad9d0] bg-white px-4 py-3 text-sm font-extrabold text-[#31505d] transition hover:border-[#62c7a4]">{copied ? <Check className="h-4 w-4 text-[#0b8d6a]" /> : <Copy className="h-4 w-4" />} {copied ? "تم نسخ الرابط" : "نسخ رابط التنزيل"}</button><a href={RELEASE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold text-[#0b8d6a] hover:bg-white">عرض الإصدار والمعلومات <ArrowLeft className="h-4 w-4" /></a></div></div></section>

      <section className="border-t border-[#dfe7df] bg-[#e6efe7] px-5 py-14 lg:px-10"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="mb-3 text-sm font-black text-[#0b8d6a]">نزّل من هاتف آخر</p><h2 className="font-display text-3xl font-black">امسح الرمز وابدأ.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-[#52636d]">افتح كاميرا الهاتف، وجّهها نحو الرمز، ثم اضغط على الرابط الرسمي لتنزيل Qiraati.</p></div><div className="w-fit rounded-2xl bg-white p-4 shadow-[0_14px_30px_rgba(20,43,61,.1)]"><QRCodeSVG value={APK_URL} size={148} bgColor="#ffffff" fgColor="#142b3d" level="H" title="رمز تنزيل تطبيق Qiraati" /></div></div></section><footer className="border-t border-[#dfe7df] bg-[#f7f3eb] px-5 py-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#70808a] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Qiraati · تطبيق يساعد الولي والتلميذ</span><div className="flex flex-wrap items-center gap-5"><Link href="/privacy" className="font-bold transition-colors hover:text-[#0b8d6a]">سياسة الخصوصية</Link><a href={REPO_URL} target="_blank" rel="noreferrer" className="font-bold transition-colors hover:text-[#0b8d6a]">الدعم على GitHub</a><span>الإصدار العام v1.0.0</span></div></div></footer>
    </main>
  );
}
