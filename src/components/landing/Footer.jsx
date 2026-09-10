// Footer - info brand + links bawah page
import logo from '../../assets/mbahai-logo.png'

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Baris atas: logo + links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Mbah AI" className="h-10 w-10" />
            <div>
              <p className="font-heading font-bold text-mbah-brown text-sm">Mbah AI</p>
              <p className="text-[11px] text-mbah-brown/50">Sistem Penasihat Wirausaha Berbudi Luhur</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-xs text-mbah-brown/50 hover:text-mbah-terracotta">Pedoman Etika Bisnis</a>
            <a href="#" className="text-xs text-mbah-brown/50 hover:text-mbah-terracotta">Metodologi Pitutur</a>
            <a href="#" className="text-xs text-mbah-brown/50 hover:text-mbah-terracotta">Privasi Data UMKM</a>
            <a href="#" className="text-xs text-mbah-brown/50 hover:text-mbah-terracotta">Kontak Paguyuban</a>
          </div>
        </div>

        {/* Baris bawah: copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-[11px] text-mbah-brown/40">
            Mbah AI — Diilhami kearifan bisnis 50 tahun Mbah Wignyo dan grounded ke 10 buku marketing klasik
            serta 32 studi kasus UMKM Indonesia.
          </p>
          <p className="text-[11px] text-mbah-brown/40">
            2026 Paguyuban Mbah AI Nusantara.
          </p>
        </div>
      </div>
    </footer>
  )
}