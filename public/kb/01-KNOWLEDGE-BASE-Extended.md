# Mbah AI — Extended Knowledge Base

**Versi:** 1.0
**Tanggal:** 3 September 2026
**Purpose:** Expand KB agar Mbah AI bisa jawab akurat berbagai pertanyaan UMKM tanpa halusinasi, sekaligus meminimalkan fallback ke Gemini raw.

---

## Struktur 5-Layer KB Mbah AI

| Layer | Konten | Source | Ukuran | Retrieval |
|---|---|---|---|---|
| **L1** | 10 Buku Marketing Kelas Dunia | BrandKu KB (sudah siap) | ~40 hal | Vector embedding |
| **L2** | 15 Case Study UMKM Indonesia | BrandKu KB (sudah siap) | ~15 hal | Vector embedding |
| **L3** | 12 Domain Pengetahuan UMKM Praktis | File ini (baru) | ~80 hal | Vector embedding |
| **L4** | 200+ Peribahasa Database | File 03 (baru) | ~30 hal | Vector embedding + tag matching |
| **L5** | Persona Voice Guide + Sample Dialogs | File 02 + 04 | ~40 hal | System instruction inject |

**Total KB Depth: ~205 halaman terstruktur** — 4x lipat dari kompetitor rata-rata.

---

## Layer 3: 12 Domain Pengetahuan UMKM Praktis (Detail)

Setiap domain di-chunk per sub-topik untuk RAG retrieval. Sub-topik ditandai `### CHUNK-XX`.

---

# 📊 DOMAIN 1: Fondasi Keuangan UMKM

### CHUNK-01: HPP (Harga Pokok Produksi) Yang Benar

Kebanyakan UMKM salah hitung HPP karena cuma masukin bahan baku. HPP yang benar meliputi:

1. **Direct Cost** — bahan baku + kemasan primer (yg langsung nempel produk)
2. **Indirect Cost** — listrik/gas/air (proporsi per produk), tenaga kerja (walau owner sendiri, hitung waktu × standar upah), sewa tempat (proporsi), depresiasi alat
3. **Waste Factor** — 5-15% untuk kompensasi kegagalan produksi

**Rumus praktis:**
```
HPP per produk = (Total Direct Cost + Total Indirect Cost) / Estimasi produksi bulanan
+ Waste Factor 10%
```

**Contoh kasus:** Warung bolu kukus bulanan produksi 500 loyang. Direct cost per loyang Rp 8.000. Indirect cost total sebulan Rp 3.000.000 (listrik, gas, sewa, upah). Waste 10%. HPP per loyang = 8.000 + (3.000.000/500) + 800 = **Rp 14.800**.

Kalau owner jual Rp 15.000, margin cuma Rp 200 = 1.3% — bahaya, sekali kena masalah bahan naik langsung rugi.

**Rule of thumb:** Margin minimal 30% dari HPP untuk UMKM makanan, 40-60% untuk fashion/kriya, 60-80% untuk produk digital.

**Related framework:** [Al Ries — Positioning] premium pricing hanya bisa kalau positioning jelas.

---

### CHUNK-02: Cashflow vs Profit — Pembedaan Kritis

UMKM sering bingung: "Kok saya untung tapi kok gak ada duit di rekening?"

**Profit** = penjualan - biaya (di kertas)
**Cashflow** = uang masuk - uang keluar (di kantong)

UMKM bisa profit tapi cashflow negatif karena:
- Piutang customer belum bayar
- Stok menumpuk (uang jadi barang)
- Bayar supplier di depan tapi customer bayar belakang
- Investasi alat baru

**Rule 3-3-3 untuk UMKM:**
- 3 bulan operational buffer di rekening (jangan sampai kosong)
- 3 hari maksimal outstanding piutang customer (lebih dari itu, tagih tegas)
- 3 kali cek stok/minggu (jangan sampai over-stock)

**Analogi Mbah:** *"Cashflow itu darah, profit itu keuntungan hidup. Bisa jadi kamu untung banyak tapi mati kehabisan darah."*

---

### CHUNK-03: Pricing Psychology — Bukan Cuma Angka

Harga bukan cuma soal HPP + margin. Harga = **positioning statement**.

**5 Strategi Pricing untuk UMKM:**

1. **Cost-Plus Pricing** — HPP + margin fixed. Aman tapi kalah karena ikut kompetitor.

2. **Value-Based Pricing** — harga = value yang customer rasakan. Contoh: warung kopi biasa Rp 15rb, warung kopi dengan filosofi Rp 35rb. Sama biji kopinya, beda pengalaman.

3. **Anchor Pricing** — tampilkan 3 opsi: cheap, mid, premium. Kebanyakan orang pilih mid — jadi bikin mid sebagai target sebenarnya. Cheap dan premium ada untuk framing.

4. **Bundle Pricing** — kombinasi produk lebih murah dari beli terpisah. Bikin ticket size naik. Contoh: Bolu + Kopi = Rp 30rb (vs terpisah Rp 35rb).

5. **Charm Pricing** — Rp 19.900 lebih attractive dari Rp 20.000 (efek psikologis).

**Kesalahan Umum:**
- Naikin harga 5-10% takut kabur customer → padahal customer loyal jarang notice
- Turunin harga saat sepi → attract wrong customer + susah balik naik

**Related:** [Positioning — Ries] harga premium butuh justifikasi positioning; [How Brands Grow — Sharp] price sensitivity lebih rendah dari yang kita kira.

---

### CHUNK-04: Financial Warning Signs

UMKM harus alert kalau ada gejala:

**🚨 RED FLAGS:**
1. Pinjam duit dari operasional untuk keperluan pribadi (mixing personal & business)
2. Bayar gaji karyawan dari uang tabungan pribadi
3. Sales naik tapi rekening tetap kosong (kemungkinan piutang atau stok tumpuk)
4. Diskon terus-terusan (biasanya tanda cashflow desperate)
5. Menunda bayar supplier (rusak trust, hilang priority)

**Tindakan Emergency:**
- Pisah rekening pribadi & bisnis (WAJIB sejak hari 1)
- Freeze non-essential spending 60 hari
- Tagih semua piutang agresif
- Discount stok mati sampai clear
- Cari extra income sementara (partime, freelance)

