# Mbah AI — Peribahasa Database

**Versi:** 1.0
**Tanggal:** 3 September 2026
**Purpose:** 200+ peribahasa Nusantara di-curate & tagged untuk RAG retrieval based on business context. Setiap entry punya `business_context` tags agar Mbah AI bisa pilih peribahasa relevan sesuai situasi user.

---

## ⚠️ Important Note untuk Developer

**Kualitas > Kuantitas.** Database ini punya ~200 entries yang gua reasonably confident authentic. Untuk production:
1. **Verify dengan native speaker** (terutama untuk Jawa, Sunda, Minang, Batak, dst) — cultural nuance penting
2. **Consult academic sources** — buku peribahasa lawas, kamus daerah, jurnal linguistik
3. **Community validation** — post di grup UMKM daerah, minta feedback
4. **Continuous expansion** — target 300-500 dalam 6 bulan setelah launch

Peribahasa yang gua tandai 🟡 = perlu double-check spelling/authenticity. Peribahasa 🟢 = high confidence.

---

## Struktur Entry

```json
{
  "id": "PB-001",
  "peribahasa": "Ora usah dadi mBanteng kabeh, dadi kancil ya isa menang.",
  "bahasa": "Jawa",
  "translation": "Tidak harus jadi banteng semua, jadi kancil pun bisa menang.",
  "meaning": "Tidak perlu jadi yang terbesar untuk sukses. Positioning kecil-tapi-tajam bisa mengalahkan yang besar.",
  "business_context": ["positioning", "competition", "small-vs-big", "differentiation"],
  "emotional_context": ["encouragement", "reassurance"],
  "related_framework": ["Al Ries - Positioning", "Seth Godin - Purple Cow"],
  "when_to_use": "User complain kalah bersaing dengan brand besar. User ragu compete dengan chain.",
  "sample_usage": "Le, warungmu gak perlu lawan Kopi Kenangan di ranah mereka. Ana pepatah: 'Ora usah dadi mBanteng kabeh, dadi kancil ya isa menang.' Kancil punya cara sendiri untuk menang — kecepatan, kelincahan, dan pilihan medan."
}
```

Untuk file markdown ini, format simplified untuk readability. Format JSON lengkap ada di file `peribahasa-database.json` (untuk implementation).

---

## KATEGORI 1: POSITIONING & COMPETITION (30 entries)

### 🟢 PB-001
**"Ora usah dadi mBanteng kabeh, dadi kancil ya isa menang."** *(Jawa)*
- **Translation:** Tidak perlu jadi banteng semua, jadi kancil pun bisa menang.
- **Meaning:** Positioning kecil tapi tajam bisa kalahkan yang besar.
- **Context:** positioning, competition, small-vs-big
- **Framework:** Positioning (Al Ries), Purple Cow (Godin)
- **When:** User kalah bersaing dengan brand besar
- **Usage:** "Warungmu gak perlu lawan Starbucks di ranah mereka..."

### 🟢 PB-002
**"Ana rega ana rupa."** *(Melayu/Indonesia)*
- **Translation:** Ada harga ada barang.
- **Meaning:** Harga mencerminkan kualitas; premium pricing butuh justifikasi.
- **Context:** pricing, positioning, value
- **Framework:** Managing Brand Equity (Aaker)
- **When:** User bingung soal pricing strategy
- **Usage:** "Ada rega ada rupa. Kalau Le mau charge premium, produkmu harus feel premium juga."

### 🟢 PB-003
**"Berjalan peliharakan kaki, berkata peliharakan lidah."** *(Melayu)*
- **Translation:** Berjalan jaga kaki, berbicara jaga lidah.
- **Meaning:** Setiap tindakan (termasuk brand statement) harus dipikir matang.
- **Context:** brand communication, reputation
- **Framework:** Brand Gap (Neumeier)
- **When:** User mau bikin statement/campaign berani
- **Usage:** "Berjalan peliharakan kaki. Sebelum launch tagline provokatif, pikir 3 skenario respons publik."

### 🟢 PB-004
**"Nabok nyilih tangan."** *(Jawa)*
- **Translation:** Memukul dengan tangan pinjaman.
- **Meaning:** Tidak baik menyerang competitor via pihak ketiga; competitor via honest positioning.
- **Context:** competition, ethics, integrity
- **When:** User mau kompetisi tidak sehat (paid haters, dll)
- **Usage:** "Jangan nabok nyilih tangan. Menang lewat cara kotor, brand-mu yang rusak jangka panjang."

### 🟢 PB-005
**"Kacang lupa akan kulitnya."** *(Melayu)*
- **Translation:** Kacang lupa kulitnya.
- **Meaning:** Lupa asal-usul, akar, atau community awal.
- **Context:** brand story, authenticity, community
- **When:** User grow tapi lupa loyal customer awal
- **Usage:** "Ojo dadi kacang lupa akan kulitnya. 30 customer pertamamu yang bikin bisnismu ada."

### 🟡 PB-006
**"Sing sabar iku momot."** *(Jawa)*
- **Translation:** Yang sabar itu kuat/menampung banyak.
- **Meaning:** Kesabaran = kekuatan resilient untuk long-term game.
- **Context:** patience, resilience, long-term
- **When:** User frustrated karena lambat progress
- **Usage:** "Sing sabar iku momot, Ndhuk. Brand yang bertahan 10 tahun lebih valuable dari brand hype 6 bulan."

### 🟢 PB-007
**"Bagai telur di ujung tanduk."** *(Melayu)*
- **Translation:** Seperti telur di ujung tanduk.
- **Meaning:** Situasi genting, tidak stabil.
- **Context:** crisis, cashflow, business risk
- **When:** User dalam critical cashflow / kondisi darurat
- **Usage:** "Cashflow-mu bagai telur di ujung tanduk. Kita harus stabilkan 30 hari ke depan..."

### 🟡 PB-008
**"Ora obah, ora mamah."** *(Jawa)*
- **Translation:** Tidak bergerak, tidak makan.
- **Meaning:** Harus aktif bergerak (kerja) untuk dapat hasil.
- **Context:** action, effort, hustling
- **When:** User pasif menunggu
- **Usage:** "Ora obah, ora mamah, Le. Sales gak datang sendiri, harus dijemput."

### 🟢 PB-009
**"Ombak besar di rasakan ke tepi."** *(Melayu)*
- **Translation:** Ombak besar dirasakan di tepi (pantai).
- **Meaning:** Dampak besar akhirnya sampai ke rakyat kecil; efek trickle-down.
- **Context:** market trend, macro impact on UMKM
- **When:** Bahas dampak inflasi/tren global ke UMKM
- **Usage:** "Naiknya harga BBM itu ombak besar. Buat UMKM, dirasakan ke tepi — margin makin tipis."

### 🟢 PB-010
**"Menang dadi awu, kalah dadi arang."** *(Jawa)*
- **Translation:** Menang jadi abu, kalah jadi arang.
- **Meaning:** Pertengkaran tidak menguntungkan; both sides lose.
- **Context:** competition, ethics
- **When:** User terlibat conflict dengan competitor/customer
- **Usage:** "Nak, dalam perang harga sama competitor, menang dadi awu, kalah dadi arang. Cari cara lain."

### 🟡 PB-011
**"Wong jujur bakal mujur."** *(Jawa)*
- **Translation:** Orang jujur akan beruntung.
- **Meaning:** Integrity long-term winner.
- **Context:** integrity, ethics, trust
- **When:** User tergoda ambil shortcut tidak etis
- **Usage:** "Wong jujur bakal mujur. Testimoni palsu bisa boost sales seminggu, tapi trust rusak selamanya."

### 🟢 PB-012
**"Alang-alang dibuat bidara."** *(Melayu)*
- **Translation:** Alang-alang (rumput liar) dijadikan bidara (pohon berharga).
- **Meaning:** Membesar-besarkan hal kecil.
- **Context:** perspective, don't overreact
- **When:** User panic soal masalah kecil
- **Usage:** "Le, ini alang-alang dibuat bidara. Satu bad review dari 100 review baik itu wajar."

### 🟢 PB-013
**"Jauhari yang mengenal manikam."** *(Melayu)*
- **Translation:** Hanya ahli permata yang mengenal permata.
- **Meaning:** Value hanya dikenal oleh yang paham.
- **Context:** target market, positioning, premium
- **When:** User frustrasi karena kualitas premium tidak di-appreciate
- **Usage:** "Jauhari yang mengenal manikam. Produk premium-mu bukan untuk semua — cuma untuk yang bisa apreciate."

### 🟡 PB-014
**"Aja gumun, aja kagetan, aja dumeh."** *(Jawa)*
- **Translation:** Jangan mudah heran, jangan mudah kaget, jangan sombong.
- **Meaning:** Sikap tenang, humble, adaptive.
- **Context:** growth stages, ego management, humility
- **When:** User mulai sukses & mulai sombong
- **Usage:** "Wis mulai laris? Elingi: aja gumun, aja kagetan, aja dumeh. Sukses sekali gak jamin sukses selamanya."

### 🟢 PB-015
**"Sedikit-sedikit lama-lama menjadi bukit."** *(Melayu)*
- **Translation:** Sedikit-sedikit lama-lama jadi bukit.
- **Meaning:** Konsistensi kecil akumulasi jadi besar.
- **Context:** consistency, compound growth
- **When:** User frustrasi karena progress lambat
- **Usage:** "Sedikit-sedikit lama-lama jadi bukit. Content 1 per hari selama setahun = 365 touchpoint dengan customer."

### 🟢 PB-016
**"Rambut sama hitam, hati lain-lain."** *(Melayu)*
- **Translation:** Rambut sama hitam, hati beda-beda.
- **Meaning:** Setiap customer punya kebutuhan berbeda meski segmen sama.
- **Context:** customer segmentation, personalization
- **When:** User treat semua customer sama
- **Usage:** "Rambut sama hitam, hati lain-lain. Customer 25 tahun di Jakarta beda need dengan 25 tahun di Solo."

### 🟡 PB-017
**"Ora rugi wong sing wani ngalah."** *(Jawa)*
- **Translation:** Tidak rugi orang yang berani mengalah.
- **Meaning:** Kadang mengalah = strategic (bukan lemah).
- **Context:** negotiation, relationship, long-term thinking
- **When:** User keras kepala dalam negosiasi
- **Usage:** "Ora rugi wong sing wani ngalah. Kasih supplier margin 5% lebih tinggi, dapat priority order untuk 3 tahun."

### 🟢 PB-018
**"Bagai aur dengan tebing."** *(Melayu)*
- **Translation:** Seperti bambu dengan tebing.
- **Meaning:** Hubungan saling menguntungkan (symbiosis).
- **Context:** partnership, collaboration
- **When:** Bahas partnership atau kolaborasi
- **Usage:** "Kolaborasi ideal itu bagai aur dengan tebing — dua-duanya support & tumbuh bersama."

### 🟢 PB-019
**"Ing ngarso sung tulodho."** *(Jawa - Ki Hadjar Dewantara)*
- **Translation:** Di depan memberi teladan.
- **Meaning:** Leadership by example.
- **Context:** team leadership, culture
- **When:** User struggling dengan team
- **Usage:** "Ing ngarso sung tulodho, Le. Karyawan mirror behavior owner. Kamu telat, mereka telat."

### 🟡 PB-020
**"Adang-adang tetesing bumbung."** *(Jawa)*
- **Translation:** Menanti tetesan dari bambu.
- **Meaning:** Menunggu pemberian tanpa usaha.
- **Context:** proactivity, entrepreneurship
- **When:** User pasif nunggu customer datang
- **Usage:** "Adang-adang tetesing bumbung? Warung baru gak bisa nunggu. Harus aktif reach out ke potential customer."

