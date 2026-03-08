"use client";

import { motion } from "framer-motion";
import { useGameStore } from "@/store/gameStore";
import { useLanguageStore } from "@/store/languageStore";
import { t } from "@/lib/translations";
import GameBoard from "@/components/GameBoard";
import GameStats from "@/components/GameStats";
import Ranking from "@/components/Ranking";
import LanguageToggle from "@/components/LanguageToggle";
import { RotateCcw, Brain } from "lucide-react";

export default function Home() {
  const { startNewGame } = useGameStore();
  const { language } = useLanguageStore();

  return (
    <main className="animated-bg min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/5 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="p-2.5 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-900/40">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                {t(language, "title")}
              </h1>
            </div>
            <p className="text-slate-400 text-sm ml-14">
              {t(language, "subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <motion.button
              whileHover={{ scale: 1.05, rotate: -15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => startNewGame()}
              className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-300 hover:text-violet-400 hover:border-violet-500/40 transition-colors backdrop-blur-sm shadow-lg"
              title={t(language, "newGame")}
              aria-label={t(language, "newGame")}
            >
              <RotateCcw className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.header>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-6"
          aria-label="Game statistics"
        >
          <GameStats />
        </motion.section>

        {/* New Game button (full width) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-6 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => startNewGame()}
            id="new-game-btn"
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-violet-900/40 transition-all border border-violet-500/30"
          >
            <RotateCcw className="w-4 h-4" />
            {t(language, "newGame")}
          </motion.button>
        </motion.div>

        {/* Game Board */}
        <motion.section
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mb-8"
          aria-label="Game board"
        >
          <GameBoard />
        </motion.section>

        {/* Ranking */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          aria-label="Ranking"
        >
          <Ranking />
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center text-slate-600 text-xs"
        >
          <p>
            Logic Memory Game · Built with Next.js, TypeScript & Framer Motion
          </p>
        </motion.footer>
      </div>
    </main>
  );
}
