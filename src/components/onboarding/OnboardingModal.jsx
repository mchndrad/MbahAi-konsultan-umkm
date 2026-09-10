// Modal onboarding 3 pertanyaan sebelum masuk chat
import { useState } from "react";
import {
  X,
  ChevronRight,
  ChevronLeft,
  Check,
  Sparkles,
  Utensils,
  Shirt,
  Gem,
  Music,
  Film,
  Camera,
  Palette,
  Box,
  Building2,
  Megaphone,
  Radio,
  BookOpen,
  Gamepad2,
  Clapperboard,
  Armchair,
  Drama,
} from "lucide-react";

// 18 subsektor ekonomi kreatif
const SUBSEKTOR_EKRAF = [
  {
    name: "Kuliner",
    desc: "Warung kopi, bakery, snack kemasan, dll.",
    icon: Utensils,
  },
  {
    name: "Fashion",
    desc: "Batik modern, streetwear, hijab, pakaian...",
    icon: Shirt,
  },
  { name: "Kriya", desc: "Anyaman bambu/rotan, keramik, ukiran...", icon: Gem },
  {
    name: "Musik",
    desc: "Musisi independen, audio production, dll.",
    icon: Music,
  },
  {
    name: "Film",
    desc: "Content production house, studio anim...",
    icon: Film,
  },
  {
    name: "Fotografi",
    desc: "Studio foto produk UMKM, pre-weddin...",
    icon: Camera,
  },
  {
    name: "Desain Komunikasi Visual",
    desc: "Branding studio, ilustrasi, packaging de...",
    icon: Palette,
  },
  {
    name: "Desain Produk",
    desc: "Furnitur minimalis, peralatan rumah tan...",
    icon: Box,
  },
  {
    name: "Arsitektur",
    desc: "Biro arsitek lokal, renovasi rumah, lighti...",
    icon: Building2,
  },
  {
    name: "Seni Rupa",
    desc: "Galeri seni, lukisan, patung, seni instalasi",
    icon: Sparkles,
  },
  {
    name: "Periklanan",
    desc: "Social media agency, digital marketing ...",
    icon: Megaphone,
  },
  {
    name: "TV & Radio",
    desc: "Podcast network lokal, radio streaming ...",
    icon: Radio,
  },
  {
    name: "Penerbitan",
    desc: "Penerbit buku indie, zine, percetakan k...",
    icon: BookOpen,
  },
  {
    name: "Aplikasi & Game",
    desc: "Mobile app studio, game developer lokal",
    icon: Gamepad2,
  },
  {
    name: "Animasi",
    desc: "Studio animasi 2D/3D, motion graphic",
    icon: Clapperboard,
  },
  {
    name: "Desain Interior",
    desc: "Penataan interior cafe, rumah joglo, tok...",
    icon: Armchair,
  },
  {
    name: "Seni Pertunjukan",
    desc: "Teater, sanggar tari tradisional, stand-u...",
    icon: Drama,
  },
  {
    name: "Lainnya (Ekraf Terkait)",
    desc: "Jasa kreatif atau produk kerajinan unik ...",
    icon: Sparkles,
  },
];

// Pilihan lama usaha dengan deskripsi fase
const LAMA_USAHA = [
  { label: "< 1 tahun", desc: "Fase merintis / validasi pasar", value: "<1" },
  {
    label: "1 - 2 tahun",
    desc: "Fase mencari traksi & stabilitas",
    value: "1-2",
  },
  { label: "3 - 5 tahun", desc: "Fase konsolidasi & sistemasi", value: "3-5" },
  {
    label: "> 5 tahun",
    desc: "Fase ekspansi atau re-positioning",
    value: ">5",
  },
];

// Pilihan panggilan nyaman
const PANGGILAN_NYAMAN = [
  { label: '"Le" (Pria)', value: "Le" },
  { label: '"Ndhuk" (Wanita)', value: "Ndhuk" },
  { label: '"Nak" (Netral)', value: "Nak" },
];

