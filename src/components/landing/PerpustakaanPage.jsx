// # Halaman Perpustakaan Pengetahuan — sesuai design Stitch
// # Rich cards: buku + intisari + aplikasi lapangan + stats + peribahasa
// # Filter berfungsi untuk kategori buku
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Target,
  Shield,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// # ============ KATEGORI FILTER ============
const FILTERS = [
  { label: "Semua Koleksi" },
  { label: "Pemasaran & Merek" },
  { label: "Tata Kelola & Keuangan" },
  { label: "Filosofi & Mental Pengusaha" },
  { label: "Operasional & Rantai Pasok" },
];

// # ============ DATA BUKU DARI KB 06-MARKETING-FRAMEWORKS ============
// # Setiap buku punya field "filter" untuk matching dengan kategori, lengkap dengan terjemahan Intisari Simbah
const BUKU = [
  {
    id: 1,
    tag: "Pemasaran Strategis",
    tagColor: "bg-red-100 text-red-700",
    filter: "Pemasaran & Merek", // # untuk filter
    title: "Positioning",
    author: "Al Ries & Jack Trout",
    subtitle: "Bab: Diferensiasi Produk di Pasar Padat",
    intisari:
      '"Ojo dadi ikan cilik ing kali sing kebek panganan. Coro nggone kasedhiyan produk supaya ora kalah saingan rupa."',
    intisariTranslate:
      "(Jangan jadi ikan kecil di sungai yang penuh makanan. Cari celah ketersediaan produk supaya tidak kalah bersaing rupa.)",
    aplikasi: [
      "Ubah menu warung dengan signature bumbu atas yang menjadi daya pikat tersendiri.",
      "Bungkus tampila total dengan narasi cerita asal desa dan garansi higienis bersertifikasi.",
    ],
    stats: [
      { label: "Efek Diferensiasi", value: "+38% Margin", icon: TrendingUp },
    ],
    ctaText: "Tanya Simbah soal Bab Ini",
  },
  {
    id: 2,
    tag: "Inovasi Pasar",
    tagColor: "bg-blue-100 text-blue-700",
    filter: "Pemasaran & Merek",
    title: "Blue Ocean Strategy",
    author: "W. Chan Kim & Renee Mauborgne",
    subtitle: "Metodologi Samudra Biru UMKM",
    intisari:
      '"Metu saka kolam getih perang rega. Gawe segmen anyar sing pembelane operasional lan ora mung golek diskon."',
    intisariTranslate:
      "(Keluar dari kolam darah perang harga. Buat segmen baru yang pembelanya loyal pada operasional dan bukan sekadar mencari diskon.)",
    aplikasi: [
      "Komparasi: Batik Printing vs Batik Tulis Canting — jangan adu murah batik cap dengan sablonisasi tekstil.",
      "Hapus biaya etalase fisik yang boncos.",
      "Ciptakan nilai cerita personal per helai kain.",
    ],
    stats: [{ label: "Segmen Baru", value: "Nol Kompetitor", icon: Target }],
    ctaText: "Tanya Simbah soal Bab Ini",
  },
  {
    id: 3,
    tag: "Manajemen Resiko",
    tagColor: "bg-green-100 text-green-700",
    filter: "Tata Kelola & Keuangan",
    title: "The Lean Startup",
    author: "Eric Ries",
    subtitle: "Merintis Tanpa Modhal Agheng",
    intisari:
      '"Alon-alon waton kelakon konthi tunangan cermat. Tes pasar dhisik sakadhurunge toko masih utawa suwa ruko larang."',
    intisariTranslate:
      "(Pelan-pelan asal terlaksana dengan perhitungan cermat. Tes pasar dulu sebelum sewa ruko atau toko dengan harga mahal.)",
    aplikasi: [
      "Masak 20 porsi uji coba untuk tetangga dan pembeli awal, rekam kritik pedas rasa tanpa tersinggung.",
      "Jangan beli freezer komersial sebelum pesanan harian melampaui kapasitas kulkas rumahan.",
      "Gunakan WhatsApp Katalog sebagai aplikasi toko online mandiri.",
    ],
    stats: [
      { label: "Efisiensi Modal", value: "Hemat 70% Biaya", icon: Shield },
    ],
    ctaText: "Tanya Simbah soal Bab Ini",
  },
  {
    id: 4,
    tag: "Komunikasi Brand",
    tagColor: "bg-amber-100 text-amber-700",
    filter: "Pemasaran & Merek",
    title: "Building a StoryBrand",
    author: "Donald Miller",
    subtitle: "Jadikan Customer Hero, Brand Jadi Guide",
    intisari:
      '"Pelanggan ora peduli karo awakmu. Pelanggan peduli karo awake dewe. Ubah ceritamu dadi cerita mereka."',
    intisariTranslate:
      "(Pelanggan tidak peduli dengan dirimu. Pelanggan peduli dengan diri mereka sendiri. Ubah ceritamu jadi cerita mereka.)",
    aplikasi: [
      'Ubah bio IG dari "Kami adalah brand batik..." jadi "Bingung cari batik untuk mantu? Kami bantu pilihkan dalam 5 menit."',
      "Setiap caption harus mulai dari masalah customer, bukan prestasi brand.",
    ],
    stats: [{ label: "Engagement", value: "+45% CTR", icon: TrendingUp }],
    ctaText: "Tanya Simbah soal Bab Ini",
  },
  {
    id: 5,
    tag: "Pemasaran & Merek",
    tagColor: "bg-orange-100 text-orange-700",
    filter: "Pemasaran & Merek",
    title: "Contagious (STEPPS)",
    author: "Jonah Berger",
    subtitle: "6 Prinsip Bikin Konten Viral",
    intisari:
      '"Konten sing viral iku dudu kebetulan. Ana 6 prinsip sing gawe wong pengen share: Social Currency, Triggers, Emotion, Public, Practical Value, Stories."',
    intisariTranslate:
      "(Konten yang viral itu bukan kebetulan. Ada 6 prinsip yang membuat orang ingin membagikan: Mata Uang Sosial, Pemicu, Emosi, Publik, Nilai Praktis, Cerita.)",
    aplikasi: [
      'Bikin konten "rahasia bumbu warung" (Practical Value) — orang tag temennya.',
      'Nama menu yang provocative trigger sharing: "Sambal Setan", "Kopi Sunrise Merapi".',
      "Packaging yang Instagrammable = free marketing dari customer.",
    ],
    stats: [{ label: "Viral Rate", value: "3x Sharing", icon: TrendingUp }],
    ctaText: "Tanya Simbah soal Bab Ini",
  },
  {
    id: 6,
    tag: "Filosofi & Mental",
    tagColor: "bg-purple-100 text-purple-700",
    filter: "Filosofi & Mental Pengusaha",
    title: "Start with Why",
    author: "Simon Sinek",
    subtitle: "Orang Beli KENAPA, Bukan APA",
    intisari:
      '"Pelanggan ora tuku opo sing kowe dodol. Pelanggan tuku kenopo kowe dodol kuwi. Purpose dulu, produk kemudian."',
    intisariTranslate:
      "(Pelanggan tidak membeli apa yang kamu jual. Pelanggan membeli mengapa kamu menjual hal tersebut. Tujuan dulu, produk kemudian.)",
    aplikasi: [
      'Tulis WHY brand-mu di 1 kalimat: "Kami percaya heritage Indonesia layak dilestarikan lewat batik modern."',
      "Setiap keputusan bisnis harus bisa dijawab: apakah ini sejalan dengan WHY kita?",
    ],
    stats: [{ label: "Brand Loyalty", value: "+60% Retention", icon: Shield }],
    ctaText: "Tanya Simbah soal Bab Ini",
  },
  {
    id: 7,
    tag: "Operasional",
    tagColor: "bg-teal-100 text-teal-700",
    filter: "Operasional & Rantai Pasok",
    title: "Hooked",
    author: "Nir Eyal",
    subtitle: "Bangun Produk yang Membentuk Kebiasaan",
    intisari:
      '"Produk sing apik iku gawe customer bali tanpa mikir. Trigger, Action, Variable Reward, Investment — siklus kebiasaan."',
    intisariTranslate:
      "(Produk yang bagus itu membuat pelanggan kembali tanpa berpikir. Pemicu, Aksi, Imbalan Variabel, Investasi — siklus kebiasaan.)",
    aplikasi: [
      'Kirim notif WA pagi: "Kopi pagi sudah siap, Kak!" — trigger harian.',
      "Bikin proses order 1-tap link — action semudah mungkin.",
      "Kasih surprise di packaging — variable reward bikin senang.",
    ],
    stats: [
      { label: "Repeat Order", value: "+55% Retention", icon: TrendingUp },
    ],
    ctaText: "Tanya Simbah soal Bab Ini",
  },
  {
    id: 8,
    tag: "Tata Kelola",
    tagColor: "bg-cyan-100 text-cyan-700",
    filter: "Tata Kelola & Keuangan",
    title: "Managing Brand Equity",
    author: "David Aaker",
    subtitle: "Brand Adalah Aset Jangka Panjang",
    intisari:
      '"Brand equity iku simpanan jangka panjang. Awareness, Perceived Quality, Loyalty — telu iki sing gawe brand bisa charge premium."',
    intisariTranslate:
      "(Ekuitas merek adalah tabungan jangka panjang. Kesadaran, Kualitas yang Dirasakan, Loyalitas — ketiganya ini yang membuat merek bisa menetapkan harga premium.)",
    aplikasi: [
      "Konsistensi visual identity minimal 2 tahun — jangan gonta-ganti logo.",
      "Investasi di kualitas produk stabil — perceived quality naik otomatis.",
    ],
    stats: [{ label: "Premium Pricing", value: "+30% Margin", icon: Shield }],
    ctaText: "Tanya Simbah soal Bab Ini",
  },
  {
    id: 9,
    tag: "Pemasaran & Merek",
    tagColor: "bg-pink-100 text-pink-700",
    filter: "Pemasaran & Merek",
    title: "Purple Cow",
    author: "Seth Godin",
    subtitle: "Jadilah Luar Biasa atau Tidak Terlihat",
    intisari:
      '"Ing jaman kebak informasi, aman iku mati. Sing menang iku sing berani beda — remarkable, layak diomongke uwong."',
    intisariTranslate:
      "(Di zaman yang penuh informasi, aman itu mati. Yang menang adalah yang berani berbeda — luar biasa, layak dibicarakan orang.)",
    aplikasi: [
      'Cari 1 hal yang bikin produkmu "aneh" dalam cara yang positif.',
      "Mie Gacoan menang bukan karena mie-nya enak — tapi karena extreme spicy level + nama menu Iblis.",
    ],
    stats: [{ label: "Word of Mouth", value: "5x Sharing", icon: TrendingUp }],
    ctaText: "Tanya Simbah soal Bab Ini",
  },
];

