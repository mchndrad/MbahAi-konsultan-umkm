// Hero section - kiri: teks + CTA, kanan: card Mbah sesuai design 5
import { motion } from "framer-motion";
import { Sparkles, BookOpen, CheckCircle, MessageCircle } from "lucide-react";
import simbahImg from "../../assets/simbah.png";

export default function HeroSection({ onStartChat }) {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* KIRI: Teks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mbah-sage/10 text-mbah-sage text-sm mb-6">
              <span className="w-2 h-2 bg-mbah-sage rounded-full" />
              Kearifan Lokal x Kecerdasan Buatan
            </div>

            {/* Judul */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-mbah-brown leading-[1.05] mb-4">
              Mbah AI
            </h1>

            {/* Quote */}
            <p className="font-heading italic text-xl sm:text-2xl text-mbah-brown/80 mb-5">
              "Simbah selalu ada untuk mendengar ceritamu."
            </p>

            {/* Deskripsi */}
            <p className="text-mbah-brown/60 text-base leading-relaxed mb-8 max-w-lg">
              Konsultan bisnis UMKM Ekraf Indonesia, berpengalaman 50 tahun
              sebagai perajin batik dan eksportir kerajinan kayu jati Solo.
              Berbincang santai penuh rasa hormat, selayaknya bertukar pikiran
              di pendopo joglo.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={onStartChat}
                className="btn-primary text-base py-3 px-7"
              >
                🍵 Mulai Ngobrol dengan Mbah
              </button>
              <button className="btn-secondary text-base py-3 px-7">
                <BookOpen size={18} />
                Jelajahi Perpustakaan Simbah
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
              <span className="flex items-center gap-1.5 text-xs text-mbah-brown/50">
                <CheckCircle size={14} className="text-mbah-sage" />
                Gratis konsultasi awal
              </span>
              <span className="flex items-center gap-1.5 text-xs text-mbah-brown/50">
                <CheckCircle size={14} className="text-mbah-sage" />
                100% rahasia bisnis terjamin
              </span>
              <span className="flex items-center gap-1.5 text-xs text-mbah-brown/50">
                <MessageCircle size={14} className="text-mbah-sage" />
                Tanpa istilah teknis berbelit
              </span>
            </div>

            {/* Topik chips */}
            <div className="bg-mbah-cream/50 rounded-xl p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-mbah-brown/40 flex items-center gap-1.5">
                  <Sparkles size={12} />
                  TOPIK WEJANGAN HARI INI
                </p>
                <p className="text-xs text-mbah-brown/40">
                  Pilih dan tanyakan ke Mbah
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={onStartChat} className="chip text-xs">
                  "Bagaimana hitung HPP sambal botol?"
                </button>
                <button onClick={onStartChat} className="chip text-xs">
                  "Cara memilih reseller yang amanah?"
                </button>
                <button onClick={onStartChat} className="chip text-xs">
                  "Kemasan bambu vs pouch plastik"
                </button>
              </div>
            </div>
          </motion.div>

          {/* KANAN: Card Mbah sesuai design 5 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md">
              {/* Card utama */}
              <div className="bg-mbah-cream rounded-2xl overflow-hidden border border-gray-200 shadow-card">
                {/* Header card */}
                <div className="bg-mbah-terracotta/10 px-5 py-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs text-mbah-terracotta">
                    <span className="w-2 h-2 bg-mbah-terracotta rounded-full" />
                    PARIWARA ADILUHUNG
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-mbah-terracotta">
                    <Sparkles size={12} />
                    Teh Melati Panas Siap
                  </span>
                </div>

                {/* Foto Mbah */}
                <div className="p-4 pb-0">
                  <img
                    src={simbahImg}
                    alt="Mbah Wignyo Hadi Sudarmo"
                    className="w-full rounded-xl object-cover"
                    style={{ aspectRatio: "4/5" }}
                  />
                </div>

                {/* Info overlay di bawah foto */}
                <div className="px-5 -mt-16 relative">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2.5 border border-gray-100 inline-flex items-center gap-3 w-full">
                    <span className="w-2 h-2 bg-mbah-sage rounded-full flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-heading font-bold text-mbah-brown text-sm">
                        Mbah Wignyo, 72 thn
                      </p>
                      <p className="text-[10px] text-mbah-brown/50">
                        Kelurahan Kauman, Kota Surakarta
                      </p>
                    </div>
                    <span className="badge bg-mbah-sage/15 text-mbah-sage text-[10px] font-semibold flex-shrink-0">
                      AKTIF
                    </span>
                  </div>
                </div>

                {/* Footer card */}
                <div className="px-5 py-3 flex items-center justify-between">
                  <p className="text-xs text-mbah-brown/50">
                    🏺 50+ Tahun Perajin Kayu & Batik
                  </p>
                  <p className="text-xs text-mbah-brown/40 italic">
                    Pragmatis • Beretika
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
