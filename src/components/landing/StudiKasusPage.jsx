// # Halaman Studi Kasus UMKM — desain sesuai Stitch mockup
// # Featured case + grid cards dengan filter sektor berfungsi
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Store } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// # ============ FEATURED CASE (Studi kasus unggulan dengan foto mendag.jpg diperbesar maksimal) ============
const FEATURED = {
  badge: "Studi Kasus Unggulan & Kunjungan Resmi",
  tags: ["Kriya & Wastra Klaten", "Studi Kasus Nyata"],
  title:
    "Lurik Prasojo Klaten: Dari Ancaman Gulung Tikar hingga Tembus Pasar Jepang",
  // # Mengarah ke file mendag.jpg di folder src/assets/
  image: new URL("../../assets/mendag.jpg", import.meta.url).href,
  caption: "Mendag Kunjungi UMKM Tenun Lurik Prasojo di Klaten, Jawa Tengah",
  tantangan:
    "Terjebak stok menumpuk selama 3 tahun, kalah bersaing secara harga melawan serbuan kain tenun cetak pabrikasi berekspedisi tinggi, dan margin laba kian tertekan hingga titik kritis.",
  petuah:
    '"Aja melu balapan ing dalan lendhut. Lurik dudu sandhangan kasurenan, nanging serat urip. Pindah dalan saka kain seragam murah tumuju slow-fashion serat alam pewarna indigo."',
  deskripsi:
    "Reposisi penuh portofolio kain: menghentikan lini seragam bermotif tipis, mengalihkan pewarnaan indigo alami lereng Merapi, dan menyematkan sertifikat narasi perenun pada tiap lembar kain.",
  stats: [
    { label: "Margin Profit", value: "+140%", sub: "Dari 8% ke 22%" },
    { label: "Perputaran Kas", value: "28 Hari", sub: "Sebelumnya 8 bln" },
    { label: "Jangkauan Ekspor", value: "3 Butik", sub: "Kyoto & Melbourne" },
  ],
};

