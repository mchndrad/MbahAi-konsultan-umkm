// Persona Service — assemble final prompt dan kirim ke Gemini
import { SYSTEM_PROMPT } from '../prompts/systemPrompt'
import { buildTier1Prompt, buildTier2Prompt, buildTier3Prompt, buildTier4Prompt } from '../prompts/tierPrompts'
import { searchKB } from './ragService'
import { sendChat } from './geminiService'
import { extractCitations } from '../utils/textUtils'

export async function getMbahResponse(userMessage, chatHistory, userContext) {
  // 1. Search KB
  const { chunks, tier } = await searchKB(userMessage)

  // PERBAIKAN 3: Hapus .slice(0, 500) agar seluruh isi materi RAG terbaca oleh AI
  // 2. Ambil teks chunks (max 3 chunks)
  const kbContext = chunks
    .slice(0, 3)
    .map((c) => c.text) 
    .join('\n---\n')

  // 3. Build tier prompt
  let tierPrompt
  if (tier === 1) tierPrompt = buildTier1Prompt(userContext, kbContext)
  else if (tier === 2) tierPrompt = buildTier2Prompt(userContext, kbContext)
  else if (tier === 3) tierPrompt = buildTier3Prompt(userContext)
  else {
    const subtype = detectSensitiveTopic(userMessage)
    tierPrompt = buildTier4Prompt(subtype)
  }

  // 4. Gabungkan jadi 1 prompt utuh
  const fullPrompt = SYSTEM_PROMPT + '\n\n' + tierPrompt

  // 5. Kirim ke Gemini (hanya 6 pesan terakhir biar context window tidak penuh)
  const recentHistory = chatHistory.slice(-6)
  const response = await sendChat(fullPrompt, userMessage, recentHistory)

  // 6. Extract citations
  const citations = extractCitations(response.text)

  return { text: response.text, citations, tier }
}

function detectSensitiveTopic(text) {
  const lower = text.toLowerCase()
  if (['sembuhkan', 'obat', 'dokter', 'sakit', 'depresi'].some((k) => lower.includes(k))) return 'medical'
  if (['gugat', 'tuntut', 'pengacara', 'somasi'].some((k) => lower.includes(k))) return 'legal'
  return 'general'
}