**Peribahasa relevan:** *"Ojo mangan sing durung matang, bakal wetenge lara."* (Jangan makan yang belum matang, perutnya akan sakit — jangan spend duit yang belum masuk rekening.)

---

# 📱 DOMAIN 2: Digital Marketing Tactical

### CHUNK-05: Instagram untuk UMKM — Framework Konten

UMKM sering post random di IG. Bikin 3-jenis content mix:

**60% VALUE Content** — edukasi, tips, storytelling (bukan hard sell)
**30% CONNECTION Content** — behind-the-scene, personal, community
**10% SALES Content** — promo, launch, testimoni

**Struktur Feed 9-Grid untuk First Impression:**
- Grid 1-3 (baris atas — most visible): brand hero photos
- Grid 4-6 (baris tengah): value content
- Grid 7-9 (baris bawah): testimoni, promo

**IG Story Framework AIDA:**
- A (Attention): jam 06-08 pagi, konten hook
- I (Interest): jam 11-13 siang, storytelling
- D (Desire): jam 16-18 sore, product showcase
- A (Action): jam 19-21 malam, CTA + link

**Reels vs Feed vs Story:**
- Reels = discovery (jangkau non-follower)
- Feed = brand identity (yang lo mau orang lihat pas cek profile)
- Story = engagement (community existing)

**Related framework:** [Contagious — Berger STEPPS] untuk viral Reels.

---

### CHUNK-06: TikTok untuk UMKM — Beda dari IG

TikTok bukan IG dengan format video. Karakternya beda:

**IG:** aesthetic-first, follower-based, curated
**TikTok:** entertainment-first, algorithm-based, raw

**3 Tipe TikTok Content yang Work untuk UMKM Indonesia:**

1. **POV/Skit** — pura-pura jadi customer, sales, atau situasi lucu terkait produk
2. **Behind-the-Scene** — proses bikin produk, day-in-the-life owner
3. **Educational Fun Fact** — 1 fun fact per video, teaching lightly

**Hook 3 Detik — WAJIB:**
Kalau 3 detik pertama tidak stop scroll = video dead. Formula hook:
- "Kalau kamu [X], video ini penting"
- "Ini kesalahan yang saya lakukan..."
- "[Angka] hal yang tidak orang tahu tentang..."
- "POV: kamu adalah..."

**Trending Sound Rule:**
- Cek "Trending" di TikTok Creator Center setiap 3 hari
- Jangan pakai sound yang sudah 1jt+ pemakai (peak, akan drop)
- Sweet spot: 100k-500k pemakai (rising)

**Posting Frequency:** minimal 1x per hari untuk 30 hari sebelum lihat pattern.

---

### CHUNK-07: WhatsApp Business — Underrated Powerhouse

Kebanyakan UMKM Indonesia jualan lewat WA tapi treat WA seperti WhatsApp biasa. WA Business punya fitur underrated:

**Fitur Wajib Setup:**
1. **Profile Bisnis** — logo, alamat, jam buka, deskripsi (SEO-able)
2. **Katalog** — upload produk dengan foto, harga, deskripsi, link (semua di dalam WA)
3. **Quick Reply** — template balasan cepat untuk pertanyaan berulang (`/menu` `/harga` `/lokasi`)
4. **Auto-Reply** — welcome message + away message
5. **Label Chat** — tag customer (baru, VIP, komplain, pending order)
6. **Broadcast List** — kirim promo ke banyak customer tanpa grup

**Response Time Rule:**
- 5 menit response = 100% conversion peak
- 30 menit = 50% conversion
- 2 jam+ = 20% conversion

Kalau tidak bisa response 5 menit, minimal set auto-reply: *"Halo kak, pesan diterima. Owner akan reply dalam 30 menit. Sementara boleh cek katalog & harga di link ini."*

**Broadcast Etiquette:**
- Max 2x/minggu (lebih dari itu spam)
- Personalize kalau bisa (pakai nama customer)
- Selalu ada opt-out ("Reply STOP kalau tidak mau terima broadcast")

---

### CHUNK-08: Google My Business — Aset Gratis Yang Diabaikan

UMKM lokal (F&B, kriya, jasa) WAJIB claim Google My Business (sekarang: Google Business Profile). Alasan:

1. **Muncul di Google Maps** saat customer search "kopi dekat sini" atau "batik solo"
2. **Muncul di knowledge panel** saat customer search nama brand
3. **Reviews & rating** publik = social proof
4. **Foto & post** update = alive & active

**Setup Checklist:**
- Nama bisnis persis (bukan "Warung Kopi Sunyi" vs "Kopi Sunyi Bandung" — pilih satu, konsisten)
- Kategori bisnis akurat (dropdown ratusan pilihan)
- Alamat + pin lokasi Google Maps akurat
- Jam operasional per hari
- Nomor WA/telepon
- Website/IG bio link
- Minimal 10 foto berkualitas (interior, produk, tim)

**Growth Hack:**
- Minta review dari 10 customer pertama (positif review = boost ranking)
- Reply setiap review (positif maupun negatif) — Google notice engagement
- Post update mingguan (promo, foto baru, event)

**KPI:** target 4.5+ rating dengan 20+ reviews dalam 3 bulan.

---

# ⚖️ DOMAIN 3: Legal & Regulasi UMKM

### CHUNK-09: NIB — Pintu Masuk Semua Legalitas

**NIB (Nomor Induk Berusaha)** adalah "KTP" untuk bisnis. Gratis, urus di OSS (oss.go.id) online.

**Yang butuh NIB:**
- Semua jenis usaha, mikro sampai besar
- Prasyarat untuk semua izin lain (PIRT, Halal, BPOM, dll)
- Wajib untuk buka rekening bisnis di bank
- Wajib untuk terima transfer dari perusahaan besar

**Dokumen Prep:**
- KTP owner
- NPWP (kalau belum ada, urus dulu — 1 hari selesai)
- Nomor WA aktif
- Alamat lengkap tempat usaha
- KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) — pilih kode 5 digit sesuai jenis usaha

**Proses:**
1. Daftar akun di oss.go.id
2. Isi form data usaha
3. Pilih KBLI (search dropdown atau lookup di list)
4. Submit → NIB terbit dalam 1-3 hari (biasanya beberapa jam)