// # ============ SEMUA CASE STUDY DARI KB 07 (Menggunakan Unsplash) ============
const CASES = [
  {
    name: "Sambal Bu Tejo Solo",
    sector: "Kuliner",
    category: "Kuliner & F&B Solo",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&q=80",
    headline: "Selamat dari Kebocoran HPP & Tipu Pembeli Online",
    masalah:
      "Omzet terlihat Rp 80 juta/bulan tetapi saldo rekening terus menyusut akibat salah kalkulasi susut botol, galon (16.5%), dan promo diskon agresif platform marketplace.",
    solusi:
      "Penerapan formula HPP model lumbung panen, perhitungan diskon bakar modal, dan peluncuran kemasan topless kaca berdesign etnis khusus segmen oleh-oleh premium.",
    stats: [
      { label: "Margin Bersih", value: "4% → 24%" },
      { label: "Kesehatan Kas", value: "Sehat Positif" },
    ],
    cta: "Pelajari Rekalkulasi HPP",
    framework: "Financial Fundamentals",
  },
  {
    name: "Keripik Tempe Sanan",
    sector: "Kuliner",
    category: "Makanan Ringan Malang",
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&q=80",
    headline: "Menembus Pasar Modern Tanpa Terjerat Konsinyasi Maut",
    masalah:
      "Modal kerja sering putar-putar, jika tertahan sistem tempo pembayaran 90 hari di jaringan pasar swalayan daerah hingga pemilik hampir tak sanggup membeli bahan kedele harian.",
    solusi:
      "Redistribusi kanal ke 120 jaringan reseller mandiri berbasis arisan ibu-ibu dan peran transitional distribusi petani pembayaran tunai di muka serta kemasan ziplock kedap udara.",
    stats: [
      { label: "Arus Kas", value: "7 Hari Cair" },
      { label: "Kapasitas Produksi", value: "Naik 3x Lipat" },
    ],
    cta: "Pelajari Distribusi Mandiri",
    framework: "Blue Ocean Strategy",
  },
  {
    name: "Griya Anyaman Sukoharjo",
    sector: "Kriya",
    category: "Kriya Mebel Sukoharjo",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&q=80",
    headline: "Membangun SOP Tukang & Regenerasi Pemuda Desa",
    masalah:
      "Generasi muda desa enggan meneruskan tradisi kriya anyaman, pesanan ekspor turut tertunda dan kerja tanpa pernah diukur akibat ketiadaan standar kerja visual yang presisi.",
    solusi:
      "Rancang modul pemagangan catering bermotif, pembagian kerja semi-modular, dan batu kendali mutu fisik di setiap bangku kerja.",
    stats: [
      { label: "Regenerasi Baru", value: "22 Perajin Muda" },
      { label: "Suku Produk Ekspor", value: "Turun ~5%" },
    ],
    cta: "Pelajari SOP Regenerasi",
    framework: "Lean Startup",
  },
  {
    name: "Kopi Tuku",
    sector: "Kuliner",
    category: "F&B Coffee Jakarta",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
    headline: "Dari Gang Sempit Cipete ke Cultural Phenomenon Nasional",
    masalah:
      "Warung kopi di gang sempit bersaing dengan chain besar seperti Starbucks dan Kopi Kenangan yang budget marketing miliaran.",
    solusi:
      'Positioning ultra-fokus "es kopi susu untuk anak sekolah" harga 15-25rb. Slow growth intentional, community first, founder personal presence.',
    stats: [
      { label: "Posisi Brand", value: "Cultural Icon" },
      { label: "Strategi", value: "Anti-Mainstream" },
    ],
    cta: "Pelajari Positioning Niche",
    framework: "Positioning",
  },
  {
    name: "Erigo",
    sector: "Fashion",
    category: "Fashion Streetwear Depok",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&q=80",
    headline: "Dari Kaki Lima ke New York Fashion Week",
    masalah:
      "Online seller biasa di Bukalapak tahun 2011, tidak punya brand identity, bersaing dengan ribuan seller fashion serupa.",
    solusi:
      "Konsisten iterate kualitas + affordable premium positioning selama 10 tahun. Investasi brand visual identity + berani ekspansi internasional.",
    stats: [
      { label: "Tim", value: "250+ Karyawan" },
      { label: "Pencapaian", value: "NYFW 2022" },
    ],
    cta: "Pelajari Brand Consistency",
    framework: "Lean Startup",
  },
  {
    name: "Wardah",
    sector: "Beauty",
    category: "Beauty Halal Jakarta",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80",
    headline: "25 Tahun Membangun Brand Equity Kosmetik Halal",
    masalah:
      "Memulai dari lab kecil di garasi rumah, di era tidak ada brand kosmetik halal yang mainstream.",
    solusi:
      "First mover di kategori kosmetik halal. Konsistensi brand messaging 25+ tahun, riset consumer muslim mendalam, ekspansi dari salon ke toko modern ke e-commerce.",
    stats: [
      { label: "Brand Equity", value: "25+ Tahun" },
      { label: "Kategori", value: "Pioneer Halal" },
    ],
    cta: "Pelajari Category Creation",
    framework: "Brand Equity",
  },
  {
    name: "Mie Gacoan",
    sector: "Kuliner",
    category: "F&B Restaurant Malang",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80",
    headline: "Extreme Positioning yang Bikin Seluruh Indonesia Ngantri",
    masalah:
      "Masuk ke pasar mie ayam/noodle yang sudah saturated dengan ribuan pemain.",
    solusi:
      "Extreme positioning (level pedas gila), naming viral (Iblis, Setan, Angel), antrian sebagai social proof, menu simple mudah franchise.",
    stats: [
      { label: "Cabang", value: "100+" },
      { label: "Viral Factor", value: "Extreme" },
    ],
    cta: "Pelajari Purple Cow Strategy",
    framework: "Purple Cow",
  },
  {
    name: "Torch",
    sector: "Fashion",
    category: "Fashion Bags Bandung",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    headline: "Brand Tas Lokal yang Compete Langsung dengan Osprey",
    masalah:
      "Pasar tas travel didominasi brand global (Osprey, Deuter) dengan budget R&D dan marketing jauh lebih besar.",
    solusi:
      'Positioning "For The Uncompromising" targeting serious traveler. Product quality comparable ke global brand + storytelling founder passion travel.',
    stats: [
      { label: "Segmen", value: "Premium Local" },
      { label: "Tagline", value: "Uncompromising" },
    ],
    cta: "Pelajari Premium Positioning",
    framework: "Zero to One",
  },
  {
    name: "Sensatia Botanicals",
    sector: "Beauty",
    category: "Skincare Natural Bali",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80",
    headline: "Blue Ocean Affordable Natural Skincare dari Bali ke 20+ Negara",
    masalah:
      "Bersaing dengan The Body Shop dan L'Occitane yang budget marketing dan distribusi jauh lebih kuat.",
    solusi:
      'Blue Ocean: eliminate packaging mewah, reduce harga 30-50% below imported brand, raise natural ingredient story, create kategori "affordable natural skincare Made in Bali".',
    stats: [
      { label: "Ekspor", value: "20+ Negara" },
      { label: "Strategi", value: "Blue Ocean" },
    ],
    cta: "Pelajari Blue Ocean Strategy",
    framework: "Blue Ocean",
  },
];