// # ============ DATA PERIBAHASA DARI KB 03-PERIBAHASA-DATABASE ============
const PERIBAHASA = [
  {
    aksara: "ꦲꦸꦫꦶꦥ꧀ꦲꦶꦏꦸꦲꦸꦫꦸꦥ꧀",
    judul: "Urip Iku Urup",
    kategori: "Fondasi Keberkahan & Kemanfaatan Laba",
    deskripsi:
      "Perjuangan sejati bukan sekadar menumpuk selisih kas, melainkan menyalakan lentera, menyejahterakan dapur karyawan, mentransformasikan supplier, serta menjadi penyangga tatanan tetangga terima paceklik.",
    penerapan:
      "Alokasikan 2.5% laba kotor untuk dana darurat paguyuban pekerja pasar.",
  },
  {
    aksara: "ꦗꦺꦂꦧꦱꦸꦏꦶꦩꦮꦧꦺꦪ",
    judul: "Jer Basuki Mawa Beya",
    kategori: "Modal Keringat, Disiplin & Ketahanan Mental",
    deskripsi:
      "Setiap kemajuan omzet dan kesuksesan toko menuntut tekun payah. Tidak ada kemajuan instan, yang ada hanyalah ketekunan, memberat konsumtif pribadi, dan beradaptasi menjaga arus kas.",
    penerapan:
      "Pisahkan dompet pribadi dan laci toko sejak hari pertama berdagang.",
  },
  {
    aksara: "ꦲꦗꦶꦤꦶꦁꦢꦶꦫꦶꦱꦏꦭꦛꦶ",
    judul: "Ajining Diri Saka Lathi",
    kategori: "Integritas, Janji & Ketepatan Timbangan",
    deskripsi:
      "Kepercayaan konsumen adalah modal tak berwujud paling mahal di jagat bisnis. Boleh jadi merugi sedikit namun menjaga janji, karena hakikatnya menyimpan keuntungan jangka panjang.",
    penerapan:
      "Jika kiriman bahan baku berkurang kualitasnya, jujur sampaikan ke pembeli tetap.",
  },
];

