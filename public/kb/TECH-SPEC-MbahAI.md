# TECH SPEC — Mbah AI

**Versi:** 1.0
**Tanggal:** 5 September 2026
**Stack:** React + Gemini API + RAG (client-side) + localStorage. **No backend database.**

---

## 1. Architecture Overview

### System Architecture

```
┌─────────────────────────────────────────────────┐
│                                                   │
│              CLIENT (Browser)                     │
│                                                   │
│   ┌──────────────────────────────────────────┐  │
│   │  React App (Vite + AI Studio Runtime)   │  │
│   │                                            │  │
│   │  ┌─────────┐  ┌─────────┐  ┌──────────┐ │  │
│   │  │Landing  │  │Onboard  │  │  Chat    │ │  │
│   │  │  Page   │  │  Modal  │  │Interface │ │  │
│   │  └─────────┘  └─────────┘  └──────────┘ │  │
│   │                                            │  │
│   │  ┌───────────────────────────────────┐   │  │
│   │  │  State Management (Zustand)        │   │  │
│   │  │  - user_context                    │   │  │
│   │  │  - chat_history                    │   │  │
│   │  │  - settings                        │   │  │
│   │  │  → persist to localStorage         │   │  │
│   │  └───────────────────────────────────┘   │  │
│   │                                            │  │
│   │  ┌───────────────────────────────────┐   │  │
│   │  │  RAG Engine (Client-side)          │   │  │
│   │  │  - kb_embeddings.json (static)     │   │  │
│   │  │  - cosine similarity search        │   │  │
│   │  │  - confidence scoring              │   │  │
│   │  └───────────────────────────────────┘   │  │
│   │                                            │  │
│   │  ┌───────────────────────────────────┐   │  │
│   │  │  Persona Engine                    │   │  │
│   │  │  - system prompt builder           │   │  │
│   │  │  - context injector                │   │  │
│   │  │  - fallback logic                  │   │  │
│   │  └───────────────────────────────────┘   │  │
│   │                                            │  │
│   └──────────────────────────────────────────┘  │
│                       ↓                           │
└───────────────────────┼───────────────────────────┘
                        │
                        │ HTTPS
                        ↓
        ┌───────────────────────────┐
        │   GEMINI API (Google)     │
        │                             │
        │  - gemini-1.5-flash        │
        │    (chat generation)        │
        │  - text-embedding-004      │
        │    (query embedding)        │
        └───────────────────────────┘
```

### Key Architectural Decisions

**1. Client-Side RAG (No Backend)**
- KB embeddings di-generate SEKALI di build time
- Simpan sebagai static JSON di `/public/kb-embeddings.json`
- Load ke memory saat app boot
- Cosine similarity search di client-side
- **Advantage:** Zero backend cost, deploy simple, low latency
- **Trade-off:** Bundle size lebih besar (~500KB-1MB untuk KB), tapi acceptable

**2. localStorage Only (No Database)**
- Chat history, user context, settings semua di localStorage
- Per-browser persistence
- **Advantage:** Privacy-first (data user tidak keluar), no server cost, no auth
- **Trade-off:** Data hilang kalau clear browser, tidak sync antar device

**3. Streaming Response**
- Pakai Gemini streaming API
- User lihat response muncul progressive
- Feel more responsive than wait full response

**4. Fallback Logic Client-Side**
- Confidence scoring dari cosine similarity
- Prompt builder switch berdasarkan tier
- Persona preserved di semua tier

---

## 2. Tech Stack Detail

### Frontend

```json
{
  "framework": "React 18 + Vite",
  "styling": "TailwindCSS 3.4",
  "animation": "Framer Motion 11",
  "3d": "@react-three/fiber + @react-three/drei + three",
  "state": "Zustand 4 (with persist middleware)",
  "icons": "lucide-react",
  "pdf": "jsPDF + html2canvas",
  "fonts": "Google Fonts (Fraunces + Inter)"
}
```

### AI & ML

```json
{
  "chat_model": "gemini-1.5-flash",
  "embedding_model": "text-embedding-004",
  "sdk": "@google/generative-ai (latest)",
  "context_window": "1M tokens (Flash)",
  "max_output": "8192 tokens"
}
```

