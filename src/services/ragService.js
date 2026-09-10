// RAG Service — versi aman anti-freeze (Non-blocking background load)
import { loadAllKB } from './kbLoader'
import { chunkBySize } from '../utils/textUtils'

let chunksCache = []
let isReady = false
let isLoadingInProgress = false

// Init RAG dijalankan di latar belakang tanpa nge-block UI
export async function initRAG() {
  if (isReady || isLoadingInProgress) return
  isLoadingInProgress = true

  // Jalankan di microtask/setTimeout terpisah agar browser tidak freeze
  setTimeout(async () => {
    try {
      console.log('[RAG] Loading KB in background...')
      const kbFiles = await loadAllKB()

      const tempChunks = []
      for (const file of kbFiles) {
        const chunks = chunkBySize(file.content || '', 1500)
        chunks.forEach((text, i) => {
          tempChunks.push({
            id: `${file.filename}-${i}`,
            source: file.filename,
            text: text,
          })
        })
      }

      chunksCache = tempChunks
      isReady = true
      console.log(`[RAG] Ready! ${chunksCache.length} chunks loaded.`);
    } catch (err) {
      console.error('[RAG] Gagal memuat KB:', err)
    } finally {
      isLoadingInProgress = false
    }
  }, 100)
}

// Search KB pakai keyword matching (aman jika belum ready)
export async function searchKB(query, topK = 5) {
  if (!isReady) {
    // Jika user terlanjur nanya tapi KB masih load, kembalikan kosong dulu agar tidak nge-hang
    return { chunks: [], maxScore: 0, tier: 4 }
  }

  const keywords = query
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 2)

  const scored = chunksCache.map((chunk) => {
    const lowerText = chunk.text.toLowerCase()
    let score = 0
    for (const kw of keywords) {
      if (lowerText.includes(kw)) score += 1
    }
    const normalizedScore = keywords.length > 0 ? score / keywords.length : 0
    return { ...chunk, score: normalizedScore }
  })

  scored.sort((a, b) => b.score - a.score)
  const topChunks = scored.filter((c) => c.score > 0).slice(0, topK)
  const maxScore = topChunks[0]?.score || 0

  let tier = 4
  if (maxScore > 0.6) tier = 1
  else if (maxScore > 0.35) tier = 2
  else if (maxScore > 0.1) tier = 3

  return { chunks: topChunks, maxScore, tier }
}

export function isRAGReady() {
  return isReady
}