// Section testimonial + CTA "Pendopo Terbuka 24 Jam"
import { motion } from 'framer-motion'
import { Star, MessageSquare } from 'lucide-react'

export default function TestimonialSection({ onStartChat }) {
  return (
    <section id="studi-kasus" className="py-20" style={{ background: 'rgba(249,250,251,0.5)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* === Card Testimonial === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8"
            style={{ border: '1px solid rgba(61,41,20,0.1)' }}
          >
            {/* Bintang rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="#D4A574" color="#D4A574" />
                ))}
              </div>
              <span className="text-xs" style={{ color: 'rgba(61,41,20,0.5)' }}>
                Kisah Sukses Mitra Binaan
              </span>
            </div>

            {/* Quote testimonial */}
            <blockquote
              className="italic text-base leading-relaxed mb-6"
              style={{ fontFamily: 'Fraunces, serif', color: '#3D2914' }}
            >
              &quot;Biasanya kalau tanya ke konsultan digital kota besar, saya bingung
              dengan istilah burn-rate, CAC, dan pivot. Bersama Mbah Wignyo,
              solusinya diajarkan bertahap seperti menata lumbung padi. Produk ukir
              rotan kami sekarang tembus pasar Australia tanpa terjerat utang bunga
              tinggi.&quot;
            </blockquote>

            {/* Penulis testimonial */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(135,169,107,0.2)' }}
              >
                <span className="text-sm font-bold" style={{ color: '#87A96B' }}>EW</span>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: '#3D2914' }}>Endah Wahyuni</p>
                <p className="text-xs" style={{ color: 'rgba(61,41,20,0.5)' }}>
                  Pemilik Griya Anyaman Rotan - Trangsan, Sukoharjo
                </p>
              </div>
            </div>
          </motion.div>

          {/* === Card CTA Pendopo === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl p-8 text-white flex flex-col justify-between"
            style={{ background: '#C1440E' }}
          >
            <div>
              {/* Label */}
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare size={18} style={{ color: 'rgba(255,255,255,0.7)' }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Pendopo Terbuka 24 Jam
                </span>
              </div>

              {/* Headline */}
              <h3
                className="text-2xl font-bold mb-4 leading-tight"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Ada keluh kesah soal omzet sepi, pegawai kurang kompak, atau bingung menentukan harga jual produk baru?
              </h3>

              {/* Subdesc */}
              <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Percakapan privet, ramah, dan menenangkan jiwa wirausaha.
              </p>
            </div>

            {/* Button */}
            <button
              onClick={onStartChat}
              className="w-full font-semibold py-3.5 px-6 rounded-xl transition-all duration-300"
              style={{ background: 'white', color: '#C1440E' }}
              onMouseEnter={(e) => { e.target.style.background = '#FDF6E3' }}
              onMouseLeave={(e) => { e.target.style.background = 'white' }}
            >
              Sugeng Rawuh, Monggo Pinarak
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}