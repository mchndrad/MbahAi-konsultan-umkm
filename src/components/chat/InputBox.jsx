// Input box — textarea + tombol kirim, fixed di bawah dengan dukungan mode malam cokelat kalem
import { useState, useRef } from "react";
import { Send } from "lucide-react";

export default function InputBox({ onSend, disabled, darkMode }) {
  const [text, setText] = useState("");
  const ref = useRef(null);

  // Kirim pesan
  const handleSend = () => {
    if (!text.trim() || disabled) return;
    onSend(text.trim());
    setText("");
    if (ref.current) ref.current.style.height = "auto";
  };

  // Enter = kirim, Shift+Enter = new line
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-grow textarea
  const handleInput = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
  };

  return (
    <div
      className={`transition-colors duration-300 border-t px-4 py-3 ${
        darkMode
          ? "bg-[#1E1B18] border-amber-900/30"
          : "bg-white border-gray-100"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Input row */}
        <div className="flex items-end gap-2">
          <textarea
            ref={ref}
            value={text}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Ketik ceritamu ke Simbah... (Simbah mendengarkan dengan sabar)"
            rows={1}
            disabled={disabled}
            className={`flex-1 px-4 py-2.5 rounded-xl border text-sm resize-none focus:outline-none transition-all ${
              darkMode
                ? "bg-[#2A241F] border-amber-900/50 text-amber-100 placeholder:text-amber-200/30 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/30"
                : "bg-mbah-cream/30 border-mbah-gold/30 text-mbah-brown placeholder:text-mbah-brown/30 focus:border-mbah-terracotta focus:ring-1 focus:ring-mbah-terracotta/30"
            } disabled:opacity-50`}
            style={{ maxHeight: "120px" }}
          />
          <button
            onClick={handleSend}
            disabled={!text.trim() || disabled}
            className={`p-2.5 rounded-xl transition-all flex-shrink-0 cursor-pointer ${
              text.trim() && !disabled
                ? "bg-mbah-terracotta text-white hover:bg-mbah-terracotta-light shadow-xs"
                : darkMode
                  ? "bg-[#2A241F] text-amber-900/40 cursor-not-allowed"
                  : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          >
            <Send size={18} />
          </button>
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between mt-2">
          <p
            className={`text-[10px] ${darkMode ? "text-amber-200/40" : "text-mbah-brown/30"}`}
          >
            🔒 Rahasia dagang warung panjenengan aman & tidak dipublikasikan
          </p>
          <p
            className={`text-[10px] ${darkMode ? "text-amber-200/40" : "text-mbah-brown/30"}`}
          >
            Tekan Enter untuk kirim
          </p>
        </div>

        {/* Grounding info */}
        <p
          className={`text-center text-[10px] mt-1 ${darkMode ? "text-amber-200/30" : "text-mbah-brown/25"}`}
        >
          Mbah AI grounded ke 10 buku marketing • 32 case study UMKM Nusantara •
          200 peribahasa pitutur luhur • Kauman, Surakarta
        </p>
      </div>
    </div>
  );
}
