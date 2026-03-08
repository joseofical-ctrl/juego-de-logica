import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Language } from "@/types/game";

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: "es",
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () =>
        set({ language: get().language === "es" ? "en" : "es" }),
    }),
    {
      name: "language-store",
    }
  )
);