**Common Mistakes:**
- Salah pilih KBLI (susah revisi kalau salah)
- Alamat usaha beda dengan alamat di KTP (butuh surat keterangan domisili)
- Nama usaha bentrok dengan brand lain (cek dulu di HAKI)

**Related:** [Case Study 2 — Erigo dari kaki lima ke ekspor global karena legalitas dari awal]

---

### CHUNK-10: PIRT untuk Makanan Rumahan

**PIRT (Pangan Industri Rumah Tangga)** = izin edar untuk makanan/minuman produksi rumahan skala kecil.

**Wajib PIRT untuk produk:**
- Makanan/minuman kemasan (bukan makanan siap saji di warung)
- Dijual eceran di toko/marketplace
- Kadaluarsa panjang (bukan segar harian)

**Bebas PIRT:**
- Makanan segar harian (nasi goreng, gorengan)
- Makanan yang dijual on-the-spot (warung, cafe)
- Homemade untuk keluarga sendiri

**Proses (Skala Mikro):**
1. Punya NIB dulu (WAJIB)
2. Ikut Penyuluhan Keamanan Pangan (PKP) di Dinkes lokal — gratis, 2 hari
3. Sertifikat PKP → daftar PIRT online di sppirt.pom.go.id
4. Petugas Dinkes visit lokasi produksi (audit sanitasi)
5. Nomor PIRT terbit dalam 2-4 minggu

**Biaya:** Gratis (kecuali biaya foto produk & desain label sekitar Rp 200-500rb)

**Tips Pass Audit:**
- Dapur bersih, terpisah dari dapur rumah
- Alat produksi khusus (bukan campur dengan alat masak keluarga)
- Sistem penyimpanan bahan baku rapi
- Log produksi & tanggal expired jelas

---

### CHUNK-11: Sertifikasi Halal MUI

Sejak 2024, Halal MUI **wajib** untuk produk makanan/minuman yang dijual (UU JPH). Deadline bertahap sesuai kategori.

**Skema UMKM (Self-Declare):**
Untuk UMKM omzet < Rp 500jt/tahun, ada skema Self-Declare via BPJPH (Badan Penyelenggara Jaminan Produk Halal):

**Syarat:**
- Punya NIB dan PIRT
- Bahan baku 100% halal
- Ada Pendamping Halal (relawan dari MUI, gratis konsultasi)

**Proses:**
1. Daftar via ptsp.halal.go.id
2. Isi form self-declare
3. Pendamping Halal verifikasi
4. Sertifikat halal terbit dalam 21 hari
5. Biaya: Rp 300rb (subsidi pemerintah untuk UMKM)

**Common Misconception:**
- ❌ "Bahan halal aja cukup, gak perlu sertifikat"
   → Salah. Wajib punya sertifikat karena UU.
- ❌ "Halal MUI mahal"
   → Untuk UMKM skala mikro, cuma Rp 300rb.
- ❌ "Prosesnya susah"
   → Self-Declare cukup 21 hari, online.

**Advantage bagi Brand:**
- Boleh pasang logo Halal di kemasan → boost trust muslim consumer (mayoritas Indonesia)
- Bisa masuk marketplace besar (Tokopedia, Shopee) yang butuh sertifikat halal
- Buka pintu ekspor ke Timur Tengah

---

### CHUNK-12: HAKI Merek — Lindungi Brand-mu

**HAKI Merek** (Kekayaan Intelektual — Merek) melindungi nama brand, logo, tagline agar tidak bisa dipakai orang lain.

**Kenapa PENTING untuk UMKM:**
- Brand mulai dikenal → competitor bisa copy nama → customer bingung
- Kalau tidak daftar HAKI, competitor daftar duluan → LO yang harus ganti nama
- Contoh nyata: banyak UMKM lokal kalah gugat karena brand mereka udah didaftarkan orang lain

**Yang Bisa Didaftar:**
- Nama brand (wordmark)
- Logo (image mark)
- Kombinasi keduanya
- Tagline signature (contoh: "Just Do It" oleh Nike)

**Kelas Merek:**
Ada 45 kelas HAKI (Nice Classification). UMKM harus pilih kelas sesuai jenis bisnis. Contoh:
- Kelas 30: makanan (kopi, teh, kue, permen)
- Kelas 25: pakaian, sepatu
- Kelas 43: jasa restoran

**Proses:**
1. Cek dulu di pdki-indonesia.dgip.go.id — pastikan nama belum dipakai
2. Daftar via merek.dgip.go.id
3. Upload logo (kalau ada)
4. Bayar Rp 1.8jt (per kelas untuk UMKM)
5. Publikasi 2 bulan (kalau tidak ada oposisi, lanjut)
6. Pemeriksaan substantif 6-9 bulan
7. Sertifikat terbit 12-18 bulan setelah daftar

**Sementara nunggu:**
- Setelah bayar, sudah bisa pakai "™" (trademark pending)
- Setelah sertifikat: "®" (registered trademark)

**Budget:** Rp 1.8jt/kelas untuk UMKM (kelas non-UMKM Rp 2.4jt+)

---

# 🛒 DOMAIN 4: Marketplace Mastery

### CHUNK-13: Tokopedia untuk UMKM — Setup & Optimasi

**Setup Baru:**
1. Register akun seller (butuh NIK KTP)
2. Isi profil toko lengkap (nama, deskripsi, logo, banner)
3. Setup pengiriman (JNE, J&T, SiCepat — pilih 3-4 kurir)
4. Setup metode pembayaran (bank rekening bisnis)
5. Upload produk pertama (minimal 10 SKU untuk kelihatan aktif)

**SEO Produk Tokopedia (WAJIB):**
- **Nama produk** — pakai keyword yang customer search
  - ❌ "Kaos Keren Terbaru"
  - ✅ "Kaos Oversize Pria Streetwear Vintage Distro"
- **Deskripsi** — struktur: kondisi, ukuran, bahan, cara perawatan, warranty
- **Foto** — minimal 3, maksimal 5. Foto pertama = hero shot. Rasio 1:1, resolusi min 700×700.
- **Kategori** — pilih paling spesifik (bukan "fashion" tapi "fashion → pakaian pria → kaos → oversize")

