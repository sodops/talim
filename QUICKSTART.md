# 🚀 EduSpace - Oson Ishga Tushirish

## Tezkor Boshlash

### 1-usul: Bash Script (Tavsiya etiladi)

```bash
# Development server
./run.sh dev

# Production build
./run.sh build

# Barcha komandalarni ko'rish
./run.sh help
```

### 2-usul: NPM Scripts

```bash
# Development server
npm start
# yoki
npm run dev

# Production build
npm run build

# Build preview
npm run preview

# Code linting
npm run lint

# Loyihani tekshirish
npm run check

# Dependencies yangilash
npm run update-deps

# Tozalash
npm run clean
```

---

## 📋 Barcha Komandalar

### Bash Script (`./run.sh`)

| Komanda | Qisqartma | Tavsif |
|---------|-----------|--------|
| `./run.sh dev` | `./run.sh d` | Development server ishga tushirish |
| `./run.sh build` | `./run.sh b` | Production build yaratish |
| `./run.sh preview` | `./run.sh p` | Build preview ko'rish |
| `./run.sh lint` | `./run.sh l` | Code linting |
| `./run.sh install` | `./run.sh i` | Dependencies o'rnatish |
| `./run.sh update` | `./run.sh u` | Dependencies yangilash |
| `./run.sh clean` | `./run.sh c` | Cache tozalash |
| `./run.sh test` | `./run.sh t` | To'liq test |
| `./run.sh help` | `./run.sh h` | Yordam |

### NPM Scripts

| Komanda | Tavsif |
|---------|--------|
| `npm start` | Development server (dev bilan bir xil) |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Build preview |
| `npm run lint` | ESLint tekshiruvi |
| `npm run check` | Lint + Build |
| `npm run update-deps` | Dependencies yangilash va tekshirish |
| `npm run clean` | node_modules, dist, .vite tozalash |

---

## 🎯 Keng Tarqalgan Vazifalar

### Birinchi Marta Ishga Tushirish

```bash
# 1. Dependencies o'rnatish
./run.sh install
# yoki
npm install

# 2. Development server ishga tushirish
./run.sh dev
# yoki
npm start

# 3. Brauzerda ochish
# http://localhost:5173
```

### Production Build Yaratish

```bash
# Build yaratish
./run.sh build

# Build preview
./run.sh preview

# Yoki NPM bilan
npm run build
npm run preview
```

### Loyihani Tekshirish

```bash
# To'liq test (lint + build)
./run.sh test

# Yoki NPM bilan
npm run check
```

### Muammolarni Hal Qilish

```bash
# 1. Hamma narsani tozalash
./run.sh clean

# 2. Qayta o'rnatish
./run.sh install

# 3. Qayta ishga tushirish
./run.sh dev
```

---

## 🔧 Konfiguratsiya

### Port O'zgartirish

Agar 5173 port band bo'lsa, Vite avtomatik boshqa portni tanlaydi.

Yoki `vite.config.js` da o'zgartiring:

```javascript
export default defineConfig({
  server: {
    port: 3000 // O'zingizning portingiz
  }
})
```

### Environment Variables

`.env` fayl yarating:

```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=EduSpace
```

Kodda foydalanish:

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 📦 Dependencies

### O'rnatilgan Paketlar

**Frontend:**
- React 19.2.0
- Vite 7.2.4
- Tailwind CSS 3.4.18
- React Router DOM 7.9.6
- Zustand 5.0.8
- Framer Motion 12.23.24
- Recharts 3.5.0
- Lucide React 0.555.0

**PDF:**
- jsPDF 3.0.4
- html2canvas 1.4.1

### Yangilash

```bash
# Barcha dependencies yangilash
./run.sh update

# Yoki NPM bilan
npm run update-deps

# Faqat bitta paket
npm update recharts
```

---

## 🐛 Muammolarni Hal Qilish

### "Module not found" xatosi

```bash
./run.sh clean
./run.sh install
```

### Port band

```bash
# Boshqa portda ishga tushirish
PORT=3000 npm run dev
```

### Build xatosi

```bash
# Cache tozalash
rm -rf .vite dist
npm run build
```

### ESLint xatolari

```bash
# Lint tekshirish
npm run lint

# Auto-fix
npx eslint . --fix
```

---

## 🚀 Deployment

### Vercel (Tavsiya etiladi)

```bash
# Vercel CLI o'rnatish
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# dist/ papkasini Netlify ga yuklash
```

### Manual

```bash
# Build yaratish
npm run build

# dist/ papkasini serverga yuklash
```

---

## 📚 Qo'shimcha Ma'lumot

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

## 💡 Maslahatlar

1. **Development uchun:** `./run.sh dev` yoki `npm start`
2. **Production build:** `./run.sh build`
3. **Muammo bo'lsa:** `./run.sh clean` keyin `./run.sh install`
4. **Tekshirish:** `./run.sh test` yoki `npm run check`

---

**Savollar?** README.md faylini o'qing yoki `./run.sh help` ni ishga tushiring.
