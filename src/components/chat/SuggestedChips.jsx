// 3 chip pertanyaan follow-up di atas input box
export default function SuggestedChips({ chips, onChipClick }) {
  // Jangan render kalau tidak ada chips
  if (!chips || chips.length === 0) return null

  return (
    <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
      {chips.map((chip, i) => (
        <button
          key={i}
          onClick={() => onChipClick(chip)}
          className="chip text-xs whitespace-nowrap flex-shrink-0"
        >
          {chip}
        </button>
      ))}
    </div>
  )
}