export default function OnboardingModal({ onComplete, onClose }) {
  const [step, setStep] = useState(0);

  // State data onboarding
  const [businessType, setBusinessType] = useState("");
  const [businessAge, setBusinessAge] = useState("");
  const [userName, setUserName] = useState("");
  const [userSalutation, setUserSalutation] = useState("Le");
  const [mainChallenge, setMainChallenge] = useState("");

  const canProceed = () => {
    if (step === 0) return businessType !== "";
    if (step === 1) return businessAge !== "";
    if (step === 2) return mainChallenge.trim().length >= 10;
    return false;
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Mengirimkan data lengkap termasuk nama dan pilihan panggilan ke parent/store
      onComplete({
        businessType,
        businessAge,
        userName,
        userSalutation,
        mainChallenge,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🧙‍♂️</span>
            <div>
              <h2 className="font-heading font-bold text-mbah-brown text-lg">
                Kenalan Dulu Sama Simbah
              </h2>
              <p className="text-xs text-mbah-brown/50 mt-0.5">
                Langkah {step + 1} dari 3
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-mbah-brown/40 hover:text-mbah-brown rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-1 bg-mbah-terracotta transition-all duration-300"
            style={{ width: `${((step + 1) / 3) * 100}%` }}
          />
        </div>

        {/* Content per step */}
        <div className="px-6 py-6">
          {/* STEP 0: Jenis Usaha */}
          {step === 0 && (
            <div>
              <div className="mb-4">
                <span className="font-heading italic text-mbah-brown text-xl font-bold block">
                  "Le/Ndhuk, jenengan iku dodolan opo?"
                </span>
                <span className="text-sm text-mbah-brown/60 mt-0.5 block">
                  (Nak, kamu sedang menjalankan usaha di bidang apa?)
                </span>
              </div>

              <label className="block text-xs font-semibold uppercase tracking-wider text-mbah-brown/50 mb-3">
                Pilih Subsektor Ekonomi Kreatif:
              </label>

              <div className="max-h-[360px] overflow-y-auto pr-2 grid grid-cols-1 md:grid-cols-2 gap-3 custom-scrollbar">
                {SUBSEKTOR_EKRAF.map((sub) => {
                  const IconComponent = sub.icon;
                  const isSelected = businessType === sub.name;
                  return (
                    <button
                      key={sub.name}
                      onClick={() => setBusinessType(sub.name)}
                      className={`flex items-start gap-3.5 p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-orange-50/50 border-mbah-terracotta ring-1 ring-mbah-terracotta shadow-sm"
                          : "bg-white border-gray-200 hover:border-mbah-gold hover:bg-gray-50/50"
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-lg shrink-0 ${isSelected ? "bg-mbah-terracotta text-white" : "bg-gray-100 text-mbah-brown"}`}
                      >
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-mbah-brown">
                          {sub.name}
                        </h3>
                        <p className="text-xs text-mbah-brown/60 mt-0.5 line-clamp-1">
                          {sub.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 1: Lama Usaha */}
          {step === 1 && (
            <div>
              <div className="mb-6">
                <span className="font-heading italic text-mbah-brown text-xl font-bold block">
                  "Wis pinten tahun mlaku usahane?"
                </span>
                <span className="text-sm text-mbah-brown/60 mt-0.5 block">
                  (Sudah berapa lama usahamu ini berjalan?)
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {LAMA_USAHA.map((opt) => {
                  const isSelected = businessAge === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => setBusinessAge(opt.value)}
                      className={`relative p-4 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "bg-orange-50/50 border-mbah-terracotta ring-1 ring-mbah-terracotta shadow-sm"
                          : "bg-white border-gray-200 hover:border-mbah-gold hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-base text-mbah-brown">
                          {opt.label}
                        </span>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-mbah-terracotta text-white flex items-center justify-center">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-mbah-brown/60">{opt.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Nama & Tantangan Utama */}
          {step === 2 && (
            <div>
              <div className="mb-4">
                <span className="font-heading italic text-mbah-brown text-xl font-bold block">
                  "Sing paling ngeganjel ing atine saiki opo?"
                </span>
                <span className="text-sm text-mbah-brown/60 mt-0.5 block">
                  (Masalah apa yang paling bikin pusing atau mengganjal di hati
                  saat ini?)
                </span>
              </div>

              {/* Baris Input Nama & Panggilan Nyaman */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-mbah-brown/70 mb-1.5">
                    Nama Panggilanmu:
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Contoh: Budi, Sarah, Chandra"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-mbah-brown bg-white focus:outline-none focus:border-mbah-terracotta focus:ring-1 focus:ring-mbah-terracotta"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-mbah-brown/70 mb-1.5">
                    Panggilan Nyaman:
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {PANGGILAN_NYAMAN.map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        onClick={() => setUserSalutation(p.value)}
                        className={`py-2 px-1 text-xs font-medium rounded-lg border text-center transition-all ${
                          userSalutation === p.value
                            ? "bg-mbah-terracotta text-white border-mbah-terracotta shadow-sm"
                            : "bg-white text-mbah-brown border-gray-200 hover:border-mbah-gold"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Textarea Cerita / Masalah */}
              <div>
                <label className="block text-xs font-semibold text-mbah-brown/70 mb-1.5">
                  Cerita / Masalah Utamamu:
                </label>
                <textarea
                  value={mainChallenge}
                  onChange={(e) => setMainChallenge(e.target.value)}
                  placeholder="Ceritakan dengan santai... misal: Warung kopiku baru jalan 3 bulan tapi sepi terus, padahal rasa enak dan tempat bersih. Bingung kalah saing sama chain kopi besar di sebelah."
                  rows={4}
                  className="w-full p-3.5 rounded-xl border border-gray-200 text-sm text-mbah-brown bg-white resize-none focus:outline-none focus:border-mbah-terracotta focus:ring-1 focus:ring-mbah-terracotta"
                />
                <p className="text-xs text-mbah-brown/50 mt-1.5 flex justify-between">
                  <span>Minimal 10 karakter</span>
                  <span
                    className={
                      mainChallenge.length >= 10
                        ? "text-green-600 font-medium"
                        : ""
                    }
                  >
                    {mainChallenge.length}/10
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/50">
          {step > 0 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1.5 text-sm font-medium text-mbah-brown/70 hover:text-mbah-brown px-3 py-2 rounded-lg hover:bg-gray-200/50 transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
              Kembali
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm ${
              canProceed()
                ? "bg-mbah-terracotta text-white hover:bg-mbah-terracotta-light cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {step < 2 ? (
              <>
                Lanjut <ChevronRight size={16} />
              </>
            ) : (
              <>
                <Sparkles size={16} /> Mulai Ngobrol dengan Simbah
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
