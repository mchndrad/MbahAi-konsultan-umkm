// Chat header — ditambah tombol toggle sidebar history & tombol chat baru
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Moon,
  Sun,
  Menu,
  PlusCircle,
} from "lucide-react";
import logo from "../../assets/mbahai-logo.png";
import useAppStore from "../../store/useAppStore";

export default function ChatHeader({
  onBackToLanding,
  exchangeCount,
  onExportPDF,
  darkMode,
  setDarkMode,
  onToggleSidebar,
}) {
  const archiveCurrentChat = useAppStore((s) => s.archiveCurrentChat);
  const messages = useAppStore((s) => s.messages);
  const setMessages = useAppStore((s) => s.setMessages);

  const handleNewChat = () => {
    if (messages && messages.length > 0) {
      archiveCurrentChat(); // Simpan chat lama ke sidebar history
    }
    setMessages([]); // Kosongkan chat untuk mulai baru
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 border-b shadow-xs ${
        darkMode
          ? "bg-[#181512]/95 border-amber-900/30 text-amber-100"
          : "bg-white/95 backdrop-blur-sm border-gray-100 text-mbah-brown"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Kiri: Tombol Menu Sidebar + Tombol Back + Logo + Nama */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onToggleSidebar}
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              darkMode
                ? "text-amber-200/70 hover:text-amber-100 hover:bg-amber-950/40"
                : "text-mbah-brown/70 hover:text-mbah-brown hover:bg-gray-100"
            }`}
            title="Buka Riwayat Obrolan"
          >
            <Menu size={20} />
          </button>

          <button
            onClick={onBackToLanding}
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              darkMode
                ? "text-amber-200/60 hover:text-amber-100 hover:bg-amber-950/40"
                : "text-mbah-brown/50 hover:text-mbah-brown hover:bg-gray-100"
            }`}
            title="Kembali ke Beranda"
          >
            <ArrowLeft size={20} />
          </button>

          <div className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Mbah AI"
              className={`h-9 w-9 rounded-full object-cover border ${darkMode ? "border-amber-900/50" : "border-gray-100"}`}
            />
            <div>
              <h1
                className={`font-heading font-bold text-sm sm:text-base leading-tight ${darkMode ? "text-amber-100" : "text-mbah-brown"}`}
              >
                Meja Konsultasi UMKM
              </h1>
              <p
                className={`text-[10px] hidden sm:block ${darkMode ? "text-amber-400/60" : "text-mbah-brown/50"}`}
              >
                Konsultasi bisnis santai bersama Mbah Wignyo
              </p>
            </div>
          </div>
        </div>

        {/* Kanan: Tombol Chat Baru, Perpustakaan KB, Mode Malam, & Catatan Simbah */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handleNewChat}
            title="Mulai Rembugan Baru"
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium border rounded-xl transition-all shadow-xs cursor-pointer ${
              darkMode
                ? "bg-amber-950/50 text-amber-200 border-amber-800/60 hover:bg-amber-900/50"
                : "bg-orange-50 text-mbah-terracotta border-orange-200 hover:bg-orange-100"
            }`}
          >
            <PlusCircle size={14} />
            <span className="hidden sm:inline">Chat Baru</span>
          </button>

          <button
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium border rounded-xl transition-all shadow-xs cursor-pointer ${
              darkMode
                ? "bg-[#241D17] text-amber-200 border-amber-900/60 hover:bg-amber-900/40"
                : "bg-white text-mbah-brown/70 border-gray-200 hover:border-mbah-gold hover:text-mbah-terracotta"
            }`}
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">Perpustakaan KB</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            title="Ganti Suasana (Mode Malam/Sore)"
            className={`p-2.5 rounded-xl border transition-all cursor-pointer shadow-xs flex items-center justify-center ${
              darkMode
                ? "bg-amber-950/60 border-amber-800/60 text-amber-300 hover:bg-amber-900/50"
                : "bg-amber-100/60 border-amber-300/60 text-amber-800 hover:bg-amber-200"
            }`}
          >
            {darkMode ? (
              <Sun size={15} className="text-amber-400" />
            ) : (
              <Moon size={15} />
            )}
          </button>

          {exchangeCount >= 3 && (
            <button
              onClick={onExportPDF}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-mbah-terracotta rounded-xl hover:bg-mbah-terracotta-light transition-all shadow-sm animate-in fade-in duration-200 cursor-pointer"
            >
              <FileText size={14} />
              <span className="hidden sm:inline">Catatan Simbah</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
