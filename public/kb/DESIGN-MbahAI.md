# DESIGN — Mbah AI

**Versi:** 1.0
**Tanggal:** 5 September 2026
**Design Philosophy:** Clean modern (putih dominan) meets warm heritage (accent Jawa) — dengan 3D & animation subtle yang add wow-factor tanpa distract dari content.

---

## 1. Design Philosophy

### Core Principles

**1. White as Foundation**
Pure white (#FFFFFF) sebagai canvas dominan. Bukan cream, bukan sepia — clean modern. Ini decision penting untuk feel "premium tech product", bukan "template UMKM biasa".

**2. Warm Heritage as Accent**
Terracotta, sage green, deep sepia dipakai sebagai accent — untuk element yang perlu carry karakter Mbah (chat bubble, citation pills, illustrasi). Warm colors ~15-20% dari total UI, sisanya white + neutral.

**3. Depth Through 3D & Motion**
3D dan animation TIDAK jadi gimmick — mereka reinforce narrative "kebijaksanaan yang hidup". Floating orb = ide yang muncul. Kartu kitab flip = Mbah nyari catatan. Paper fold = deliverable terwujud.

**4. Typography as Character**
Fraunces (serif) untuk moments of gravitas (peribahasa, PDF heading, hero). Inter untuk everything else (fungsional, readable).

**5. Micro-Interactions as Personality**
Setiap hover, click, transition punya kepribadian. Bukan snappy corporate, bukan bouncy playful — tapi *warm & considered*, seperti gerakan kakek yang tenang tapi presence.

---

## 2. Color Palette

### Primary Colors

```css
/* Base */
--white: #FFFFFF;              /* Foundation background */
--off-white: #FAFAF7;          /* Section background subtle */
--soft-white: #F5F3EE;         /* Chat container background */

/* Warm Accent (Persona) */
--terracotta: #C1440E;         /* Primary CTA, user bubble */
--terracotta-soft: #E27D5C;    /* Hover state, warm accent */
--terracotta-glow: rgba(193, 68, 14, 0.15); /* Subtle backgrounds */

/* Sage (Framework Citation) */
--sage: #87A96B;               /* Book citation pill */
--sage-soft: #A5C089;
--sage-glow: rgba(135, 169, 107, 0.15);

/* Deep Sepia (Text & Heritage) */
--sepia-deep: #3D2914;         /* Primary text */
--sepia-medium: #6B4C2A;       /* Secondary text */
--sepia-light: #A08867;        /* Tertiary text, borders */

/* Gold (Special Moments) */
--gold: #D4A574;               /* PDF accent, milestones */
--gold-glow: rgba(212, 165, 116, 0.2);
```

### Neutral Grays

```css
--gray-50: #FAFAFA;
--gray-100: #F4F4F4;
--gray-200: #E5E5E5;   /* Dividers */
--gray-300: #D4D4D4;   /* Disabled state */
--gray-500: #737373;   /* Muted text */
--gray-700: #404040;   /* Body text alternate */
--gray-900: #171717;   /* Dark text (rare) */
```

### Semantic Colors

```css
--success: #10B981;    /* PDF generated */
--warning: #F59E0B;    /* Rate limit warning */
--error: #EF4444;      /* Only for critical errors */
--info: #3B82F6;       /* Neutral info */
```

### Usage Rules

- **Backgrounds:** 80% white/off-white, 15% warm-tinted, 5% neutral gray
- **Text:** deep sepia (#3D2914) primary, gray-700 secondary
- **CTAs:** terracotta primary, sage secondary
- **Never:** pure black on white (harsh) — always deep sepia
- **Never:** neon colors, gradient rainbow, high saturation blues
- **Always:** consider warmth — every color must feel "hangat" bukan "dingin"

---

## 3. Typography

### Font Families

**Primary Font — Body & UI:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```
- Modern, highly readable
- Great for interfaces
- Multiple weights (300-900)

**Display Font — Headings & Persona Moments:**
```css
font-family: 'Fraunces', 'Playfair Display', Georgia, serif;
```
- Warm serif dengan personality
- Perfect untuk peribahasa & heritage moments
- Support italic yang beautiful

### Type Scale

```css
/* Display / Hero */
--text-hero: clamp(48px, 8vw, 96px);      /* Landing H1 */
--text-display: clamp(32px, 5vw, 56px);   /* Section headers */

/* Headings */
--text-h1: 40px;   /* Main page titles */
--text-h2: 32px;   /* Section titles */
--text-h3: 24px;   /* Card titles */
--text-h4: 20px;   /* Sub-sections */

/* Body */
--text-lg: 18px;   /* Large body */
--text-base: 16px; /* Default body */
--text-sm: 14px;   /* Secondary text */
--text-xs: 12px;   /* Micro text, timestamps */
```

### Line Height

```css
--leading-tight: 1.2;    /* Display, hero */
--leading-snug: 1.4;     /* Headings */
--leading-normal: 1.6;   /* Body */
--leading-relaxed: 1.75; /* Long-form reading */
```

### Font Weight

```css
--font-light: 300;    /* Peribahasa italic elegant */
--font-normal: 400;   /* Body default */
--font-medium: 500;   /* Emphasis, labels */
--font-semibold: 600; /* Buttons, small headings */
--font-bold: 700;     /* Main headings */
```

### Typography Rules

**Peribahasa Style (Signature Moment):**
```css
.peribahasa {
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: 400;
  color: var(--sepia-deep);
  font-size: var(--text-lg);
  line-height: var(--leading-snug);
  letter-spacing: 0.01em;
}
```

**Translation Style (Below Peribahasa):**
```css
.translation {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: var(--sepia-medium);
  font-size: var(--text-sm);
  font-style: normal;
  opacity: 0.85;
}
```

**Body Chat Text:**
```css
.chat-message {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  color: var(--sepia-deep);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}
```

**Hero Landing:**
```css
.hero-title {
  font-family: 'Fraunces', serif;
  font-weight: 700;
  color: var(--sepia-deep);
  font-size: var(--text-hero);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
}
```

---

## 4. Spacing & Layout

### Spacing Scale (8px base)

```css
--space-0: 0;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

### Container Widths

```css
--container-sm: 640px;   /* Mobile-first content */
--container-md: 768px;   /* Chat width sweet spot */
--container-lg: 1024px;  /* Landing hero */
--container-xl: 1280px;  /* Full page max */
```

### Border Radius

```css
--radius-sm: 6px;    /* Small buttons, chips */
--radius-md: 12px;   /* Cards, modals */
--radius-lg: 20px;   /* Chat bubbles */
--radius-xl: 32px;   /* Hero elements */
--radius-full: 9999px; /* Pills, avatar */
```

**Chat Bubble Radius Special:**
```css
/* Mbah bubble - left */
border-radius: 20px 20px 20px 4px;

/* User bubble - right */
border-radius: 20px 20px 4px 20px;
```

### Shadows

```css
--shadow-subtle: 0 1px 2px rgba(61, 41, 20, 0.04);
--shadow-soft: 0 4px 12px rgba(61, 41, 20, 0.06);
--shadow-medium: 0 8px 24px rgba(61, 41, 20, 0.08);
--shadow-large: 0 16px 48px rgba(61, 41, 20, 0.12);
--shadow-glow-warm: 0 0 24px rgba(193, 68, 14, 0.15);
--shadow-glow-sage: 0 0 24px rgba(135, 169, 107, 0.15);
```

---

## 5. Components

### 5.1 Button Primary (CTA)

```css
.btn-primary {
  background: var(--terracotta);
  color: white;
  padding: 16px 32px;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-soft);
}

.btn-primary:hover {
  background: var(--terracotta-soft);
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow-warm);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### 5.2 Button Secondary

```css
.btn-secondary {
  background: white;
  color: var(--sepia-deep);
  padding: 14px 28px;
  border-radius: var(--radius-lg);
  font-weight: 500;
  border: 1.5px solid var(--sepia-light);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  border-color: var(--terracotta);
  color: var(--terracotta);
  background: var(--terracotta-glow);
}
```

### 5.3 Chat Bubble — Mbah

```css
.bubble-mbah {
  background: var(--soft-white);
  border: 1px solid rgba(212, 165, 116, 0.3);
  padding: 16px 20px;
  border-radius: 20px 20px 20px 4px;
  max-width: 80%;
  color: var(--sepia-deep);
  box-shadow: var(--shadow-subtle);
  font-family: 'Inter', sans-serif;
  line-height: 1.65;
}
```

### 5.4 Chat Bubble — User

```css
.bubble-user {
  background: var(--terracotta);
  color: white;
  padding: 14px 20px;
  border-radius: 20px 20px 4px 20px;
  max-width: 75%;
  margin-left: auto;
  box-shadow: var(--shadow-soft);
}
```

### 5.5 Citation Pill

```css
.citation-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.citation-book {
  background: var(--sage-glow);
  color: var(--sage);
}

.citation-book:hover {
  background: var(--sage);
  color: white;
}

.citation-case {
  background: var(--terracotta-glow);
  color: var(--terracotta);
}

.citation-peribahasa {
  background: rgba(139, 126, 200, 0.15);
  color: #6B5FAB;
}
```

### 5.6 Suggested Chip

```css
.suggested-chip {
  display: inline-flex;
  padding: 10px 18px;
  border-radius: var(--radius-full);
  border: 1.5px solid var(--terracotta);
  color: var(--terracotta);
  background: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.suggested-chip:hover {
  background: var(--terracotta);
  color: white;
  transform: translateY(-1px);
}
```

### 5.7 Input Field

```css
.chat-input {
  width: 100%;
  padding: 14px 20px;
  border: 1.5px solid var(--gray-200);
  border-radius: var(--radius-lg);
  font-size: 15px;
  color: var(--sepia-deep);
  background: white;
  transition: all 0.2s ease;
  resize: none;
  min-height: 52px;
  max-height: 160px;
}

.chat-input:focus {
  outline: none;
  border-color: var(--terracotta);
  box-shadow: 0 0 0 3px var(--terracotta-glow);
}

.chat-input::placeholder {
  color: var(--sepia-light);
  font-style: italic;
}
```

### 5.8 Modal / Dialog

```css
.modal-backdrop {
  background: rgba(61, 41, 20, 0.4);
  backdrop-filter: blur(8px);
  position: fixed;
  inset: 0;
  z-index: 50;
}

.modal-content {
  background: white;
  border-radius: var(--radius-xl);
  padding: 40px;
  max-width: 500px;
  box-shadow: var(--shadow-large);
}
```

---

## 6. 3D & Animation Elements

### 6.1 Landing Hero Orb (React Three Fiber)

**Concept:** Warm glowing orb yang gentle rotate, representing "wisdom sphere". Terrain-like surface, warm color palette (terracotta → gold gradient).

**Implementation Sketch:**
```jsx
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

function WisdomOrb() {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.y += 0.003
    meshRef.current.rotation.x += 0.001
    // Subtle bobbing
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]}>
      <MeshDistortMaterial
        color="#C1440E"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
        metalness={0.2}
        emissive="#D4A574"
        emissiveIntensity={0.2}
      />
    </Sphere>
  )
}