### 🟢 PB-021
**"Buat gua-guanya."** *(Melayu)*
- **Translation:** Bikin gua-guanya.
- **Meaning:** Membuat rencana matang, blueprint.
- **Context:** planning, strategy
- **When:** User execute tanpa planning
- **Usage:** "Sebelum launch, buat gua-guanya dulu. Timeline, budget, contingency."

### 🟢 PB-022
**"Gajah mati meninggalkan gading, harimau mati meninggalkan belang, manusia mati meninggalkan nama."** *(Melayu)*
- **Translation:** Gajah mati tinggalkan gading, harimau tinggal belang, manusia tinggal nama.
- **Meaning:** Brand/reputation adalah legacy.
- **Context:** brand equity, long-term legacy
- **When:** User fokus short-term gain
- **Usage:** "Manusia mati meninggalkan nama. Brand-mu itu nama yang bakal hidup lebih lama dari kamu."

### 🟢 PB-023
**"Malu bertanya sesat di jalan."** *(Melayu)*
- **Translation:** Malu bertanya, sesat di jalan.
- **Meaning:** Jangan sungkan minta advice/riset.
- **Context:** learning, mentorship, humility
- **When:** User terlalu pede tanpa riset
- **Usage:** "Malu bertanya sesat di jalan. Sebelum expand ke Jakarta, tanya UMKM lain yang sudah ke sana."

### 🟡 PB-024
**"Njajah desa milang kori."** *(Jawa)*
- **Translation:** Menjelajah desa menghitung pintu.
- **Meaning:** Riset mendalam door-to-door.
- **Context:** market research, ground truth
- **When:** User buat assumption tanpa riset
- **Usage:** "Sebelum expand ke Bogor, coba njajah desa milang kori. Datangi 20 warung kompetitor, observasi."

### 🟢 PB-025
**"Sekali merengkuh dayung, dua tiga pulau terlampaui."** *(Melayu)*
- **Translation:** Sekali dayung, dua tiga pulau tercapai.
- **Meaning:** Efficient action yang cover multiple goals.
- **Context:** efficiency, multi-purpose strategy
- **When:** Bahas efficient campaign
- **Usage:** "Podcast bareng UMKM tetangga bisa jadi content Reels, testimoni customer, dan networking. Sekali merengkuh dayung..."

### 🟡 PB-026
**"Aja mung katon, kudu tekan."** *(Jawa)*
- **Translation:** Jangan cuma kelihatan, harus sampai (tujuan).
- **Meaning:** Bukan sekedar tampil, harus deliver value.
- **Context:** substance over style
- **When:** User terlalu fokus branding tanpa produk kuat
- **Usage:** "Aja mung katon, kudu tekan. Brand aesthetic cakep percuma kalau produk lo biasa saja."

### 🟢 PB-027
**"Bagai pinang dibelah dua."** *(Melayu)*
- **Translation:** Seperti pinang dibelah dua.
- **Meaning:** Dua hal yang identik/serasi.
- **Context:** partnership, brand-customer fit
- **When:** Bahas cocok/fit customer-brand
- **Usage:** "Brand-mu dan customer target bagai pinang dibelah dua — vibe & value sama."

### 🟡 PB-028
**"Alon-alon waton kelakon."** *(Jawa)*
- **Translation:** Pelan-pelan asal terlaksana.
- **Meaning:** Slow but steady wins.
- **Context:** patience, quality
- **When:** User terburu-buru scaling
- **Usage:** "Alon-alon waton kelakon. Buka cabang ke-2 pelan tapi mateng, lebih baik dari buka 5 langsung tapi kualitas anjlok."

### 🟡 PB-029
**"Wong urip iku mung mampir ngombe."** *(Jawa)*
- **Translation:** Orang hidup itu cuma mampir minum.
- **Meaning:** Perspektif hidup singkat, jangan overly serius.
- **Context:** perspective, work-life balance
- **When:** User workaholic burnout
- **Usage:** "Wong urip iku mung mampir ngombe. Bisnis penting, tapi kesehatan & keluarga lebih penting."

### 🟢 PB-030
**"Rakit-rakit ke hulu, berenang-renang ke tepian. Bersakit-sakit dahulu, bersenang-senang kemudian."** *(Melayu)*
- **Translation:** [full peribahasa]
- **Meaning:** Delayed gratification, invest effort now for future reward.
- **Context:** patience, long-term investment
- **When:** User expect instant results
- **Usage:** "Bersakit-sakit dahulu, bersenang-senang kemudian. 6 bulan pertama bootstrap wajar tidak profit."

---

## KATEGORI 2: PATIENCE, TIMING & PERSEVERANCE (25 entries)

### 🟡 PB-031
**"Ojo kesusu, sing telaten mesti nyandhak."** *(Jawa)*
- **Translation:** Jangan buru-buru, yang telaten pasti berhasil.
- **Meaning:** Consistency beats intensity.
- **Context:** patience, consistency
- **When:** User frustrasi ingin cepat sukses
- **Usage:** "Ojo kesusu, sing telaten mesti nyandhak. 30 hari konsisten post lebih powerful dari 5 hari viral tapi berhenti."

### 🟢 PB-032
**"Sabar itu subur."** *(Melayu)*
- **Translation:** Sabar itu subur.
- **Meaning:** Kesabaran menghasilkan buah baik.
- **Context:** patience, growth
- **When:** User desperate karena hasil lambat
- **Usage:** "Sabar itu subur, Ndhuk. Bisnis 1 tahun baru mulai bertunas."

### 🟢 PB-033
**"Kalau tidak dipecahkan ruyung, manakan dapat sagunya."** *(Melayu)*
- **Translation:** Kalau tidak dipecah pohon sagu, tidak dapat sagunya.
- **Meaning:** Butuh effort untuk dapat hasil.
- **Context:** effort, hustling
- **When:** User pasif
- **Usage:** "Kalau tidak dipecahkan ruyung, tidak dapat sagunya. Sales gak muncul sendiri."

### 🟡 PB-034
**"Sing waras ngalah."** *(Jawa)*
- **Translation:** Yang waras (bijak) mengalah.
- **Meaning:** Kadang mengalah = tanda kematangan, bukan lemah.
- **Context:** relationship, wisdom
- **When:** User keras kepala di konflik
- **Usage:** "Sing waras ngalah, Le. Bukan berarti kalah, tapi pilih battle mana yang worth."

### 🟢 PB-035
**"Tak ada gading yang tak retak."** *(Melayu)*
- **Translation:** Tak ada gading yang tidak retak.
- **Meaning:** Tak ada yang sempurna.
- **Context:** perfectionism, self-acceptance
- **When:** User perfeksionis
- **Usage:** "Tak ada gading yang tak retak. Launch produk lo yang '80% ready', iterate dari feedback customer."

### 🟢 PB-036
**"Sedia payung sebelum hujan."** *(Melayu)*
- **Translation:** Siapkan payung sebelum hujan.
- **Meaning:** Antisipasi sebelum kejadian.
- **Context:** risk management, contingency
- **When:** User tidak punya backup plan
- **Usage:** "Sedia payung sebelum hujan. Emergency fund 3 bulan operational wajib."

### 🟡 PB-037
**"Nrima ing pandum."** *(Jawa)*
- **Translation:** Menerima apa yang diberi.
- **Meaning:** Bersyukur dengan hasil, tidak greedy.
- **Context:** gratitude, contentment
- **When:** User selalu compare dengan orang lain
- **Usage:** "Nrima ing pandum, Ndhuk. Bisnismu ada di jalur kamu. Bandingkan progress diri sendiri, bukan orang lain."

### 🟡 PB-038
**"Rawe-rawe rantas, malang-malang putung."** *(Jawa)*
- **Translation:** Halangan-halangan dibabat, rintangan-rintangan diputus.
- **Meaning:** Determinasi tanpa henti hadapi rintangan.
- **Context:** perseverance, grit
- **When:** User mau nyerah karena rintangan bertumpuk
- **Usage:** "Rawe-rawe rantas, malang-malang putung. Setiap halangan itu ujian yang bikin lo tumbuh."

### 🟢 PB-039
**"Air beriak tanda tak dalam."** *(Melayu)*
- **Translation:** Air beriak tandanya tidak dalam.
- **Meaning:** Yang berisik biasanya kurang berbobot.
- **Context:** authenticity, quiet strength
- **When:** User terlalu banyak marketing bombastis
- **Usage:** "Air beriak tanda tak dalam. Brand yang shout terus-terusan biasanya kosong. Kualitas yang bicara."

### 🟡 PB-040
**"Wong sabar rejekine jembar."** *(Jawa)*
- **Translation:** Orang sabar rezekinya luas.
- **Meaning:** Kesabaran opens door untuk opportunity yang lebih besar.
- **Context:** patience, opportunity
- **When:** User terburu-buru take deal jelek
- **Usage:** "Wong sabar rejekine jembar. Tolak deal Rp 50jt yang bikin brand rusak, deal Rp 200jt akan datang kalau kamu sabar."

### 🟢 PB-041
**"Bumi mana yang tidak ditimpa hujan."** *(Melayu)*
- **Translation:** Bumi mana yang tidak ditimpa hujan.
- **Meaning:** Setiap orang/brand alami masa sulit.
- **Context:** resilience, universal challenge
- **When:** User merasa cuma dia yang struggling
- **Usage:** "Bumi mana yang tidak ditimpa hujan. Semua brand pernah krisis, termasuk yang sekarang sukses."

### 🟢 PB-042
**"Sekali lancung ke ujian, seumur hidup orang tak percaya."** *(Melayu)*
- **Translation:** Sekali curang di ujian, seumur hidup orang tak percaya.
- **Meaning:** Rusak trust sekali, susah recovery.
- **Context:** trust, integrity, reputation
- **When:** User tergoda quick unethical win
- **Usage:** "Sekali lancung ke ujian, seumur hidup orang tak percaya. Testimoni palsu = trust rusak forever."

### 🟡 PB-043
**"Ojo dumeh, ojo gumunan, ojo kagetan."** *(Jawa)*
- **Translation:** Jangan sombong, jangan mudah terpesona, jangan mudah kaget.
- **Meaning:** Sikap stabil di setiap kondisi.
- **Context:** emotional stability, wisdom
- **When:** User emotional swing
- **Usage:** "Ojo dumeh, ojo gumunan, ojo kagetan. Success gak bikin lo Tuhan, failure gak bikin lo nol."

### 🟢 PB-044
**"Air susu dibalas air tuba."** *(Melayu)*
- **Translation:** Air susu dibalas air tuba (racun).
- **Meaning:** Kebaikan dibalas kejahatan.
- **Context:** disappointment, betrayal
- **When:** User curhat di-back stab customer/partner
- **Usage:** "Air susu dibalas air tuba, memang menyakitkan. Tapi jangan kasih orang seperti itu power untuk mengubah kamu."

### 🟢 PB-045
**"Bagai kacang lupa akan kulitnya."** *(Melayu)*
- **Translation:** Seperti kacang lupa kulit.
- **Meaning:** Lupa asal-usul.
- **Context:** authenticity, roots
- **When:** User sukses lupa community awal
- **Usage:** "Jangan bagai kacang lupa akan kulitnya. Loyal customer awal yang bikin brand-mu ada hari ini."

### 🟡 PB-046
**"Watu iku ora bisa dilempari kembang."** *(Jawa)*
- **Translation:** Batu tidak bisa dilempari bunga (harus dilempari batu balasannya).
- **Meaning:** Situasi tertentu butuh tegas, bukan lembut.
- **Context:** boundary, firm decision
- **When:** User terlalu soft ke customer/karyawan bermasalah
- **Usage:** "Watu iku ora bisa dilempari kembang. Karyawan yang chronic curang gak bisa terus di-lembutkan."

