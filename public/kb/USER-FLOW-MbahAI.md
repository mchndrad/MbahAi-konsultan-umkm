# USER FLOW — Mbah AI

**Versi:** 1.0
**Tanggal:** 5 September 2026
**Purpose:** Detail user journey dari awareness → onboarding → chat → PDF export → session return, dengan wireframe konseptual & interaction detail.

---

## 1. Overview Full Journey

```
[External Discovery] → [Landing] → [Onboarding Modal] → [Chat Main]
                                                             ↓
                              [Session Persist] ← [PDF Catatan Simbah]
                                     ↓
                              [Return Session]
```

**5 Screen Utama:**
1. Landing Page
2. Onboarding Modal (3 questions)
3. Chat Interface (main workspace)
4. Reflection PDF Preview
5. Return Session (returning user)

---

## 2. Screen-by-Screen Detail

---

### SCREEN 1: Landing Page

**Purpose:** Convert visitor → chat user dalam <30 detik.

**Layout Wireframe:**

```
┌──────────────────────────────────────────────────┐
│  [Logo Mbah AI]         [Tentang | Framework]    │  ← Nav bar (minimal)
├──────────────────────────────────────────────────┤
│                                                    │
│                                                    │
│              [3D FLOATING ORB]                     │
│         (gentle rotate, warm glow)                 │
│                                                    │
│                                                    │
│              Mbah AI                              │  ← H1 Fraunces 72px
│                                                    │
│  "Cah bagus, cah ayu — Simbah ana ngendi kene,   │  ← Jawa italic
│   mesti kanggo ngrungokake critamu."              │
│                                                    │
│  (Anak baik, anak cantik — Simbah selalu di sini, │  ← Translate lebih kecil
│   siap mendengar ceritamu.)                       │
│                                                    │
│                                                    │
│  Konsultan bisnis untuk UMKM Ekonomi Kreatif      │  ← Subtitle
│  Indonesia. Berpengalaman 50 tahun sebagai         │
│  perajin batik Solo & eksportir kerajinan.        │
│                                                    │
│                                                    │
│         ┌─────────────────────────────┐           │
│         │  🍵 Mulai Ngobrol dengan   │           │  ← CTA Primary
│         │      Mbah                    │           │     (terracotta)
│         └─────────────────────────────┘           │
│                                                    │
│         Gratis. Tanpa daftar.                     │  ← Trust signal
│                                                    │
├──────────────────────────────────────────────────┤
│                                                    │
│              Berlandaskan Wisdom Dari             │  ← Section 2
│                                                    │
│     [📚 32 Framework]  [🏆 32 Case Study]         │
│     [💬 200 Peribahasa] [🧠 10 Buku Pilar]        │
│                                                    │
│                                                    │
│    "Simbah paham buku marketing kelas dunia,      │
│     tapi menjelaskannya seperti bicara            │
│     sama cucu sendiri."                           │
│                                                    │
├──────────────────────────────────────────────────┤
│                                                    │
│              Cocok untuk Kamu Yang...             │  ← Section 3
│                                                    │
│    🍽️ Baru mulai bisnis kuliner                   │
│    👗 Punya brand fashion tapi sepi customer      │
│    🎨 Perajin kriya yang mau ekspor               │
│    ☕ Pemilik warung kopi yang stuck              │
│    ...dan semua UMKM ekraf lainnya                │
│                                                    │
├──────────────────────────────────────────────────┤
│                                                    │
│              Sederhana Untuk Dipakai              │  ← Section 4
│                                                    │
│    [1]  → [2]  → [3]  → [4]                       │
│    Cerita   Mbah     Dapat    Download            │
│    masalah  respond  advice   catatan             │
│                                                    │
├──────────────────────────────────────────────────┤
│                                                    │
│         ┌─────────────────────────────┐           │
│         │  🍵 Mulai Sekarang           │           │  ← CTA Repeat
│         └─────────────────────────────┘           │
│                                                    │
├──────────────────────────────────────────────────┤
│  Dibuat untuk Creative Technology Future Talent   │  ← Footer
│  Course 2026 (Kemenekraf × Google Career Cert)    │
│  © 2026 Chndra                                    │
└──────────────────────────────────────────────────┘
```

**Interactions:**
- 3D orb: `useFrame` rotate 0.3 rad/sec, subtle bobbing
- Scroll: parallax orb layer
- Hover CTA: scale 1.05, shadow lift, glow warm
- Click CTA → onboarding modal fade in

