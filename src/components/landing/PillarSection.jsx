// Section "Tiga Pilar" - 3 card pilar pengetahuan Mbah AI
import { motion } from 'framer-motion'
import { BookOpen, BarChart3, Feather } from 'lucide-react'

export default function PillarSection() {
  return (
    <section id="perpustakaan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Divider dekoratif */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-mbah-gold/40" />
          <span className="text-xs tracking-widest text-mbah-brown/40">
            TRI DHARMA KAWRUH WIRAUSAHA
          </span>
          <div className="h-px w-12 bg-mbah-gold/40" />
        </div>

        {/* Header section */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs tracking-widest text-mbah-terracotta mb-3">
            FONDASI ILMU DAN METODOLOGI
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-mbah-brown mb-4">
            Tiga Pilar Ketajaman Penasihat Mbah AI
          </h2>
          <p className="text-mbah-brown/60">
            Menggabungkan dialektika bisnis modern skala global dengan denyut riil pasar rakyat
            dan prinsip luhur tradisi Jawa.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1: Buku Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-red-50">
              <BookOpen size={22} className="text-mbah-terracotta" />
            </div>
            <p className="text-[10px] tracking-widest font-semibold text-mbah-terracotta mb-2">LITERATUR GLOBAL</p>
            <h3 className="font-heading text-lg font-bold text-mbah-brown mb-3">10 Buku Marketing Dunia</h3>
            <p className="text-sm text-mbah-brown/60 leading-relaxed">
              Kotler, Al Ries, Seth Godin, dan Blue Ocean Strategy yang disaring dan diterjemahkan
              langsung ke realita pasar tradisional, ruko grosir, serta etalase digital e-commerce nusantara.
            </p>
          </motion.div>

          {/* Card 2: Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-green-50">
              <BarChart3 size={22} className="text-mbah-sage" />
            </div>
            <p className="text-[10px] tracking-widest font-semibold text-mbah-sage mb-2">STUDI EMPIRIS</p>
            <h3 className="font-heading text-lg font-bold text-mbah-brown mb-3">32 Case Study UMKM Indonesia</h3>
            <p className="text-sm text-mbah-brown/60 leading-relaxed">
              Mulai dari perajin kain lurik Pedan Klaten, kopi Arabika Gayo, hingga produsen kripik
              tempe Sanari Malang yang berhasil naik kelas omzet 10x lipat.
            </p>
          </motion.div>

          {/* Card 3: Peribahasa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-amber-50">
              <Feather size={22} className="text-mbah-gold" />
            </div>
            <p className="text-[10px] tracking-widest font-semibold text-mbah-gold mb-2">AKAL BUDI NUSANTARA</p>
            <h3 className="font-heading text-lg font-bold text-mbah-brown mb-3">200+ Peribahasa Nusantara</h3>
            <p className="text-sm text-mbah-brown/60 leading-relaxed">
              Filosofi bisnis Jawa adiluhung: Alon-alon waton kelakon, Urip Iku Urup,
              dan Jer Basuki Mawa Beya untuk ketangguhan mental wirausahawan mandiri.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}