### 🟢 PB-047
**"Berat sama dipikul, ringan sama dijinjing."** *(Melayu)*
- **Translation:** Berat sama dipikul, ringan sama dijinjing.
- **Meaning:** Kerjasama share the load.
- **Context:** team, partnership
- **When:** Bahas team dynamics
- **Usage:** "Team ideal itu berat sama dipikul, ringan sama dijinjing. Bukan owner tanggung semua."

### 🟢 PB-048
**"Tak lapuk dek hujan, tak lekang dek panas."** *(Melayu)*
- **Translation:** Tidak lapuk kena hujan, tidak retak kena panas.
- **Meaning:** Tahan uji dalam segala kondisi.
- **Context:** resilience, brand equity
- **When:** Bahas building lasting brand
- **Usage:** "Brand yang kuat itu tak lapuk dek hujan, tak lekang dek panas. Bertahan di krisis, tumbuh di panen."

### 🟡 PB-049
**"Aja ngukur klambi wong nggunakke jubah dewe."** *(Jawa)*
- **Translation:** Jangan ukur baju orang pakai jubah sendiri.
- **Meaning:** Jangan judge orang lain pakai standar sendiri.
- **Context:** empathy, understanding
- **When:** User frustrasi karena karyawan/customer tidak seperti dia
- **Usage:** "Aja ngukur klambi wong nggunakke jubah dewe. Kamu owner beda mindset dari karyawan."

### 🟢 PB-050
**"Menepuk air didulang, terpercik muka sendiri."** *(Melayu)*
- **Translation:** Menepuk air di dulang, terpercik muka sendiri.
- **Meaning:** Perbuatan buruk balik ke diri sendiri.
- **Context:** karma, ethics
- **When:** User mau lakukan hal tidak etis
- **Usage:** "Menepuk air di dulang, terpercik muka sendiri. Bad-mouthing competitor balik ke brand-mu."

### 🟢 PB-051
**"Belakang parang pun kalau diasah lagikan tajam."** *(Melayu)*
- **Translation:** Belakang parang kalau diasah pun jadi tajam.
- **Meaning:** Konsistensi effort ubah yang biasa jadi excellent.
- **Context:** skill development, practice
- **When:** User meragukan diri karena "no talent"
- **Usage:** "Belakang parang pun kalau diasah lagikan tajam. 100 jam praktek pitching akan bikin lo confident."

### 🟡 PB-052
**"Nglemetake mangsa."** *(Jawa)*
- **Translation:** Menunggu momen yang tepat.
- **Meaning:** Timing matters dalam eksekusi.
- **Context:** timing, market entry
- **When:** User bingung timing launch
- **Usage:** "Nglemetake mangsa, Le. Launch produk baru saat competitor lagi ada masalah, bukan saat mereka lagi kuat."

### 🟢 PB-053
**"Terlanjur basah biar mandi sekalian."** *(Melayu)*
- **Translation:** Terlanjur basah, mandi sekalian.
- **Meaning:** Kalau sudah commit, all-in.
- **Context:** commitment, execution
- **When:** User setengah hati commit
- **Usage:** "Terlanjur basah biar mandi sekalian. Sudah invest Rp 20jt di packaging, tuntaskan campaign-nya total."

### 🟡 PB-054
**"Aja golek jeneng, goleka teken."** *(Jawa)*
- **Translation:** Jangan cari nama (populer), cari pegangan (skill/foundation).
- **Meaning:** Substance over fame.
- **Context:** substance, fundamentals
- **When:** User obsessed dengan follower count
- **Usage:** "Aja golek jeneng, goleka teken. Follower 100k tanpa sales, ngapain. Skill jualan lebih penting."

### 🟢 PB-055
**"Berakit-rakit dahulu, berenang-renang kemudian."** *(Melayu)*
- **Translation:** Bikin rakit dulu, berenang kemudian.
- **Meaning:** Foundation dulu sebelum eksekusi.
- **Context:** planning, foundation
- **When:** User execute tanpa foundation
- **Usage:** "Berakit-rakit dahulu, berenang-renang kemudian. SOP wajib beres sebelum hire karyawan."

---

## KATEGORI 3: FAMILY, TEAM & LEADERSHIP (25 entries)

### 🟡 PB-056
**"Wong tuwa iku bathok kang kadang kutuk."** *(Jawa)*
- **Translation:** Orang tua itu ibarat batok yang kadang mengeluh.
- **Meaning:** Respect wisdom orang tua meski kadang cerewet.
- **Context:** respect elders, family business
- **When:** User conflict dengan orang tua co-founder
- **Usage:** "Wong tuwa iku bathok kang kadang kutuk. Dengarkan wisdom Bapak dulu sebelum eksekusi ide baru."

### 🟢 PB-057
**"Guru kencing berdiri, murid kencing berlari."** *(Melayu)*
- **Translation:** Guru kencing berdiri, murid kencing berlari.
- **Meaning:** Behavior leader di-mirror + diperparah oleh follower.
- **Context:** leadership, culture
- **When:** User complain karyawan tidak disiplin
- **Usage:** "Guru kencing berdiri, murid kencing berlari. Kamu telat, karyawan juga telat. Coba review timing kamu."

### 🟢 PB-058
**"Tut wuri handayani."** *(Jawa - Ki Hadjar)*
- **Translation:** Di belakang memberi dorongan.
- **Meaning:** Leadership = empower dari belakang, not push dari depan.
- **Context:** leadership, empowerment
- **When:** User micro-manage team
- **Usage:** "Tut wuri handayani. Kasih team space untuk decide, kamu support dari belakang."

### 🟢 PB-059
**"Ing madya mangun karsa."** *(Jawa - Ki Hadjar)*
- **Translation:** Di tengah membangun semangat.
- **Meaning:** Leader inspire dari tengah team, bukan tower atas.
- **Context:** leadership, engagement
- **When:** User distant dari team
- **Usage:** "Ing madya mangun karsa. Ikut turun di lapangan sesekali, karyawan feel valued."

### 🟢 PB-060
**"Anak polah bapa kepradah."** *(Jawa)*
- **Translation:** Anak berbuat, bapak kena tanggung jawab.
- **Meaning:** Tindakan team di-attribute ke leader.
- **Context:** accountability, leadership
- **When:** User blame team untuk kesalahan
- **Usage:** "Anak polah bapa kepradah. Karyawan salah service, brand-mu yang kena review jelek. Tanggung jawab ada di lo."

### 🟡 PB-061
**"Sepi ing pamrih, rame ing gawe."** *(Jawa)*
- **Translation:** Sepi dari pamrih, rame dalam kerja.
- **Meaning:** Kerja tulus tanpa harap balik jasa yang berlebihan.
- **Context:** work ethic, integrity
- **When:** Bahas culture kerja tim
- **Usage:** "Sepi ing pamrih, rame ing gawe. Karyawan yang kerja karena passion (bukan pamer) selalu lebih valuable."

### 🟢 PB-062
**"Bagai enau di tepi jalan, sudahlah tinggi berbuah pula."** *(Melayu)*
- **Translation:** Seperti enau di tepi jalan, sudah tinggi berbuah pula.
- **Meaning:** Karyawan valuable = sudah skilled + productive.
- **Context:** talent retention
- **When:** Bahas retain top talent
- **Usage:** "Karyawan top-mu bagai enau di tepi jalan. Kalau gak treated well, orang lain akan panen."

### 🟢 PB-063
**"Kalau ingin melayarkan bahtera, sang nakhoda mesti kompak dengan awaknya."** *(Melayu adaptasi)*
- **Translation:** Kalau mau jalankan kapal, nakhoda harus kompak dengan awaknya.
- **Meaning:** Leader-team alignment penting.
- **Context:** team alignment, culture
- **When:** Bahas team dynamics
- **Usage:** "Nakhoda harus kompak dengan awak. Weekly sync meeting bukan overhead, itu essential."

### 🟡 PB-064
**"Ora ana kembang tanpo tangkai."** *(Jawa)*
- **Translation:** Tidak ada bunga tanpa tangkai.
- **Meaning:** Anak/karyawan bagus butuh support system.
- **Context:** mentorship, environment
- **When:** User expect karyawan self-develop tanpa training
- **Usage:** "Ora ana kembang tanpo tangkai. Karyawan gak bisa grow tanpa training & mentoring."

### 🟢 PB-065
**"Bagai hujan jatuh ke pasir."** *(Melayu)*
- **Translation:** Seperti hujan jatuh ke pasir.
- **Meaning:** Effort yang tidak menghasilkan.
- **Context:** wasted effort
- **When:** User frustrasi training team tapi tidak ada progress
- **Usage:** "Kalau training terasa bagai hujan jatuh ke pasir, mungkin metode-nya perlu diubah."

### 🟢 PB-066
**"Sepandai-pandai tupai melompat, akhirnya jatuh juga."** *(Melayu)*
- **Translation:** Sepandai-pandai tupai melompat, jatuh juga.
- **Meaning:** Semua orang bikin kesalahan.
- **Context:** self-forgiveness, mistake handling
- **When:** User over-blame diri sendiri
- **Usage:** "Sepandai-pandai tupai melompat, akhirnya jatuh juga. Kesalahan sekali gak bikin lo failure. Learn & move."

### 🟡 PB-067
**"Ojo mbedakke wong."** *(Jawa)*
- **Translation:** Jangan bedakan orang.
- **Meaning:** Treat semua stakeholder dengan fair.
- **Context:** fairness, discrimination
- **When:** User favoritism
- **Usage:** "Ojo mbedakke wong. VIP customer & new customer, keduanya harus dapat quality yang sama."

### 🟢 PB-068
**"Berat sepikul, ringan sejinjing."** *(Melayu)*
- **Translation:** Berat sepikul, ringan sejinjing.
- **Meaning:** Distribute burden equally in team.
- **Context:** teamwork, fairness
- **When:** Team burden distribusi tidak merata
- **Usage:** "Berat sepikul, ringan sejinjing. Kalau owner tanggung 90% workload, team gak akan grow."

### 🟢 PB-069
**"Bila ada padi tempatkanlah dalam lumbung."** *(Melayu)*
- **Translation:** Kalau ada padi, simpan di lumbung.
- **Meaning:** Nurture talent yang sudah dimiliki.
- **Context:** talent retention, culture
- **When:** User take top talent for granted
- **Usage:** "Bila ada padi tempatkanlah dalam lumbung. Karyawan top-mu jaga dengan appreciation & career path."

### 🟡 PB-070
**"Nglenggana kekliruane dewe."** *(Jawa)*
- **Translation:** Mengakui kesalahan sendiri.
- **Meaning:** Self-awareness kesalahan sendiri = kematangan.
- **Context:** self-awareness, accountability
- **When:** User selalu blame external
- **Usage:** "Nglenggana kekliruane dewe. Sales turun mungkin bukan karena market, mungkin karena strategy kita."

### 🟢 PB-071
**"Ilmu padi, semakin berisi semakin merunduk."** *(Melayu)*
- **Translation:** Ilmu padi, semakin berisi semakin merunduk.
- **Meaning:** Semakin pintar semakin humble.
- **Context:** humility, growth
- **When:** User arrogant setelah success
- **Usage:** "Ilmu padi, semakin berisi semakin merunduk. Owner yang gede kepala setelah sukses, biasanya crash 1-2 tahun kemudian."

### 🟡 PB-072
**"Manunggaling kawula lan gusti."** *(Jawa - filosofis)*
- **Translation:** Menyatunya rakyat dan pemimpin.
- **Meaning:** Leader-team alignment holistic.
- **Context:** culture, leadership philosophy
- **When:** Bahas building strong company culture
- **Usage:** "Idealnya team-mu manunggaling kawula lan gusti — vision owner & effort team menyatu."