### Build & Deploy

```json
{
  "build_tool": "Vite 5",
  "package_manager": "npm",
  "deployment": "Google AI Studio (primary), Vercel (backup)",
  "domain": "mbahai.aistudio.app or custom"
}
```

### Dependencies (package.json)

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@google/generative-ai": "^0.21.0",
    "framer-motion": "^11.0.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.99.0",
    "three": "^0.161.0",
    "zustand": "^4.5.0",
    "lucide-react": "^0.344.0",
    "jspdf": "^2.5.1",
    "html2canvas": "^1.4.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.1.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35"
  }
}
```

---

## 3. Project Structure

```
mbahai/
├── public/
│   ├── kb-embeddings.json       # Pre-computed KB embeddings
│   ├── favicon.ico
│   └── og-image.png
│
├── src/
│   ├── components/
│   │   ├── landing/
│   │   │   ├── Hero.jsx
│   │   │   ├── WisdomOrb3D.jsx
│   │   │   ├── FrameworkShowcase.jsx
│   │   │   └── LandingLayout.jsx
│   │   │
│   │   ├── onboarding/
│   │   │   ├── OnboardingModal.jsx
│   │   │   ├── QuestionStep.jsx
│   │   │   └── ProgressBar.jsx
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── MessageList.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── CitationPill.jsx
│   │   │   ├── SuggestedChips.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── LoadingKitab3D.jsx
│   │   │   └── StreamingText.jsx
│   │   │
│   │   ├── pdf/
│   │   │   ├── PDFPreview.jsx
│   │   │   ├── PaperFold3D.jsx
│   │   │   └── PDFTemplate.jsx
│   │   │
│   │   └── shared/
│   │       ├── Button.jsx
│   │       ├── Modal.jsx
│   │       └── Toast.jsx
│   │
│   ├── services/
│   │   ├── geminiService.js         # Gemini API wrapper
│   │   ├── ragService.js             # Client-side RAG
│   │   ├── confidenceScoring.js      # 4-tier system
│   │   ├── promptBuilder.js          # Persona + context injection
│   │   ├── pdfGenerator.js           # jsPDF generation
│   │   └── storageService.js         # localStorage wrapper
│   │
│   ├── store/
│   │   ├── userStore.js              # Zustand user context store
│   │   ├── chatStore.js              # Zustand chat history store
│   │   └── settingsStore.js          # Zustand settings store
│   │
│   ├── data/
│   │   ├── systemPrompt.js           # Persona system prompt
│   │   ├── loadingMessages.js        # Cinematic loading text
│   │   └── ekrafSubsectors.js       # 17 subsector dropdown
│   │
│   ├── hooks/
│   │   ├── useGeminiChat.js          # Chat hook
│   │   ├── useRAG.js                 # RAG retrieval hook
│   │   └── useLocalStorage.js
│   │
│   ├── utils/
│   │   ├── cosineSimilarity.js
│   │   ├── vectorMath.js
│   │   └── formatters.js
│   │
│   ├── styles/
│   │   ├── globals.css               # Tailwind base + custom
│   │   └── fonts.css                 # Font imports
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── scripts/
│   └── generateEmbeddings.js        # Build-time script untuk generate KB embeddings
│
├── .env.local                        # GEMINI_API_KEY (never commit)
├── .env.example
├── .gitignore
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 4. Knowledge Base System

### 4.1 KB Preparation (Build-Time)

**Script:** `scripts/generateEmbeddings.js`

**Purpose:** Sekali di build time, generate embeddings dari semua KB markdown, simpan sebagai JSON.