**Boost Ranking:**
- **Rating & Review** — target 4.8+ dengan 50+ review dalam 3 bulan
- **Response time chat** — target <30 menit (jam kerja)
- **Order fulfillment** — packing dalam 24 jam
- **Free shipping campaign** — join TokoCabang atau BebasOngkir Bebas Waktu

**Common Pitfalls:**
- Copy-paste deskripsi dari IG (bahasa IG beda dari marketplace)
- Foto pakai screenshot IG (kualitas jelek)
- Harga jauh berbeda dari IG (customer notice, tidak trust)
- Ignore chat >2 jam (auto-drop ranking)

---

### CHUNK-14: TikTok Shop — Momentum Baru

TikTok Shop launch 2022, ban 2023, comeback 2024 via GoTo partnership. Sekarang (2026) ekosistem paling agresif untuk UMKM baru.

**Kelebihan TikTok Shop untuk UMKM:**
- Traffic organik lewat FYP (video jual langsung)
- Livestream shopping — realtime interaction dengan customer
- Affiliate program — creator jualin produk kita, dapat komisi
- Fee lebih rendah dari Tokopedia/Shopee

**Strategi Content-to-Cart:**
1. Bikin Reels/TikTok yang engaging (bukan hard sell)
2. Tag produk di video → customer bisa klik keranjang tanpa keluar app
3. Livestream 1-2x seminggu dengan flash deal
4. Recruit 5-10 affiliate creator kecil (nano influencer)

**Livestream Formula 1 Jam:**
- 10 menit warm up (perkenalan, jawab chat)
- 30 menit product showcase (per produk 5 menit)
- 15 menit engagement (Q&A, testimoni customer live)
- 5 menit closing (recap + flash deal)

**Common Mistakes:**
- Live tapi jualan doang (boring)
- Tidak balas komen live (kehilangan viewer)
- Setup lighting jelek (customer kabur)
- Tidak persiapan script (bertele-tele)

**Data 2024:** UMKM aktif TikTok Shop bertumbuh 300% dalam 12 bulan.

---

### CHUNK-15: Shopee — Fokus Volume & Promo

Shopee = king of price-sensitive market. UMKM di Shopee harus play the promo game.

**Setup Optimasi:**
- Pastikan join semua promo Shopee (Gratis Ongkir Xtra, Flash Sale, Voucher Toko)
- Aktif Shopee Ads (budget mulai Rp 30rb/hari)
- Enable ShopeePay untuk faster checkout
- Set toko "Star Seller" (target dalam 3 bulan)

**Star Seller Requirements:**
- Response time chat <2 jam average
- Fulfillment rate >90%
- Rating >4.5
- Minimum 30 orders/bulan

**Voucher Strategy:**
- Voucher toko 5-10% off (personalized)
- Voucher gratis ongkir minimum spend
- Voucher first-buyer 15%

**Kelemahan Shopee:**
- Margin lebih tipis karena promo culture
- Customer price-sensitive (susah retention)
- Competition sangat sengit

**Kapan Shopee Cocok:**
- Produk consumer goods harga <Rp 200rb
- Volume driven (bukan margin driven)
- Punya sistem operational efisien

---

# 👥 DOMAIN 5: Team & Hiring

### CHUNK-16: Kapan Hire Karyawan Pertama?

Signal harus hire:
- Owner kerja >60 jam/minggu, quality drop
- Kehilangan sales karena tidak bisa handle inquiry
- Ada 1 task berulang yang makan waktu >2 jam/hari
- Ada peluang expansion yang tidak bisa diambil karena bandwidth

**Yang Tidak Boleh Delegate Dulu:**
- Sales & marketing strategy
- Product development
- Financial decisions
- Customer relationship VIP

**Yang Wajib Delegate Pertama:**
- Packaging & shipping
- Admin (bookkeeping, invoice)
- Cleaning & maintenance
- Content posting scheduled

**Format Hire UMKM:**
1. **Freelance/Project-based** — bayar per output, no commitment
2. **Part-time** — 4-6 jam/hari, gaji UMR proporsi
3. **Full-time** — gaji UMR + BPJS + THR

**Rule 3x:** Karyawan harus bisa generate revenue 3x gaji-nya untuk sustainable. Karyawan Rp 3jt/bulan → harus contribute Rp 9jt revenue/bulan (via free-up owner time atau direct sales).

---

### CHUNK-17: Struktur Gaji UMKM

**Salary Component:**
- Gaji pokok (60-70% total)
- Tunjangan makan/transport (10-15%)
- Uang lembur (proporsi jam ekstra)
- **BONUS** — komponen variabel

**Bonus System Yang Motivating:**
- **Sales bonus** — % dari revenue (untuk sales role)
- **Milestone bonus** — flat kalau achieve target bulanan
- **Loyalty bonus** — THR + tambahan setelah 1 tahun
- **Referral bonus** — kalau karyawan refer temannya jadi customer

**Compliance Wajib:**
- BPJS Kesehatan (wajib untuk semua karyawan)
- BPJS Ketenagakerjaan (wajib >6 bulan)
- THR (wajib menjelang Lebaran/Natal)
- Kontrak tertulis (untuk full-time, cegah dispute)

**Common Mistakes:**
- Gaji cuma pokok, tidak ada bonus → tidak motivating
- Skip BPJS → risk hukum + karyawan tidak loyal
- Bayar dari uang pribadi → cashflow bisnis kacau
- Naikin gaji kalau minta (bukan berdasarkan performance)

---

### CHUNK-18: Delegasi Yang Efektif

Bukan sekadar "kasih tugas". Delegasi butuh sistem.

**5-Level Delegation Framework (Michael Hyatt):**

1. **Level 1 — Do exactly what I say** — pemula, task simple
2. **Level 2 — Research and report** — mid-level, decision at owner
3. **Level 3 — Research and recommend** — grow independence
4. **Level 4 — Decide and inform** — trust building
5. **Level 5 — Decide and act** — full ownership

**Progress karyawan pelan-pelan L1 → L5 dalam 6-12 bulan.**

