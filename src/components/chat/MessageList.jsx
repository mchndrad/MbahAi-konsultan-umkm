// Daftar semua pesan chat - auto scroll ke bawah
import { useEffect, useRef } from 'react'
import useAppStore from '../../store/useAppStore'
import MessageBubble from './MessageBubble'
import LoadingBubble from './LoadingBubble'

export default function MessageList() {
  // Ambil messages dan loading state dari store
  const messages = useAppStore((s) => s.messages)
  const isLoading = useAppStore((s) => s.isLoading)

  // Ref untuk auto-scroll
  const bottomRef = useRef(null)

  // Scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
      {/* Render semua pesan */}
      {messages.map((msg) => (
        <MessageBubble key={msg.id} message={msg} />
      ))}

      {/* Loading bubble saat Mbah mikir */}
      {isLoading && <LoadingBubble />}

      {/* Anchor untuk auto-scroll */}
      <div ref={bottomRef} />
    </div>
  )
}