```javascript
// scripts/generateEmbeddings.js
import fs from 'fs'
import path from 'path'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const embedModel = genAI.getGenerativeModel({ model: 'text-embedding-004' })

const KB_FILES = [
  { file: '01-KNOWLEDGE-BASE-Extended.md', layer: 'domain', weight: 1.0 },
  { file: '03-PERIBAHASA-DATABASE.md', layer: 'peribahasa', weight: 0.8 },
  { file: '04-SAMPLE-DIALOG-LIBRARY.md', layer: 'dialog_example', weight: 0.7 },
  { file: '06-MARKETING-FRAMEWORKS.md', layer: 'framework', weight: 1.0 },
  { file: '07-CASE-STUDIES-INDONESIA.md', layer: 'case_study', weight: 1.0 },
]

async function chunkMarkdown(text, layer) {
  // Split by ### CHUNK-XX or ### FRAMEWORK-XX or ### CASE-XX markers
  const chunks = text.split(/^###\s+(CHUNK|FRAMEWORK|CASE|PB)-\d+/gm)
  return chunks
    .filter(c => c.trim().length > 100)
    .map((content, idx) => ({
      id: `${layer}-${idx}`,
      layer,
      content: content.trim(),
    }))
}

async function embedChunk(chunk) {
  const result = await embedModel.embedContent(chunk.content)
  return {
    ...chunk,
    embedding: result.embedding.values,
  }
}

async function main() {
  const allChunks = []
  
  for (const { file, layer } of KB_FILES) {
    const filePath = path.join('kb', file)
    const text = fs.readFileSync(filePath, 'utf-8')
    const chunks = await chunkMarkdown(text, layer)
    
    console.log(`Embedding ${chunks.length} chunks from ${file}...`)
    
    for (const chunk of chunks) {
      const embedded = await embedChunk(chunk)
      allChunks.push(embedded)
      // Rate limit
      await new Promise(r => setTimeout(r, 100))
    }
  }
  
  // Write to public folder
  fs.writeFileSync(
    'public/kb-embeddings.json',
    JSON.stringify(allChunks, null, 2)
  )
  
  console.log(`✅ Generated ${allChunks.length} embeddings`)
}

main().catch(console.error)
```

**Run:** `node scripts/generateEmbeddings.js`

**Output:** `public/kb-embeddings.json` (~500KB-1MB)

### 4.2 KB Loading (Runtime)

```javascript
// src/services/ragService.js

let kbEmbeddings = null

export async function loadKB() {
  if (kbEmbeddings) return kbEmbeddings
  
  const response = await fetch('/kb-embeddings.json')
  kbEmbeddings = await response.json()
  
  console.log(`✅ Loaded ${kbEmbeddings.length} KB chunks`)
  return kbEmbeddings
}
```

Load once di app boot (App.jsx useEffect).

### 4.3 Query Embedding & Retrieval

```javascript
// src/services/ragService.js

import { GoogleGenerativeAI } from '@google/generative-ai'
import { cosineSimilarity } from '../utils/cosineSimilarity'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
const embedModel = genAI.getGenerativeModel({ model: 'text-embedding-004' })

export async function retrieveRelevantChunks(userQuery, topK = 5) {
  const kb = await loadKB()
  
  // Embed user query
  const queryResult = await embedModel.embedContent(userQuery)
  const queryEmbedding = queryResult.embedding.values
  
  // Calculate similarity for all chunks
  const scored = kb.map(chunk => ({
    ...chunk,
    score: cosineSimilarity(queryEmbedding, chunk.embedding)
  }))
  
  // Sort by score desc
  scored.sort((a, b) => b.score - a.score)
  
  // Return top K
  return scored.slice(0, topK)
}
```

**Cosine Similarity:**
```javascript
// src/utils/cosineSimilarity.js
export function cosineSimilarity(vecA, vecB) {
  let dot = 0, normA = 0, normB = 0
  for (let i = 0; i < vecA.length; i++) {
    dot += vecA[i] * vecB[i]
    normA += vecA[i] ** 2
    normB += vecB[i] ** 2
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}
```

---

## 5. Confidence Scoring & Fallback

### 4-Tier System Implementation

