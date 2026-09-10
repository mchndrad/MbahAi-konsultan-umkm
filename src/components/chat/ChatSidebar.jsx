// ChatSidebar — Sidebar riwayat rembugan dengan animasi buka-tutup ke samping
import { MessageSquare, Plus, Trash2, X } from "lucide-react";
import useAppStore from "../../store/useAppStore";

export default function ChatSidebar({ isOpen, onClose, darkMode }) {
  const chatHistory = useAppStore((s) => s.chatHistory) || [];
  const archiveCurrentChat = useAppStore((s) => s.archiveCurrentChat);
  const loadHistorySession = useAppStore((s) => s.loadHistorySession);
  const deleteHistorySession = useAppStore((s) => s.deleteHistorySession);
  const messages = useAppStore((s) => s.messages);

  return (
    <>
      {/* Backdrop hitam tipis saat sidebar terbuka di layar kecil/mobile */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-30 md:hidden backdrop-blur-2xs transition-opacity"
        />
      )}

      {/* Kontainer Sidebar dengan transisi geser ke samping (translate-x) */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 w-72 md:w-64 border-r transition-transform duration-300 ease-in-out flex flex-col shadow-md ${
          darkMode
            ? "bg-[#161310] border-amber-900/30 text-amber-100"
            : "bg-[#F7F4EE] border-amber-200/50 text-mbah-brown"
        } ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header Sidebar */}
        <div className="p-4 flex items-center justify-between border-b border-amber-900/10">
          <div className="flex items-center gap-2">
            <span className="text-base">📜</span>
            <h2 className="font-heading font-bold text-sm tracking-wide">
              Riwayat Rembugan
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-amber-900/10 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tombol Chat Baru */}
        <div className="p-3">
          <button
            onClick={() => {
              if (messages && messages.length > 0) {
                archiveCurrentChat();
              }
              if (window.innerWidth < 768) onClose();
            }}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all shadow-xs cursor-pointer ${
              darkMode
                ? "bg-amber-900/40 border-amber-700/50 text-amber-200 hover:bg-amber-900/60"
                : "bg-white border-amber-300/80 text-mbah-terracotta hover:bg-orange-50"
            }`}
          >
            <Plus size={16} />
            <span>Chat Baru</span>
          </button>
        </div>

        {/* List History Chat */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1.5">
          <p
            className={`text-[10px] font-semibold uppercase tracking-wider px-2 mb-2 ${darkMode ? "text-amber-400/50" : "text-mbah-brown/40"}`}
          >
            Obrolan Sebelumnya
          </p>

          {chatHistory.length === 0 ? (
            <p
              className={`text-xs px-2 italic ${darkMode ? "text-amber-300/40" : "text-mbah-brown/40"}`}
            >
              Belum ada riwayat rembugan tersimpan.
            </p>
          ) : (
            chatHistory.map((sess) => (
              <div
                key={sess.id}
                onClick={() => {
                  loadHistorySession(sess);
                  if (window.innerWidth < 768) onClose();
                }}
                className={`group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium cursor-pointer transition-all ${
                  darkMode
                    ? "text-amber-100/70 hover:bg-amber-950/30 hover:text-amber-100"
                    : "text-mbah-brown/80 hover:bg-amber-100/40 hover:text-mbah-brown"
                }`}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <MessageSquare size={14} className="opacity-40 shrink-0" />
                  <span className="truncate">
                    {sess.title || "Konsultasi UMKM"}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm("Hapus riwayat rembugan ini, Le?")) {
                      deleteHistorySession(sess.id);
                    }
                  }}
                  title="Hapus riwayat"
                  className="opacity-0 group-hover:opacity-100 p-1 rounded-md hover:bg-red-500/10 hover:text-red-500 transition-all shrink-0"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Sidebar */}
        <div
          className={`p-3 border-t text-[10px] text-center ${darkMode ? "border-amber-900/20 text-amber-200/40" : "border-amber-200/40 text-mbah-brown/40"}`}
        >
          Mbah AI • Kauman, Surakarta
        </div>
      </aside>
    </>
  );
}