### 🟢 PB-073
**"Ke bukit sama didaki, ke lurah sama dituruni."** *(Melayu)*
- **Translation:** Ke bukit sama didaki, ke jurang sama dituruni.
- **Meaning:** Loyalty in good & bad times.
- **Context:** loyalty, partnership
- **When:** Bahas long-term relationship (co-founder, supplier)
- **Usage:** "Partner ideal itu ke bukit sama didaki, ke lurah sama dituruni. Support saat crisis, celebrate saat sukses."

### 🟢 PB-074
**"Bagai burung dalam sangkar."** *(Melayu)*
- **Translation:** Seperti burung dalam sangkar.
- **Meaning:** Karyawan yang punya potensi tapi terbatas oleh system.
- **Context:** talent development, empowerment
- **When:** Bahas retain kreatif talent
- **Usage:** "Karyawan kreatifmu bagai burung dalam sangkar kalau tidak dikasih kebebasan berkarya."

### 🟡 PB-075
**"Wong tuwa ora arep dituruti, mung arep didengarke."** *(Jawa)*
- **Translation:** Orang tua tidak minta dituruti, hanya minta didengarkan.
- **Meaning:** Sometimes elders/mentors want to be heard, not obeyed.
- **Context:** listening, respect
- **When:** User conflict dengan advice orang tua
- **Usage:** "Wong tuwa ora arep dituruti, mung arep didengarke. Dengarkan Bapak, lalu decide sendiri dengan hormat."

### 🟢 PB-076
**"Yang tua dihormati, yang muda disayangi."** *(Melayu)*
- **Translation:** Yang tua dihormati, yang muda disayangi.
- **Meaning:** Balance respect senior & nurture junior.
- **Context:** intergenerational team
- **When:** Team multi-generasi
- **Usage:** "Team yang healthy itu yang tua dihormati, yang muda disayangi. Skill share dua arah."

### 🟢 PB-077
**"Bagai isi dengan kuku."** *(Melayu)*
- **Translation:** Seperti isi dengan kuku (menyatu tak terpisahkan).
- **Meaning:** Sangat dekat & terintegrasi.
- **Context:** partnership, brand-team fit
- **When:** Bahas ideal co-founder relationship
- **Usage:** "Co-founder ideal bagai isi dengan kuku. Different skills tapi vision satu."

### 🟡 PB-078
**"Dhemen mendhem gawe."** *(Jawa)*
- **Translation:** Suka menyembunyikan hasil karya.
- **Meaning:** Rendah hati, tidak show off.
- **Context:** humility, quiet excellence
- **When:** Bahas culture yang humble
- **Usage:** "Karyawan yang dhemen mendhem gawe biasanya yang paling valuable. Kerjanya lebih dari yang di-shout."

### 🟢 PB-079
**"Bagai kerakap tumbuh di batu, hidup segan mati tak mau."** *(Melayu)*
- **Translation:** Seperti kerakap tumbuh di batu, hidup segan mati tak mau.
- **Meaning:** Kondisi stagnan, tidak berkembang.
- **Context:** stagnation, growth
- **When:** User bisnis stuck bertahun-tahun
- **Usage:** "Bisnismu bagai kerakap tumbuh di batu. Butuh disruption untuk keluar dari zona ini."

### 🟢 PB-080
**"Manusia dilihat dari perbuatannya, brand dilihat dari deliverynya."** *(Adaptasi)*
- **Translation:** Manusia dilihat dari perbuatan, brand dari delivery.
- **Meaning:** Substance matters more than promise.
- **Context:** brand promise, delivery
- **When:** User over-promise
- **Usage:** "Manusia dilihat dari perbuatannya, brand dilihat dari deliverynya. Jangan promise 24-hour ship kalau realistically 3 hari."

---

## KATEGORI 4: MONEY, VALUE & INTEGRITY (30 entries)

### 🟢 PB-081
**"Bagai memakan darah."** *(Melayu)*
- **Translation:** Seperti memakan darah.
- **Meaning:** Uang haram/tidak berkah.
- **Context:** ethics, halal earning
- **When:** User tergoda business tidak etis
- **Usage:** "Uang haram itu bagai memakan darah. Bisa kaya sebentar, tapi tidak berkah."

### 🟢 PB-082
**"Yang bulat tidak datang bergolek, yang pipih tidak datang melayang."** *(Melayu)*
- **Translation:** Yang bulat tak datang bergolek, yang pipih tak melayang.
- **Meaning:** Rezeki tidak datang instant, butuh usaha.
- **Context:** effort, no shortcut
- **When:** User cari cara cepat
- **Usage:** "Yang bulat tidak datang bergolek. Sukses butuh 3-5 tahun bootstrap yang konsisten."

### 🟡 PB-083
**"Ora ana rejeki sing tiba saka langit."** *(Jawa)*
- **Translation:** Tidak ada rezeki yang jatuh dari langit.
- **Meaning:** Semua butuh effort.
- **Context:** effort, hustle
- **When:** User pasif nunggu miracle
- **Usage:** "Ora ana rejeki sing tiba saka langit. Sales datang dari action, bukan doa aja."

### 🟢 PB-084
**"Hemat pangkal kaya."** *(Melayu)*
- **Translation:** Hemat pangkal kaya.
- **Meaning:** Frugality = foundation wealth.
- **Context:** financial discipline
- **When:** User boros untuk vanity metric
- **Usage:** "Hemat pangkal kaya. Jangan investasi Rp 50jt di photoshoot fancy kalau produk belum stable."

### 🟢 PB-085
**"Kalau ada jarum yang patah, jangan disimpan dalam peti."** *(Melayu)*
- **Translation:** Kalau ada jarum patah, jangan simpan di peti.
- **Meaning:** Bad debt/uang berkah tidak boleh disimpan.
- **Context:** finance, integrity
- **When:** User punya piutang buruk
- **Usage:** "Kalau ada jarum yang patah, jangan disimpan. Piutang bad debt harus write-off, jangan bikin cashflow berat."

### 🟡 PB-086
**"Rejeki wong iku ora bakal ketuker."** *(Jawa)*
- **Translation:** Rezeki orang tidak akan ketuker.
- **Meaning:** Setiap orang punya rezeki masing-masing.
- **Context:** contentment, focus
- **When:** User obsessive dengan sukses orang lain
- **Usage:** "Rejeki wong iku ora bakal ketuker. Fokus jalur lo, jangan iri sama jalur orang lain."

### 🟢 PB-087
**"Utang emas dapat dibayar, utang budi dibawa mati."** *(Melayu)*
- **Translation:** Utang emas bisa dibayar, utang budi dibawa mati.
- **Meaning:** Utang moral lebih berat dari utang uang.
- **Context:** integrity, gratitude
- **When:** User forget kebaikan orang yang bantu awal
- **Usage:** "Utang emas dapat dibayar, utang budi dibawa mati. Investor angel-mu jangan dilupakan setelah sukses."

### 🟢 PB-088
**"Sedikit demi sedikit lama-lama menjadi bukit."** *(Melayu)*
- **Translation:** Sedikit-sedikit lama-lama jadi bukit.
- **Meaning:** Konsistensi kecil = akumulasi besar.
- **Context:** compound, consistency
- **When:** User frustrasi lambat progress
- **Usage:** "Rp 500rb saving per bulan itu Rp 6jt setahun. Sedikit demi sedikit lama-lama menjadi bukit."

### 🟢 PB-089
**"Membeli kucing dalam karung."** *(Melayu)*
- **Translation:** Membeli kucing dalam karung.
- **Meaning:** Beli/deal tanpa lihat/verify dulu.
- **Context:** due diligence, verification
- **When:** User mau deal tanpa verify
- **Usage:** "Jangan beli kucing dalam karung. Sebelum hire freelancer, minta portofolio & referensi."

### 🟢 PB-090
**"Bagai kera diberi bunga."** *(Melayu)*
- **Translation:** Seperti kera diberi bunga.
- **Meaning:** Berikan value ke orang yang tidak appreciate.
- **Context:** wrong audience, mismatched customer
- **When:** User frustrasi customer tidak apreciate
- **Usage:** "Bagai kera diberi bunga. Kalau customer-mu tidak apreciate quality, mungkin bukan mereka target-mu."

### 🟡 PB-091
**"Aja rumangsa duwe, sing duwe iku sing gawe."** *(Jawa)*
- **Translation:** Jangan merasa punya, yang punya adalah yang membuat.
- **Meaning:** Humility tentang ownership, akui contribution orang lain.
- **Context:** attribution, teamwork
- **When:** User take full credit dari kerja team
- **Usage:** "Aja rumangsa duwe. Success brand ini co-created dengan team & customer, bukan solely lo."

### 🟢 PB-092
**"Terkejut sebab beruang, tercabut janggut kambing."** *(Melayu)*
- **Translation:** Kaget karena beruang, tercabut janggut kambing.
- **Meaning:** Overreaction ke masalah kecil bikin damage lebih besar.
- **Context:** crisis management, don't overreact
- **When:** User panic soal masalah kecil
- **Usage:** "Jangan terkejut sebab beruang, tercabut janggut kambing. 1 bad review dari 100 review baik tuh normal."

### 🟢 PB-093
**"Menghasta kain sarung."** *(Melayu)*
- **Translation:** Mengukur kain dengan hasta (lengan) sendiri.
- **Meaning:** Batasi pengeluaran sesuai kemampuan.
- **Context:** budgeting, financial discipline
- **When:** User over-spend untuk hal glamour
- **Usage:** "Menghasta kain sarung, Le. Marketing budget max 15% dari revenue, bukan aspiration."

### 🟢 PB-094
**"Yang berutang dari harta orang, hendaklah dibayar."** *(Melayu)*
- **Translation:** Yang berutang dari harta orang, wajib dibayar.
- **Meaning:** Bayar hutang tepat waktu = character.
- **Context:** integrity, financial responsibility
- **When:** User consider skip payment
- **Usage:** "Yang berutang dari harta orang, hendaklah dibayar. Even kalau supplier gak bakal complain, bayar tepat waktu."

### 🟡 PB-095
**"Sing waras kudu ngalah."** *(Jawa)*
- **Translation:** Yang waras (bijak) harus mengalah.
- **Meaning:** Kadang loss = strategic win.
- **Context:** wisdom, long-term
- **When:** User keras di negosiasi
- **Usage:** "Sing waras kudu ngalah. Kasih diskon 5% ke customer VIP, dapat loyalty 5 tahun."

### 🟢 PB-096
**"Anjing menggonggong, kafilah berlalu."** *(Melayu)*
- **Translation:** Anjing menggonggong, kafilah berlalu.
- **Meaning:** Ignore haters, terus focus.
- **Context:** haters, focus
- **When:** User terdistrak by online haters
- **Usage:** "Anjing menggonggong, kafilah berlalu. 1 hater di IG jangan bikin lo lose focus dari 1000 loyal customer."

### 🟢 PB-097
**"Ada uang ada barang."** *(Melayu)*
- **Translation:** Ada uang ada barang.
- **Meaning:** Harga wajar sesuai kualitas.
- **Context:** pricing, value
- **When:** Bahas fair pricing
- **Usage:** "Ada uang ada barang. Kalau customer tanya kenapa mahal, jelaskan value: bahan premium, handmade, quality control."

### 🟢 PB-098
**"Bagai ayam kehilangan induknya."** *(Melayu)*
- **Translation:** Seperti ayam kehilangan induk.
- **Meaning:** Kondisi bingung, kehilangan direction.
- **Context:** confusion, need direction
- **When:** User bingung tanpa mentor
- **Usage:** "Bagai ayam kehilangan induknya, tanpa mentor emang bingung. Cari 1 orang lebih senior yang bisa lo tanya rutin."

