// KB Loader — load semua file Knowledge Base dari folder public/kb/
// File di-fetch saat app start, di-cache di memory

// Daftar file KB yang akan di-load
const KB_FILES = [
  '/kb/01-KNOWLEDGE-BASE-Extended.md',
  '/kb/03-PERIBAHASA-DATABASE.md',
  '/kb/04-SAMPLE-DIALOG-LIBRARY.md',
  '/kb/06-MARKETING-FRAMEWORKS.md',
  '/kb/07-CASE-STUDIES-INDONESIA.md',
]

// Cache KB di memory (biar tidak fetch ulang)
let kbCache = null

// Load semua file KB, return array of { filename, content }
export async function loadAllKB() {
  // Kalau sudah di-cache, return langsung
  if (kbCache) return kbCache

  console.log('[KB Loader] Loading knowledge base files...')

  const results = []

  for (const filePath of KB_FILES) {
    try {
      const response = await fetch(filePath)
      if (response.ok) {
        const content = await response.text()
        results.push({
          filename: filePath.split('/').pop(), // nama file saja
          content: content,
        })
        console.log(`[KB Loader] ✅ Loaded: ${filePath} (${content.length} chars)`)
      } else {
        console.warn(`[KB Loader] ⚠️ Failed to load: ${filePath}`)
      }
    } catch (err) {
      console.warn(`[KB Loader] ❌ Error loading ${filePath}:`, err.message)
    }
  }

  // Simpan ke cache
  kbCache = results
  console.log(`[KB Loader] Total loaded: ${results.length} files`)

  return results
}

// Reset cache (kalau perlu reload)
export function resetKBCache() {
  kbCache = null
}