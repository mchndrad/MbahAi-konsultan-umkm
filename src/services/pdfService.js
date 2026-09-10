// # pdfService.js — Generator PDF Catatan Simbah dengan Auto-Height Card & Terjemahan Miring
import jsPDF from "jspdf";

export function generateCatatanPDF(userContext = {}, messages = []) {
  const doc = new jsPDF("p", "mm", "a4");
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  // Warna Tema Klasik Mbah AI
  const colorTerracotta = [193, 86, 43]; // #C1562B
  const colorDarkBrown = [45, 36, 30];   // #2D241E
  const colorCardBg = [245, 240, 232];   // Soft warm gray/cream
  const colorGold = [212, 160, 23];      // #D4A017

  // --- 1. HEADER BANNER UTAMA ---
  doc.setFillColor(...colorTerracotta);
  doc.rect(0, 0, pageWidth, 42, "F");

  doc.setFillColor(...colorGold);
  doc.rect(0, 42, pageWidth, 2, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text("Catatan & Rembugan Simbah", margin, 18);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(255, 245, 235);
  const namaUsaha = userContext.businessType ? `Usaha: ${userContext.businessType}` : "Pelaku Usaha UMKM";
  const namaPanggilan = userContext.name ? ` • Mitra: ${userContext.name}` : "";
  doc.text(`${namaUsaha}${namaPanggilan}`, margin, 26);

  const tglStr = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  doc.text(`Tanggal Konsultasi: ${tglStr}`, margin, 33);

  let cursorY = 52;

  // --- 2. KOTAK RINGKASAN MASALAH UTAMA (DUDUK PERSOALAN) ---
  doc.setFillColor(...colorCardBg);
  doc.roundedRect(margin, cursorY, contentWidth, 22, 3, 3, "F");
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(...colorTerracotta);
  doc.text("DUDUK PERSOALAN (Unek-Unek Utama)", margin + 4, cursorY + 7);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...colorDarkBrown);
  const masalahText = userContext.mainChallenge 
    ? `"${userContext.mainChallenge}"` 
    : "Konsultasi pengembangan usaha dan strategi menghadapi persaingan pasar.";
  doc.text(masalahText, margin + 4, cursorY + 15, { maxWidth: contentWidth - 8 });

  cursorY += 28;

  // --- 3. EKSTRAK POIN REMBUKAN & SARAN (PITUTUR SIMBAH) ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...colorDarkBrown);
  doc.text("PITUTUR & LANGKAH KONKRET SIMBAH", margin, cursorY);
  cursorY += 6;

  // Ambil data langkah konkret dari pesan chat Mbah AI
  let actionPairs = []; // Menyimpan { textJawa, textIndo }
  messages.forEach((msg) => {
    if (msg.role === "mbah") {
      const lines = msg.text.split("\n");
      let currentJawa = "";
      
      lines.forEach((line) => {
        const trimmed = line.trim();
        if (/^(pertama|kedua|ketiga|keempat|kelima|keenam|ketuju|kedelapan|kesembilan|\d+[.,])\s+/i.test(trimmed)) {
          if (currentJawa) {
            actionPairs.push({ textJawa: currentJawa, textIndo: "" });
          }
          currentJawa = trimmed;
        } else if ((trimmed.startsWith("(") && trimmed.endsWith(")")) || (trimmed.startsWith("*(") && trimmed.endsWith(")*"))) {
          const cleanTrans = trimmed.replace(/^[*\s_()]+|[*\s_()]+$/g, "").trim();
          if (actionPairs.length > 0 && actionPairs[actionPairs.length - 1].textIndo === "") {
            actionPairs[actionPairs.length - 1].textIndo = cleanTrans;
          } else if (currentJawa) {
            actionPairs.push({ textJawa: currentJawa, textIndo: cleanTrans });
            currentJawa = "";
          }
        }
      });
      if (currentJawa) {
        actionPairs.push({ textJawa: currentJawa, textIndo: "" });
      }
    }
  });

  // Fallback jika belum ada chat
  if (actionPairs.length === 0) {
    actionPairs = [
      { textJawa: "1. Perkuat diferensiasi produk supaya ora kerenteng perang harga karo kompetitor.", textIndo: "Perkuat diferensiasi produk agar tidak terjebak perang harga dengan kompetitor." },
      { textJawa: "2. Evaluasi konsistensi kualitas bahan baku lan pelayanan harian marang pelanggan.", textIndo: "Evaluasi konsistensi kualitas bahan baku dan pelayanan harian kepada pelanggan." }
    ];
  }

  // Render Card dengan Auto-Height (Menyesuaikan panjang teks otomatis)
  actionPairs.forEach((pair, idx) => {
    // Hitung tinggi teks agar card bisa menyesuaikan (Auto-sizing)
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const wrappedJawa = doc.splitTextToSize(pair.textJawa, contentWidth - 26);
    
    let wrappedIndo = [];
    if (pair.textIndo) {
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      wrappedIndo = doc.splitTextToSize(`(${pair.textIndo})`, contentWidth - 26);
    }

    // Tinggi card dihitung dari jumlah baris teks
    const cardHeight = 10 + (wrappedJawa.length * 4.5) + (wrappedIndo.length > 0 ? (wrappedIndo.length * 4) + 2 : 0);

    // Cek apakah muat di halaman ini, kalau tidak buat halaman baru
    if (cursorY + cardHeight > pageHeight - 20) {
      doc.addPage();
      cursorY = 20;
    }

    // Gambar Card Background Putih Berborder Tipis
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(220, 210, 195);
    doc.roundedRect(margin, cursorY, contentWidth, cardHeight, 2, 2, "FD");

    // Label Nomor Aksi (Aksi 1, Aksi 2, dst)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...colorTerracotta);
    doc.text(`Aksi ${idx + 1}`, margin + 4, cursorY + 7);

    // Render Teks Bahasa Jawa / Utama
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...colorDarkBrown);
    doc.text(wrappedJawa, margin + 22, cursorY + 7);

    // Render Teks Terjemahan Bahasa Indonesia (Miring) di bawahnya
    if (wrappedIndo.length > 0) {
      const indoY = cursorY + 7 + (wrappedJawa.length * 4.5) + 1;
      doc.setFont("helvetica", "italic");
      doc.setFontSize(8);
      doc.setTextColor(110, 100, 90);
      doc.text(wrappedIndo, margin + 22, indoY);
    }

    cursorY += cardHeight + 4;
  });

  cursorY += 4;

  // --- 4. KOTAK PERIBAHASA / UNEN-UNEN KHAS ---
  if (cursorY > pageHeight - 45) {
    doc.addPage();
    cursorY = 20;
  }

  doc.setFillColor(...colorCardBg);
  doc.roundedRect(margin, cursorY, contentWidth, 26, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...colorTerracotta);
  doc.text("UNEN-UNEN PITUTUR LUHUR", margin + 4, cursorY + 7);

  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(...colorDarkBrown);
  doc.text('"Ora usah dadi mBanteng kabeh, dadi kancil ya isa menang."', margin + 4, cursorY + 14);
  
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(100, 90, 80);
  doc.text('(Tidak perlu semua jadi banteng, kancil pun bisa menang dengan strategi & kecerdikan.)', margin + 4, cursorY + 21);

  cursorY += 32;

  // --- 5. FOOTER DOKUMEN ---
  if (cursorY > pageHeight - 15) {
    doc.addPage();
    cursorY = pageHeight - 20;
  }

  doc.setDrawColor(210, 200, 185);
  doc.line(margin, cursorY, pageWidth - margin, cursorY);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(120, 110, 100);
  doc.text("Salam, Simbah AI — Kauman, Surakarta", margin, cursorY + 5);
  doc.text("Mbah AI grounded ke 10 buku marketing • 32 case study UMKM Nusantara", pageWidth - margin, cursorY + 5, { align: "right" });

  const fileName = `Catatan-Simbah-${userContext.name || "Mitra"}.pdf`;
  doc.save(fileName);
}