```javascript
// src/services/confidenceScoring.js

export function getConfidenceTier(topScore) {
  if (topScore > 0.75) return 'HIGH'      // TIER 1
  if (topScore > 0.50) return 'MEDIUM'    // TIER 2
  if (topScore > 0.25) return 'LOW'       // TIER 3
  return 'VERY_LOW'                        // TIER 4
}

export function detectOffTopic(query) {
  const offTopicKeywords = [
    'resep', 'jadwal bola', 'presiden', 'download youtube',
    'siapa artis', 'cuaca hari ini', 'harga bitcoin'
  ]
  
  const businessKeywords = [
    'usaha', 'bisnis', 'jualan', 'customer', 'produk', 'brand',
    'marketing', 'harga', 'toko', 'warung', 'omzet', 'sepi'
  ]
  
  const lowerQuery = query.toLowerCase()
  const offTopicMatch = offTopicKeywords.some(k => lowerQuery.includes(k))
  const businessMatch = businessKeywords.some(k => lowerQuery.includes(k))
  
  return offTopicMatch && !businessMatch
}

export function detectSensitiveTopic(query) {
  const sensitivePatterns = [
    /obat|sembuhkan|diagnosis/i,
    /pengacara|tuntut|lapor polisi/i,
    /investasi.*bitcoin|saham|crypto/i,
    /bunuh diri|depresi|self-harm/i,
  ]
  
  return sensitivePatterns.some(p => p.test(query))
}
```

### Prompt Builder per Tier

```javascript
// src/services/promptBuilder.js

import { getBaseSystemPrompt } from '../data/systemPrompt'

export function buildPromptTier1(userContext, chunks) {
  const kbContext = chunks
    .map(c => `[${c.id} - ${c.layer}]\n${c.content}`)
    .join('\n\n---\n\n')
  
  return `${getBaseSystemPrompt()}

## User Context
- Jenis Usaha: ${userContext.business_type}
- Lama Usaha: ${userContext.business_age}
- Tantangan: ${userContext.main_challenge}

## Knowledge Base Context (WAJIB DIPAKAI - HIGH CONFIDENCE)
${kbContext}

## Instruksi Response
- Confidence: HIGH — kamu boleh assertive dalam advice
- WAJIB include citation dari KB di atas (format: [Sumber])
- Gunakan struktur 7-layer response
- JANGAN halusinasi info di luar KB
- Advice harus konkret dan actionable`
}

export function buildPromptTier2(userContext, chunks) {
  const kbContext = chunks
    .map(c => `[${c.id}]\n${c.content}`)
    .join('\n\n---\n\n')
  
  return `${getBaseSystemPrompt()}

## User Context
${JSON.stringify(userContext, null, 2)}

## Knowledge Base Context (PARTIAL - MEDIUM CONFIDENCE)
${kbContext}

## Instruksi Response
- Confidence: MEDIUM — grounding partial
- Kasih citation soft: "Simbah ada gambaran dari..." atau "Prinsipnya..."
- Frame advice dengan honest caveat
- Suggest verify dengan expert kalau perlu`
}

export function buildPromptTier3(userContext) {
  return `${getBaseSystemPrompt()}

## User Context
${JSON.stringify(userContext, null, 2)}

## INSTRUKSI PENTING — TIER 3 (LOW CONFIDENCE)
- KB tidak punya info spesifik topic ini
- JANGAN buat citation palsu
- Jawab dengan general knowledge, TAPI:
  1. Frame sebagai "pendapat Simbah dari pengalaman 50 tahun"
  2. Tetap pakai persona (Le/Ndhuk, peribahasa, cerita)
  3. Akhiri dengan honest admission
  4. Suggest expert resource
- Tone: helpful tapi humble`
}

export function buildPromptTier4(userContext, subtype) {
  const templates = {
    off_topic: `Kamu adalah Mbah AI. User baru tanya sesuatu di luar domain bisnis UMKM.
Response singkat, warm, dengan humor. Redirect balik ke domain bisnis.
Jangan cerita panjang.`,
    
    sensitive: `Kamu adalah Mbah AI. User tanya sesuatu yang butuh expert profesional (medical/legal/financial).
Acknowledge dengan empati, TEGAS refer ke expert yang tepat.
JANGAN kasih advice specific.`,
  }
  
  return `${getBaseSystemPrompt()}\n\n${templates[subtype] || templates.off_topic}`
}
```

### Main Chat Handler

