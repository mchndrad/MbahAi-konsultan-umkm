// Loading bubble — animasi saat Mbah sedang mikir
import { useState, useEffect } from "react";

const MESSAGES = [
  "Simbah lagi mikir...",
  "Simbah nyari catatan lama...",
  "Simbah baca buku dulu...",
  "Simbah teringat pengalaman...",
];

export default function LoadingBubble() {
  const [idx, setIdx] = useState(0);

  // Ganti pesan setiap 2 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % MESSAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-start gap-3">
      <img
        src={new URL("../../assets/mbahai-logo.png", import.meta.url).href}
        alt="Mbah"
        className="w-8 h-8 rounded-full mt-1"
      />
      <div className="bg-mbah-cream rounded-2xl rounded-tl-sm px-4 py-3 border border-gray-100">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span
              className="w-1.5 h-1.5 bg-mbah-terracotta/40 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-1.5 h-1.5 bg-mbah-terracotta/40 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-1.5 h-1.5 bg-mbah-terracotta/40 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
          <span className="text-xs text-mbah-brown/40 italic">
            {MESSAGES[idx]}
          </span>
        </div>
      </div>
    </div>
  );
}
