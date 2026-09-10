// # ChatPage — Konten otomatis melebar penuh saat sidebar ditutup
import { useEffect, useRef, useCallback, useState } from "react";
import useAppStore from "../../store/useAppStore";
import { initRAG } from "../../services/ragService";
import { getMbahResponse } from "../../services/personaService";
import { isApiKeySet } from "../../services/geminiService";
import { generateCatatanPDF } from "../../services/pdfService";
import ChatHeader from "./ChatHeader";
import ChatSidebar from "./ChatSidebar";
import MessageBubble from "./MessageBubble";
import LoadingBubble from "./LoadingBubble";
import InputBox from "./InputBox";

const DEFAULT_CHIPS = [
  "Warungku sepi, gimana cara beda dari kompetitor?",
  "Pelanggan sering nawar, solusinya apa Mbah?",
  "Berapa HPP wajar untuk batik cap?",
];

export default function ChatPage({ onBackToLanding }) {
  const messages = useAppStore((s) => s.messages);
  const isLoading = useAppStore((s) => s.isLoading);
  const exchangeCount = useAppStore((s) => s.exchangeCount);
  const userContext = useAppStore((s) => s.userContext);

  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Default terbuka di desktop

  const displayMessages = messages || [];
  const messageLength = displayMessages.length;
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isApiKeySet()) {
      initRAG().catch((err) => console.error("[RAG]", err));
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageLength, isLoading]);

  const handleSend = useCallback(async (text) => {
    const currentMessages = useAppStore.getState().messages || [];
    const currentContext = useAppStore.getState().userContext || {};

    useAppStore.getState().addMessage({
      id: "user-" + Date.now() + Math.random(),
      role: "user",
      text,
    });
    useAppStore.getState().setLoading(true);

    try {
      const response = await getMbahResponse(
        text,
        currentMessages,
        currentContext,
      );
      useAppStore.getState().addMessage({
        id: "mbah-" + Date.now() + Math.random(),
        role: "mbah",
        text: response.text,
        citations: response.citations,
      });
      useAppStore.getState().incrementExchange();
    } catch (err) {
      console.error("[Chat]", err);
      useAppStore.getState().addMessage({
        id: "error-" + Date.now(),
        role: "mbah",
        text: "Wah, Simbah sepertinya lagi ada gangguan. Coba tanya lagi ya, Le.",
        citations: [],
      });
    } finally {
      useAppStore.getState().setLoading(false);
    }
  }, []);

  const handleExportPDF = () => {
    generateCatatanPDF(userContext || {}, displayMessages);
  };

  return (
    <div
      className={`flex h-screen relative overflow-hidden font-sans transition-colors duration-500 ${
        darkMode
          ? "bg-[#1E1B18] text-amber-100/90"
          : "bg-[#FDFBF7] text-mbah-brown"
      }`}
    >
      {/* # Sidebar History Chat di Kiri */}
      <ChatSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        darkMode={darkMode}
      />

      {/* # Area Konten Chat Utama (Otomatis bergeser/melebar saat sidebar dibuka/ditutup) */}
      <div
        className={`flex-1 flex flex-col h-full relative overflow-hidden transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-0"}`}
      >
        {/* # Aksen Ornamen Motif Batik Klasik di Background */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
            darkMode
              ? "opacity-[0.02] bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:20px_20px]"
              : "opacity-[0.03] bg-[radial-gradient(#8C5830_1px,transparent_1px)] [background-size:16px_16px]"
          }`}
        />

        {/* # Header dengan Tombol Garis 3 (Toggle Sidebar) */}
        <ChatHeader
          onBackToLanding={onBackToLanding}
          exchangeCount={exchangeCount}
          onExportPDF={handleExportPDF}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* # Chat area */}
        <div className="flex-1 overflow-y-auto pt-16 pb-4 relative z-10">
          <div className="max-w-3xl mx-auto px-4 space-y-4 py-4">
            {/* # Mbah Profile Card dengan Animasi Uap Bergerak */}
            <div
              className={`backdrop-blur-sm rounded-2xl p-4 border transition-all duration-300 flex items-center gap-4 mb-2 shadow-xs ${
                darkMode
                  ? "bg-[#26221D]/90 border-amber-900/30 text-amber-100"
                  : "bg-white/90 border-amber-200/60"
              }`}
            >
              <div className="relative">
                {/* Animasi Uap Wedang Bergerak ke Atas */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
                  <span className="w-1 h-3 bg-amber-400/60 rounded-full animate-steam-1 blur-[0.5px]" />
                  <span className="w-1.5 h-4 bg-orange-300/70 rounded-full animate-steam-2 blur-[0.5px]" />
                  <span className="w-1 h-3 bg-amber-400/60 rounded-full animate-steam-3 blur-[0.5px]" />
                </div>

                <img
                  src={
                    new URL("../../assets/mbahai-logo.png", import.meta.url)
                      .href
                  }
                  alt="Mbah"
                  className={`w-12 h-12 rounded-full border-2 object-cover ${darkMode ? "border-amber-700/40" : "border-mbah-terracotta/50"}`}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#26221D] rounded-full animate-pulse" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p
                    className={`font-heading font-bold text-sm ${darkMode ? "text-amber-100" : "text-mbah-brown"}`}
                  >
                    Mbah Wignyo (Mbah AI)
                  </p>
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${darkMode ? "bg-amber-950/80 text-amber-300/90 border border-amber-900/40" : "bg-mbah-sage/15 text-mbah-sage"}`}
                  >
                    Kauman, Solo
                  </span>
                </div>
                <p
                  className={`text-xs flex items-center gap-1.5 mt-0.5 ${darkMode ? "text-amber-200/60" : "text-mbah-brown/60"}`}
                >
                  <span className="w-1.5 h-1.5 bg-mbah-terracotta rounded-full animate-ping" />
                  {darkMode
                    ? "Suasana malam temaram • Menyeduh wedang jahe panas"
                    : "Sedang menyeduh wedang & membaca catatan babon batik"}
                </p>
              </div>
            </div>

            {/* # Timestamp divider */}
            <div className="flex justify-center my-3">
              <span
                className={`text-[11px] font-medium px-4 py-1 rounded-full border shadow-2xs transition-colors ${
                  darkMode
                    ? "bg-[#26221D]/80 text-amber-300/80 border-amber-900/30"
                    : "bg-amber-100/50 text-mbah-brown/50 border-amber-200/50"
                }`}
              >
                {darkMode
                  ? "🌙 Malam Hari • Suasana Pendopo Temaram & Tenang"
                  : "☕ Waktu Wedangan Sore • Suasana Pendopo Kauman"}
              </span>
            </div>

            {/* # Semua pesan */}
            {displayMessages.map((msg, index) => (
              <MessageBubble
                key={msg.id || index}
                message={msg}
                darkMode={darkMode}
              />
            ))}

            {/* # Loading bubble */}
            {isLoading && <LoadingBubble darkMode={darkMode} />}

            {/* # Anchor scroll */}
            <div ref={bottomRef} />
          </div>
        </div>

        {/* # Suggested chips */}
        {messageLength <= 1 && !isLoading && (
          <div
            className={`backdrop-blur-md border-t px-4 py-3 relative z-10 shadow-sm transition-colors ${
              darkMode
                ? "bg-[#1E1B18]/95 border-amber-900/30 text-amber-200"
                : "bg-[#FDFBF7]/90 border-amber-200/40 text-mbah-brown"
            }`}
          >
            <div className="max-w-3xl mx-auto">
              <p
                className={`text-[11px] font-medium mb-2 flex items-center gap-1 ${darkMode ? "text-amber-300/70" : "text-mbah-brown/60"}`}
              >
                <span>💡</span> Topik wedangan yang sering dirembuk:
              </p>
              <div className="flex flex-wrap gap-2">
                {DEFAULT_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleSend(chip)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-xl border transition-all cursor-pointer shadow-2xs ${
                      darkMode
                        ? "bg-[#26221D] text-amber-100/90 border-amber-900/50 hover:bg-amber-900/30 hover:border-amber-700/60"
                        : "bg-white text-mbah-brown border-amber-200/80 hover:bg-orange-50 hover:border-mbah-terracotta"
                    }`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* # Input box */}
        <div
          className={`relative z-10 transition-colors ${darkMode ? "bg-[#1E1B18]" : "bg-[#FDFBF7]"}`}
        >
          <InputBox
            onSend={handleSend}
            disabled={isLoading}
            darkMode={darkMode}
          />
        </div>
      </div>

      {/* # CSS Animasi Uap Wedang */}
      <style>{`
        @keyframes steam1 {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-16px) scaleX(1.5); opacity: 0; }
        }
        @keyframes steam2 {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-22px) scaleX(2); opacity: 0; }
        }
        @keyframes steam3 {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-14px) scaleX(1.3); opacity: 0; }
        }
        .animate-steam-1 { animation: steam1 2.2s ease-in-out infinite; }
        .animate-steam-2 { animation: steam2 2.8s ease-in-out infinite 0.4s; }
        .animate-steam-3 { animation: steam3 2.0s ease-in-out infinite 0.8s; }
      `}</style>
    </div>
  );
}