```javascript
// src/services/geminiService.js

import { GoogleGenerativeAI } from '@google/generative-ai'
import { retrieveRelevantChunks } from './ragService'
import { getConfidenceTier, detectOffTopic, detectSensitiveTopic } from './confidenceScoring'
import { 
  buildPromptTier1, buildPromptTier2, 
  buildPromptTier3, buildPromptTier4 
} from './promptBuilder'

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

export async function generateChatResponse({
  userMessage,
  userContext,
  chatHistory,
  onStream,
}) {
  try {
    // Step 1: Detect sensitive/off-topic
    const isSensitive = detectSensitiveTopic(userMessage)
    const isOffTopic = detectOffTopic(userMessage)
    
    let systemPrompt
    let retrievedChunks = []
    
    if (isSensitive) {
      systemPrompt = buildPromptTier4(userContext, 'sensitive')
    } else if (isOffTopic) {
      systemPrompt = buildPromptTier4(userContext, 'off_topic')
    } else {
      // Step 2: RAG retrieval
      retrievedChunks = await retrieveRelevantChunks(userMessage, 5)
      const topScore = retrievedChunks[0]?.score || 0
      const tier = getConfidenceTier(topScore)
      
      // Step 3: Build prompt based on tier
      switch (tier) {
        case 'HIGH':
          systemPrompt = buildPromptTier1(userContext, retrievedChunks)
          break
        case 'MEDIUM':
          systemPrompt = buildPromptTier2(userContext, retrievedChunks)
          break
        case 'LOW':
        case 'VERY_LOW':
        default:
          systemPrompt = buildPromptTier3(userContext)
          break
      }
    }
    
    // Step 4: Generate with Gemini streaming
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: systemPrompt,
      generationConfig: {
        maxOutputTokens: 800,
        temperature: 0.75,
        topP: 0.9,
      }
    })
    
    const chat = model.startChat({
      history: chatHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      })),
    })
    
    const result = await chat.sendMessageStream(userMessage)
    
    let fullResponse = ''
    for await (const chunk of result.stream) {
      const chunkText = chunk.text()
      fullResponse += chunkText
      onStream?.(chunkText)
    }
    
    return {
      response: fullResponse,
      citations: extractCitations(fullResponse, retrievedChunks),
      tier: getConfidenceTier(retrievedChunks[0]?.score || 0),
    }
  } catch (error) {
    console.error('Chat generation error:', error)
    throw new Error('Simbah lagi ada gangguan, coba tanya lagi ya.')
  }
}

function extractCitations(response, chunks) {
  // Parse citations from response (format: [Al Ries, Positioning])
  const citationRegex = /\[([^\]]+)\]/g
  const citations = []
  let match
  
  while ((match = citationRegex.exec(response)) !== null) {
    const citationText = match[1]
    const relatedChunk = chunks.find(c => 
      c.content.toLowerCase().includes(citationText.toLowerCase().split(',')[0])
    )
    if (relatedChunk) {
      citations.push({
        text: citationText,
        source: relatedChunk.id,
        layer: relatedChunk.layer,
      })
    }
  }
  
  return citations
}
```

---

## 6. State Management (Zustand)

### User Store

```javascript
// src/store/userStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(
  persist(
    (set) => ({
      userContext: null,
      isOnboarded: false,
      
      setUserContext: (context) => set({
        userContext: {
          ...context,
          onboarded_at: new Date().toISOString(),
        },
        isOnboarded: true,
      }),
      
      updateContext: (updates) => set((state) => ({
        userContext: { ...state.userContext, ...updates }
      })),
      
      resetUser: () => set({ userContext: null, isOnboarded: false }),
    }),
    {
      name: 'mbahai_user',
    }
  )
)
```

### Chat Store

```javascript
// src/store/chatStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useChatStore = create(
  persist(
    (set, get) => ({
      messages: [],
      isLoading: false,
      pdfGenerated: null,
      
      addMessage: (message) => set((state) => ({
        messages: [
          ...state.messages,
          {
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            ...message,
          }
        ]
      })),
      
      updateLastMessage: (updates) => set((state) => {
        const messages = [...state.messages]
        const lastIdx = messages.length - 1
        if (lastIdx >= 0) {
          messages[lastIdx] = { ...messages[lastIdx], ...updates }
        }
        return { messages }
      }),
      
      setLoading: (isLoading) => set({ isLoading }),
      
      setPDFGenerated: (pdf) => set({ pdfGenerated: pdf }),
      
      clearChat: () => set({ messages: [], pdfGenerated: null }),
      
      // Limit chat history to last 50 messages (localStorage size guard)
      pruneOldMessages: () => set((state) => ({
        messages: state.messages.slice(-50)
      })),
    }),
    {
      name: 'mbahai_chat',
    }
  )
)
```