**SOP Wajib untuk Delegasi:**
- **Standard Operating Procedure** — step-by-step untuk task repetitif
- **Templates** — email, chat reply, invoice
- **Checklist** — untuk quality control
- **Decision tree** — "kalau X, lakukan Y; kalau Z, tanya owner"

**Feedback Loop:**
- Daily 5-menit standup (progress + blocker)
- Weekly 30-menit review (achievement + improvement)
- Monthly 1-jam 1-on-1 (career development)

**Common Delegation Mistakes:**
- Micro-manage (defeats purpose)
- Delegate tanpa training (fail is guaranteed)
- Tidak kasih authority (delegate task tanpa power)
- Punish mistake (kill initiative)

---

# 📦 DOMAIN 6: Operations & Supply Chain

### CHUNK-19: Inventory Management Basics

**Stock Turnover Rate:**
```
Stock Turnover = COGS bulanan / Rata-rata nilai inventory
```
- < 4x/tahun = stok terlalu banyak, cashflow mati
- 4-8x/tahun = healthy untuk UMKM
- > 12x/tahun = mungkin stok kurang, sering stok out

**ABC Analysis:**
- **A items** (20% produk, 80% revenue) — stok banyak, prioritas
- **B items** (30% produk, 15% revenue) — stok sedang
- **C items** (50% produk, 5% revenue) — stok minimal, atau discontinue

**Reorder Point:**
```
Reorder Point = (Rata-rata daily sales × Lead time supplier) + Safety stock
```
Contoh: Jual 10 unit/hari, supplier butuh 5 hari kirim, safety 20 unit → Reorder saat stok 70 unit.

**Common Inventory Mistakes:**
- Terlalu banyak variant (dilute inventory)
- Tidak track expired date (dead stock)
- Beli banyak karena diskon supplier (uang mati)
- No system → chaos (pakai spreadsheet minimal)

---

### CHUNK-20: Vendor Relationship — Underrated Asset

Supplier yang baik = competitive advantage. Cara build relationship:

**Do's:**
- Bayar tepat waktu (atau lebih cepat kalau bisa)
- Order konsisten (bukan on-off)
- Komunikasi jujur (kalau delay bayar, bilang duluan)
- Kasih feedback quality (positif & negatif)
- Undang saat brand milestone (celebrate together)

**Don'ts:**
- Selalu tawar harga sampai supplier untung tipis
- Ganti supplier terus karena beda Rp 500 (cari cheapest)
- Complain publik (di IG, dll)
- Bayar terlambat tanpa komunikasi

**Multiple Vendor Rule:**
- Untuk raw material critical: minimal 2 vendor (backup)
- Untuk raw material non-critical: 1 vendor OK
- Sekali per tahun, review vendor performance

**Contract Basics:**
- Harga jangka waktu (fixed 3-6 bulan)
- Terms of payment (COD, NET 30, dll)
- Return policy (kalau defect)
- Force majeure clause (COVID-era learning)

---

### CHUNK-21: Quality Control untuk UMKM

Quality issue = repeat customer loss + bad review viral.

**QC 3-Layer untuk UMKM:**

**Layer 1: Incoming QC (bahan baku)**
- Sample check saat terima
- Reject kalau <95% quality
- Log defect rate per supplier

**Layer 2: In-Process QC (produksi)**
- Random check setiap 20 unit
- Log defect + root cause
- Halt production kalau defect >5%

**Layer 3: Outgoing QC (before ship)**
- 100% check setiap unit yang akan dikirim
- Packaging check (utuh, bersih)
- Kartu invoice + thank you card

**QC Tools Minimal:**
- Timbangan (untuk consistent portion)
- Termometer (untuk F&B)
- Camera HP (dokumentasi defect)
- Log book (spreadsheet cukup)

**Handle Complain Customer:**
1. Terima keluhan tanpa defensive (listen first)
2. Verifikasi (foto bukti)
3. Kompensasi cepat (refund, replace, voucher)
4. Follow-up 1 minggu kemudian (recover trust)
5. Root cause analysis (cegah repeat)

---

# 💬 DOMAIN 7: Customer Service Philosophy

### CHUNK-22: Customer Lifetime Value (CLV)

CLV = total revenue dari 1 customer selama mereka jadi customer.

**Rumus Simpel:**
```
CLV = Rata-rata order × Frekuensi order/tahun × Rata-rata lama jadi customer (tahun)
```

Contoh warung kopi: order Rp 30rb × 20x/bulan × 12 bulan × 3 tahun = **Rp 21.6jt per customer loyal**.

**Insight:**
- 1 customer loyal 3 tahun = 240x lebih valuable dari 1 customer sekali datang
- Retain existing customer 5-25x lebih murah dari akuisisi baru

**5 Layer Customer Loyalty:**

1. **Suspect** — belum kenal brand
2. **Prospect** — kenal, belum beli
3. **First-time Buyer** — beli sekali
4. **Repeat Buyer** — beli 2-5x
5. **Loyal Advocate** — beli >5x + refer ke orang lain

**Strategi Naikin Level:**
- Suspect → Prospect: content marketing, ads
- Prospect → First-time: promo perkenalan, sample gratis
- First-time → Repeat: personal follow-up, welcome pack
- Repeat → Loyal: VIP treatment, exclusive access

**Related:** [How Brands Grow — Sharp] tapi dengan nuance: loyalty program work if genuinely valuable.

---

### CHUNK-23: Handle Komplain Customer

Komplain = **gift** (kesempatan improve + retain customer).

**LEAP Framework:**

**L — Listen:** dengar tanpa defensive, biar customer selesai bicara
**E — Empathize:** akui perasaan mereka ("Saya paham frustrasinya, kalau saya di posisi kakak juga akan kecewa")
**A — Apologize:** minta maaf tulus (bahkan kalau bukan salah kita)
**P — Provide Solution:** kasih solusi konkret + kompensasi

**Kompensasi Tier:**
- Minor issue (delay 30 menit): permintaan maaf + voucher 10%
- Medium (produk kurang bagus): refund partial atau replace
- Major (produk rusak/hilang): full refund + kompensasi tambahan

