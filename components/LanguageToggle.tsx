"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/store/languageStore";
import { useGameStore } from "@/store/gameStore";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguageStore();
  const { startNewGame } = useGameStore();

  const handleToggle = () => {
    toggleLanguage();
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className="relative flex rounded-xl overflow-hidden border border-slate-600/50 bg-slate-800/60 backdrop-blur-sm shadow-lg"
      aria-label="Toggle language"
    >
      {/* Sliding indicator */}
      <motion.div
        className="absolute top-0 bottom-0 w-1/2 bg-violet-600/80 rounded-xl"
        animate={{ x: language === "es" ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      <span
        className={`relative z-10 px-3.5 py-2 text-sm font-bold transition-colors duration-200 ${
          language === "es" ? "text-white" : "text-slate-400"
        }`}
      >
        ES
      </span>
      <span
        className={`relative z-10 px-3.5 py-2 text-sm font-bold transition-colors duration-200 ${
          language === "en" ? "text-white" : "text-slate-400"
        }`}
      >
        EN
      </span>
    </motion.button>
  );
}