### Settings Store

```javascript
// src/store/settingsStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSettingsStore = create(
  persist(
    (set) => ({
      languageMode: 'balanced', // 'kental' | 'balanced' | 'indonesia_aja'
      reducedMotion: false,
      
      setLanguageMode: (mode) => set({ languageMode: mode }),
      setReducedMotion: (reduce) => set({ reducedMotion: reduce }),
    }),
    {
      name: 'mbahai_settings',
    }
  )
)
```

---

## 7. Key Component Implementations

### 7.1 Chat Container

```jsx
// src/components/chat/ChatContainer.jsx
import { useEffect, useRef } from 'react'
import { useChatStore } from '../../store/chatStore'
import { useUserStore } from '../../store/userStore'
import { generateChatResponse } from '../../services/geminiService'
import { loadKB } from '../../services/ragService'

import MessageList from './MessageList'
import ChatInput from './ChatInput'
import SuggestedChips from './SuggestedChips'
import LoadingKitab3D from './LoadingKitab3D'

export default function ChatContainer() {
  const { messages, isLoading, addMessage, updateLastMessage, setLoading } = useChatStore()
  const { userContext } = useUserStore()
  const scrollRef = useRef(null)
  
  useEffect(() => {
    // Preload KB on mount
    loadKB()
  }, [])
  
  useEffect(() => {
    // Auto-scroll ke bottom
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    })
  }, [messages])
  
  useEffect(() => {
    // First message from Mbah based on onboarding
    if (messages.length === 0 && userContext) {
      generateFirstMessage()
    }
  }, [userContext])
  
  const generateFirstMessage = async () => {
    setLoading(true)
    
    const firstPrompt = `Sambut user hangat. Mereka baru saja isi onboarding:
- Bisnis: ${userContext.business_type}
- Lama: ${userContext.business_age}
- Tantangan: ${userContext.main_challenge}

Acknowledge situasi, kasih cerita pengalaman relevan, dan ajukan pertanyaan clarifying yang spesifik. Max 200 kata.`
    
    addMessage({ role: 'assistant', content: '', isStreaming: true })
    
    let fullResponse = ''
    await generateChatResponse({
      userMessage: firstPrompt,
      userContext,
      chatHistory: [],
      onStream: (chunk) => {
        fullResponse += chunk
        updateLastMessage({ content: fullResponse })
      }
    })
    
    updateLastMessage({ isStreaming: false })
    setLoading(false)
  }
  
  const handleSend = async (userMessage) => {
    // Add user message
    addMessage({ role: 'user', content: userMessage })
    
    // Add placeholder for assistant
    addMessage({ role: 'assistant', content: '', isStreaming: true })
    
    setLoading(true)
    
    let fullResponse = ''
    const result = await generateChatResponse({
      userMessage,
      userContext,
      chatHistory: messages,
      onStream: (chunk) => {
        fullResponse += chunk
        updateLastMessage({ content: fullResponse })
      }
    })
    
    updateLastMessage({ 
      content: fullResponse,
      citations: result.citations,
      tier: result.tier,
      isStreaming: false 
    })
    
    setLoading(false)
  }
  
  return (
    <div className="chat-container">
      <div ref={scrollRef} className="message-scroll-area">
        <MessageList messages={messages} />
        {isLoading && <LoadingKitab3D />}
      </div>
      
      <SuggestedChips onSelect={handleSend} />
      
      <ChatInput onSend={handleSend} disabled={isLoading} />
    </div>
  )
}
```

### 7.2 Message Bubble

