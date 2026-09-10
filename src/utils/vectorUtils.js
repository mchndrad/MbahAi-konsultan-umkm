// Utility untuk hitung cosine similarity antara 2 vector
// Dipakai RAG service untuk cari chunks KB yang paling relevan

// Hitung dot product 2 array angka
export function dotProduct(a, b) {
  let sum = 0
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i]
  }
  return sum
}

// Hitung magnitude (panjang) vector
export function magnitude(vec) {
  let sum = 0
  for (let i = 0; i < vec.length; i++) {
    sum += vec[i] * vec[i]
  }
  return Math.sqrt(sum)
}

// Hitung cosine similarity (0 = tidak mirip, 1 = sangat mirip)
export function cosineSimilarity(a, b) {
  const dot = dotProduct(a, b)
  const magA = magnitude(a)
  const magB = magnitude(b)
  if (magA === 0 || magB === 0) return 0
  return dot / (magA * magB)
}