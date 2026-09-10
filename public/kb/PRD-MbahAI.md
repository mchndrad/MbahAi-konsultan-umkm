# PRD — Mbah AI

**Product:** Mbah AI — AI Business Consultant untuk UMKM Ekraf Indonesia
**Versi:** 1.0
**Tanggal:** 5 September 2026
**Author:** Muhamad Chandra (Chndra)
**Submission:** Creative Technology Future Talent Course 2026 (Kemenekraf × Google Career Certificates)
**Track:** AI — Topik 3 (AI Agent/Chatbot dengan Knowledge Base)

---

## 1. Executive Summary

**Mbah AI adalah chatbot konsultan bisnis untuk UMKM Ekonomi Kreatif Indonesia dengan persona "Mbah Wignyo" — kakek Jawa bijak 72 tahun.** Owner UMKM curhat masalah bisnis mereka lewat chat; Mbah AI merespons dengan advice grounded ke knowledge base marketing framework kelas dunia + case study UMKM Indonesia, dibungkus dengan peribahasa, cerita pengalaman, dan analogi hangat.

**Value Proposition:**
- Solve masalah UMKM tidak punya akses konsultan bisnis (biaya konsultan Rp 5-50jt)
- Deliver framework marketing serius dengan cara yang culturally resonant (persona kakek Jawa)
- 100% Bahasa Indonesia + sentuhan Jawa untuk trust deeper
- Grounded ke KB 300+ halaman → tidak halusinasi

**Target:** Lolos Top 30 finalis, kualifikasi offline workshop.

---

## 2. Problem Statement

### Masalah yang Diselesaikan

**Primary Problem:**
UMKM ekraf Indonesia stuck di skala kecil karena tidak punya akses ke mentor bisnis berkualitas. Konsultan mahal (Rp 5-50jt), buku bisnis intimidating, course online generic tidak konteks Indonesia.

**Data Riil (dari riset publik 2025-2026):**
- 65 juta UMKM di Indonesia, 60% PDB nasional
- 72% UMKM masih pakai WhatsApp untuk komunikasi tanpa strategi
- Hanya 24.9% UMKM yang terhubung ke ekosistem digital
- Cuma 32% UMKM ekraf yang punya NIB (legal)
- Owner UMKM habiskan 60+ jam/minggu solo, tidak ada bandwidth untuk belajar strategi

**Ripple Effect Problem:**
- Positioning brand lemah → susah differentiate dari kompetitor
- Marketing berdasarkan feeling → boros budget, low ROI
- Financial illiteracy → merasa untung padahal rugi
- Legal awareness rendah → kena masalah regulasi
- Burnout owner → business collapse

### Kenapa Sekarang?
- Gemini API free tier memungkinkan RAG chatbot berkualitas dijalankan gratis
- Kemenekraf punya program dukungan UMKM ekraf yang serius
- Post-pandemic momentum digitalisasi UMKM
- AI penetration di Indonesia meningkat cepat

---

## 3. Target Audience

### Primary Persona: Bu Sarah (Small F&B Owner)
- **Usia:** 32 tahun
- **Bisnis:** Warung kopi 3 bulan di Bandung
- **Pain:** Sepi customer, tidak tahu kenapa
- **Tech Skill:** Aktif IG, punya HP Android
- **Motivation:** Ingin cerita ke seseorang yang paham bisnis + kasih arahan konkret
- **Behavior:** Buka platform di malam hari, saat anak-anak sudah tidur

### Secondary Persona: Mas Budi (Kriya Artisan)
- **Usia:** 45 tahun
- **Bisnis:** Anyaman bambu Tasikmalaya, 5 tahun jalan
- **Pain:** Mau ekspor tapi tidak tahu mulai dari mana
- **Tech Skill:** Basic, sering minta bantuan anak untuk hal teknis
- **Motivation:** Ingin scale, tapi butuh guidance yang tidak intimidating

### Tertiary Persona: Ndhuk Sekar (Young Fashion Designer)
- **Usia:** 26 tahun
- **Bisnis:** Fashion sustainable, baru launch
- **Pain:** Bingung positioning, kompetitor banyak
- **Tech Skill:** Native digital
- **Motivation:** Ingin dapat framework marketing yang applicable

---

## 4. Product Goals

