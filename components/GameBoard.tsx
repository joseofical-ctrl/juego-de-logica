"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/store/gameStore";
import { useLanguageStore } from "@/store/languageStore";
import { t } from "@/lib/translations";
import { formatTime } from "@/lib/gameLogic";
import { RankingEntry } from "@/types/game";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

export default function GameBoard() {
  const {
    cards,
    moves,
    time,
    status,
    flipCard,
    tickTimer,
    startNewGame,
    addRankingEntry,
  } = useGameStore();
  const { language } = useLanguageStore();

  // Timer logic
  useEffect(() => {
    if (status !== "playing") return;
    const interval = setInterval(() => tickTimer(), 1000);
    return () => clearInterval(interval);
  }, [status, tickTimer]);

  // Save ranking when won
  useEffect(() => {
    if (status === "won") {
      const entry: RankingEntry = {
        id: uuidv4(),
        time,
        moves,
        date: new Date().toISOString(),
      };
      addRankingEntry(entry);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-6">
      {/* Win Banner */}
      <AnimatePresence>
        {status === "won" && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative overflow-hidden rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-900/60 via-green-900/50 to-teal-900/60 p-6 text-center shadow-xl shadow-emerald-900/30 backdrop-blur-sm"
          >
            {/* Sparkle background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,_#10b981_0%,_transparent_60%)]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_50%,_#14b8a6_0%,_transparent_60%)]" />

            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl mb-3"
            >
              🏆
            </motion.div>
            <h2 className="text-2xl font-bold text-emerald-300 mb-1">
              {t(language, "youWon")}
            </h2>
            <p className="text-slate-300 text-sm mb-4">
              {formatTime(time)} — {moves} {t(language, "moves_label")}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => startNewGame()}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-colors shadow-lg shadow-emerald-900/40 text-sm"
            >
              {t(language, "playAgain")}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Grid */}
      <motion.div
        className="grid grid-cols-4 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
          >
            <Card card={card} onClick={flipCard} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