**Copy Persona Details:**
- Bahasa Jawa opening = cultural hook
- Translate = accessible untuk non-Jawa
- "Konsultan bisnis" = clear positioning
- "50 tahun pengalaman" = credibility

**Time Budget:** User scan dalam 15-30 detik → click CTA

---

### SCREEN 2: Onboarding Modal (3 Questions)

**Purpose:** Collect minimum context untuk personalisasi tanpa overwhelming.

**Layout Wireframe:**

```
┌──────────────────────────────────────────────────┐
│  [BACKDROP BLUR]                                  │
│                                                    │
│    ┌────────────────────────────────────────┐    │
│    │  Mbah kenalan sedikit dulu ya           │    │  ← Header friendly
│    │                                          │    │
│    │  [Progress: 1/3]                        │    │
│    │                                          │    │
│    │                                          │    │
│    │  Le/Ndhuk, jenengan iku dodolan opo?   │    │  ← Q1 Jawa
│    │  (Kamu jualan apa?)                    │    │  ← Translate
│    │                                          │    │
│    │  ┌────────────────────────────────┐    │    │
│    │  │ Pilih jenis usaha              ▼│   │    │  ← Dropdown
│    │  └────────────────────────────────┘    │    │
│    │                                          │    │
│    │  - Kuliner (F&B)                       │    │
│    │  - Fashion                             │    │
│    │  - Kriya & Kerajinan                   │    │
│    │  - Desain (visual, produk, interior)   │    │
│    │  - Fotografi & Videografi              │    │
│    │  - Aplikasi & Game                     │    │
│    │  - Musik                               │    │
│    │  - Film, TV & Radio                    │    │
│    │  - Penerbitan                          │    │
│    │  - Seni Rupa                           │    │
│    │  - Seni Pertunjukan                    │    │
│    │  - Arsitektur                          │    │
│    │  - Periklanan                          │    │
│    │  - Animasi                             │    │
│    │  - Lainnya                             │    │
│    │                                          │    │
│    │              [Lanjut →]                 │    │  ← Button
│    └────────────────────────────────────────┘    │
└──────────────────────────────────────────────────┘
```

**Q2 Layout:**
```
┌────────────────────────────────────────┐
│  [Progress: 2/3]                        │
│                                          │
│  Wis pinten tahun mlaku usahane?        │
│  (Sudah berapa tahun jalan usahanya?)   │
│                                          │
│  ┌────────┐ ┌──────────┐ ┌──────────┐  │
│  │ <1 thn │ │ 1-2 thn  │ │ 3-5 thn  │  │  ← Chip options
│  └────────┘ └──────────┘ └──────────┘  │
│  ┌──────────┐                            │
│  │  >5 thn  │                            │
│  └──────────┘                            │
│                                          │
│      [← Kembali]    [Lanjut →]         │
└────────────────────────────────────────┘
```

**Q3 Layout:**
```
┌────────────────────────────────────────┐
│  [Progress: 3/3]                        │
│                                          │
│  Sing paling ngeganjel ing atine        │
│  saiki opo?                             │
│  (Yang paling mengganjal di hati        │
│   sekarang apa?)                        │
│                                          │
│  ┌────────────────────────────────┐    │
│  │ Ceritain aja bebas, Mbah       │    │  ← Textarea
│  │ dengerin...                    │    │     placeholder
│  │                                 │    │
│  │                                 │    │
│  │                                 │    │
│  └────────────────────────────────┘    │
│                                          │
│  Contoh:                                 │
│  • Warung sepi terus                    │
│  • Bingung positioning brand            │
│  • Cashflow bermasalah                  │
│                                          │
│      [← Kembali]  [🍵 Mulai Ngobrol]   │
└────────────────────────────────────────┘
```

**Interactions:**
- Progress bar animate saat pindah step
- Dropdown Q1: warm colored, custom style
- Chip Q2: active state terracotta, inactive light gray
- Textarea Q3: auto-resize, min 3 baris
- Validation: tidak bisa "Lanjut" kalau field kosong
- Submit Q3 → simpan ke localStorage `mbahai_user_context` → transition ke chat screen

**Data Structure Saved:**
```json
{
  "user_context": {
    "business_type": "Kuliner",
    "business_age": "<1 tahun",
    "main_challenge": "Warung sepi terus padahal produk enak"
  },
  "onboarded_at": "2026-09-05T14:32:00Z"
}
```