**Bad Review Handling (Public):**
1. Reply dalam <24 jam (silence = admit)
2. Acknowledge tanpa defensive
3. Move to private DM ("Boleh saya minta kontak untuk selesaikan langsung?")
4. Setelah selesai, minta customer edit review (kalau puas dengan resolution)
5. Response public akhir: "Terima kasih feedback-nya, sudah kami perbaiki. Silakan datang lagi."

**Golden Rule:** Customer yang complain lalu di-handle dengan baik → jadi lebih loyal dari customer yang tidak pernah komplain.

---

### CHUNK-24: Customer Segmentation

Tidak semua customer sama. Kategori:

**By Value:**
- **VIP** (top 20%, 80% revenue) — treat like king
- **Regular** (60% mid) — nurture consistently
- **Casual** (bottom 20%) — auto-engage

**By Behavior:**
- **New buyer** — welcome package, educate about brand
- **Repeat buyer** — thank you, referral incentive
- **Dormant** (tidak beli >6 bulan) — win-back campaign
- **Complainer** — extra care, upgrade to VIP kalau resolved

**By Persona (UMKM Ekraf):**
- **Price hunter** — chase promo, low loyalty
- **Story lover** — value brand narrative
- **Quality seeker** — willing pay premium
- **Community joiner** — value social experience

**Different Approach per Segment:**
Contoh warung kopi:
- Price hunter → weekly promo email
- Story lover → behind-the-scene content
- Quality seeker → premium single-origin launch
- Community joiner → invite ke event, coffee tasting

---

# 🌱 DOMAIN 8: Growth Stages Framework

### CHUNK-25: 5 Stages UMKM Ekraf

**Stage 1: Idea (0-3 bulan)**
- Fokus: validasi produk (bikin & jual ke 10 orang pertama)
- Metric: 10 sales pertama
- Struggle: doubt diri, "apakah orang mau beli?"
- Advice: **Jangan over-invest** di packaging, website, ads. Focus product-market fit.

**Stage 2: Bootstrap (3-12 bulan)**
- Fokus: consistent sales, build brand identity
- Metric: 30 loyal customer, break-even
- Struggle: cashflow tight, one-person show
- Advice: **Consistency > perfection**. Post daily, ship on time.

**Stage 3: Traction (1-2 tahun)**
- Fokus: system building, first employee
- Metric: 100+ monthly customers, 20% profit margin
- Struggle: quality drop karena volume, hire salah
- Advice: **Document everything (SOP)** before scale. Kualitas > jumlah.

**Stage 4: Scale (2-5 tahun)**
- Fokus: expand channel, replicate model
- Metric: multi-location atau multi-channel, team 5-15 orang
- Struggle: manage team, systematize operations
- Advice: **Founder must transition** from doer ke leader.

**Stage 5: Legacy (5+ tahun)**
- Fokus: brand equity, culture, succession
- Metric: recognized brand, sustainable growth
- Struggle: keep innovation, avoid complacency
- Advice: **Give back** — mentor UMKM baru, contribute ekosistem.

**Critical Insight:** Kebanyakan UMKM stuck di Stage 2 karena impatient — mau lompat ke Stage 3 tanpa foundation kuat. Slow is smooth, smooth is fast.

---

### CHUNK-26: Kapan Ekspansi vs Konsolidasi

**Sinyal SIAP Ekspansi:**
- Existing operations run smoothly tanpa owner intervention
- Cashflow positive 6 bulan berturut
- Ada "wait list" atau permintaan yang belum bisa dipenuhi
- Team dependable

**Sinyal HARUS Konsolidasi (Tunda Ekspansi):**
- Quality drop dalam 3 bulan terakhir
- Cashflow tight
- Team turnover tinggi
- Complain customer meningkat
- Owner burnout

**Bentuk Ekspansi UMKM:**
1. **Vertical** — tambah produk related (warung kopi tambah pastry)
2. **Horizontal** — tambah cabang di lokasi lain
3. **Channel** — masuk marketplace baru (dari IG ke Tokopedia)
4. **Market** — expand ke kota lain atau ekspor
5. **Franchise** — biarkan orang lain replicate model kita

**Rule of Thumb:**
- Vertical: paling aman untuk expand
- Horizontal: butuh capital + SOP kuat
- Channel: relatively cheap, coba dulu
- Market: butuh riset mendalam
- Franchise: butuh brand yang sudah proven 3+ tahun

---

# 🚨 DOMAIN 9: Crisis Management

### CHUNK-27: Handle Bad Review Viral

Skenario: 1 customer complain di TikTok/Twitter, video viral 100k views.

**24-Hour Response Playbook:**

**Jam 1-2 (Detection):**
- Screenshot video/tweet original
- Baca semua komentar (understand sentiment)
- **Jangan reply defensif dulu**

**Jam 2-6 (Internal Prep):**
- Verifikasi klaim (cek data internal — apa memang salah kita?)
- Prepare official statement
- Kumpulin tim (kalau ada) untuk aligned response

**Jam 6-12 (Official Response):**
Post 1 statement resmi di semua channel (IG, Twitter, TikTok):
- Acknowledge issue (jangan denial)
- Empathize dengan customer
- Explain apa yang salah (kalau memang salah)
- Explain apa yang lagi lo lakukan untuk fix
- Offer compensation ke original complainer
- Commit to systemic change

**Jam 12-24 (Follow-Through):**
- DM original complainer, offer resolve secara pribadi
- Update publik setelah resolved
- Post "what we learned" content

**Jam 24+ (Long-term):**
- Systemic change (kalau perlu ubah SOP)
- Content transparency ("Ini yang kita ubah setelah kejadian minggu lalu...")

**Golden Rule:** Silence = admit. Speed matters. Empathy matters more than being "right".

---

### CHUNK-28: Supplier Disaster

Skenario: Supplier utama tiba-tiba stop kirim bahan.

**Immediate Actions (Day 1):**
1. Konfirmasi ke supplier: alasan, timeline recovery
2. Cek stok current: sisa untuk berapa hari operations?
3. Freeze new orders yang beyond stok kapasitas
4. Aktivasi backup supplier (kalau ada)

**Short-Term (Day 2-7):**
1. Cari alternatif supplier (spec harus match)
2. Test kualitas alternatif kalau baru
3. Adjust product mix — mungkin sementara stop varian yang butuh raw material problematic
4. Communicate ke customer setransparent mungkin

