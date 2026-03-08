"use client";

import { motion } from "framer-motion";
import { Card as CardType } from "@/types/game";

interface CardProps {
  card: CardType;
  onClick: (id: string) => void;
}

export default function Card({ card, onClick }: CardProps) {
  const handleClick = () => {
    if (!card.isFlipped && !card.isMatched) {
      onClick(card.id);
    }
  };

  return (
    <div
      className="relative w-full aspect-square cursor-pointer"
      style={{ perspective: "600px" }}
      onClick={handleClick}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        {/* Back face */}
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.div
            className="w-full h-full rounded-2xl flex items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 shadow-lg shadow-purple-900/40 border border-purple-500/30"
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="text-4xl select-none opacity-60">❓</span>
          </motion.div>
        </div>

        {/* Front face */}
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <motion.div
            className={`w-full h-full rounded-2xl flex items-center justify-center border shadow-lg transition-all duration-300 ${
              card.isMatched
                ? "bg-gradient-to-br from-emerald-500/30 via-green-500/20 to-teal-500/30 border-emerald-400/60 shadow-emerald-900/40"
                : "bg-gradient-to-br from-slate-700/80 via-slate-600/70 to-slate-700/80 border-slate-500/40 shadow-slate-900/40"
            }`}
            animate={
              card.isMatched
                ? { scale: [1, 1.1, 1], transition: { duration: 0.4 } }
                : {}
            }
          >
            {card.isMatched && (
              <motion.div
                className="absolute inset-0 rounded-2xl bg-emerald-400/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 0.6 }}
              />
            )}
            <span className="text-5xl select-none">{card.symbol}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
