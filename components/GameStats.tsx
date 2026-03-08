"use client";

import { motion } from "framer-motion";
import { useGameStore } from "@/store/gameStore";
import { useLanguageStore } from "@/store/languageStore";
import { t } from "@/lib/translations";
import { formatTime } from "@/lib/gameLogic";
import { Activity, Clock } from "lucide-react";

export default function GameStats() {
  const { moves, time } = useGameStore();
  const { language } = useLanguageStore();

  return (
    <div className="flex gap-4 justify-center">
      {/* Moves */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm shadow-lg min-w-[130px]"
      >
        <div className="p-2 rounded-xl bg-violet-500/20 border border-violet-500/30">
          <Activity className="w-4 h-4 text-violet-400" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
            {t(language, "moves")}
          </p>
          <motion.p
            key={moves}
            initial={{ scale: 1.3, color: "#a78bfa" }}
            animate={{ scale: 1, color: "#f1f5f9" }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold text-slate-100 tabular-nums"
          >
            {moves}
          </motion.p>
        </div>
      </motion.div>

      {/* Time */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm shadow-lg min-w-[130px]"
      >
        <div className="p-2 rounded-xl bg-sky-500/20 border border-sky-500/30">
          <Clock className="w-4 h-4 text-sky-400" />
        </div>
        <div>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
            {t(language, "time")}
          </p>
          <p className="text-xl font-bold text-slate-100 tabular-nums">
            {formatTime(time)}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