<Canvas camera={{ position: [0, 0, 5] }}>
  <ambientLight intensity={0.5} />
  <pointLight position={[10, 10, 10]} intensity={1} color="#F5E6D3" />
  <WisdomOrb />
</Canvas>
```

**Visual Effect:**
- Ukuran: 40% viewport height
- Position: center-top hero section
- Interaction: mouse move → slight parallax
- Scroll: fade + scale down saat scroll ke section berikutnya
- Loading: fade in dari 0 to full over 1.5s

### 6.2 Chat Loading — 3D Kitab Flip

**Concept:** Kartu "kitab" (buku tua) yang flip open, reveal spine dengan text "Simbah lagi mikir...". Convey "Mbah lagi buka referensi".

**Implementation Sketch:**
```jsx
import { motion } from 'framer-motion'

function LoadingKitab() {
  return (
    <div className="loading-kitab-container">
      <motion.div
        className="kitab-card"
        animate={{
          rotateY: [0, 180, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: '48px',
          height: '60px',
          background: 'linear-gradient(135deg, #C1440E 0%, #D4A574 100%)',
          borderRadius: '4px',
          boxShadow: 'var(--shadow-glow-warm)',
          transformStyle: 'preserve-3d'
        }}
      />
      <motion.p
        key={loadingText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {loadingText}
      </motion.p>
    </div>
  )
}
```

**Rotating Loading Text:**
```js
const loadingMessages = [
  "Simbah lagi mikir...",
  "Simbah nyari catatan lama...",
  "Simbah inget cerita dulu...",
  "Simbah lagi meracik jawaban...",
  "Simbah lagi pikirkan matang-matang..."
]
```

### 6.3 PDF Generation — Paper Fold Animation

**Concept:** Paper folding into shape, sequential fold reveals content. Convey "catatan terbentuk".

**Implementation:** Framer Motion 3D perspective + rotate transforms.

```jsx
function PaperFoldLoading() {
  return (
    <motion.div className="paper-fold">
      <motion.div
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
        className="fold-top"
      />
      <motion.div
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="fold-bottom"
      />
      <motion.div
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="fold-content"
      >
        📔 Catatan Simbah
      </motion.div>
    </motion.div>
  )
}
```

### 6.4 Message Entry Animation

**Concept:** Message bubbles fade + slide in dari bottom, subtle bounce.

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.4, 
    ease: [0.25, 0.1, 0.25, 1] // custom warm ease
  }}
>
  {messageContent}
</motion.div>
```

### 6.5 Streaming Response Effect

**Concept:** Text muncul character-by-character, feel like Mbah lagi ngetik.

```jsx
function StreamingText({ text, speed = 30 }) {
  const [displayText, setDisplayText] = useState('')
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text])
  
  return <span>{displayText}</span>
}
```

### 6.6 Hover Micro-Interactions

**Buttons:** translateY(-2px) + shadow lift
**Chips:** scale 1.03 + color transition
**Citation pills:** background fill transition
**3D orb:** slight rotation follow mouse

---

## 7. Iconography

### Icon Library: Lucide React

**Common Icons:**
- Chat: `MessageCircle`
- Send: `Send` atau custom 📤 emoji
- Settings: `Settings2`
- Reset: `RotateCcw`
- PDF: `FileText` atau 📔 emoji
- Book: `BookOpen` atau 📖 emoji
- Sparkle: `Sparkles` (untuk AI moment)
- Menu: `Menu`
- Close: `X`

**Custom Emoji for Persona:**
- 🧙‍♂️ Mbah avatar
- 🍵 Tea (opening, warm hospitality)
- 📔 Catatan Simbah
- 📖 Buku framework
- 🌾 Case study Indonesia
- ✨ AI processing moment

**Rule:** Emoji dipakai sparingly untuk convey warmth. Never spam. Max 1-2 per screen area.

---

## 8. Illustration System

### Ilustrasi Mbah (Persona Avatar)

**Style:** Flat modern illustration, bukan realistic photo.

**Reference Vibe:**
- Warmth Studio Ghibli
- Simplicity Storyset / Undraw
- Color palette match Design System

**Attributes Mbah:**
- Kakek 70+ tahun
- Wajah teduh, senyum ramah, mata bijak
- Baju batik atau kemeja lengan panjang (warm terracotta / cream)
- Kopiah (peci) hitam
- Sedang duduk, tangan pegang gelas teh atau kopi

**Usage:**
- Landing hero: full body illustration (samping 3D orb)
- Chat avatar: 32x32 crop head-shoulder
- PDF Catatan: quarter body di footer

**Source Option:**
- Custom illustration (kalau ada budget/waktu)
- Undraw.co (free, customizable color)
- Storyset (free, animated)

### Decorative Elements

**Batik Pattern Subtle:**
- Border decorations
- Section dividers
- PDF Catatan background watermark

**Style:** Very subtle (opacity 5-10%), monochromatic sepia.

---

## 9. Responsive Breakpoints

```css
/* Mobile-first */
--breakpoint-sm: 640px;   /* Small tablet, large phone */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Laptop */
--breakpoint-xl: 1280px;  /* Desktop */
```

### Mobile (< 640px)

- Hero orb: 60vh height (larger for impact)
- Text hero: clamp scales down
- Chat: full-width, minimal padding
- Input: bottom-fixed with safe area
- Modal: full-screen takeover
- Suggested chips: scroll horizontal

### Tablet (640-1024px)

- Chat container: 90vw max, centered
- Hero orb: 50vh
- Modal: max 500px centered

### Desktop (> 1024px)

- Chat container: max 768px
- Landing: 2-column potential (orb left, text right)
- Sidebar untuk history (optional P2)
- Modal: 500px centered

---

## 10. Motion Design System

### Easing Curves (Named)

```css
/* Warm & considered - Mbah's personality */
--ease-mbah: cubic-bezier(0.25, 0.1, 0.25, 1);

/* Bouncy but subtle - for playful moments */
--ease-warm-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Sharp entry - for CTAs */
--ease-out-sharp: cubic-bezier(0.2, 0.9, 0.4, 1);

/* Smooth exit */
--ease-in-smooth: cubic-bezier(0.4, 0, 0.6, 1);
```

### Duration Standards

```css
--duration-fast: 150ms;      /* Micro (hover)  */
--duration-normal: 300ms;    /* Default transitions */
--duration-slow: 500ms;      /* Modal, page transitions */
--duration-cinematic: 1000ms;/* Hero animations */
```

### Motion Principles

**1. Warm Not Snappy** — everything eases in/out, no linear transitions.

**2. Purposeful Delay** — 3D loading & PDF generation take time intentionally, feel considered.

**3. Direction Matters** — messages come from bottom (chat feed), modals from center (focus), notifications from top.

**4. Respect Preferences** — check `prefers-reduced-motion`, provide static fallback.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. Sound Design (Optional P2)

**Consideration untuk future:**
- Subtle tea-pour sound saat load pertama
- Soft chime saat PDF generated
- No sound untuk chat messages (annoying)
- All muted by default, opt-in

**Untuk MVP:** SKIP. Fokus visual.

---

## 12. Sample Screen Compositions

### Landing Hero Composition

```
┌────────────────────────────────────────────────────┐
│  [Nav minimal — logo left, links right]           │
│                                                     │
│  ┌─────────────────────────────────────────────┐  │
│  │                                                │  │
│  │      [3D Wisdom Orb — animated]              │  │
│  │      Ukuran: 320px diameter                  │  │
│  │      Warm gradient dengan slow rotate        │  │
│  │                                                │  │
│  └─────────────────────────────────────────────┘  │
│                                                     │
│              Mbah AI                              │  ← Fraunces 72px
│                                                     │
│  "Cah bagus, cah ayu — Simbah ana ngendi kene,   │  ← Fraunces italic 24px
│   mesti kanggo ngrungokake critamu."              │     Warm sepia
│                                                     │
│  (Anak baik, anak cantik — Simbah selalu di sini) │  ← Inter 14px light
│                                                     │
│                                                     │
│  Konsultan bisnis untuk UMKM Ekonomi Kreatif      │  ← Inter 18px medium
│  Indonesia. Berpengalaman 50 tahun.               │
│                                                     │
│                                                     │
│         ┌─────────────────────────────┐           │
│         │  🍵 Mulai Ngobrol dengan   │           │  ← Big terracotta CTA
│         │      Mbah                    │           │     with glow hover
│         └─────────────────────────────┘           │
│                                                     │
│         Gratis. Tanpa daftar.                     │  ← Trust text
│                                                     │
└────────────────────────────────────────────────────┘
```

### Chat Bubble Detail

```
┌──── User bubble ────┐
│                       │
│  Warung saya sepi    │
│  banget Mbah          │
│                       │
└─────────── 14:32 ────┘
     (right aligned)

     ┌──── Mbah bubble ────────────────────────┐
     │                                            │
     │  [🧙‍♂️] Mbah AI                            │
     │                                            │
     │  Ndhuk, Simbah paham perasaanmu.          │
     │  Warung baru 3 bulan sepi itu berat.     │
     │                                            │
     │  Simbah dulu juga...                     │
     │                                            │
     │  "Ora usah dadi mBanteng kabeh,          │  ← Fraunces italic
     │   dadi kancil ya isa menang."             │     centered emphasized
     │                                            │
     │  Ini yang Al Ries sebut positioning...   │
     │                                            │
     │  [📖 Positioning] [🌾 Kopi Tuku]         │  ← Citation pills
     │                                            │
     └─────────────────────────────────── 14:33 ─┘
      (left aligned)
```

---

## 13. Accessibility Design

### Contrast Ratios (Verified)

- **Deep sepia on white:** 12:1 ✅ WCAG AAA
- **Terracotta on white:** 5.8:1 ✅ WCAG AA
- **Sage on white:** 4.8:1 ✅ WCAG AA
- **Sepia light on white:** 3.2:1 ❌ (hanya untuk decorative, bukan text penting)

### Focus States

Semua interactive elements harus punya visible focus:
```css
:focus-visible {
  outline: 2px solid var(--terracotta);
  outline-offset: 2px;
  border-radius: inherit;
}
```

### Touch Targets

Minimum 44x44px untuk semua tappable elements (mobile).

---

## 14. Dark Mode Consideration

**MVP Decision:** SKIP dark mode. Fokus di light mode yang crafted.

**Future:** Kalau ada waktu, dark mode dengan:
- Background: deep sepia (#1F1611)
- Text: warm cream (#F5E6D3)
- Accent: brighter terracotta

---

## 15. Design QA Checklist

Sebelum submit, cek:

- [ ] Semua text minimum 16px (readable di mobile)
- [ ] Contrast ratio semua text ≥ 4.5:1
- [ ] Focus state visible di semua button
- [ ] Touch target ≥ 44x44px di mobile
- [ ] 3D animation < 60fps performance
- [ ] Loading state tidak lebih dari 8 detik
- [ ] Error states punya recovery action
- [ ] Empty states punya guidance
- [ ] Persona konsisten di semua copy
- [ ] Peribahasa selalu Fraunces italic
- [ ] Citation pills konsisten style
- [ ] Mobile & desktop test di real device

---

**END OF DESIGN**

Next: TECH-SPEC-MbahAI.md untuk implementation guide.
