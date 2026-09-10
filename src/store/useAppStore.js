import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAppStore = create(
  persist(
    (set) => ({
      // # State Navigasi Layar ('landing' atau 'chat')
      currentScreen: 'landing',
      setScreen: (screen) => set({ currentScreen: screen }),

      // # State Pesan Chat & Fungsi setMessages aslimu
      messages: [],
      setMessages: (messages) => set({ messages }),
      addMessage: (msg) => set((state) => ({ 
        messages: [...(state.messages || []), msg] 
      })),

      // # State Status Loading AI
      isLoading: false,
      setLoading: (loading) => set({ isLoading: loading }),

      // # State Hitungan Percakapan
      exchangeCount: 0,
      incrementExchange: () => set((state) => ({ 
        exchangeCount: (state.exchangeCount || 0) + 1 
      })),

      // # State Konteks Pengguna / Onboarding
      userContext: {
        name: '',
        businessType: '',
        businessAge: '',
        mainChallenge: '',
        preferredCall: 'Le',
        hasCompletedOnboarding: false,
      },
      setUserContext: (ctx) => set((state) => ({ 
        userContext: { ...(state.userContext || {}), ...ctx } 
      })),

      // ==========================================
      // # FITUR HISTORY CHAT & SAPAAN CHAT BARU
      // ==========================================
      chatHistory: [],
      
      // Arsip chat lama & berikan sapaan khusus untuk Chat Baru
      // Arsip chat lama HANYA jika ada pesan user, cegah duplikat/kosong
      archiveCurrentChat: (customTitle) => set((state) => {
        const currentMessages = state.messages || [];
        // Cek apakah ada pesan user (selain sapaan awal Mbah)
        const hasUserMessage = currentMessages.some(m => m.role === 'user');
        
        // Jika belum ada pesan user sama sekali, jangan masukkan ke history
        if (!hasUserMessage) {
          return {
            messages: [],
            exchangeCount: 0,
          };
        }

        // Cek apakah sesi ini sudah pernah di-arsip sebelumnya (cegah duplikat kembar)
        const firstUserMsg = currentMessages.find(m => m.role === 'user');
        const title = customTitle || (firstUserMsg ? (firstUserMsg.text.length > 22 ? firstUserMsg.text.substring(0, 22) + '...' : firstUserMsg.text) : 'Rembukan Usaha');

        const existingHistory = state.chatHistory || [];
        // Jika judul/pesan terakhir di history sudah sama persis, jangan diduplikasi
        const isDuplicate = existingHistory.some(h => h.title === title && h.messages.length === currentMessages.length);
        
        if (isDuplicate) {
          const newWelcomeMessage = {
            id: "welcome-new-" + Date.now(),
            role: "mbah",
            text: `Ana apa maning, Le? Coba kene lungguh sing santai, ana perkara apa sing arep dirembuk bareng babagan usahamu saiki? 🍵\n*(Ada apa lagi, Nak? Coba sini duduk yang santai, ada hal apa yang mau dirembuk bersama tentang usahamu sekarang?)*`
          };
          return {
            messages: [newWelcomeMessage],
            exchangeCount: 0,
          };
        }
        
        const newSession = {
          id: 'sess-' + Date.now(),
          title,
          messages: currentMessages,
          createdAt: Date.now()
        };

        const newWelcomeMessage = {
          id: "welcome-new-" + Date.now(),
          role: "mbah",
          text: `Ana apa maning, Le? Coba kene lungguh sing santai, ana perkara apa sing arep dirembuk bareng babagan usahamu saiki? 🍵\n*(Ada apa lagi, Nak? Coba sini duduk yang santai, ada hal apa yang mau dirembuk bersama tentang usahamu sekarang?)*`
        };

        return {
          chatHistory: [newSession, ...existingHistory],
          messages: [newWelcomeMessage],
          exchangeCount: 0,
        };
      }),

      // Pilih/buka kembali chat lama dari sidebar
      loadHistorySession: (session) => set({
        messages: session.messages || [],
        exchangeCount: session.messages ? session.messages.filter(m => m.role === 'user').length : 0,
      }),

      // Hapus satu riwayat dari sidebar
      deleteHistorySession: (id) => set((state) => ({
        chatHistory: (state.chatHistory || []).filter(item => item.id !== id)
      })),

      // # Reset State Total aslimu
      resetStore: () => set({
        currentScreen: 'landing',
        messages: [],
        isLoading: false,
        exchangeCount: 0,
        chatHistory: [],
        userContext: {
          name: '',
          businessType: '',
          businessAge: '',
          mainChallenge: '',
          preferredCall: 'Le',
          hasCompletedOnboarding: false,
        }
      })
    }),
    {
      name: 'mbah-ai-storage',
    }
  )
);

export default useAppStore;