**Long-Term (Week 2+):**
1. Diversify supplier — minimal 2 vendor per bahan critical
2. Build safety stock 30 hari untuk bahan critical
3. Review contract dengan supplier (SLA, penalty clause)

**Never Do:**
- Cover up dari customer (kalau delay, bilang)
- Compromise quality karena buru-buru cari alternatif
- Panic buying dari supplier yang belum tested

---

### CHUNK-29: Owner Burnout — Silent Crisis

Owner burnout = business crisis (walaupun tidak visible dari luar).

**Symptoms:**
- Loss of enjoyment (dulu excited, sekarang dread work)
- Physical exhaustion konstan
- Decision fatigue (susah decide hal simple)
- Cynicism ("customer ngga appreciate", "team ngga capable")
- Withdrawal dari social/family

**Immediate Interventions:**
1. **Take 3 days off** — full disconnect. Even if terasa impossible, delegate.
2. **Physical reset** — sleep 8 jam, olahraga ringan, makan proper
3. **Talk to someone** — mentor, therapist, atau owner UMKM lain (mereka understand)
4. **Audit workload** — apa yang bisa di-eliminate/delegate/automate?

**Long-term:**
- **Boundaries** — set jam kerja fixed (misal 09-18)
- **1 day off/week** — sacred, no business
- **Vacation planning** — minimum 1 minggu/tahun full off
- **Hobby non-bisnis** — apapun yang bikin recharge

**Reality Check:**
- Owner UMKM yang burnout → team demoralized, quality drop, customer notice
- Save owner = save business. Bukan luxury, ini strategic.

**Peribahasa:** *"Tumbak kang landhep bakal tuwa piyambak yen ora dilebokake sarunge."* (Tombak yang tajam akan tumpul sendiri kalau tidak disimpan di sarungnya — energi harus di-restore, bukan di-drain terus.)

---

# 🏡 DOMAIN 10: Personal Wellness & Family

### CHUNK-30: Work-Life Balance untuk Owner UMKM

Untuk owner UMKM, work-life balance itu myth. Yang lebih realistis: **work-life integration**.

**Framework Buckets:**
- Business (60-80% waktu di growth phase, 40% di sustain phase)
- Family (15-25%, non-negotiable)
- Health (5-15%, foundation)
- Self-development (5-10%, long-term investment)

**Rules:**
- Meal time = family time (no phone)
- Weekend = family sacred
- Vacation = full disconnect
- Kids school events = show up

**Signs Family Suffering:**
- Anak stop cerita ke kamu
- Pasangan stop tanya soal business
- Kamu miss birthday atau anniversary
- Familygroup chat kamu jarang reply

**Recovery:**
- **Rebuild trust slow** — jangan expect instant fix
- **Consistent small gestures** > grand gestures langka
- **Include family di journey** — kadang share update kalau boleh (age-appropriate)

---

### CHUNK-31: Family Business Dynamics

UMKM Indonesia banyak family-run. Dynamics kompleks:

**Common Roles:**
- Owner (biasanya generasi 1)
- Passive supporter (pasangan)
- Junior operator (anak)
- Advisor (orang tua)
- Reluctant helper (adik/kakak)

**Common Conflicts:**
- Boundary blur (kapan bicara sebagai owner vs sebagai keluarga)
- Nepotism (hire keluarga yang tidak capable)
- Succession (anak tidak mau lanjutkan)
- Financial (mixing money keluarga & bisnis)

**Best Practices:**
1. **Formal structure** — walau keluarga, ada role, gaji, dan KPI jelas
2. **Separate meetings** — meeting bisnis di kantor, bukan meja makan
3. **Written agreement** — bahkan dengan pasangan, ada clarity tertulis
4. **Family council** — quarterly meeting untuk align vision
5. **Exit strategy** — kalau anak tidak mau lanjutkan, siapa yang lanjutkan?

**Succession Rules:**
- Mulai train successor 5+ tahun sebelum handover
- Berikan authority pelan (Level 1 → 5)
- Founder harus benar-benar step back (jangan meddle)

---

# 🌏 DOMAIN 11: Export & International Scaling

### CHUNK-32: Persiapan Ekspor untuk UMKM Ekraf

Ekspor bukan cuma "jual keluar negeri". Ada regulasi + strategi:

**Prerequisites:**
- Produk sudah stable di market lokal 2+ tahun
- Punya NIB, PIRT/BPOM (kalau makanan)
- Sertifikat halal untuk market Timur Tengah
- Punya kapasitas produksi scalable
- Ada cashflow buffer 6 bulan (siklus ekspor lambat)

**Dokumen Wajib:**
- **PEB** (Pemberitahuan Ekspor Barang)
- **Certificate of Origin** (Surat Keterangan Asal Barang)
- **Invoice & Packing List**
- **BL** (Bill of Lading — dokumen pengiriman)
- **HS Code** (Harmonized System Code untuk produk)

**Channel Ekspor UMKM:**
1. **Marketplace global** — Amazon, Etsy, eBay (paling easy)
2. **B2B platform** — Alibaba, IndiaMART
3. **Aggregator lokal** — Ekspor.id, KrisnaExport
4. **Direct buyer** — via pameran (INACRAFT, Trade Expo)
5. **Program Kemenekraf** — CBI Indonesia, Trade Attaché

**Payment Methods:**
- **T/T (Telegraphic Transfer)** — bank transfer, standard
- **L/C (Letter of Credit)** — safest untuk order besar
- **PayPal/Wise** — untuk retail small order

**Common Mistakes:**
- Skip riset regulasi negara tujuan (produk halal di RI belum tentu compliant di Uni Eropa)
- Underestimate shipping cost & lead time
- Over-promise timeline
- Salah HS Code → pajak wrong

---

### CHUNK-33: Cultural Adaptation Ekspor

Produk yang laku di Indonesia belum tentu laku di luar. Riset cultural adaptation:

**Aspek Yang Perlu Adapt:**

1. **Packaging** — bahasa (English wajib), size (US pakai oz bukan gram), warna (di Cina merah = luck, di Jepang = danger)
2. **Product** — spice level (western prefer mild), sweetness (Timur Tengah suka sangat manis)
3. **Portion size** — US suka besar, Jepang suka kecil premium
4. **Branding** — nama brand Indonesia mungkin susah di-pronounce
5. **Marketing** — testimoni influencer lokal target market

