# Qiraati Download Page

صفحة عربية RTL رسمية لتنزيل تطبيق Qiraati Android وشرح التثبيت خارج Google Play.

## التشغيل المحلي

```bash
pnpm install
pnpm dev
```

## فحص وبناء المشروع

```bash
pnpm check
pnpm build:vercel
```

## النشر على GitHub Pages

يتم النشر تلقائيًا عبر `.github/workflows/deploy-pages.yml` عند الدفع إلى الفرع `main`. يستخدم البناء المسار الفرعي للمستودع:

```text
/qiraati-download-page/
```

أمر البناء المحلي المطابق لـ GitHub Pages هو:

```bash
VITE_BASE_PATH=/qiraati-download-page/ pnpm build:github
```

بعد إنشاء المستودع، افتح **Settings → Pages** واختر **GitHub Actions** كمصدر النشر إذا لم يتم اختياره تلقائيًا.

## الروابط

صفحة التنزيل: `/`

دليل التثبيت: `/install`

سياسة الخصوصية: `/privacy`

يبقى APK مستضافًا عبر GitHub Releases في مستودع Android الأصلي، بينما يستضيف هذا المستودع صفحة التنزيل فقط.