// # ============ SECTOR FILTER ============
const SECTORS = [
  { label: "Semua Kasus", match: "" },
  { label: "Kriya & Kerajinan", match: "Kriya" },
  { label: "Kuliner & Olahan Pangan", match: "Kuliner" },
  { label: "Fashion & Wastra", match: "Fashion" },
  { label: "Beauty & Kecantikan", match: "Beauty" },
];

// # ============ FOCUS TAGS ============
const FOCUS_TAGS = [
  "Perang Harga",
  "Arus Kas & HPP",
  "Kaderisasi & Regenerasi",
  "Pemasaran Digital",
  "Negosiasi Supplier",
];

// # ============ IMPACT STATS ============
const IMPACT = [
  { icon: Store, value: "32 Kasus", label: "Terverifikasi Riset" },
  { icon: TrendingUp, value: "+38%", label: "Rata-rata Margin" },
  { icon: Users, value: "Rp 4.2 M", label: "Modal Kas Tercipta" },
];

export default function StudiKasusPage({
  onStartChat,
  onNavigate,
  activePage,
}) {
  // # State untuk mengontrol sektor filter aktif
  const [activeSector, setActiveSector] = useState("Semua Kasus");

  // # Logika penyaringan data studi kasus berdasarkan sektor
  const filteredCases =
    activeSector === "Semua Kasus"
      ? CASES
      : CASES.filter((c) => {
          const sectorData = SECTORS.find((s) => s.label === activeSector);
          return sectorData && c.sector === sectorData.match;
        });

  return (
    <div className="min-h-screen bg-white">
      {/* # Komponen Navigasi */}
      <Navbar
        onStartChat={onStartChat}
        onNavigate={onNavigate}
        activePage={activePage}
      />

      {/* # ============ HEADER SECTION ============ */}
      <section
        className="pt-28 pb-8"
        style={{
          background: "linear-gradient(180deg, #FDF6E3 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-[10px] tracking-widest text-mbah-terracotta mb-3">
            CATATAN LAPANGAN & REKAM JEJAK NYATA
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-mbah-brown mb-3">
            32 Studi Kasus Transformasi UMKM
          </h1>
          <p className="text-mbah-brown/60 max-w-2xl mb-8">
            Kisah jatuh bangun para wirausahawan nusantara yang bangkit berbenah
            bersama bimbingan Mbah AI. Solusi realistis berakar kearifan luhur,
            teruji di pasar rakyat hingga tembus kurasi ekspor mancanegara.
          </p>

          {/* # Filter Sektor */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs text-mbah-brown/40">SEKTOR:</span>
            {SECTORS.map((s) => (
              <button
                key={s.label}
                onClick={() => setActiveSector(s.label)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeSector === s.label
                    ? "bg-mbah-terracotta text-white"
                    : "bg-white text-mbah-brown/60 border border-gray-200 hover:border-mbah-gold"
                }`}
              >
                {s.label} (
                {s.match === ""
                  ? CASES.length
                  : CASES.filter((c) => c.sector === s.match).length}
                )
              </button>
            ))}
          </div>

          {/* # Fokus Masalah Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-mbah-brown/40">FOKUS MASALAH:</span>
            {FOCUS_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[10px] text-mbah-brown/50 border border-gray-200"
              >
                • {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* # ============ FEATURED CASE STUDY (LURIK PROSOJO + FOTO MENDAG DIPERBESAR MAKSIMAL) ============ */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
          >
            {/* # Badge Atas */}
            <div className="px-6 pt-5 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-mbah-terracotta text-white">
                ✦ {FEATURED.badge}
              </span>
              {FEATURED.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-[10px] text-mbah-brown/50 border border-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-6 items-center">
              {/* # Kolom Kiri: Teks Konten & Petuah */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-mbah-brown mb-4 leading-tight">
                  {FEATURED.title}
                </h2>

                <div className="mb-4 p-3 bg-red-50/50 rounded-lg border-l-2 border-red-300">
                  <p className="text-[10px] text-red-600 font-semibold mb-1">
                    ⚠ Tantangan Utama:
                  </p>
                  <p className="text-xs text-mbah-brown/70 leading-relaxed">
                    {FEATURED.tantangan}
                  </p>
                </div>

                <div className="mb-4 p-3 bg-mbah-cream/50 rounded-lg border-l-2 border-mbah-gold">
                  <p className="text-[10px] text-mbah-terracotta font-semibold mb-1">
                    🍵 Petuah & Strategi Mbah Wignyo:
                  </p>
                  <p className="font-heading italic text-sm text-mbah-brown/80 leading-relaxed">
                    {FEATURED.petuah}
                  </p>
                </div>

                <p className="text-sm text-mbah-brown/60 leading-relaxed mb-4">
                  {FEATURED.deskripsi}
                </p>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={onStartChat}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-mbah-terracotta text-white hover:bg-mbah-terracotta-light transition-all"
                  >
                    Pelajari Bedah Kasus Lengkap <ArrowRight size={12} />
                  </button>
                  <button
                    onClick={onStartChat}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-mbah-brown/60 border border-gray-200 hover:border-mbah-gold transition-all"
                  >
                    Diskusikan Kasus Ini dengan Mbah
                  </button>
                </div>
              </div>

              {/* # Kolom Kanan: Foto Mendag Diperbesar Maksimal (h-80 sm:h-96) + Caption + Statistik */}
              <div className="space-y-4">
                <div className="bg-mbah-cream/20 border border-gray-100 rounded-xl p-3 shadow-xs">
                  {/* # Ukuran tinggi kontainer gambar diperbesar maksimal agar proporsional dan rapi */}
                  <div className="w-full h-80 sm:h-96 rounded-lg overflow-hidden bg-white shadow-xs mb-2">
                    <img
                      src={FEATURED.image}
                      alt={FEATURED.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* # Keterangan kunjungan Mendag */}
                  <p className="text-xs font-semibold text-mbah-terracotta text-center px-2">
                    📍 {FEATURED.caption}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {FEATURED.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100"
                    >
                      <p className="text-[10px] text-mbah-brown/40 mb-1">
                        {stat.label}
                      </p>
                      <p className="font-heading font-bold text-mbah-terracotta text-lg">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-mbah-brown/40">
                        {stat.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* # ============ CASE STUDY GRID SECTION ============ */}
      <section className="py-12 bg-gray-50/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[10px] tracking-widest text-mbah-brown/40 mb-1">
                ARSIP DOKUMENTASI
              </p>
              <h2 className="font-heading text-xl font-bold text-mbah-brown">
                Pembelajaran dari Berbagai Klaster ({filteredCases.length}{" "}
                kasus)
              </h2>
            </div>
            <p className="text-[10px] text-mbah-brown/40">
              ✦ Semua data diverifikasi langsung di lapangan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filteredCases.map((cs, i) => (
              <motion.div
                key={cs.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-mbah-gold/30 transition-all group"
              >
                <div className="relative h-40 bg-gray-100 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/90 text-mbah-brown backdrop-blur-sm shadow-xs">
                    {cs.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-bold text-mbah-brown text-base mb-1 leading-tight">
                    {cs.headline}
                  </h3>

                  <div className="mt-3 mb-2">
                    <p className="text-[10px] text-red-500 font-semibold mb-1">
                      ⚡ Masalah Nyata:
                    </p>
                    <p className="text-xs text-mbah-brown/60 leading-relaxed">
                      {cs.masalah}
                    </p>
                  </div>

                  <div className="mb-3">
                    <p className="text-[10px] text-mbah-sage font-semibold mb-1">
                      🍵 Solusi Mbah:
                    </p>
                    <p className="text-xs text-mbah-brown/60 leading-relaxed">
                      {cs.solusi}
                    </p>
                  </div>

                  <div className="flex gap-4 py-3 border-t border-gray-100">
                    {cs.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-[10px] text-mbah-brown/40">
                          {stat.label}
                        </p>
                        <p className="text-sm font-bold text-mbah-brown">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onStartChat}
                    className="flex items-center gap-1.5 text-xs text-mbah-terracotta font-medium mt-2 hover:text-mbah-terracotta-light transition-all"
                  >
                    {cs.cta} <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-mbah-brown/40 font-heading italic">
                Belum ada studi kasus di sektor ini. Coba filter lain.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* # ============ IMPACT STATS SECTION ============ */}
      <section className="py-10 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-widest text-mbah-brown/40 mb-1">
                DAMPAK NYATA KOMUNITAS DAMPINGAN MBAH AI
              </p>
              <h3 className="font-heading font-bold text-mbah-brown text-lg">
                Kolektivitas Bukti, Bukan Sekadar Teori Konsultasi
              </h3>
            </div>
            <div className="flex items-center gap-8">
              {IMPACT.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="text-center">
                    <Icon
                      size={20}
                      className="text-mbah-terracotta mx-auto mb-1"
                    />
                    <p className="font-heading font-bold text-mbah-brown text-xl">
                      {item.value}
                    </p>
                    <p className="text-[10px] text-mbah-brown/40">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* # ============ CTA BOTTOM SECTION ============ */}
      <section className="py-12 bg-mbah-brown text-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <img
            src={new URL("../../assets/mbahai-logo.png", import.meta.url).href}
            alt="Mbah AI"
            className="w-16 h-16 rounded-full border-2 border-mbah-gold/30 flex-shrink-0 object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-[10px] tracking-widest text-mbah-gold mb-1">
              Pintu Pendopo Selalu Terbuka
            </p>
            <h2 className="font-heading text-2xl font-bold mb-2">
              Ingin usahamu menjadi kisah sukses berikutnya?
            </h2>
            <p className="text-white/60 text-sm">
              Ceritakan kegelisahan stok, kendala arus kas, atau kebingungan
              arah pasarmu ke Simbah sekarang. Tanpa jargon rumit, langsung
              petunjuk taktis yang bisa diterapkan besok pagi.
            </p>
          </div>
          <button
            onClick={onStartChat}
            className="bg-white text-mbah-brown font-semibold py-3 px-6 rounded-xl hover:bg-mbah-cream transition-all flex-shrink-0"
          >
            Konsultasi Sekarang 🍵
          </button>
        </div>
      </section>

      {/* # Footer */}
      <Footer />
    </div>
  );
}