### Business Goals
1. **Lolos Top 30** finalis Creative Technology Future Talent 2026
2. **Impress juri Topik 3** dengan KB depth + persona uniqueness
3. **Showcase multi-layer AI** (RAG + persona engineering + fallback logic)

### User Goals
1. UMKM dapat **advice yang genuinely helpful** dalam 60 detik
2. UMKM feel **didengar & dipahami** (bukan dikasih generic advice)
3. UMKM dapat **actionable next steps** yang bisa dilakukan minggu ini
4. UMKM bisa **share catatan konsultasi** dalam bentuk PDF

### Technical Goals
1. **Zero hallucination** — semua framework citation grounded ke KB
2. **<3 detik** first-token response
3. **100% Bahasa Indonesia** dengan aksen Jawa natural
4. **Free tier feasible** — semua pakai Gemini free tier

---

## 5. Success Metrics

### Kompetisi (Primary)
- ✅ Submitted sebelum deadline 9 September 2026
- ✅ Live demo URL berfungsi
- ✅ Video demo 3 menit compelling
- ✅ Deck 5-slide clean
- 🎯 Top 30 finalis (target 80-85% peluang)

### Product (Secondary — untuk demo & testing)
- **First-time users bisa dapat first response Mbah dalam <90 detik** dari landing
- **Persona consistency 100%** — Mbah selalu in-character
- **Citation accuracy 100%** — tidak pernah cite yang tidak ada di KB
- **PDF generation <10 detik**
- **Session persistence** — user bisa lanjut chat setelah refresh

### Post-Submission (kalau lolos Top 30)
- 100 UMKM real coba tool dalam 2 minggu
- Testimoni dari 5 UMKM
- Feature at Kemenekraf event

---

## 6. Scope & Features

### 🎯 P0 (WAJIB — Core Product)

#### F1: Landing Page
- Hero besar dengan 3D orb animation
- Persona teaser (kalimat Jawa + translate)
- Big CTA "Mulai Ngobrol dengan Mbah"
- Section framework backing (10 buku, 32 framework, 32 case study)
- Footer: attribution + credits

#### F2: Onboarding Modal (3 pertanyaan)
- Q1: Jenis usaha (dropdown 17 subsektor ekraf)
- Q2: Lama usaha (chip: <1th / 1-2th / 3-5th / >5th)
- Q3: Tantangan utama (textarea)
- Submit → simpan ke localStorage → masuk chat

#### F3: Chat Interface
- Bubble style: Mbah (cream/warm) vs User (terracotta)
- Streaming response
- Citation pill di bawah response Mbah (buku 📖 / case study 🌾)
- Peribahasa italic Fraunces
- Suggested chip 3 questions di atas input
- Input box dengan send button
- Loading state cinematic (bukan spinner)

#### F4: RAG Retrieval (Backend Logic)
- Query embedding via text-embedding-004
- Cosine similarity search di 300+ chunks KB
- 4-tier confidence system (HIGH → MEDIUM → LOW → OFF-TOPIC)
- Fallback ke Gemini raw kalau KB tidak cover

#### F5: Session Persistence
- Chat history simpan di localStorage per browser
- User context (onboarding) tersimpan
- Reset session button di settings

### 🎁 P1 (KILLER — Kalau Ada Waktu)

#### F6: "Catatan dari Simbah" PDF Generator
- Muncul setelah 5+ exchanges
- Klik → generate PDF 1-halaman
- Isi: masalah, insight Mbah, framework used, 3 aksi 30 hari, peribahasa penutup
- Design: warm sepia, serif, print-friendly
- Download button

#### F7: 3D Element Interactive
- Landing: floating orb yang gentle rotate + parallax on scroll
- Chat loading: 3D kartu "kitab" flip animation
- PDF generation: paper fold animation

#### F8: Persona Language Toggle
- Setting: "Jawa Kental" / "Balanced" / "Indonesia Aja"
- Adjust ratio Bahasa Jawa di response

### ❌ P2 (SKIP untuk MVP)
- Voice input
- Multi-language (English)
- Multi-user (login/register)
- Backend database
- Sharing conversation link
- Analytics dashboard
- Payment / premium features

---

## 7. Non-Functional Requirements