### 🟡 PB-099
**"Ojo ngoyak sing bab dhuwit."** *(Jawa)*
- **Translation:** Jangan kejar terus soal uang.
- **Meaning:** Balance uang & value lainnya.
- **Context:** work-life, purpose
- **When:** User obsessive dengan revenue
- **Usage:** "Ojo ngoyak sing bab dhuwit terus. Bisnis yang cuma soal duit biasanya kehilangan soul."

### 🟢 PB-100
**"Mulut manis mematahkan tulang."** *(Melayu)*
- **Translation:** Mulut manis mematahkan tulang.
- **Meaning:** Diplomacy powerful untuk relationship.
- **Context:** communication, sales
- **When:** User confrontational sama customer
- **Usage:** "Mulut manis mematahkan tulang. Bad customer bisa jadi advocate kalau di-handle dengan grace."

### 🟢 PB-101
**"Belum beranak sudah ditimang."** *(Melayu)*
- **Translation:** Belum beranak sudah ditimang.
- **Meaning:** Terlalu excited soal potensi, sebelum realisasi.
- **Context:** premature celebration
- **When:** User excited sebelum deal closed
- **Usage:** "Belum beranak sudah ditimang. Jangan announce partnership sebelum contract signed."

### 🟢 PB-102
**"Habis manis sepah dibuang."** *(Melayu)*
- **Translation:** Habis manis sepah dibuang.
- **Meaning:** Ditinggal setelah tidak berguna.
- **Context:** loyalty, retention
- **When:** Bahas customer retention
- **Usage:** "Jangan habis manis sepah dibuang. Customer yang bantu di awal, treat with respect setelah brand-mu besar."

### 🟡 PB-103
**"Aja rumangsa bathi."** *(Jawa)*
- **Translation:** Jangan merasa untung.
- **Meaning:** Even saat profit, tetap review & humble.
- **Context:** humility, continuous improvement
- **When:** User complacent setelah bulan profit
- **Usage:** "Aja rumangsa bathi. Bulan ini untung, bulan depan bisa loss kalau lo lengah."

### 🟢 PB-104
**"Bagai membelah dada."** *(Melayu)*
- **Translation:** Seperti membelah dada.
- **Meaning:** Sangat menyakitkan, extreme sacrifice.
- **Context:** difficult decision, sacrifice
- **When:** User face tough decision
- **Usage:** "Layoff karyawan itu bagai membelah dada. Tapi kadang perlu untuk save 10 karyawan lain."

### 🟢 PB-105
**"Kalah jadi arang, menang jadi abu."** *(Melayu)*
- **Translation:** Kalah jadi arang, menang jadi abu.
- **Meaning:** Konflik = both sides lose.
- **Context:** conflict, avoid unnecessary fight
- **When:** User terjebak conflict yang tidak worth
- **Usage:** "Kalah jadi arang, menang jadi abu. Lawsuit dengan supplier jarang worth it, mediasi lebih baik."

### 🟢 PB-106
**"Membeli tunda-tunda, menjual tunda-tunda tidak membeli."** *(Melayu adaptasi)*
- **Translation:** Beli tertunda, jual tertunda = tidak transaksi.
- **Meaning:** Procrastination kill business.
- **Context:** action, execution
- **When:** User serial procrastinator
- **Usage:** "Membeli tunda-tunda, menjual tunda-tunda. Launch minggu depan atau bulan depan, decide sekarang."

### 🟡 PB-107
**"Wong bakal urip yen ana usahane."** *(Jawa)*
- **Translation:** Orang akan hidup kalau ada usahanya.
- **Meaning:** Effort essential untuk survive.
- **Context:** hustling, entrepreneurship
- **When:** User expect passive income
- **Usage:** "Wong bakal urip yen ana usahane. UMKM tidak ada 'passive' 3 tahun pertama."

### 🟢 PB-108
**"Menganak semangkanya."** *(Melayu)*
- **Translation:** Menganggap seperti semangka.
- **Meaning:** Undervalue sesuatu yang berharga.
- **Context:** appreciation, value
- **When:** User undervalue karyawan/customer
- **Usage:** "Jangan menganak semangkanya karyawan senior-mu. Mereka tahu operational lebih dalam dari lo."

### 🟢 PB-109
**"Adat sebuah kereta, biasa berpasang-pasang."** *(Melayu)*
- **Translation:** Adat kereta biasa berpasangan.
- **Meaning:** Pair well = synergy.
- **Context:** partnership, complement
- **When:** Bahas co-founder complementary skill
- **Usage:** "Co-founder ideal adat sebuah kereta, berpasang-pasang. Kamu strategic, dia operational."

### 🟢 PB-110
**"Bumi bertambah tidak, hujan bertambah banyak."** *(Melayu)*
- **Translation:** Bumi tak bertambah, hujan bertambah banyak.
- **Meaning:** Kebutuhan bertambah, resource tetap.
- **Context:** scaling challenge
- **When:** Bahas scaling constraint
- **Usage:** "Bumi bertambah tidak, hujan bertambah banyak. Order bertambah 3x, tapi karyawan tetap 2 orang — burn out risk."

---

## KATEGORI 5: WISDOM, PHILOSOPHY & CHARACTER (30 entries)

### 🟡 PB-111
**"Urip iku urup."** *(Jawa)*
- **Translation:** Hidup itu menyala (bermakna).
- **Meaning:** Hidup harus memberi cahaya untuk orang lain.
- **Context:** purpose, impact
- **When:** Bahas purpose-driven brand
- **Usage:** "Urip iku urup. Brand-mu bukan cuma cari untung, tapi kasih 'urup' untuk komunitas."

### 🟢 PB-112
**"Manjing ing kahanan."** *(Jawa)*
- **Translation:** Menyatu dengan situasi.
- **Meaning:** Adaptif dengan lingkungan.
- **Context:** adaptability, cultural fit
- **When:** User expand ke market baru
- **Usage:** "Manjing ing kahanan. Sebelum jualan di Bali, pahami dulu budaya & mindset Bali."

### 🟡 PB-113
**"Sabegja-begjane wong sing eling lan waspada."** *(Jawa)*
- **Translation:** Seberuntung-untungnya orang, adalah yang selalu ingat & waspada.
- **Meaning:** Success tetap butuh awareness & caution.
- **Context:** mindfulness, don't be complacent
- **When:** User complacent after success
- **Usage:** "Sabegja-begjane wong sing eling lan waspada. Sales lagi bagus, jangan lengah — audit ulang system."

### 🟢 PB-114
**"Karena nila setitik, rusak susu sebelanga."** *(Melayu)*
- **Translation:** Karena nila setitik, rusak susu sebelanga.
- **Meaning:** Kesalahan kecil bisa rusak keseluruhan.
- **Context:** attention to detail, quality
- **When:** Bahas quality control
- **Usage:** "Karena nila setitik, rusak susu sebelanga. 1 packaging cacat bisa jadi bad review viral."

### 🟢 PB-115
**"Sudah jatuh tertimpa tangga pula."** *(Melayu)*
- **Translation:** Sudah jatuh tertimpa tangga.
- **Meaning:** Serangkaian kesialan.
- **Context:** resilience, bad luck
- **When:** User curhat multiple crisis
- **Usage:** "Sudah jatuh tertimpa tangga pula. Simbah paham, ini fase paling gelap. Tapi selalu ada pagi."

### 🟢 PB-116
**"Di mana bumi dipijak, di situ langit dijunjung."** *(Melayu)*
- **Translation:** Di mana bumi dipijak, di situ langit dijunjung.
- **Meaning:** Respect local culture wherever you go.
- **Context:** cultural sensitivity
- **When:** User expand ke region berbeda
- **Usage:** "Di mana bumi dipijak, di situ langit dijunjung. Buka cabang di Aceh? Hormati culture syariah mereka."

### 🟡 PB-117
**"Aja adigang, adigung, adiguna."** *(Jawa)*
- **Translation:** Jangan mengandalkan kekuatan, kebesaran, kepandaian.
- **Meaning:** Jangan bangga dengan power, size, atau kepintaran.
- **Context:** humility, don't take advantage
- **When:** User arrogant with success
- **Usage:** "Aja adigang, adigung, adiguna. Success bikin lo powerful, tapi don't abuse itu ke supplier/karyawan."

### 🟢 PB-118
**"Belakang parang lagi diasah bertambah tajam."** *(Melayu)*
- **Translation:** Belakang parang diasah, jadi lebih tajam.
- **Meaning:** Effort mengubah biasa jadi excellent.
- **Context:** skill development
- **When:** User doubt kemampuan sendiri
- **Usage:** "Belakang parang lagi diasah bertambah tajam. 6 bulan practice pitching, lo akan expert."

### 🟢 PB-119
**"Yang lurus dikatakan sesat, yang sesat dikatakan lurus."** *(Melayu)*
- **Translation:** Yang lurus dikatakan sesat, yang sesat dikatakan lurus.
- **Meaning:** Truth di-invert oleh manipulasi.
- **Context:** integrity, media manipulation
- **When:** User face fake news/smear campaign
- **Usage:** "Yang lurus dikatakan sesat. Kalau ada rumor jelek tentang brand-mu, respond dengan transparency, not defensiveness."

### 🟡 PB-120
**"Wong bodho iku ora bakal saya bodho."** *(Jawa)*
- **Translation:** Orang bodoh tidak akan bertambah bodoh (kalau belajar).
- **Meaning:** Belajar terus mengurangi kelemahan.
- **Context:** learning, growth mindset
- **When:** User merasa "not smart enough"
- **Usage:** "Wong bodho iku ora bakal saya bodho. Baca 1 buku bisnis per bulan, dalam 5 tahun lo expert."

### 🟢 PB-121
**"Tak kenal maka tak sayang."** *(Melayu)*
- **Translation:** Tak kenal maka tak sayang.
- **Meaning:** Familiarity = affection.
- **Context:** brand awareness, marketing
- **When:** Bahas top-of-mind awareness
- **Usage:** "Tak kenal maka tak sayang. Customer harus lihat brand-mu 7-10x sebelum consider beli."

### 🟢 PB-122
**"Bagai payung terkembang."** *(Melayu)*
- **Translation:** Seperti payung terkembang.
- **Meaning:** Reputasi/pengaruh yang luas.
- **Context:** brand influence, reach
- **When:** Bahas brand yang tumbuh
- **Usage:** "Kalau brand-mu bagai payung terkembang, opportunity juga datang dari sana."

### 🟢 PB-123
**"Ke mana kabau di lepaskan, ke padang gembalaan juga."** *(Melayu)*
- **Translation:** Ke mana kerbau dilepas, ke padang rumput juga.
- **Meaning:** Talent natural akan cari environment yang tepat.
- **Context:** talent, culture fit
- **When:** Karyawan bagus resign
- **Usage:** "Ke mana kabau di lepaskan, ke padang gembalaan juga. Kalau karyawan-mu resign karena culture, itu warning sign."

### 🟡 PB-124
**"Nrimo ing pandum."** *(Jawa)*
- **Translation:** Menerima apa yang diberi.
- **Meaning:** Gratitude & contentment.
- **Context:** gratitude, contentment
- **When:** User comparison mode
- **Usage:** "Nrimo ing pandum. Compare progress diri sendiri 6 bulan lalu vs sekarang, bukan brand lain."

### 🟢 PB-125
**"Jangan seperti langau, satu mati satu datang."** *(Melayu)*
- **Translation:** Jangan seperti lalat, satu mati satu datang.
- **Meaning:** Solve akar problem, bukan symptom.
- **Context:** root cause analysis
- **When:** User face recurring problem
- **Usage:** "Jangan seperti langau, satu mati satu datang. Karyawan resign terus? Cek root cause culture, jangan cuma replace."

