// Utility untuk proses teks KB
// Chunking, parsing citation, dll

// Pecah teks panjang jadi chunks berdasarkan heading (### CHUNK-XX)
export function chunkByHeading(text) {
  // Split berdasarkan ### heading
  const sections = text.split(/(?=^###\s)/m)
  return sections
    .map((section) => section.trim())
    .filter((section) => section.length > 50) // buang yang terlalu pendek
}

// Pecah teks jadi chunks berdasarkan jumlah karakter
export function chunkBySize(text, maxChars = 1500) {
  const paragraphs = text.split(/\n\n+/)
  const chunks = []
  let current = ''

  for (const para of paragraphs) {
    // Kalau masih muat, gabung ke current
    if ((current + '\n\n' + para).length <= maxChars) {
      current = current ? current + '\n\n' + para : para
    } else {
      // Simpan current, mulai chunk baru
      if (current) chunks.push(current.trim())
      current = para
    }
  }
  // Jangan lupa chunk terakhir
  if (current) chunks.push(current.trim())

  return chunks
}

// Extract citation dari teks response Mbah
// Format: [Author, Title] atau [Case: Brand]
export function extractCitations(text) {
  const citations = []
  // Regex cari pattern [xxx]
  const regex = /\[([^\]]+)\]/g
  let match

  while ((match = regex.exec(text)) !== null) {
    const content = match[1]
    if (content.startsWith('Case') || content.startsWith('Case Study')) {
      citations.push({ type: 'case', text: content })
    } else if (content.includes(',') || content.includes('Framework')) {
      citations.push({ type: 'book', text: content })
    }
  }

  return citations
}

// Bersihkan teks dari markdown formatting berlebihan
export function cleanText(text) {
  return text
    .replace(/^#+\s/gm, '')        // hapus heading markers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // hapus bold markers
    .replace(/---+/g, '')           // hapus horizontal rules
    .replace(/\n{3,}/g, '\n\n')    // max 2 newline berturut
    .trim()
}