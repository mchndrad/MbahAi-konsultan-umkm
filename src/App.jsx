// # Root component — routing bersih tanpa konflik state
import { useState } from "react";
import useAppStore from "./store/useAppStore";
import LandingPage from "./components/landing/LandingPage";
import PerpustakaanPage from "./components/landing/PerpustakaanPage";
import StudiKasusPage from "./components/landing/StudiKasusPage";
import OnboardingModal from "./components/onboarding/OnboardingModal";
import ChatPage from "./components/chat/ChatPage";

export default function App() {
  const currentScreen = useAppStore((s) => s.currentScreen);
  const setScreen = useAppStore((s) => s.setScreen);
  const setUserContext = useAppStore((s) => s.setUserContext);
  const setMessages = useAppStore((s) => s.setMessages);

  const [activeSubPage, setActiveSubPage] = useState("landing");
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleStartChat = () => {
    setShowOnboarding(true);
  };

  const handleNavigate = (page) => {
    if (page === "chat") {
      handleStartChat();
    } else {
      setActiveSubPage(page);
      setScreen("landing");
      window.scrollTo(0, 0);
    }
  };

  const handleOnboardingComplete = (data) => {
    const newContext = {
      name: data.userName,
      businessType: data.businessType,
      businessAge: data.businessAge,
      mainChallenge: data.mainChallenge,
      preferredCall: data.userSalutation,
      hasCompletedOnboarding: true,
    };

    setUserContext(newContext);

    // # Generator greeting lengkap dengan terjemahan kurung di setiap paragraf narasi
    const greetingText = generateGreeting(newContext);

    setMessages([
      {
        id: "greeting-" + Date.now(),
        role: "mbah",
        text: greetingText,
        citations: [],
      },
    ]);

    setShowOnboarding(false);
    setScreen("chat");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {currentScreen === "chat" ? (
        <ChatPage
          onBackToLanding={() => {
            setScreen("landing");
            setActiveSubPage("landing");
          }}
        />
      ) : (
        <>
          {activeSubPage === "landing" && (
            <LandingPage
              onStartChat={handleStartChat}
              onNavigate={handleNavigate}
              activePage={activeSubPage}
            />
          )}

          {activeSubPage === "perpustakaan" && (
            <PerpustakaanPage
              onStartChat={handleStartChat}
              onNavigate={handleNavigate}
              activePage={activeSubPage}
            />
          )}

          {activeSubPage === "studi-kasus" && (
            <StudiKasusPage
              onStartChat={handleStartChat}
              onNavigate={handleNavigate}
              activePage={activeSubPage}
            />
          )}
        </>
      )}

      {showOnboarding && (
        <OnboardingModal
          onComplete={handleOnboardingComplete}
          onClose={() => setShowOnboarding(false)}
        />
      )}
    </div>
  );
}

// # Generator greeting lengkap dengan terjemahan di setiap paragraf narasi
function generateGreeting(ctx = {}) {
  const safeCtx = ctx || {};
  const nama = safeCtx.name ? ` ${safeCtx.name}` : "";
  const sapaan = safeCtx.preferredCall || "Le";
  const bisnis = safeCtx.businessType || "usaha";
  const lama = safeCtx.businessAge || "";
  const tantangan = safeCtx.mainChallenge || "";

  let lamaText = "";
  let lamaTranslate = "";
  if (lama === "<1") {
    lamaText = "yang baru dimulai kurang dari setahun";
    lamaTranslate = "yang baru berjalan kurang dari 1 tahun";
  } else if (lama === "1-2") {
    lamaText = "yang sudah berjalan 1-2 tahun";
    lamaTranslate = "yang sudah berjalan 1-2 tahun";
  } else if (lama === "3-5") {
    lamaText = "yang sudah 3-5 tahun berdiri";
    lamaTranslate = "yang sudah berdiri 3-5 tahun";
  } else if (lama === ">5") {
    lamaText = "yang sudah lebih dari 5 tahun bertahan";
    lamaTranslate = "yang sudah bertahan lebih dari 5 tahun";
  }

  let greeting = `Sugeng rawuh, ${sapaan}${nama}! Kene pinarak lenggah sing kepenak, Simbah wis nyiapake wedang jahe anget 🍵.\n`;
  greeting += `*(Selamat datang, ${sapaan}${nama}! Silakan duduk yang nyaman, Simbah sudah menyiapkan wedang jahe hangat.)*\n\n`;

  greeting += `Simbah wis maca sithik critamu bab usaha ${bisnis} ${lamaText}.\n`;
  greeting += `*(Simbah sudah membaca sedikit cerita tentang usahamu di bidang ${bisnis} ${lamaTranslate}.)*\n\n`;

  greeting += `Simbah ngrerti banget rasane berjuang ngrintis usaha saka ngisor.\n`;
  greeting += `*(Simbah sangat mengerti rasanya berjuang merintis usaha dari bawah.)*\n\n`;

  if (tantangan) {
    greeting += `Simbah nangkep unek-unekmu: "${tantangan}"\n`;
    greeting += `*(Simbah menangkap ganjalan hatimu: "${tantangan}")*\n\n`;
  }

  greeting += `Dulu taun 1975 pas Simbah umur 22 tahun buka warung batik Kauman ing Solo, 6 wulan pertama sepi koyo kuburan malam Jumat, meh wae putus asa. Nanging kanthi sabar lan sinau nemokake pembeda sing sejati, Gusti paring dalan padhang.\n`;
  greeting += `*(Dulu tahun 1975 saat Simbah umur 22 tahun buka warung batik Kauman di Solo, 6 bulan pertama sepi seperti kuburan malam Jumat, hampir saja putus asa. Namun dengan sabar dan belajar menemukan pembeda yang sejati, Tuhan memberi jalan terang.)*\n\n`;

  greeting += `Wong Jawa duwe unen-unen sing muni: "Ora usah dadi mBanteng kabeh, dadi kancil ya isa menang."\n`;
  greeting += `*(Tidak perlu semua jadi banteng, kancil pun bisa menang.)*\n\n`;

  greeting += `Coba ceritakke luwih jero marang Simbah: babagan apa sing saiki paling gawe sirahmu mumet utawa ngeganjel ing ati bab usahamu?\n`;
  greeting += `*(Coba ceritakan lebih dalam kepada Simbah: tentang hal apa yang sekarang paling membuat kepalamu pusing atau mengganjal di hati mengenai usahamu?)*`;

  return greeting;
}