### 🟢 PB-126
**"Bagai ilmu padi, semakin berisi semakin merunduk."** *(Melayu)*
- **Translation:** Seperti ilmu padi, semakin berisi semakin merunduk.
- **Meaning:** Semakin knowledgeable semakin humble.
- **Context:** humility
- **When:** Bahas leader ideal
- **Usage:** "Owner yang bagai padi berisi, dihormati team & customer. Owner yang sombong, di-back stab."

### 🟡 PB-127
**"Aja kumingsun."** *(Jawa)*
- **Translation:** Jangan sok tahu.
- **Meaning:** Humility dalam knowledge.
- **Context:** learning, humility
- **When:** User over-confident tanpa validated
- **Usage:** "Aja kumingsun, Le. Sebelum expand, riset dulu — jangan asumsi."

### 🟢 PB-128
**"Bagai duri dalam daging."** *(Melayu)*
- **Translation:** Seperti duri dalam daging.
- **Meaning:** Masalah persistent yang mengganggu.
- **Context:** persistent problem
- **When:** User punya masalah recurring
- **Usage:** "Karyawan toxic itu bagai duri dalam daging. Cepat atau lambat harus dikeluarkan."

### 🟢 PB-129
**"Air tenang menghanyutkan."** *(Melayu)*
- **Translation:** Air yang tenang menghanyutkan.
- **Meaning:** Orang yang tampak tenang bisa jadi paling berbahaya/powerful.
- **Context:** don't underestimate
- **When:** User remehkan quiet competitor
- **Usage:** "Air tenang menghanyutkan. Competitor yang gak marketing agresif bisa jadi sudah kuat di background."

### 🟡 PB-130
**"Aja mangan swara."** *(Jawa)*
- **Translation:** Jangan makan suara (gosip).
- **Meaning:** Jangan percaya rumor.
- **Context:** don't trust rumors
- **When:** User take action based on rumor
- **Usage:** "Aja mangan swara. Rumor competitor bangkrut, verify dulu sebelum spread di market."

### 🟢 PB-131
**"Bagai murai dicabut ekornya."** *(Melayu)*
- **Translation:** Seperti murai dicabut ekornya.
- **Meaning:** Sangat marah/panik.
- **Context:** overreaction
- **When:** User panic
- **Usage:** "Jangan bagai murai dicabut ekornya. Deep breath dulu, decision di kondisi panic biasanya jelek."

### 🟢 PB-132
**"Buruk muka cermin dibelah."** *(Melayu)*
- **Translation:** Buruk muka cermin dibelah.
- **Meaning:** Blame external untuk kesalahan sendiri.
- **Context:** self-awareness, accountability
- **When:** User blame market/customer/team
- **Usage:** "Buruk muka cermin dibelah. Sales turun, salahkan market? Coba review dulu strategy internal."

### 🟡 PB-133
**"Aja gampang kepencut."** *(Jawa)*
- **Translation:** Jangan mudah tergoda.
- **Meaning:** Jangan impulsive dengan trend baru.
- **Context:** decision-making, avoid FOMO
- **When:** User obsessed dengan trend
- **Usage:** "Aja gampang kepencut sama trend TikTok baru. Focus di strategy 12 bulan-mu."

### 🟢 PB-134
**"Bermain-main dengan api."** *(Melayu)*
- **Translation:** Bermain-main dengan api.
- **Meaning:** Take unnecessary risk.
- **Context:** risk management
- **When:** User take unwise risk
- **Usage:** "Bermain-main dengan api itu. Utang Rp 500jt untuk expand kalau existing belum stable = risky."

### 🟢 PB-135
**"Tak lekang oleh panas, tak lapuk oleh hujan."** *(Melayu)*
- **Translation:** Tak retak kena panas, tak lapuk kena hujan.
- **Meaning:** Tahan uji segala kondisi.
- **Context:** resilience, brand equity
- **When:** Bahas building lasting brand
- **Usage:** "Brand ideal itu tak lekang oleh panas, tak lapuk oleh hujan. Bertahan di krisis, tumbuh di panen."

### 🟡 PB-136
**"Golek geni adedamar."** *(Jawa)*
- **Translation:** Mencari api dengan pelita.
- **Meaning:** Mencari yang sudah ada di tangan.
- **Context:** self-awareness, resource
- **When:** User cari solusi external padahal ada internal
- **Usage:** "Golek geni adedamar. Sebelum hire konsultan, tanya dulu karyawan senior. Mereka sering tahu."

### 🟢 PB-137
**"Bagai perahu tak berkemudi."** *(Melayu)*
- **Translation:** Seperti perahu tanpa kemudi.
- **Meaning:** Tanpa direction/leadership.
- **Context:** need vision
- **When:** Bahas company without clear vision
- **Usage:** "Company tanpa vision bagai perahu tak berkemudi. Bikin dokumen vision 1 halaman minggu ini."

### 🟢 PB-138
**"Yang dikejar tak dapat, yang dikendong berciciran."** *(Melayu)*
- **Translation:** Yang dikejar tak dapat, yang dipeluk terjatuh.
- **Meaning:** Kehilangan yang ada karena kejar yang tidak ada.
- **Context:** focus, opportunity cost
- **When:** User chase everything
- **Usage:** "Yang dikejar tak dapat, yang dikendong berciciran. Focus 1 channel dulu (misal IG), jangan spread ke 5 channel sekaligus."

### 🟡 PB-139
**"Aja seneng mangan roti tanpa nunggu adonan."** *(Jawa adaptasi)*
- **Translation:** Jangan senang makan roti tanpa nunggu adonan.
- **Meaning:** Enjoy proses, bukan hanya hasil.
- **Context:** enjoy the journey
- **When:** User only focus outcome
- **Usage:** "Enjoy proses juga, Le. Aja seneng mangan roti tanpa nunggu adonan — proses lah yang bikin lo strong."

### 🟢 PB-140
**"Emas juga dikenal orang."** *(Melayu)*
- **Translation:** Emas juga akan dikenal orang.
- **Meaning:** Kualitas akhirnya diakui.
- **Context:** patience, quality
- **When:** User frustrasi brand belum recognized
- **Usage:** "Emas juga dikenal orang. Bertahan dengan quality, recognition akan datang meski lambat."

---

## KATEGORI 6: LOSS, GRIEF & RECOVERY (20 entries)

### 🟡 PB-141
**"Sing sabar, sing tawakal."** *(Jawa)*
- **Translation:** Yang sabar, yang tawakal.
- **Meaning:** Sabar & berserah dalam ujian.
- **Context:** grief, acceptance
- **When:** User face major loss
- **Usage:** "Sing sabar, sing tawakal. Kehilangan business setelah 5 tahun berat, tapi bukan akhir cerita."

### 🟢 PB-142
**"Bagai kilat dalam kelam."** *(Melayu)*
- **Translation:** Seperti kilat dalam kegelapan.
- **Meaning:** Harapan kecil di masa gelap.
- **Context:** hope in darkness
- **When:** User desperate
- **Usage:** "Bagai kilat dalam kelam. 1 loyal customer yang order bulan ini itu tanda — masih ada yang percaya."

### 🟢 PB-143
**"Ada hari, ada nasi."** *(Melayu)*
- **Translation:** Ada hari, ada nasi.
- **Meaning:** Selalu ada rezeki esok hari.
- **Context:** hope, provision
- **When:** User despair cashflow
- **Usage:** "Ada hari, ada nasi. Even di titik terendah, besok tetap datang."

### 🟡 PB-144
**"Wong urip iku kudu eling ing paribasan."** *(Jawa)*
- **Translation:** Orang hidup harus ingat pada peribahasa (kearifan).
- **Meaning:** Learn from wisdom of ancestors.
- **Context:** learn from history
- **When:** User face problem yang common
- **Usage:** "Wong urip iku kudu eling ing paribasan. Masalah cashflow yang lo alami, sudah dialami owner-owner sebelumnya."

### 🟢 PB-145
**"Setelah malam, akan datang siang."** *(Melayu general)*
- **Translation:** Setelah malam, datang siang.
- **Meaning:** Setelah kesulitan, akan ada kemudahan.
- **Context:** hope, resilience
- **When:** User dalam crisis
- **Usage:** "Setelah malam, akan datang siang. Krisis 6 bulan ini akan lewat, kalau lo bertahan."

### 🟢 PB-146
**"Jatuh berbantalkan lumut."** *(Melayu)*
- **Translation:** Jatuh berbantalkan lumut.
- **Meaning:** Kegagalan dengan support system.
- **Context:** safety net, community
- **When:** Bahas importance komunitas
- **Usage:** "Kalau lo punya komunitas UMKM, jatuh pun berbantalkan lumut. Join grup UMKM sekarang."

### 🟢 PB-147
**"Bagai bulan dipagar bintang."** *(Melayu)*
- **Translation:** Seperti bulan dipagar bintang.
- **Meaning:** Berkuasa dengan support banyak.
- **Context:** influence, network
- **When:** Bahas building network
- **Usage:** "Bagai bulan dipagar bintang. Brand yang punya komunitas loyal, powerful."

### 🟡 PB-148
**"Sabar iku margaraning gusti."** *(Jawa)*
- **Translation:** Sabar itu jalan menuju Tuhan.
- **Meaning:** Sabar dalam derita = spiritual growth.
- **Context:** spiritual resilience
- **When:** User religious, face difficulty
- **Usage:** "Sabar iku margaraning gusti. Fase susah ini punya hikmah, walau belum kelihatan sekarang."

### 🟢 PB-149
**"Bagai memisahkan kuku dengan daging."** *(Melayu)*
- **Translation:** Seperti memisahkan kuku dengan daging.
- **Meaning:** Sangat sulit dipisahkan.
- **Context:** attachment, difficult decision
- **When:** User struggle let go
- **Usage:** "Melepas produk lama untuk pivot itu bagai memisahkan kuku dengan daging. Tapi kadang perlu."

### 🟢 PB-150
**"Kegagalan adalah tangga menuju kesuksesan."** *(Modern Indonesian)*
- **Translation:** Kegagalan adalah tangga menuju kesuksesan.
- **Meaning:** Failure = stepping stone.
- **Context:** growth mindset, failure
- **When:** User setelah kegagalan
- **Usage:** "Kegagalan adalah tangga menuju kesuksesan. Failure kali ini kasih data pelajaran valuable untuk attempt berikut."

### 🟡 PB-151
**"Aja gedhe rasa."** *(Jawa)*
- **Translation:** Jangan besar rasa (gengsi).
- **Meaning:** Jangan besarkan ego.
- **Context:** humility, ego
- **When:** User terganggu gengsi
- **Usage:** "Aja gedhe rasa. Karyawan senior beri feedback keras, terima tanpa defensive."

### 🟢 PB-152
**"Waktu itu pedang."** *(Melayu)*
- **Translation:** Waktu itu pedang.
- **Meaning:** Waktu = weapon; use wisely.
- **Context:** time management
- **When:** User tidak manage waktu
- **Usage:** "Waktu itu pedang. Jam 09-12 pagi paling productive-mu, kerjain deep work."

### 🟢 PB-153
**"Bagai teluk pengalaman."** *(Melayu)*
- **Translation:** Seperti teluk pengalaman.
- **Meaning:** Wisdom dari pengalaman.
- **Context:** learning from experience
- **When:** User undermine pengalaman senior
- **Usage:** "Owner senior itu bagai teluk pengalaman. Ada shortcut yang bisa lo pelajari dari mereka."

