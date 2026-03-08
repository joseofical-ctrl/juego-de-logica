"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "@/store/gameStore";
import { useLanguageStore } from "@/store/languageStore";
import { t } from "@/lib/translations";
import { formatTime } from "@/lib/gameLogic";
import { Trophy, Trash2, ChevronDown, ChevronUp } from "lucide-react";

export default function Ranking() {
  const { ranking, clearRanking } = useGameStore();
  const { language } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);

  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm shadow-lg hover:border-violet-500/40 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/30">
            <Trophy className="w-4 h-4 text-amber-400" />
          </div>
          <span className="font-semibold text-slate-200 text-sm">
            {t(language, "bestScores")}
          </span>
          {ranking.length > 0 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/30 border border-violet-500/40 text-violet-300 font-medium">
              {ranking.length}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-400 group-hover:text-slate-300"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      {/* Ranking List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-2 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm shadow-lg overflow-hidden">
              {ranking.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-sm">
                  <div className="text-3xl mb-2">📋</div>
                  {t(language, "noScores")}
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-3 border-b border-slate-700/50">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {t(language, "rank")}
                    </span>
                    <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <span>{t(language, "time")}</span>
                      <span>{t(language, "moves")}</span>
                    </div>
                  </div>

                  {/* Entries */}
                  <div className="divide-y divide-slate-700/30">
                    {ranking.map((entry, idx) => (
                      <motion.div
                        key={entry.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`flex items-center justify-between px-5 py-3.5 ${
                          idx === 0
                            ? "bg-amber-500/5"
                            : idx === 1
                            ? "bg-slate-400/5"
                            : idx === 2
                            ? "bg-orange-800/5"
                            : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl w-7 text-center">
                            {medals[idx] ?? `${idx + 1}.`}
                          </span>
                          <span className="text-xs text-slate-500">
                            {new Date(entry.date).toLocaleDateString(
                              language === "es" ? "es-ES" : "en-US",
                              { day: "2-digit", month: "short" }
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="font-mono font-bold text-slate-100 text-sm">
                            {formatTime(entry.time)}
                          </span>
                          <span className="text-sm text-slate-300 tabular-nums w-20 text-right">
                            {entry.moves}{" "}
                            <span className="text-slate-500 text-xs">
                              {t(language, "moves_label")}
                            </span>
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Clear button */}
                  <div className="px-5 py-3 border-t border-slate-700/50 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={clearRanking}
                      className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-500/10"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      {t(language, "clearRanking")}
                    </motion.button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