```jsx
// src/components/chat/MessageBubble.jsx
import { motion } from 'framer-motion'
import CitationPill from './CitationPill'
import StreamingText from './StreamingText'

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={isUser ? 'bubble-user' : 'bubble-mbah'}>
        {!isUser && (
          <div className="mbah-avatar-label">
            <span className="text-xl">🧙‍♂️</span>
            <span className="font-medium">Mbah AI</span>
          </div>
        )}
        
        <div className="message-content">
          {message.isStreaming ? (
            <StreamingText text={message.content} />
          ) : (
            <FormattedMessage content={message.content} />
          )}
        </div>
        
        {message.citations && message.citations.length > 0 && (
          <div className="citations-row">
            {message.citations.map((cit, i) => (
              <CitationPill key={i} citation={cit} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

function FormattedMessage({ content }) {
  // Format peribahasa dalam italic (deteksi pattern *text*)
  // Format markdown basic (bold, list)
  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: formatMessageHTML(content) 
      }} 
    />
  )
}

function formatMessageHTML(text) {
  return text
    .replace(/\*"(.+?)"\*/g, '<em class="peribahasa">"$1"</em>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^\s*/g, '<p>')
    .replace(/\s*$/g, '</p>')
}
```

---

## 8. PDF Generation

```javascript
// src/services/pdfGenerator.js
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export async function generateCatatanSimbah(chatHistory, userContext) {
  // Step 1: Extract insights from chat via Gemini
  const summaryPrompt = `Berdasarkan chat history ini, buat ringkasan untuk "Catatan Simbah" dengan struktur:

1. DUDUK PERSOALANE (Masalah Utama) - 2-3 kalimat
2. APA SING SIMBAH RUNGOKAKE (Apa yang saya tangkap) - 2-3 poin
3. PANGERTEN SAKA SIMBAH (Framework yang dipakai) - list dengan citation
4. PITUTUR SIMBAH (3 Aksi 30 Hari) - actionable
5. PENGET SIMBAH (Pesan penutup dengan 1 peribahasa Jawa)

Chat history:
${chatHistory.map(m => `${m.role}: ${m.content}`).join('\n\n')}

Format response sebagai JSON dengan keys: masalah_utama, insight_mbah, framework_used, aksi_30_hari, pesan_penutup, peribahasa_penutup.`
  
  const summary = await generateStructuredSummary(summaryPrompt)
  
  // Step 2: Render to HTML template
  const htmlContent = renderPDFTemplate(summary, userContext)
  
  // Step 3: Convert to PDF
  const container = document.createElement('div')
  container.innerHTML = htmlContent
  container.style.width = '794px' // A4 width @ 96dpi
  document.body.appendChild(container)
  
  const canvas = await html2canvas(container, {
    scale: 2,
    backgroundColor: '#FDF6E3',
  })
  
  document.body.removeChild(container)
  
  const pdf = new jsPDF('p', 'mm', 'a4')
  const imgData = canvas.toDataURL('image/png')
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width
  
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
  
  return pdf
}

function renderPDFTemplate(summary, userContext) {
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  
  return `
    <div style="
      padding: 60px 50px;
      font-family: 'Inter', sans-serif;
      color: #3D2914;
      background: #FDF6E3;
      min-height: 1000px;
    ">
      <h1 style="
        font-family: 'Fraunces', serif;
        font-size: 32px;
        text-align: center;
        margin-bottom: 8px;
      ">📔 Catatan Simbah</h1>
      
      <p style="text-align: center; color: #6B4C2A; margin-bottom: 40px;">
        Untuk pemilik ${userContext.business_type}<br/>
        ${today}
      </p>
      
      <hr style="border-color: #D4A574; margin: 30px 0;" />
      
      <section>
        <h2 style="font-family: 'Fraunces', serif;">DUDUK PERSOALANE</h2>
        <p>${summary.masalah_utama}</p>
      </section>
      
      <section>
        <h2 style="font-family: 'Fraunces', serif;">APA SING SIMBAH RUNGOKAKE</h2>
        <ul>${summary.insight_mbah.map(i => `<li>${i}</li>`).join('')}</ul>
      </section>
      
      <section>
        <h2 style="font-family: 'Fraunces', serif;">PANGERTEN SAKA SIMBAH</h2>
        <ul>${summary.framework_used.map(f => `<li>${f}</li>`).join('')}</ul>
      </section>
      
      <section>
        <h2 style="font-family: 'Fraunces', serif;">PITUTUR SIMBAH</h2>
        <ol>${summary.aksi_30_hari.map(a => `<li>${a}</li>`).join('')}</ol>
      </section>
      
      <section style="margin-top: 40px; padding: 20px; background: rgba(212, 165, 116, 0.15); border-radius: 12px;">
        <p style="font-family: 'Fraunces', serif; font-style: italic; text-align: center;">
          "${summary.peribahasa_penutup}"
        </p>
        <p style="text-align: center; margin-top: 20px;">
          🍵 Salam,<br/>
          <strong>Simbah AI</strong>
        </p>
      </section>
    </div>
  `
}
```

