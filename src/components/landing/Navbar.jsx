// Navbar - logo kiri, nav links TENGAH, CTA kanan
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/mbahai-logo.png'

export default function Navbar({ onStartChat, onNavigate, activePage }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* KIRI: Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img src={logo} alt="Mbah AI" className="h-9 w-9" />
            <div className="hidden sm:block">
              <p className="font-heading font-semibold text-mbah-brown text-sm leading-tight">Mbah AI</p>
              <p className="text-[10px] text-mbah-brown/50 leading-tight">Konsultan Bisnis UMKM Nusantara</p>
            </div>
          </div>

          {/* TENGAH: Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => onNavigate('landing')}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${activePage === 'landing' ? 'font-semibold text-mbah-brown bg-mbah-cream' : 'text-mbah-brown/60 hover:text-mbah-terracotta'}`}
            >
              Beranda
            </button>
            <button
              onClick={() => onNavigate('perpustakaan')}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${activePage === 'perpustakaan' ? 'font-semibold text-mbah-brown bg-mbah-cream' : 'text-mbah-brown/60 hover:text-mbah-terracotta'}`}
            >
              Perpustakaan Pengetahuan
            </button>
            <button
              onClick={() => onNavigate('studi-kasus')}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${activePage === 'studi-kasus' ? 'font-semibold text-mbah-brown bg-mbah-cream' : 'text-mbah-brown/60 hover:text-mbah-terracotta'}`}
            >
              Studi Kasus UMKM
            </button>
          </div>

          {/* KANAN: CTA + user icon (desktop) */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button onClick={onStartChat} className="btn-primary text-sm py-2 px-5">
              Mulai Ngobrol 🍵
            </button>
          </div>

          {/* Hamburger (mobile) */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-mbah-brown">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 space-y-1">
          <button onClick={() => { setMobileOpen(false); onNavigate('landing'); }} className="block w-full text-left px-4 py-3 text-sm text-mbah-brown/70 rounded-lg">Beranda</button>
          <button onClick={() => { setMobileOpen(false); onNavigate('perpustakaan'); }} className="block w-full text-left px-4 py-3 text-sm text-mbah-brown/70 rounded-lg">Perpustakaan Pengetahuan</button>
          <button onClick={() => { setMobileOpen(false); onNavigate('studi-kasus'); }} className="block w-full text-left px-4 py-3 text-sm text-mbah-brown/70 rounded-lg">Studi Kasus UMKM</button>
          <button onClick={() => { setMobileOpen(false); onStartChat(); }} className="btn-primary w-full justify-center text-sm py-3 mt-2">Mulai Ngobrol 🍵</button>
        </div>
      )}
    </nav>
  )
}