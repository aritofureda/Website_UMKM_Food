# Dapur Nusantara - Website UMKM Kuliner Indonesia

Website profil untuk UMKM (Usaha Mikro, Kecil, dan Menengah) di bidang kuliner Indonesia. Dibangun dengan desain flat, minimalis, dan responsif.

## Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4**
- **React Router DOM v7**
- **React i18next** (Bilingual ID/EN)
- **Framer Motion** (Parallax & scroll animations)
- **Lucide React** (Icons)

## Fitur / Features

- 9 halaman lengkap (Home, About, Products, Blog, Gallery, Testimonials, FAQ, Team, Contact)
- Bilingual support (Bahasa Indonesia & English) dengan language switcher
- Parallax scrolling pada Hero, CTA Banner, dan Gallery
- Dual-layer photo carousel dengan animasi independen
- Responsive design (mobile-first) dengan hamburger menu
- Lazy-loaded routes untuk performa optimal
- Scroll-reveal animations pada setiap section

## Halaman / Pages

| Halaman | Deskripsi |
|---------|-----------|
| Home | Hero section, menu favorit, photo carousel, CTA banner |
| About | Cerita, misi, visi, dan nilai-nilai bisnis |
| Products | Katalog menu dengan filter kategori |
| Blog | Artikel tips, resep, dan cerita dari dapur |
| Gallery | Galeri foto dengan efek parallax |
| Testimonials | Ulasan pelanggan |
| FAQ | Pertanyaan yang sering diajukan (accordion) |
| Team | Profil tim Dapur Nusantara |
| Contact | Form kontak, info lokasi, dan map placeholder |

## Cara Menjalankan / Getting Started

```bash
# Clone repository
git clone https://github.com/aritofureda/Website_UMKM_Food.git

# Masuk ke folder project
cd Website_UMKM_Food

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka `http://localhost:5173` di browser.

## Build untuk Production

```bash
npm run build
```

Hasil build ada di folder `dist/`.

## Struktur Folder

```
src/
├── components/
│   ├── home/          # Hero, FeaturedProducts, PhotoCarousel, CTABanner
│   ├── layout/        # Navbar, Footer, Layout, MobileMenu
│   ├── shared/        # AnimatedSection, LanguageSwitcher, ScrollToTop
│   └── ui/            # Button, Card, Container, Input, Section, etc.
├── data/              # Dummy data (products, blog, team, etc.)
├── i18n/              # Konfigurasi i18n & file terjemahan (ID/EN)
└── pages/             # Komponen halaman (HomePage, AboutPage, etc.)
```

## Design

- **Font**: Playfair Display (heading) + Plus Jakarta Sans (body)
- **Warna**: Warm amber/terracotta primary, herb green secondary, warm off-white surface
- **Style**: Flat, minimalis, generous whitespace, subtle parallax animations

## License

MIT
