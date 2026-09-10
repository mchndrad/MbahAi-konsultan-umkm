// Gemini Service — chat dengan Google Gemini API
import { GoogleGenerativeAI } from '@google/generative-ai'

// Ambil API key dari .env
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null

// Kirim chat ke Gemini
export async function sendChat(systemPrompt, userMessage, history) {
  if (!genAI) {
    return { text: 'Le, API key belum di-set. Tolong isi VITE_GEMINI_API_KEY di file .env ya.', citations: [] }
  }

  try {
    // Gunakan model dari env atau default Google AI Studio
    const modelName = import.meta.env.VITE_GEMINI_MODEL || 'gemini-3.6-flash'
    const model = genAI.getGenerativeModel({
      model: modelName, 
      systemInstruction: systemPrompt,
    })

    // Convert history - filter yang valid saja
    const chatHistory = []
    for (const msg of history) {
      if (msg.text && msg.text.trim()) {
        chatHistory.push({
          role: msg.role === 'mbah' ? 'model' : 'user',
          parts: [{ text: msg.text }],
        })
      }
    }

    // Pastikan history selalu mulai dari user (Gemini requirement)
    while (chatHistory.length > 0 && chatHistory[0].role === 'model') {
      chatHistory.shift()
    }

    // Mulai chat
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 8192,
        temperature: 0.75,
        topP: 0.9,
      },
    })

    // Kirim dan tunggu response
    const result = await chat.sendMessage(userMessage)
    const text = result.response.text()

    console.log('[Gemini] Response OK, length:', text.length)
    return { text, citations: [] }
  } catch (err) {
    console.error('[Gemini] ERROR:', err.message)

    // Jika error 503 (server sibuk / high demand)
    if (err.message.includes('503') || err.message.includes('high demand')) {
      return { 
        text: 'Oalah, Le... server Simbah di awan sana lagi padat banget antreannya (503 High Demand). Tarik napas sebentar, coba kirim ulang pesannya dalam beberapa detik ya.', 
        citations: [] 
      }
    }

    if (err.message.includes('404') || err.message.includes('not found')) {
      return { text: 'Le, model AI-nya belum tersedia. Coba cek kembali nama model di geminiService.js.', citations: [] }
    }

    if (err.message.includes('API_KEY') || err.message.includes('401') || err.message.includes('403')) {
      return { text: 'Le, API key-nya sepertinya salah atau expired. Coba cek ulang di file .env ya.', citations: [] }
    }

    return {
      text: `Nah Le, Simbah tadi sempat blank karena gangguan jaringan. Coba tanya ulang ya, Nak.`,
      citations: [],
    }
  }
}

// Cek apakah API key sudah di-set
export function isApiKeySet() {
  return !!API_KEY
}