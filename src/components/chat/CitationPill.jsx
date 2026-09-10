// Pill citation di bawah bubble Mbah
// Warna hijau untuk buku, terracotta untuk case study
import { BookOpen, Wheat } from 'lucide-react'

export default function CitationPill({ type, text }) {
  // type = 'book' atau 'case'
  const isBook = type === 'book'

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] cursor-pointer transition-all ${
        isBook
          ? 'bg-mbah-sage/10 text-mbah-sage hover:bg-mbah-sage/20'
          : 'bg-mbah-terracotta/10 text-mbah-terracotta hover:bg-mbah-terracotta/20'
      }`}
    >
      {isBook ? <BookOpen size={12} /> : <Wheat size={12} />}
      {text}
    </span>
  )
}