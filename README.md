# EduSpace - Onlayn Ta'lim Platformasi

EduSpace bu o'quvchilar uchun onlayn kurslarni ko'rish, sotib olish, video darslarni o'rganish va test topshirib sertifikat olish imkonini beruvchi platforma.

## Xususiyatlari

- **Kurslar Vitrinasi**: Barcha mavjud kurslarni ko'rish, qidirish va kategoriyalar bo'yicha filtrlash.
- **Kurs Tafsilotlari**: Kurs haqida to'liq ma'lumot, narxi, o'qituvchi va darslar rejasi.
- **O'quvchi Kabineti (Dashboard)**: A'zo bo'lingan kurslar, o'zlashtirish foizi va to'plangan ballar statistikasi.
- **Video Darslar**: YouTube integratsiyasi orqali video darslarni ko'rish.
- **Test Tizimi (Quiz)**: Darslar yakunida bilimlarni sinash uchun testlar.
- **Sertifikat**: Kursni muvaffaqiyatli tugatganda (80%+ natija) PDF sertifikat yuklab olish.

## Texnologiyalar

- **Frontend**: React.js + Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **PDF Generation**: html2canvas, jspdf

## O'rnatish va Ishlatish

Loyihani kompyuteringizga yuklab olish va ishga tushirish uchun quyidagi qadamlarni bajaring:

1. **Repozitoriyni klonlash:**
   ```bash
   git clone https://github.com/username/eduspace.git
   cd eduspace
   ```

2. **Kutubxonalarni o'rnatish:**
   ```bash
   npm install
   ```

3. **Loyihani ishga tushirish:**
   ```bash
   npm run dev
   ```
   Brauzerda `http://localhost:5173` manziliga kiring.

## Loyiha Tuzilishi

- `src/components`: Qayta ishlatiluvchi komponentlar (Navbar, Footer, CourseCard).
- `src/pages`: Asosiy sahifalar (Home, Dashboard, CourseDetail, LessonPage).
- `src/data`: Mock ma'lumotlar (kurslar va foydalanuvchilar).
- `src/context`: Global state (Zustand store).

## Muallif

[Sizning Ismingiz]