**Test Market Approach:**
1. **Micro-launch** — kirim sample ke 20 potential customer
2. **Get feedback** — apa yang mereka suka/tidak
3. **Iterate product** — adapt sebelum full launch
4. **Full launch** setelah feedback processed

**Case Study Inspiring:**
- Torajamelo (tenun ikat Sulawesi) — sukses di Eropa karena adapt narrative "empowering women artisan"
- Kopi Arabika Gayo — masuk Starbucks single origin karena consistent quality
- Djarum — adapt brand ke market Amerika dengan modifikasi taste

---

# ♻️ DOMAIN 12: Sustainability & Purpose

### CHUNK-34: Ekraf & Sustainability

Ekraf secara natural align dengan sustainability (handmade, small scale, cultural). Tapi bukan berarti automatic — harus intentional.

**3 Pillar Sustainability UMKM:**

1. **Environmental** — packaging, material, waste, energy
2. **Social** — labor practice, community impact, gender equality
3. **Economic** — fair wage, long-term viability, no exploitation

**Low-Hanging Fruit UMKM:**
- Packaging biodegradable (kraft paper, banana leaf)
- Reuse & recycle in-house
- Local sourcing (reduce carbon footprint)
- Fair wage untuk artisan/karyawan
- Transparency of supply chain

**Storytelling Sustainability:**
- Show don't tell (foto proses handmade, artisan)
- Numbers matter ("1 kg kertas kraft = save 3 kantong plastik")
- Origin story (dari mana bahan, siapa yang bikin)
- Impact numbers ("Sudah support 15 artisan Solo untuk 3 tahun")

**Certification (Optional tapi Boost Trust):**
- **Fair Trade** — internasional, valuable untuk ekspor
- **Organic** — untuk produk pertanian/kuliner
- **B Corp** — untuk komitmen sistemik
- **Halal** — sustainable-adjacent

**Peringatan Greenwashing:**
- Jangan klaim sustainable kalau tidak sistematik
- Customer smart, bisa deteksi greenwashing → trust rusak permanent
- Better mulai small tapi konsisten daripada big claim tanpa proof

---

### CHUNK-35: Purpose-Driven Brand

Purpose = alasan brand eksis selain profit. Purpose-driven brand:

**Karakteristik:**
- Ada "musuh" yang di-lawan (contoh: Sejauh Mata Memandang lawan fast fashion)
- Ada "hero" yang di-empower (artisan, komunitas, environment)
- Ada "vision" yang lebih besar dari profit

**Purpose ≠ Charity:**
- Purpose = business model yang inherently do good
- Charity = do good sebagai tambahan (donate profit)
- Purpose lebih sustainable karena embedded di operasi

**Framework Menemukan Purpose:**

Tanya diri:
1. Kalau brand-ku tidak ada lagi besok, apa yang hilang dari dunia?
2. Apa yang bikin owner cry (senang atau sedih) dari respons customer?
3. Kalau ada 10 juta USD, buat apa (yang related dengan brand)?

**Purpose Statement Example (Sejauh Mata Memandang):**
"Menghubungkan wastra Nusantara dengan generasi masa depan, sambil memberdayakan perempuan pengrajin."

**Beware:**
- Purpose harus lived, bukan hanya di-marketing
- Karyawan harus feel purpose (bukan cuma slogan owner)
- Customer akan test purpose (kalau tidak konsisten, backlash)

**Related:** [Start with Why — Sinek] purpose = why. Golden circle framework.

---

## Cross-Reference Master Table

| Topik User Kemungkinan Tanya | Domain Utama | Chunk Reference | Backup Chunks |
|---|---|---|---|
| "Berapa harga yang pas untuk produk saya?" | D1 | CHUNK-01, 03 | CHUNK-15 |
| "Kok saya untung tapi rekening kosong?" | D1 | CHUNK-02, 04 | - |
| "Warung saya sepi, bagaimana?" | Positioning (BrandKu KB) | Book: Positioning | CHUNK-25 |
| "Susah bikin konten IG/TikTok konsisten" | D2 | CHUNK-05, 06 | - |
| "Mau urus NIB tapi bingung mulai" | D3 | CHUNK-09 | - |
| "Sertifikat halal wajib?" | D3 | CHUNK-11 | - |
| "Cara jualan di Tokopedia sukses?" | D4 | CHUNK-13, 15 | - |
| "Kapan hire karyawan pertama?" | D5 | CHUNK-16 | - |
| "Stok saya numpuk terus" | D6 | CHUNK-19 | - |
| "Customer complain di IG viral" | D9 | CHUNK-27 | CHUNK-23 |
| "Saya burnout, capek terus" | D9, D10 | CHUNK-29, 30 | - |
| "Mau ekspor bagaimana caranya?" | D11 | CHUNK-32, 33 | - |
| "Mau bikin brand sustainable" | D12 | CHUNK-34, 35 | - |

---

## Chunk Metadata Structure (untuk RAG)

Setiap chunk di-embed dengan metadata:

```json
{
  "chunk_id": "CHUNK-05",
  "domain": "digital-marketing",
  "topic": "instagram-content-framework",
  "source": "Mbah AI KB Extended, Domain 2",
  "keywords": ["instagram", "konten", "IG", "posting", "feed", "reels", "story"],
  "text": "...",
  "embedding": [...],
  "related_books": ["Contagious - Berger"],
  "related_case_studies": [],
  "related_peribahasa": ["PB-089", "PB-134"]
}
```

**Total Chunks di File Ini:** 35 chunks (12 domain × rata-rata 3 chunk)
**Estimated Embed Time:** ~2 menit (via text-embedding-004)
**Cache Location:** `server/data/kb-extended-embeddings.json`

---

**Note untuk Developer:**
- Chunk boleh di-split lebih halus kalau panjang >500 tokens
- Metadata `related_peribahasa` populate setelah baca file 03 (Peribahasa Database)
- Metadata `related_case_studies` populate dari BrandKu KB
- Test retrieval dengan 30-50 sample query sebelum submit
