// Bubble pesan — card shapes tangguh & otomatis untuk peribahasa serta langkah konkret
import CitationPill from "./CitationPill";

export default function MessageBubble({ message, darkMode }) {
  const isMbah = message.role === "mbah";

  const getSafeTimeString = (timestamp) => {
    try {
      const timeTarget = timestamp ? new Date(timestamp) : new Date();
      return timeTarget.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "Baru saja";
    }
  };

  const renderFormattedText = (text) => {
    if (!text) return null;

    // Greeting khusus onboarding dengan peribahasa
    if (
      text.includes("Sugeng rawuh") &&
      text.includes("Ora usah dadi mBanteng")
    ) {
      const parts = text.split("Wong Jawa duwe unen-unen sing muni:");
      const introPart = parts[0];
      const quoteText =
        '"Ora usah dadi mBanteng kabeh, dadi kancil ya isa menang."';
      const translateText =
        "(Tidak perlu semua jadi banteng, kancil pun bisa menang.)";
      const tailText =
        "Coba ceritakke luwih jero marang Simbah: babagan apa sing saiki paling gawe sirahmu mumet utawa ngeganjel ing ati bab usahamu?";
      const tailTranslate =
        "(Coba ceritakan lebih dalam kepada Simbah: tentang hal apa yang sekarang paling membuat kepalamu pusing atau mengganjal di hati mengenai usahamu?)";

      const introLines = introPart.split("\n").filter((l) => l.trim() !== "");

      return (
        <div className="space-y-3">
          {introLines.map((line, idx) => {
            const isTrans =
              line.trim().startsWith("*(") || line.trim().startsWith("(");
            const cleanLine = line.replace(/^[*\s_()]+|[*\s_()]+$/g, "").trim();
            if (isTrans) {
              return (
                <p
                  key={idx}
                  className="text-xs italic leading-relaxed"
                  style={{ color: darkMode ? "#FFFFFF" : undefined }}
                >
                  ({cleanLine})
                </p>
              );
            }
            return (
              <p
                key={idx}
                className={`leading-relaxed text-sm font-normal ${darkMode ? "text-amber-100/95" : "text-mbah-brown"}`}
              >
                {line}
              </p>
            );
          })}

          {/* Card Shape Peribahasa Onboarding */}
          <div
            className={`p-3.5 rounded-xl border-l-4 border-mbah-terracotta shadow-xs transition-colors ${
              darkMode
                ? "bg-[#25201B] text-amber-100"
                : "bg-white text-mbah-brown"
            }`}
          >
            <p className="text-xs font-semibold text-mbah-terracotta mb-1 uppercase tracking-wider">
              Unen-Unen Simbah
            </p>
            <p
              className={`font-heading italic font-bold text-sm mb-1 ${darkMode ? "text-amber-100" : "text-mbah-brown"}`}
            >
              {quoteText}
            </p>
            <p
              className="text-xs italic leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : undefined }}
            >
              {translateText}
            </p>
          </div>

          <div className="space-y-1">
            <p
              className={`leading-relaxed text-sm font-normal ${darkMode ? "text-amber-100/95" : "text-mbah-brown"}`}
            >
              {tailText}
            </p>
            <p
              className="text-xs italic leading-relaxed"
              style={{ color: darkMode ? "#FFFFFF" : undefined }}
            >
              ({tailTranslate})
            </p>
          </div>
        </div>
      );
    }

    // Parsing pesan reguler AI
    const lines = text.split("\n");
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      let line = lines[i];
      let trimmed = line.trim();

      if (trimmed === "") {
        i++;
        continue;
      }

      // Deteksi Terjemahan Kurung Biasa (yang berdiri sendiri)
      const isTrans =
        (trimmed.startsWith("(") && trimmed.endsWith(")")) ||
        (trimmed.startsWith("*(") && trimmed.endsWith(")*"));
      if (isTrans) {
        const cleanTrans = trimmed.replace(/^[*\s_()]+|[*\s_()]+$/g, "").trim();
        elements.push(
          <p
            key={`trans-${i}`}
            className="text-xs italic leading-relaxed mb-2.5"
            style={{ color: darkMode ? "#FFFFFF" : undefined }}
          >
            ({cleanTrans})
          </p>,
        );
        i++;
        continue;
      }

      // 1. DETEKSI LANGKAH KONKRET BERANGKA (Mencakup seluruh isi rincian dan terjemahannya ke dalam satu kartu)
      const isStepHeader =
        /^(pertama|kedua|ketiga|keempat|kelima|\d+[.,])\s+/i.test(trimmed);
      if (isStepHeader) {
        let stepTitle = trimmed;
        let stepSubJawaArr = [];
        let stepTransArr = [];

        // Kumpulkan semua baris di bawahnya sampai ketemu langkah berikutnya atau akhir teks
        let pointer = i + 1;
        while (pointer < lines.length) {
          let nextLine = lines[pointer].trim();
          if (nextLine === "") {
            pointer++;
            continue;
          }
          // Jika sudah masuk ke header langkah berikutnya atau bagian penutup, berhenti
          if (
            /^(pertama|kedua|ketiga|keempat|kelima|\d+[.,])\s+/i.test(
              nextLine,
            ) ||
            /simbah|coba ing minggu|nah nak/i.test(nextLine)
          ) {
            break;
          }

          if (
            nextLine.startsWith("(") ||
            nextLine.startsWith("*(") ||
            nextLine.startsWith("_(")
          ) {
            stepTransArr.push(
              nextLine.replace(/^[*\s_()]+|[*\s_()]+$/g, "").trim(),
            );
          } else {
            stepSubJawaArr.push(nextLine);
          }
          pointer++;
        }
        i = pointer - 1; // Lompat pointer utama

        let stepNum = "📌";
        if (/pertama|1[.,]/i.test(stepTitle)) stepNum = "1";
        else if (/kedua|2[.,]/i.test(stepTitle)) stepNum = "2";
        else if (/ketiga|3[.,]/i.test(stepTitle)) stepNum = "3";
        else if (/keempat|4[.,]/i.test(stepTitle)) stepNum = "4";

        elements.push(
          <div
            key={`step-card-${i}`}
            className={`my-3.5 p-4 rounded-xl border shadow-xs flex gap-3.5 items-start transition-colors ${
              darkMode
                ? "bg-[#25201B] border-amber-900/40 text-amber-100"
                : "bg-white border-orange-100 text-mbah-brown"
            }`}
          >
            <div className="w-7 h-7 rounded-full bg-mbah-terracotta text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
              {stepNum}
            </div>
            <div className="flex-1 space-y-2">
              <h4
                className={`font-bold text-sm ${darkMode ? "text-amber-100" : "text-mbah-brown"}`}
              >
                {stepTitle}
              </h4>
              {stepSubJawaArr.map((par, pIdx) => (
                <p
                  key={`sub-${pIdx}`}
                  className={`text-sm leading-relaxed ${darkMode ? "text-amber-100/90" : "text-mbah-brown/85"}`}
                >
                  {par}
                </p>
              ))}
              {stepTransArr.map((tr, tIdx) => (
                <p
                  key={`tr-${tIdx}`}
                  className="text-xs italic leading-relaxed"
                  style={{ color: darkMode ? "#FFFFFF" : undefined }}
                >
                  ({tr})
                </p>
              ))}
            </div>
          </div>,
        );
        i++;
        continue;
      }

      // 2. DETEKSI PERIBAHASA KB DINAMIS (Fleksibel: Mendeteksi kalimat pendek dengan/tanpa tanda kutip yang diikuti terjemahan kurung)
      const isNextLineTrans =
        i + 1 < lines.length &&
        (lines[i + 1].trim().startsWith("(") ||
          lines[i + 1].trim().startsWith("*(") ||
          lines[i + 1].trim().startsWith("_("));

      const nextLineContent = isNextLineTrans ? lines[i + 1].trim() : "";
      const isPhilosophicalTrans =
        /(artinya|artinya:|maknanya|arti|berarti|—|memberikan|keberkahan|pengorbanan|kesabaran|fokus|usaha|hasil|kunci|modal|semua|keberhasilan|perlu)/i.test(
          nextLineContent,
        );

      // Cek apakah ini kalimat peribahasa (pendek, berakhiran titik/tanda kutip, dan punya terjemahan filosofis di bawahnya)
      if (
        isNextLineTrans &&
        trimmed.length < 75 &&
        isPhilosophicalTrans &&
        !trimmed.endsWith(":")
      ) {
        let quoteContent = trimmed.replace(/^[*\s_"]+|[*\s_"]+$/g, "").trim();

        if (!quoteContent.startsWith('"') && !quoteContent.startsWith("“")) {
          quoteContent = `"${quoteContent}"`;
        }

        let translationText = "";
        if (i + 1 < lines.length) {
          const nextTrimmed = lines[i + 1].trim();
          translationText = nextTrimmed
            .replace(/^[*\s_()]+|[*\s_()]+$/g, "")
            .trim();
          i++;
        }

        elements.push(
          <div
            key={`quote-card-${i}`}
            className={`my-3 p-3.5 rounded-xl border-l-4 border-mbah-terracotta shadow-xs transition-colors ${
              darkMode
                ? "bg-[#25201B] text-amber-100"
                : "bg-white text-mbah-brown"
            }`}
          >
            <p className="text-xs font-semibold text-mbah-terracotta mb-1 uppercase tracking-wider">
              Pegetan / Peribahasa Nusantara
            </p>
            <p
              className={`font-heading italic font-bold text-sm mb-1 ${darkMode ? "text-amber-100" : "text-mbah-brown"}`}
            >
              {quoteContent}
            </p>
            {translationText && (
              <p
                className="text-xs italic leading-relaxed"
                style={{ color: darkMode ? "#FFFFFF" : undefined }}
              >
                ({translationText})
              </p>
            )}
          </div>,
        );
        i++;
        continue;
      }

      // Teks narasi standar (paragraf cerita biasa)
      elements.push(
        <p
          key={`text-${i}`}
          className={`leading-relaxed text-sm font-normal mb-2 ${darkMode ? "text-amber-100/95" : "text-mbah-brown"}`}
        >
          {line}
        </p>,
      );
      i++;
    }

    return elements;
  };

  return (
    <div
      className={`flex items-start gap-3 ${isMbah ? "" : "flex-row-reverse"}`}
    >
      {isMbah && (
        <img
          src={new URL("../../assets/mbahai-logo.png", import.meta.url).href}
          alt="Mbah"
          className="w-8 h-8 rounded-full mt-1 flex-shrink-0"
        />
      )}

      <div className={`max-w-[85%] sm:max-w-[75%] ${isMbah ? "" : "ml-auto"}`}>
        <div
          className={`px-4 py-3.5 text-sm leading-relaxed rounded-2xl shadow-xs transition-colors duration-300 ${
            isMbah
              ? darkMode
                ? "bg-[#2A241F] text-amber-100/95 border border-amber-900/40 rounded-tl-sm"
                : "bg-mbah-cream text-mbah-brown border border-gray-100 rounded-tl-sm"
              : "bg-mbah-terracotta text-white rounded-tr-sm"
          }`}
        >
          {isMbah ? renderFormattedText(message.text) : message.text}
        </div>

        {isMbah && message.citations && message.citations.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {message.citations.map((c, i) => (
              <CitationPill key={i} type={c.type} text={c.text} />
            ))}
          </div>
        )}

        <p
          className={`text-[10px] mt-1.5 ${darkMode ? "text-amber-200/40" : "text-mbah-brown/30"} ${isMbah ? "" : "text-right"}`}
        >
          {getSafeTimeString(message.timestamp)}
        </p>
      </div>
    </div>
  );
}