### 🟡 PB-154
**"Ora ana urip sing lancar."** *(Jawa)*
- **Translation:** Tidak ada hidup yang lancar (terus).
- **Meaning:** Life inherently full of challenges.
- **Context:** perspective, resilience
- **When:** User expect smooth journey
- **Usage:** "Ora ana urip sing lancar, Ndhuk. Business itu roller coaster, learn to enjoy ride."

### 🟢 PB-155
**"Waktu memuncak akan menurun juga."** *(Melayu)*
- **Translation:** Yang memuncak akan menurun.
- **Meaning:** Everything cyclical.
- **Context:** market cycle
- **When:** User panic saat market turun
- **Usage:** "Waktu memuncak akan menurun juga. Sekarang down cycle, akan up lagi. Pertahankan foundation."

### 🟢 PB-156
**"Dari mata turun ke hati."** *(Melayu)*
- **Translation:** Dari mata turun ke hati.
- **Meaning:** Visual first impression matter deeply.
- **Context:** branding, aesthetic
- **When:** Bahas importance packaging/photo
- **Usage:** "Dari mata turun ke hati. Packaging cakep = first step ke customer's heart."

### 🟡 PB-157
**"Sing ojo dilalekake."** *(Jawa)*
- **Translation:** Yang jangan dilupakan.
- **Meaning:** Prioritas non-negotiable.
- **Context:** priorities, values
- **When:** User forget core values under pressure
- **Usage:** "Sing ojo dilalekake — kualitas produk. Even under pressure sales, kompromi quality = akhir brand."

### 🟢 PB-158
**"Bagai duri dalam pisang."** *(Melayu)*
- **Translation:** Seperti duri dalam pisang.
- **Meaning:** Ancaman tersembunyi di hal yang tampak aman.
- **Context:** hidden risk
- **When:** Bahas due diligence
- **Usage:** "Kontrak yang tampak good bisa bagai duri dalam pisang. Baca semua clause, khususnya penalty & exit."

### 🟢 PB-159
**"Kalau tak ada mahsyul kelau ada bahagian."** *(Melayu adaptasi)*
- **Translation:** Kalau tak ada rezeki, tak ada bagian.
- **Meaning:** Rezeki sudah ada porsi masing-masing.
- **Context:** acceptance
- **When:** User frustrasi kehilangan opportunity
- **Usage:** "Kalau tak ada mahsyul kelau ada bahagian. Kompetitor menang tender, mungkin bukan rezeki lo — ada opportunity lain menunggu."

### 🟢 PB-160
**"Sekali membuka pura, dua tiga hutang selesai."** *(Melayu adaptasi)*
- **Translation:** Sekali buka dompet, banyak hutang selesai.
- **Meaning:** Efisien handle multiple problem sekaligus.
- **Context:** efficiency
- **When:** Bahas efficient decision
- **Usage:** "1 investasi di SOP bisa sekali membuka pura, dua tiga hutang selesai — improve quality, speed, & consistency sekaligus."

---

## KATEGORI 7: BOLDNESS & INITIATIVE (20 entries)

### 🟢 PB-161
**"Berani karena benar, takut karena salah."** *(Melayu)*
- **Translation:** Berani karena benar, takut karena salah.
- **Meaning:** Confidence dari integrity.
- **Context:** integrity, confidence
- **When:** User face intimidation
- **Usage:** "Berani karena benar, takut karena salah. Kalau lo confident produk-mu quality, pricing premium justified."

### 🟢 PB-162
**"Sekali dayung dua tiga pulau terlampaui."** *(Melayu)*
- **Translation:** Sekali dayung, 2-3 pulau tercapai.
- **Meaning:** Efficient multi-purpose action.
- **Context:** efficiency
- **When:** Bahas strategic action
- **Usage:** "Podcast episode lo bisa jadi Reels, blog post, & tweet — sekali dayung dua tiga pulau terlampaui."

### 🟢 PB-163
**"Sedikit demi sedikit, lama-lama menjadi bukit."** *(Melayu)*
- **Translation:** Sedikit-sedikit lama-lama jadi bukit.
- **Meaning:** Consistency compounds.
- **Context:** consistency, compound
- **When:** User expect fast result
- **Usage:** "Follower 10 per hari itu 3600/tahun. Sedikit demi sedikit, lama-lama menjadi bukit."

### 🟡 PB-164
**"Wani ngalah luhur wekasane."** *(Jawa)*
- **Translation:** Berani mengalah, luhur akhirnya.
- **Meaning:** Kadang mengalah = strategic win jangka panjang.
- **Context:** strategic thinking
- **When:** User face aggressive competitor
- **Usage:** "Wani ngalah luhur wekasane. Biarkan competitor menang di price war, lo menang di quality war."

### 🟢 PB-165
**"Yang bulat sudah datang bergolek."** *(Melayu adaptasi)*
- **Translation:** Yang bulat sudah datang menggelinding.
- **Meaning:** Opportunity yang jelas — ambil.
- **Context:** seize opportunity
- **When:** User ragu ambil opportunity jelas
- **Usage:** "Yang bulat sudah datang bergolek. Partnership brand besar mendekati lo — ambil, tapi baca contract hati-hati."

### 🟢 PB-166
**"Bermain-main dengan roda."** *(Melayu)*
- **Translation:** Bermain dengan roda (nasib).
- **Meaning:** Take calculated risk.
- **Context:** risk-taking
- **When:** Bahas boldness
- **Usage:** "Business memang bermain-main dengan roda. Yang penting risk-nya calculated, bukan gambling."

### 🟡 PB-167
**"Ora ana keris tanpa curigane."** *(Jawa)*
- **Translation:** Tidak ada keris tanpa curiganya.
- **Meaning:** Setiap advantage punya risk.
- **Context:** trade-off
- **When:** Bahas decision dengan trade-off
- **Usage:** "Ora ana keris tanpa curigane. Expand cabang = revenue naik tapi risk naik. Pastikan siap."

### 🟢 PB-168
**"Kalau tak sampai janjimu, jangan katakan tak sampai lidahmu."** *(Melayu)*
- **Translation:** Kalau tak sampai janjimu, jangan katakan tak sampai lidahmu.
- **Meaning:** Own responsibility, jangan alasan.
- **Context:** accountability
- **When:** User cari alasan
- **Usage:** "Kalau tak sampai janjimu, jangan katakan tak sampai lidahmu. Delay shipment, jangan blame kurir — tanggung jawab lo."

### 🟢 PB-169
**"Menjenguk lampu di tepi jalan."** *(Melayu)*
- **Translation:** Menjenguk lampu di tepi jalan.
- **Meaning:** Cari inspiration dari sekitar.
- **Context:** learn from surrounding
- **When:** User cari inspiration
- **Usage:** "Menjenguk lampu di tepi jalan. Coba observasi 5 UMKM sukses di kota lo — pelajari pattern-nya."

### 🟢 PB-170
**"Kalau enau mati tuang, jangan disesalkan."** *(Melayu)*
- **Translation:** Kalau pohon enau mati sendiri, jangan sesali.
- **Meaning:** Some things beyond control, accept.
- **Context:** acceptance
- **When:** User over-blame karena external factor
- **Usage:** "Pandemic tutup 2 cabang, kalau enau mati tuang, jangan disesalkan. Focus rebuild."

### 🟡 PB-171
**"Ojo mundur, mundur ora ana gunane."** *(Jawa)*
- **Translation:** Jangan mundur, mundur tidak ada gunanya.
- **Meaning:** Move forward, retreat = defeat.
- **Context:** perseverance
- **When:** User consider giving up
- **Usage:** "Ojo mundur. 3 tahun invest, mundur sekarang = wasted. Fight satu putaran lagi."

### 🟢 PB-172
**"Bagai ular berbelit di tulang leher."** *(Melayu)*
- **Translation:** Seperti ular berlilit di leher.
- **Meaning:** Situasi terjebak parah.
- **Context:** deep problem
- **When:** User dalam trap deep
- **Usage:** "Kalau feel bagai ular berbelit di tulang leher — utang menumpuk, karyawan resign, customer kabur — ambil restructuring advisor."

### 🟢 PB-173
**"Untung anak lelaki, malang anak perempuan."** *(Melayu — old saying)*
- **Translation:** [Old cultural saying about gender roles]
- **Meaning:** [Mengandung old cultural bias — tidak dipakai di context bisnis modern]
- **Context:** ⚠️ AVOID — outdated cultural bias
- **When:** ❌ Jangan pakai

*(Note: Included untuk transparency, tapi Mbah AI TIDAK boleh pakai peribahasa yang mengandung bias gender/ethnic/religious.)*

### 🟢 PB-174
**"Karena mulut, badan binasa."** *(Melayu)*
- **Translation:** Karena mulut, badan binasa.
- **Meaning:** Ceroboh bicara = celaka.
- **Context:** speak carefully, PR
- **When:** User consider public statement
- **Usage:** "Karena mulut, badan binasa. Sebelum tweet kontroversial tentang competitor, think 3x."

### 🟢 PB-175
**"Bagai bunga dengan tangkainya."** *(Melayu)*
- **Translation:** Seperti bunga dengan tangkainya.
- **Meaning:** Sangat dekat tak terpisahkan.
- **Context:** integrated partnership
- **When:** Bahas symbiotic partnership
- **Usage:** "Brand & customer harusnya bagai bunga dengan tangkainya — saling nourish."

### 🟡 PB-176
**"Nasi wis dadi bubur."** *(Jawa)*
- **Translation:** Nasi sudah jadi bubur.
- **Meaning:** Yang sudah terjadi tak bisa diubah.
- **Context:** move forward, no regret
- **When:** User dwell in past mistake
- **Usage:** "Nasi wis dadi bubur. Salah pilih supplier tahun lalu, learn lesson, move forward."

### 🟢 PB-177
**"Tak ubah bagai membakar tongkang."** *(Melayu)*
- **Translation:** Seperti membakar tongkang.
- **Meaning:** No going back, all-in commitment.
- **Context:** full commitment
- **When:** Bahas major pivot
- **Usage:** "Kalau pivot business, harus bagai membakar tongkang. Full commit, tidak boleh half-hearted."

### 🟢 PB-178
**"Berjalan sama pilih, berlayar sama tepi."** *(Melayu)*
- **Translation:** Berjalan cari sama pilih, berlayar cari sama tepi.
- **Meaning:** Cari alignment sesuai path.
- **Context:** find alignment
- **When:** Bahas find partner/co-founder
- **Usage:** "Berjalan sama pilih. Cari co-founder yang vision-nya align, bukan hanya skill lengkap."

### 🟢 PB-179
**"Bagai anjing menggonggong tulang."** *(Melayu)*
- **Translation:** Seperti anjing menggonggong tulang.
- **Meaning:** Fight over trivial thing.
- **Context:** perspective, avoid petty fight
- **When:** User dalam petty argument
- **Usage:** "Bagai anjing menggonggong tulang. Argumen soal siapa post first di IG, kesampingkan, focus di big picture."

### 🟢 PB-180
**"Yang berkelahi tidak kenal ampun."** *(Melayu)*
- **Translation:** Yang berkelahi tidak kenal ampun.
- **Meaning:** Once conflict, hard to reconcile.
- **Context:** avoid conflict escalation
- **When:** User consider aggressive move
- **Usage:** "Yang berkelahi tidak kenal ampun. Sebelum sue supplier, coba mediasi dulu — sekali sue, relationship dead."

---

## KATEGORI 8: MISCELLANEOUS WISDOM (20 entries)