### Performance
- First Contentful Paint (FCP): <1.5s
- Largest Contentful Paint (LCP): <2.5s
- Time to Interactive (TTI): <3s
- First AI response: <3s streaming start

### Compatibility
- Mobile-first responsive (screen 320px+)
- Browser: Chrome, Firefox, Safari, Edge (latest 2 versions)
- OS: Android 8+, iOS 12+, macOS/Windows/Linux

### Accessibility
- WCAG 2.1 AA compliant (basic)
- Keyboard navigation
- Screen reader friendly
- Font size adjustable

### Security & Privacy
- No PII collection (nama optional)
- No backend storage
- localStorage only (user controls their data)
- API key protected (not exposed di client bundle)

### Reliability
- Graceful error handling (tidak show technical error)
- Fallback message kalau Gemini API down
- Offline detection

---

## 8. Constraints & Assumptions

### Constraints
- **Budget:** Rp 0 (semua free tier)
- **Timeline:** 4 hari build + 1 hari QA (5 Sept - 9 Sept)
- **Model:** Gemini 1.5 Flash (free tier) + text-embedding-004
- **Deploy:** Google AI Studio hosting
- **Team:** Solo developer (Chndra)

### Assumptions
- Gemini API free tier tetap available selama kompetisi
- Juri akses tool via desktop atau mobile (harus responsive)
- User punya internet stable (tidak ada offline mode)
- KB embeddings di-generate sekali di build time, simpan sebagai JSON static

---

## 9. Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Gemini free tier rate limit hit saat demo | HIGH | Cache response common questions, pakai backup API key |
| Persona break character di long conversation | MEDIUM | Re-inject system prompt setiap 5 messages |
| KB retrieval accuracy rendah | HIGH | Test 30+ queries sebelum submit, tuning chunk size |
| Bahasa Jawa terasa "alien" untuk juri non-Jawa | MEDIUM | Toggle language mode + auto-translate |
| Deploy AI Studio ada bug last minute | HIGH | Backup: deploy manual ke Vercel gratis |
| Ilustrasi 3D loading lambat | MEDIUM | Lazy load 3D, optimize model size |

---

## 10. Timeline

### Hari 1 — Setup + Core Chat (5 September)
- Setup AI Studio project
- Landing page + onboarding modal
- Basic chat interface
- Gemini API integration

### Hari 2 — RAG + Persona (6 September)
- Upload 8 KB files
- RAG pipeline (embedding + cosine similarity)
- Persona system prompt tuning
- Test 30 sample queries

### Hari 3 — Polish + Killer Features (7 September)
- 3D elements (landing orb, loading animation)
- PDF "Catatan Simbah" generator
- Suggested chips
- Session persistence

### Hari 4 — Demo + Submission Prep (8 September)
- Record video demo 3 menit
- Deck 5-slide
- README GitHub
- Final QA di 3 browser + mobile
- Deploy production

### Hari 5 — Submit + Buffer (9 September)
- Final test end-to-end
- Submit ke Kemenekraf
- LinkedIn post journey

---

## 11. Deliverables

### For Submission
1. **Live URL** — mbahai.aistudio.app (or Vercel backup)
2. **GitHub Repository** — dengan README lengkap
3. **Video Demo 3 menit** — cinematic walkthrough
4. **Deck 5-slide** — problem, solution, demo, framework depth, impact
5. **Sample PDF "Catatan Simbah"** — 3 sample dari 3 UMKM kategori berbeda

### Documentation (Internal)
1. PRD-MbahAI.md (this document)
2. USER-FLOW-MbahAI.md
3. DESIGN-MbahAI.md
4. TECH-SPEC-MbahAI.md
5. TEST-PLAN-MbahAI.md
6. CONTEXT-Room1.md (Master Prompt AI Studio)
7. Knowledge Base files (01-07 + BrandKu KB)

---

## 12. Open Questions

- [ ] Perlu validasi dari 1-2 UMKM riil untuk testimoni? (bonus points juri)
- [ ] Deploy AI Studio atau Vercel? (pilih yang lebih stable)
- [ ] Backup API key kalau primary hit rate limit?
- [ ] Ilustrasi Mbah: buat sendiri atau pakai library free?

---

**END OF PRD**

Next: USER-FLOW-MbahAI.md untuk journey detail per screen.