// # ============ DOMAIN TAGS ============
const DOMAIN_TAGS = [
  "Perang Harga",
  "Arus Kas & HPP",
  "Kaderisasi & Regenerasi",
  "Pemasaran Digital",
  "Negosiasi Supplier",
  "Legalitas UMKM",
  "Marketplace",
  "Tim & Rekrut",
  "Customer Service",
  "Manajemen Krisis",
  "Ekspor",
  "Keberlanjutan",
];

export default function PerpustakaanPage({
  onStartChat,
  onNavigate,
  activePage,
}) {
  // # State filter kategori aktif
  const [activeFilter, setActiveFilter] = useState("Semua Koleksi");
  // # State search query
  const [searchQuery, setSearchQuery] = useState("");

  // # Filter buku berdasarkan kategori + search keyword
  const filteredBuku = BUKU.filter((buku) => {
    // # Cek apakah cocok dengan kategori yang dipilih
    const matchCategory =
      activeFilter === "Semua Koleksi" || buku.filter === activeFilter;
    // # Cek apakah cocok dengan keyword search
    const matchSearch =
      !searchQuery ||
      buku.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      buku.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      buku.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    // # Harus cocok keduanya
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* # Komponen Navigasi */}
      <Navbar
        onStartChat={onStartChat}
        onNavigate={onNavigate}
        activePage={activePage}
      />

      {/* # ============ HEADER ============ */}
      <section
        className="pt-28 pb-8"
        style={{
          background: "linear-gradient(180deg, #FDF6E3 0%, #FFFFFF 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* # Label atas */}
          <p className="text-[10px] tracking-widest text-mbah-terracotta mb-4">
            KOLEKSI KITAB & WEJANGAN BISNIS • Sarat Pengalaman UMKM
          </p>

          {/* # Judul halaman */}
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-mbah-brown mb-3">
            Perpustakaan Pengetahuan{" "}
            <span className="italic text-mbah-terracotta">Mbah AI</span>
          </h1>

          {/* # Deskripsi */}
          <p className="text-mbah-brown/60 max-w-2xl mx-auto mb-8">
            Kumpulan intisari 10 buku manajemen & pemasaran legendaris dunia,
            200+ pitutur luhur Jawa, serta rumus kalkulasi bisnis praktis yang
            telah diterjemahkan ke bahasa pasar rakyat.
          </p>

          {/* # Search bar */}
          <div className="max-w-xl mx-auto flex items-center gap-2 bg-white rounded-xl border border-gray-200 px-4 py-2.5 shadow-sm mb-6">
            <Search size={18} className="text-mbah-brown/30" />
            <input
              type="text"
              placeholder="Cari topik, misal: Cara hitung margin warung, negosiasi supplier, positioning"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-sm text-mbah-brown bg-transparent outline-none placeholder:text-mbah-brown/30"
            />
            <button className="bg-mbah-terracotta text-white text-xs px-4 py-1.5 rounded-lg hover:bg-mbah-terracotta-light transition-all">
              Telusuri
            </button>
          </div>

          {/* # Filter chips — klik untuk filter buku */}
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map((f) => (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.label)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === f.label
                    ? "bg-mbah-terracotta text-white"
                    : "bg-white text-mbah-brown/60 border border-gray-200 hover:border-mbah-gold"
                }`}
              >
                {/* # Hitung jumlah buku per kategori secara dynamic */}
                {f.label} (
                {f.label === "Semua Koleksi"
                  ? BUKU.length
                  : BUKU.filter((b) => b.filter === f.label).length}
                )
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* # Divider dekoratif */}
      <div className="flex items-center justify-center gap-3 py-6">
        <div className="h-px w-16 bg-mbah-gold/30" />
        <span className="text-[10px] tracking-widest text-mbah-brown/30">
          Serat Wedangan Bisnis ☕
        </span>
        <div className="h-px w-16 bg-mbah-gold/30" />
      </div>

      {/* # ============ BUKU SECTION ============ */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          {/* # Section header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-[10px] tracking-widest text-mbah-terracotta mb-1">
                KURIKULUM UTAMA SIMBAH
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-mbah-brown mb-2">
                {filteredBuku.length} Babon Buku Bisnis Dunia
              </h2>
              <p className="text-sm text-mbah-brown/50 max-w-lg">
                Gagasan raksasa manajemen global yang disuling ke dalam realitas
                warung kelontong, sentra industri desa, & UMKM Nusantara.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4 text-xs text-mbah-brown/40">
              <span>Urutan</span>
              <span className="font-medium text-mbah-brown">
                Paling Relevan untuk Warung/Produk
              </span>
            </div>
          </div>

          {/* # Buku cards grid — tampilkan hasil filter */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredBuku.map((buku, i) => (
              <motion.div
                key={buku.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-mbah-gold/30 transition-all group"
              >
                {/* # Card header — tag + nomor kitab */}
                <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-semibold ${buku.tagColor}`}
                  >
                    {buku.tag}
                  </span>
                  <span className="text-[10px] text-mbah-brown/30">
                    Kitab #{String(buku.id).padStart(2, "0")}
                  </span>
                </div>

                {/* # Judul + author */}
                <div className="px-5 pb-3">
                  <h3 className="font-heading text-lg font-bold text-mbah-brown mb-0.5">
                    {buku.title}
                  </h3>
                  <p className="text-xs text-mbah-brown/40">{buku.author}</p>
                  <p className="text-xs text-mbah-brown/50 mt-1">
                    {buku.subtitle}
                  </p>
                </div>

                {/* # Intisari Simbah — quote italic + terjemahan miring */}
                <div className="mx-5 p-3 bg-mbah-cream/50 rounded-lg border-l-2 border-mbah-gold mb-3">
                  <p className="text-[10px] text-mbah-terracotta font-semibold mb-1">
                    ✦ INTISARI SIMBAH
                  </p>
                  <p className="font-heading italic text-sm text-mbah-brown/80 leading-relaxed mb-1.5">
                    {buku.intisari}
                  </p>
                  <p className="text-xs text-mbah-brown/60 italic leading-relaxed">
                    {buku.intisariTranslate}
                  </p>
                </div>

                {/* # Aplikasi Lapangan — langkah konkret */}
                <div className="px-5 pb-3">
                  <p className="text-[10px] text-mbah-brown/40 font-semibold mb-2">
                    APLIKASI LAPANGAN:
                  </p>
                  <div className="space-y-2">
                    {buku.aplikasi.map((app, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-mbah-sage/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[8px] text-mbah-sage font-bold">
                            {j + 1}
                          </span>
                        </span>
                        <p className="text-xs text-mbah-brown/60 leading-relaxed">
                          {app}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* # Stats bar — angka impact */}
                <div className="mx-5 mb-3 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                  {buku.stats.map((stat, j) => {
                    const StatIcon = stat.icon;
                    return (
                      <div key={j} className="flex items-center gap-2">
                        <StatIcon size={14} className="text-mbah-terracotta" />
                        <div>
                          <p className="text-[10px] text-mbah-brown/40">
                            {stat.label}
                          </p>
                          <p className="text-sm font-bold text-mbah-brown">
                            {stat.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  {/* # Mini bar chart dekoratif */}
                  <div className="w-16 h-6 flex items-end gap-0.5">
                    {[40, 65, 55, 80, 70, 90, 85].map((h, j) => (
                      <div
                        key={j}
                        className="flex-1 bg-mbah-terracotta/20 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* # CTA link — tanya Simbah */}
                <div className="px-5 pb-5">
                  <button
                    onClick={onStartChat}
                    className="flex items-center gap-1.5 text-xs text-mbah-terracotta hover:text-mbah-terracotta-light font-medium transition-all"
                  >
                    {buku.ctaText}
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* # Pesan kalau filter kosong */}
          {filteredBuku.length === 0 && (
            <div className="text-center py-12">
              <p className="text-mbah-brown/40 font-heading italic">
                Belum ada buku di kategori ini. Coba filter lain.
              </p>
            </div>
          )}

          {/* # Load more button */}
          <div className="flex justify-center mt-8">
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm text-mbah-brown/60 border border-gray-200 hover:border-mbah-gold hover:text-mbah-brown transition-all">
              <BookOpen size={16} />
              Buka 23 Babon Buku Lainnya (Porter, Drucker, Cialdini, Collins...)
            </button>
          </div>
        </div>
      </section>

      {/* # ============ FOKUS MASALAH TAGS ============ */}
      <section className="py-8 bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] text-mbah-brown/40 font-semibold mr-2">
              FOKUS MASALAH:
            </span>
            {DOMAIN_TAGS.map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 rounded-full text-[10px] text-mbah-brown/50 border border-gray-200 hover:border-mbah-terracotta hover:text-mbah-terracotta transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* # ============ PERIBAHASA SECTION ============ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          {/* # Section header */}
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-widest text-mbah-gold mb-2">
              ✧ FILSAFAT DAGANG LUHUR
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-mbah-brown mb-3">
              Kompilasi Pitutur Luhur Bisnis Nusantara
            </h2>
            <p className="text-sm text-mbah-brown/50 max-w-lg mx-auto">
              Kaidah moral dan daya tahan mental dari para pedagang sepuh
              Mataraman & pesisiran yang wejit melintas krisis multi-generasi.
            </p>
          </div>

          {/* # Peribahasa cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {PERIBAHASA.map((pb, i) => (
              <motion.div
                key={pb.judul}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-mbah-gold/30 transition-all"
              >
                {/* # Aksara Jawa + judul */}
                <div className="px-5 pt-5 pb-2">
                  <p className="text-xs text-mbah-brown/20 mb-1">{pb.aksara}</p>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading italic text-xl font-bold text-mbah-brown">
                        {pb.judul}
                      </h3>
                      <p className="text-xs text-mbah-terracotta font-medium mt-0.5">
                        {pb.kategori}
                      </p>
                    </div>
                    <span className="text-mbah-gold/30 text-2xl">☕</span>
                  </div>
                </div>

                {/* # Deskripsi makna */}
                <div className="px-5 py-3">
                  <p className="text-sm text-mbah-brown/60 leading-relaxed">
                    {pb.deskripsi}
                  </p>
                </div>

                {/* # Penerapan riil di bisnis */}
                <div className="mx-5 mb-5 p-3 bg-mbah-cream/40 rounded-lg border border-mbah-gold/10">
                  <p className="text-[10px] text-mbah-terracotta font-semibold mb-1">
                    Penerapan Riil:
                  </p>
                  <p className="text-xs text-mbah-brown/70 leading-relaxed italic">
                    {pb.penerapan}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* # ============ CTA BOTTOM ============ */}
      <section className="py-12 bg-mbah-brown text-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <img
            src={new URL("../../assets/mbahai-logo.png", import.meta.url).href}
            alt="Mbah AI"
            className="w-20 h-20 rounded-full border-2 border-mbah-gold/30"
          />
          <div className="flex-1 text-center md:text-left">
            <p className="text-[10px] tracking-widest text-mbah-gold mb-1">
              POJOK JAGONGAN BISNIS
            </p>
            <h2 className="font-heading text-2xl font-bold mb-2">
              Butuh Wejangan Khusus untuk Usahamu?
            </h2>
            <p className="text-white/60 text-sm">
              Jangan biarkan kebingungan hitung HPP, utang piutang warung, atau
              penurunan pelanggan melesahkan pikiranmu. Ceritakan duduk
              perkaranya secara santai — Simbah siap membeberkan jalan
              keluarnya.
            </p>
          </div>
          <button
            onClick={onStartChat}
            className="bg-white text-mbah-brown font-semibold py-3 px-6 rounded-xl hover:bg-mbah-cream transition-all flex-shrink-0"
          >
            Mulai Konsultasi dengan Simbah
          </button>
        </div>
      </section>

      {/* # Footer */}
      <Footer />
    </div>
  );
}