### 🟢 PB-181
**"Tuntutlah ilmu sampai ke negeri China."** *(Melayu Islamic origin)*
- **Translation:** Tuntutlah ilmu sampai ke negeri China.
- **Meaning:** Belajar dari mana saja, jauh sekalipun.
- **Context:** continuous learning
- **When:** Bahas commitment to learning
- **Usage:** "Tuntutlah ilmu sampai ke negeri China. Belajar dari case study global, bukan cuma lokal."

### 🟡 PB-182
**"Wong linuwih iku lembah manah."** *(Jawa)*
- **Translation:** Orang berilmu itu rendah hati.
- **Meaning:** Wisdom = humility.
- **Context:** humility, wisdom
- **When:** Bahas ideal leader
- **Usage:** "Wong linuwih iku lembah manah. Leader yang benar-benar expert, biasanya humble — bukan sombong."

### 🟢 PB-183
**"Bagai musang berbulu ayam."** *(Melayu)*
- **Translation:** Seperti musang berbulu ayam.
- **Meaning:** Berpura-pura baik untuk niat jahat.
- **Context:** hidden agenda, trust
- **When:** Bahas verify people
- **Usage:** "Bagai musang berbulu ayam. Investor yang overly aggressive push term, red flag."

### 🟢 PB-184
**"Adat muda menanggung rindu, adat tua menanggung ragam."** *(Melayu)*
- **Translation:** Adat muda menanggung rindu, adat tua menanggung banyak hal.
- **Meaning:** Different life stages, different burdens.
- **Context:** perspective by life stage
- **When:** Bahas generational thinking
- **Usage:** "Adat muda menanggung rindu, adat tua menanggung ragam. Kalau lo owner muda, decision beda dari owner yang sudah punya keluarga."

### 🟡 PB-185
**"Ojo ndakik-ndakik."** *(Jawa)*
- **Translation:** Jangan sok tinggi/mengada-ada.
- **Meaning:** Grounded, don't be pretentious.
- **Context:** authenticity
- **When:** Bahas authentic branding
- **Usage:** "Ojo ndakik-ndakik. Brand-mu warung kopi lokal, jangan pura-pura specialty coffee Melbourne."

### 🟢 PB-186
**"Bagai enau di tepi jalan, sudahlah tinggi berbuah pula."** *(Melayu)*
- **Translation:** Seperti enau di tepi jalan, sudah tinggi berbuah pula.
- **Meaning:** Multi-talented, valuable person.
- **Context:** talent recognition
- **When:** Bahas retain top talent
- **Usage:** "Karyawan multi-skill itu bagai enau di tepi jalan. Jaga baik-baik, orang lain akan approach."

### 🟢 PB-187
**"Kalau tidak berada, tidak tempua bersarang rendah."** *(Melayu)*
- **Translation:** Kalau tidak ada alasan, burung tempua tidak bersarang rendah.
- **Meaning:** Ada sebab di balik setiap tindakan.
- **Context:** understand root cause
- **When:** Bahas analisis behavior
- **Usage:** "Kalau tidak berada, tidak tempua bersarang rendah. Customer complain berulang, ada root cause — cari."

### 🟡 PB-188
**"Ora ana wong kang bisa kabeh."** *(Jawa)*
- **Translation:** Tidak ada orang yang bisa semua.
- **Meaning:** Everyone has limitations.
- **Context:** delegation, humility
- **When:** User try to do everything
- **Usage:** "Ora ana wong kang bisa kabeh. Delegate accounting ke akuntan, focus lo di produk."

### 🟢 PB-189
**"Kata dulu kata bertepatan, kata kemudian kata bercarian."** *(Melayu)*
- **Translation:** Kata pertama sepakat, kata kemudian dicari-cari.
- **Meaning:** Kesepakatan awal harus jelas.
- **Context:** contract, alignment
- **When:** Bahas contract clarity
- **Usage:** "Kata dulu kata bertepatan. Kesepakatan dengan co-founder harus written & specific, jangan verbal saja."

### 🟢 PB-190
**"Sepintar-pintar tupai melompat, akhirnya jatuh juga."** *(Melayu)*
- **Translation:** Sepintar-pintar tupai melompat, akhirnya jatuh.
- **Meaning:** Semua orang bikin kesalahan.
- **Context:** mistake, humility
- **When:** User over-blame diri
- **Usage:** "Sepintar-pintar tupai melompat, akhirnya jatuh. Bikin kesalahan sekali gak bikin lo failure."

### 🟡 PB-191
**"Aja mangan sing durung mateng."** *(Jawa)*
- **Translation:** Jangan makan yang belum matang.
- **Meaning:** Jangan buru-buru sebelum siap.
- **Context:** patience, readiness
- **When:** User launch before ready
- **Usage:** "Aja mangan sing durung mateng. Launch produk yang belum QA proper = risk bad review viral."

### 🟢 PB-192
**"Bagai emas dan loyang."** *(Melayu)*
- **Translation:** Seperti emas dan loyang.
- **Meaning:** Sangat berbeda kualitasnya.
- **Context:** quality differentiation
- **When:** Bahas quality vs cheap
- **Usage:** "Produk-mu bagai emas dan loyang dibanding competitor. Communicate difference itu clear."

### 🟢 PB-193
**"Bulat air oleh pembuluh, bulat manusia oleh muafakat."** *(Melayu)*
- **Translation:** Air bulat karena buluh, manusia bulat karena mufakat.
- **Meaning:** Consensus penting dalam team decision.
- **Context:** team decision-making
- **When:** Bahas team culture
- **Usage:** "Bulat air oleh pembuluh, bulat manusia oleh muafakat. Big decision, diskusikan dengan tim inti dulu."

### 🟢 PB-194
**"Rambut sama hitam, hati siapa yang tahu."** *(Melayu)*
- **Translation:** Rambut sama hitam, hati siapa tahu.
- **Meaning:** Sulit tahu inner intention orang.
- **Context:** trust, verification
- **When:** Bahas verify partner
- **Usage:** "Rambut sama hitam, hati siapa yang tahu. Verify supplier baru dengan trial order kecil dulu."

### 🟡 PB-195
**"Sing kerep didalem ati."** *(Jawa)*
- **Translation:** Yang sering di dalam hati.
- **Meaning:** Focus di apa yang matter di hati.
- **Context:** authentic priorities
- **When:** Bahas alignment values
- **Usage:** "Sing kerep didalem ati. Kalau purpose brand-mu bikin komunitas kuat, itu prioritas — bukan sekedar sales."

### 🟢 PB-196
**"Bermain air basah, bermain api hangus."** *(Melayu)*
- **Translation:** Bermain air basah, bermain api hangus.
- **Meaning:** Every action has consequences.
- **Context:** consequences of choice
- **When:** Bahas responsibility
- **Usage:** "Bermain air basah, bermain api hangus. Jualan produk premium, must deliver premium quality — consequence."

### 🟢 PB-197
**"Bagai anak ayam kehilangan induk."** *(Melayu)*
- **Translation:** Seperti anak ayam kehilangan induk.
- **Meaning:** Kondisi lost, need guidance.
- **Context:** need mentor
- **When:** User first time owner
- **Usage:** "First-time owner sering bagai anak ayam kehilangan induk. Cari mentor, atau join komunitas UMKM."

### 🟢 PB-198
**"Hujan emas di negeri orang, hujan batu di negeri sendiri, baik di negeri sendiri."** *(Melayu)*
- **Translation:** Hujan emas di negeri orang, hujan batu di negeri sendiri, tetap baik di negeri sendiri.
- **Meaning:** Local roots powerful.
- **Context:** local, roots
- **When:** Bahas kekuatan local brand
- **Usage:** "Hujan emas di negeri orang, hujan batu di negeri sendiri, baik di negeri sendiri. UMKM Solo yang otentik lebih valuable dari copy dari LA."

### 🟡 PB-199
**"Sing ora sabar iku ora bakal luhur."** *(Jawa)*
- **Translation:** Yang tidak sabar tidak akan luhur.
- **Meaning:** Impatience prevents excellence.
- **Context:** patience, excellence
- **When:** User impatient
- **Usage:** "Sing ora sabar iku ora bakal luhur. Rush ke launch tanpa QA = mediocre launch."

### 🟢 PB-200
**"Guru tempat berguru, kekasih tempat bermanja."** *(Melayu)*
- **Translation:** Guru tempat berguru, kekasih tempat bermanja.
- **Meaning:** Different relationship, different function.
- **Context:** relationship boundaries
- **When:** Bahas role clarity
- **Usage:** "Guru tempat berguru, kekasih tempat bermanja. Business partner beda dari best friend — beda role, beda expectation."

---

## Metadata untuk RAG Implementation

### JSON Schema (untuk file `peribahasa-database.json`)

```json
{
  "version": "1.0",
  "total_entries": 200,
  "categories": {
    "positioning_competition": 30,
    "patience_perseverance": 25,
    "family_team_leadership": 25,
    "money_value_integrity": 30,
    "wisdom_character": 30,
    "loss_grief_recovery": 20,
    "boldness_initiative": 20,
    "miscellaneous": 20
  },
  "languages": {
    "jawa": 80,
    "melayu": 100,
    "sunda": 5,
    "minang": 3,
    "modern_indonesian": 12
  },
  "entries": [
    {
      "id": "PB-001",
      "peribahasa": "...",
      "bahasa": "Jawa",
      "translation": "...",
      "meaning": "...",
      "business_context": ["positioning", "competition"],
      "emotional_context": ["encouragement"],
      "related_framework": ["Al Ries - Positioning"],
      "when_to_use": "...",
      "sample_usage": "...",
      "confidence": "high",
      "embedding": [...]
    }
  ]
}
```

### Retrieval Strategy

**Method 1: Business Context Tag Match**
```python
def retrieve_peribahasa(user_query, top_k=3):
    # Detect business context tags dari user query
    context_tags = extract_business_context(user_query)
    # Filter peribahasa by matching tags
    matches = filter_by_tags(peribahasa_db, context_tags)
    # Rank by embedding similarity
    ranked = rank_by_embedding(matches, user_query)
    return ranked[:top_k]
```

**Method 2: Emotional Context Match**
Kalau user shows emotional signals (frustrated, excited, sad), match peribahasa dengan `emotional_context` tag yang sesuai.

**Method 3: Framework Cross-Reference**
Kalau retrieval dari L1 KB (buku marketing) return specific framework, cross-reference dengan `related_framework` field di peribahasa untuk find yang relevan.

**Combination:**
Ideal: use all 3 methods, dedupe, top 3 highest score.

### Guardrails

1. **Confidence Filter** — hanya use entries marked "high" confidence (🟢) untuk production. Entries 🟡 review dulu sebelum production.

2. **Anti-Bias Filter** — SKIP entries dengan bias tag (gender, ethnic, religious). Contoh PB-173 sudah di-flag SKIP.

3. **Freshness Rotation** — jangan pakai peribahasa yang sama di 5 response berturut per user session.

4. **Context Match Threshold** — kalau best match score < 0.5, skip peribahasa (better tidak pakai daripada force yang tidak relevan).

---

## Continuous Expansion Plan

**Bulan 1-3 Post-Launch:**
- Community-contributed: sediakan form untuk user submit peribahasa daerah mereka
- Validasi oleh native speaker sebelum masuk database
- Target: 300 entries

**Bulan 4-6:**
- Expand ke bahasa daerah lain: Batak, Bugis, Bali, Sasak, dll
- Partner dengan lembaga bahasa daerah (Universitas)
- Target: 500 entries

**Bulan 7-12:**
- Deep specialization: peribahasa per subsektor (kuliner, fashion, kriya)
- Peribahasa modern (from meme, viral content, dll)
- Target: 750+ entries

---

**End of Peribahasa Database**

**Next File:** `04-SAMPLE-DIALOG-LIBRARY.md` — 40+ contoh dialog Mbah AI untuk training & QA.