**Time Budget:** 30-45 detik untuk selesai 3 questions.

---

### SCREEN 3: Chat Interface (Main Workspace)

**Purpose:** Primary interaction — user chat, Mbah respond dengan grounded advice.

**Layout Wireframe:**

```
┌──────────────────────────────────────────────────┐
│  ☰  Mbah AI              [🔄 Reset]  [⚙️ Settings]│  ← Top bar
├──────────────────────────────────────────────────┤
│                                                    │
│  ┌──[🧙‍♂️ Mbah AI]                                │
│  │                                                 │
│  │  Halo Ndhuk, Simbah wis maca critamu bab      │  ← First message
│  │  warung sing sepi. Sedih ya? Simbah paham.    │     dari Mbah
│  │                                                 │
│  │  Mbah dulu buka warung batik pertama tahun    │
│  │  1975 di Kauman Solo. 6 bulan pertama sepi    │
│  │  kayak kuburan malam Jumat...                 │
│  │                                                 │
│  │  Sadurunge Simbah kandhakke solusi, tolong    │
│  │  ceritakke sik: warung Ndhuk namanya apa?     │
│  │                                                 │
│  │  [📖 Positioning (Al Ries)] [🌾 Kopi Tuku]    │  ← Citation pills
│  └────────────────────────────────────────────────│
│                                                    │
│                            ┌──[🌸 Kamu]───────┐  │
│                            │ Warung kopi saya  │  │  ← User message
│                            │ namanya Kopi     │  │
│                            │ Sunyi, di Bandung │  │
│                            └───────────────────┘  │
│                                                    │
│  ┌──[🧙‍♂️ Mbah AI]                                │
│  │  [typing indicator: 3 dots animate...]        │  ← Streaming
│  └────────────────────────────────────────────────│
│                                                    │
│                                                    │
├──────────────────────────────────────────────────┤
│  💡 Simbah pikir kamu mungkin mau tanya juga:    │  ← Suggested chips
│                                                    │
│  [Ceritain kompetitor gua] [Cara branding?]      │
│  [Aku bingung mulai dari mana]                   │
│                                                    │
├──────────────────────────────────────────────────┤
│                                                    │
│  ┌────────────────────────────────────┐  ┌────┐  │
│  │ Ketik ceritamu ke Simbah...        │  │ 📤 │  │  ← Input
│  └────────────────────────────────────┘  └────┘  │
│                                                    │
└──────────────────────────────────────────────────┘
```

**Detail Elements:**

