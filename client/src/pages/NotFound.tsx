/* Style: ورق المدرسة المعاصر — صفحة خطأ RTL تطابق هوية Qiraati بدل التصميم العام الافتراضي. */
import { ArrowRight, Compass, Download } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <main dir="rtl" className="paper-page flex min-h-screen items-center justify-center bg-[#f7f3eb] px-5 py-16 text-[#142b3d]">
      <div className="relative w-full max-w-lg">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#62c7a4]/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#e2a92d]/10 blur-3xl" />

        <div className="relative rounded-[2rem] border border-[#dfe7df] bg-[#fffdf8] p-8 text-center shadow-[0_20px_50px_rgba(20,43,61,.1)] sm:p-12">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#142b3d] p-2 mx-auto shadow-[0_10px_30px_rgba(20,43,61,.18)]">
            <img src="assets/qiraati-mark.png" alt="" className="h-full w-full object-contain" />
          </span>

          <p className="mt-6 font-display text-sm font-black text-[#e2a92d]">صفحة غير موجودة</p>
          <h1 className="mt-3 font-display text-3xl font-black leading-tight sm:text-4xl">
            هذا الرابط خرج عن الجدول.
          </h1>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#61707a]">
            الصفحة اللي تدور عليها غير موجودة، يمكن نُقلت أو تغيّر رابطها. تقدر ترجع للصفحة الرئيسية أو تنزّل التطبيق مباشرة.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#142b3d] px-6 py-3.5 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#1e4157] active:scale-[.97]"
            >
              <Compass className="h-4 w-4 text-[#62c7a4]" /> العودة للصفحة الرئيسية
            </Link>
            <Link
              href="/install"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#cbd8d1] bg-white px-6 py-3.5 text-sm font-extrabold text-[#31505d] transition duration-200 hover:border-[#62c7a4] active:scale-[.97]"
            >
              <Download className="h-4 w-4 text-[#0b8d6a]" /> طريقة التثبيت
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