---

## 9. Environment & Deployment

### Environment Variables

**`.env.local`** (never commit):
```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

**`.env.example`**:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### API Key Security

**Client-Side Security Note:**
Since Vite exposes env vars starting with `VITE_` to client, the API key **will be visible in bundle**. For MVP submission ini acceptable because:
- Google AI Studio kompetisi submission cepat
- Free tier ada rate limit natural
- Bisa rotate key after submission

**Post-submission (production):**
- Add backend proxy untuk hide key
- Implement rate limiting per IP
- Domain restriction di Google Cloud Console

### Build & Deploy

**Local Dev:**
```bash
npm install
node scripts/generateEmbeddings.js  # Generate KB embeddings (sekali)
npm run dev
```

**Production Build:**
```bash
npm run build
# Output: dist/ folder
```

**Deploy AI Studio:**
1. Push code + `dist/` ke Google AI Studio project
2. Set env `VITE_GEMINI_API_KEY` di AI Studio secrets
3. Deploy via UI

**Deploy Vercel (Backup):**
```bash
vercel --prod
```

---

## 10. Performance Optimization

### Bundle Size Targets
- Initial JS: <200KB gzipped
- Total assets: <800KB (including 3D models, fonts)
- KB embeddings JSON: ~500KB (loaded lazy)

### Optimizations Applied
- Code splitting per route
- Lazy load 3D components
- Font subsetting (only Latin extended)
- Image optimization (WebP where possible)
- KB embeddings loaded after critical render

### Loading Strategy
```javascript
// Landing page: no KB load
// Chat mount: preload KB in background
// First message: KB ready

useEffect(() => {
  const timer = setTimeout(() => {
    loadKB() // Preload
  }, 1000) // Wait 1s after mount
  return () => clearTimeout(timer)
}, [])
```

---

## 11. Error Handling

### Error Boundaries

```jsx
// src/components/shared/ErrorBoundary.jsx
import { Component } from 'react'

export class ErrorBoundary extends Component {
  state = { hasError: false }
  
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <p>Wah, ada yang salah. Coba refresh halaman ya, Le.</p>
          <button onClick={() => window.location.reload()}>
            🔄 Refresh
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
```

### API Error Handling

```javascript
async function safeChatCall(fn) {
  try {
    return await fn()
  } catch (error) {
    if (error.message.includes('rate limit')) {
      return { error: 'Wah, Simbah kecapean. Coba 1 menit lagi ya.' }
    }
    if (error.message.includes('network')) {
      return { error: 'Kayaknya lagi mati internet. Cek koneksi dulu ya.' }
    }
    return { error: 'Simbah lagi ada gangguan. Coba tanya lagi ya.' }
  }
}
```

---

## 12. Testing Strategy

### Manual Test Plan

**Test scenarios ada di file terpisah `TEST-PLAN-MbahAI.md`**

### Automated (optional post-MVP)

- Unit test: Zustand stores, utility functions
- Integration test: RAG retrieval logic
- E2E: Playwright untuk critical user flows

---

## 13. Monitoring (Post-Launch)

**Untuk MVP:** SKIP monitoring stack.

**Post-Launch (kalau lolos Top 30):**
- Google Analytics (basic pageview)
- Sentry untuk error tracking
- Custom event tracking untuk critical actions

---

**END OF TECH SPEC**

Next: TEST-PLAN-MbahAI.md untuk QA scenarios.