**Message Bubble Mbah:**
- Background: soft cream/warm white (#FDF6E3)
- Border: hairline coklat lembut (#D4A574 20% opacity)
- Font: Inter 15px, line-height 1.6
- Avatar: 🧙‍♂️ or ilustrasi flat Mbah 32x32px
- Padding: 16px 20px
- Max-width: 80% of chat container
- Timestamp: micro-text di bottom right, tampil on hover
- **Peribahasa dalam text:** Fraunces italic, deep sepia color

**Message Bubble User:**
- Background: warm terracotta (#C1440E)
- Text: putih (#FFFFFF)
- Font: Inter 15px
- Align: right
- Border-radius: 20px 20px 4px 20px (chat bubble style)

**Citation Pill:**
- Position: bottom of Mbah bubble, inline
- Style: rounded chip, 12px font, hover shows tooltip
- 📖 Green sage bg (#87A96B 15% opacity) → untuk buku framework
- 🌾 Terracotta bg (#C1440E 15% opacity) → untuk case study
- 💬 Purple soft (#8B7EC8 15%) → untuk peribahasa
- Click → modal munculin excerpt lengkap dari source

**Loading State (Cinematic):**
```
┌──[🧙‍♂️ Mbah AI]────────────────┐
│                                  │
│    [3D kartu kitab flip anim]    │
│                                  │
│    ✨ Simbah lagi buka catatan  │
│       lama tentang positioning...│
│                                  │
└──────────────────────────────────┘
```

Text rotasi setiap 2 detik:
- "Simbah lagi mikir..."
- "Simbah nyari catatan lama..."
- "Simbah inget cerita dulu..."
- "Simbah lagi meracik jawaban..."

**Input Box:**
- Background: pure white
- Border: 1px light gray, focus state terracotta
- Padding: 12px 16px
- Auto-resize saat text panjang (max 4 baris)
- Placeholder rotasi: "Ceritain apa yang lagi mengganjal...", "Tanya Simbah tentang bisnismu...", "Cerita masalah warungmu..."
- Send button: 📤 icon, terracotta bg saat text ada
- Enter untuk send, Shift+Enter untuk newline

**Suggested Chips (Above Input):**
- Muncul setelah setiap response Mbah
- 3 chip pertanyaan follow-up smart
- Generated by AI berdasarkan context
- Click → auto-fill input + auto-send
- Style: rounded pill, terracotta outline, hover fill

**Top Bar:**
- Logo Mbah AI + tagline mini
- Reset button (dengan konfirmasi)
- Settings icon (untuk toggle language mode)

**Scroll Behavior:**
- Auto-scroll ke bottom saat message baru masuk
- Preserve scroll position kalau user scroll up
- "Jump to latest" button muncul kalau user scroll up

**Empty State (First Time):**
```
Message pertama otomatis dari Mbah berdasarkan onboarding:

"Halo [Le/Ndhuk berdasarkan detected gender].
Simbah baca kamu punya [business_type] yang [business_age] jalan,
dan sekarang [main_challenge].

Sedih/frustrasi ya? Simbah paham.

Sebelum Simbah kandhakke solusi, boleh tolong ceritakke sedikit
lebih detail: [pertanyaan clarifying yang spesifik]"
```

---

### SCREEN 4: "Catatan dari Simbah" — PDF Preview & Download

**Purpose:** Deliver tangible artifact yang bisa di-print/share.

**Trigger:** Setelah 5+ user messages, muncul CTA subtle di chat:

```
┌──[🧙‍♂️ Mbah AI]────────────────────────┐
│                                          │
│  ...[response terakhir Mbah]...          │
│                                          │
│  ─────────────────────────────           │
│                                          │
│  Ndhuk, wis 30 menit ngobrol.           │  ← Soft CTA
│  Mau Simbah rangkum obrolan kita        │
│  jadi catatan? Bisa kamu print &        │
│  simpan di warung sebagai reminder.     │
│                                          │
│         ┌─────────────────────────┐     │
│         │ 📔 Buatkan Catatan      │     │  ← Button
│         │    Simbah                │     │
│         └─────────────────────────┘     │
└──────────────────────────────────────────┘
```

**Preview Modal (setelah klik):**

```
┌──────────────────────────────────────────────────┐
│  [3D paper fold animation loading — 8 detik]     │
│                                                    │
│  ✨ Simbah lagi meracik catatan...              │
│  📝 Menyusun struktur cerita kita...            │
│  🖨️  Format untuk siap dibaca...                │
│                                                    │
└──────────────────────────────────────────────────┘
```

**PDF Preview (setelah generate):**

```
┌──────────────────────────────────────────────────┐
│  [X Close]                          [Full Screen]│
├──────────────────────────────────────────────────┤
│                                                    │
│  ┌───────────────────────────────────────────┐  │
│  │                                              │  │
│  │   📔 Catatan Simbah untuk Sarah             │  │  ← PDF preview
│  │   Warung Kopi Sunyi, Bandung                │  │     (skala responsif)
│  │   Kamis, 5 September 2026                   │  │
│  │                                              │  │
│  │   ─────────────────────────────             │  │
│  │                                              │  │
│  │   DUDUK PERSOALANE (Masalah Utama):        │  │
│  │   Warung kopi baru 3 bulan, sepi           │  │
│  │   customer, kompetitor besar dekat.        │  │
│  │                                              │  │
│  │   APA SING SIMBAH RUNGOKAKE:               │  │
│  │   1. Warung Sarah belum punya "aroma"      │  │
│  │      khas yang membedakan                  │  │
│  │   2. Fokus di "produk apa"                 │  │
│  │      belum "customer siapa"                │  │
│  │                                              │  │
│  │   PANGERTEN SAKA SIMBAH:                   │  │
│  │   📖 Positioning (Al Ries, Bab 1.3)        │  │
│  │   📖 Start with Why (Simon Sinek)          │  │
│  │   🌾 Case: Kopi Tuku                       │  │
│  │                                              │  │
│  │   PITUTUR SIMBAH (3 Aksi 30 Hari):         │  │
│  │   1. Ubah bio IG jadi 1 kalimat spesifik  │  │
│  │   2. Post konten TENTANG pekerja remote    │  │
│  │   3. Tambah stopkontak & WiFi kencang     │  │
│  │                                              │  │
│  │   PENGET SIMBAH:                           │  │
│  │   "Ojo kesusu. Sing telaten mesti          │  │
│  │    nyandhak."                              │  │
│  │                                              │  │
│  │              🍵 Salam,                      │  │
│  │              Simbah AI                     │  │
│  │                                              │  │
│  └───────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────┐  ┌─────────────────┐    │
│  │  📥 Download PDF     │  │  📤 Bagikan     │    │
│  └─────────────────────┘  └─────────────────┘    │
│                                                    │
│  ┌─────────────────────────────────────┐         │
│  │  🔁 Cetak untuk Ditempel di Warung  │         │
│  └─────────────────────────────────────┘         │
│                                                    │
└──────────────────────────────────────────────────┘
```

**Actions:**
- Download PDF: trigger jsPDF export
- Bagikan: navigator.share API (mobile) atau copy shareable link (desktop)
- Cetak: window.print() dengan print CSS custom

**PDF Design:**
- Format A4 portrait
- Margin 2cm
- Warna: warm sepia (#F5E6D3) background subtle, deep brown text (#3D2914)
- Font: Fraunces untuk heading, Inter untuk body
- Ilustrasi kecil Mbah di footer

---

### SCREEN 5: Return Session (Returning User)

**Purpose:** User yang balik masuk platform bisa lanjut atau start fresh.

**Trigger:** Detect localStorage `mbahai_session` ada + `chat_history` > 0.

**Layout:**

```
┌──────────────────────────────────────────────────┐
│                                                    │
│              [3D orb sedikit lebih warm]          │
│                                                    │
│              Selamat datang kembali, Ndhuk        │  ← Personalized
│                                                    │
│                                                    │
│  Terakhir kita ngobrol tentang:                   │
│  "Warung sepi 3 bulan"                            │
│  [Kamis, 5 September 2026 - 14:32]                │
│                                                    │
│                                                    │
│  ┌─────────────────────────────────────┐         │
│  │  💬 Lanjut Obrolan yang Kemarin     │         │  ← CTA 1
│  └─────────────────────────────────────┘         │
│                                                    │
│  ┌─────────────────────────────────────┐         │
│  │  🆕 Mulai Cerita Baru               │         │  ← CTA 2
│  └─────────────────────────────────────┘         │
│                                                    │
│  ┌─────────────────────────────────────┐         │
│  │  📔 Lihat Catatan Simbah Kemarin    │         │  ← CTA 3
│  └─────────────────────────────────────┘         │
│                                                    │
│                                                    │
│  ─────────────────────────────────────           │
│                                                    │
│  [🗑 Hapus data & mulai bersih]                  │  ← Small text link
│                                                    │
└──────────────────────────────────────────────────┘
```

**Logic:**
- CTA 1 → resume chat, load history
- CTA 2 → keep user context, clear chat_history, start fresh
- CTA 3 → jump ke saved PDF preview
- Delete → clear all localStorage, redirect ke landing

---

## 3. Interaction Patterns & Micro-Interactions

### Loading States (Cinematic Not Boring)

**Chat Response Loading:**
- 3 typing dots animate (bouncing sequence)
- Setelah 2 detik, replace dengan 3D kartu flip
- Text rotasi: "Simbah lagi mikir..." → "Simbah nyari catatan..." → dst
- Max 8 detik loading, kalau lebih → error state

**PDF Generation Loading:**
- 3D paper fold animation
- Progress bar dengan status text
- 3-5 detik ideal

**Onboarding Transition:**
- Slide + fade untuk step change
- Progress bar filling smooth

### Error States (Graceful)

**Gemini API Error:**
```
┌──[🧙‍♂️ Mbah AI]───────────────────────┐
│  Wah, Simbah sepertinya lagi ada       │
│  gangguan. Coba tanya lagi ya, Ndhuk.  │
│                                          │
│  [🔄 Coba Lagi]                         │
└──────────────────────────────────────────┘
```

**Offline:**
```
┌────────────────────────────────────────┐
│  📡 Kayaknya lagi mati internet, Le.   │
│  Cek koneksi dulu ya.                   │
└────────────────────────────────────────┘
```

**Rate Limit:**
```
┌────────────────────────────────────────┐
│  Wah, Simbah kecapean sedikit.         │
│  Coba tunggu 1 menit lalu tanya lagi.  │
└────────────────────────────────────────┘
```

### Notifications & Feedback

- **PDF Downloaded:** toast bawah "✅ Catatan Simbah tersimpan!"
- **Message Copied:** toast "📋 Sudah dicopy!"
- **Reset Confirmed:** toast "🍵 Session baru dimulai"

### Keyboard Shortcuts (Desktop)

- `Enter` → send message
- `Shift + Enter` → new line
- `Cmd/Ctrl + K` → focus search di chat history
- `Cmd/Ctrl + N` → new session (dengan konfirm)
- `Esc` → close modal

### Mobile-Specific

- Bottom safe area untuk input box (avoid iOS notch)
- Swipe left/right di message untuk copy/share
- Long press message → context menu
- Pull down to refresh (di return session screen)

---

## 4. State Transitions

### Session States

```
[No Session]
    ↓ (visit landing)
[Landing]
    ↓ (click CTA)
[Onboarding Q1]
    ↓ (submit Q1)
[Onboarding Q2]
    ↓ (submit Q2)
[Onboarding Q3]
    ↓ (submit Q3)
[Chat — First Message from Mbah]
    ↓ (user chat)
[Chat — Active Conversation]
    ↓ (5+ exchanges)
[Chat — PDF CTA visible]
    ↓ (click PDF CTA)
[PDF Preview & Download]
    ↓ (back to chat OR close)
[Chat — Continue]

[User closes browser]
    ↓ (localStorage persists)
    
[User revisits]
    ↓ (detect existing session)
[Return Session Screen]
    ↓ (click "Lanjut")
[Chat — Restored State]
```

### Data Persistence

**Saved to localStorage:**
- `mbahai_user_context` — onboarding answers
- `mbahai_chat_history` — array of {role, content, timestamp, citations}
- `mbahai_pdf_generated` — last PDF timestamp + content
- `mbahai_settings` — language mode, theme preferences

**Session Cleared When:**
- User clicks "Hapus data & mulai bersih"
- Browser localStorage cleared manually
- localStorage full (fallback: keep last 50 messages only)

---

## 5. Empty States & Edge Cases

### Very First Time User (No Data)

**Landing:** Full hero + CTA prominent.

**Onboarding:** All 3 questions required.

### User Abandoned Mid-Onboarding

**Detection:** Q1/Q2 filled tapi Q3 kosong, kembali ke landing.

**Behavior:** Kembali ke onboarding step yang belum selesai, TIDAK reset dari awal.

### User Refresh Tengah-Tengah Chat

**Detection:** `mbahai_chat_history` ada, tapi bukan return-visit long-term.

**Behavior:** Chat lanjut normal, tidak show "return session" screen.

### User Kirim Message Kosong

**Handle:** Send button disabled kalau input empty. Enter tanpa text = no action.

### User Kirim Message Sangat Panjang (>2000 char)

**Handle:** Show warning "Coba pendek dulu, Le. Ceritanya jangan sekaligus, biar Simbah bisa cerna."

### User Spam Send

**Handle:** Rate limit 5 messages / 30 detik. Show gentle message "Sabar dulu ya, Simbah lagi cerna cerita sebelumnya."

---

## 6. Accessibility Considerations

**Keyboard Navigation:**
- Tab order logical: skip to main → chat area → input → send
- Focus visible dengan warm outline
- Enter/Space untuk activate buttons

**Screen Reader:**
- ARIA labels di semua interactive elements
- Live region untuk chat messages baru
- Alt text di ilustrasi Mbah

**Color Contrast:**
- Text on background: minimum 4.5:1 (WCAG AA)
- Interactive elements: focus state jelas

**Font Size:**
- Base 16px, bisa scale up dari browser settings
- Tidak fix pixel di text

**Motion:**
- Respect `prefers-reduced-motion` — disable 3D animation, simplify transitions

---

## 7. Analytics Events (Optional untuk Iterasi Post-Launch)

**Events yang worth track:**
- `landing_viewed` — page load
- `cta_clicked` — main CTA
- `onboarding_completed` — with metadata (business_type)
- `first_message_sent` — user first chat
- `pdf_generated` — with metadata (message count)
- `pdf_downloaded`
- `session_returned` — return visitor
- `error_encountered` — with error type

**Note:** Untuk MVP, skip analytics. Fokus di build. Post-launch bisa add Google Analytics free tier.

---

**END OF USER FLOW**

Next: DESIGN-MbahAI.md untuk visual system detail.
