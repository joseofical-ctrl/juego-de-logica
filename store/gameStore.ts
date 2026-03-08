import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Card, GameStatus, RankingEntry } from "@/types/game";
import {
  generateCards,
  checkMatch,
  isGameComplete,
} from "@/lib/gameLogic";

interface GameState {
  cards: Card[];
  flippedIds: string[];
  moves: number;
  time: number;
  status: GameStatus;
  ranking: RankingEntry[];
  isChecking: boolean;

  // Actions
  startNewGame: () => void;
  flipCard: (id: string) => void;
  tickTimer: () => void;
  addRankingEntry: (entry: RankingEntry) => void;
  clearRanking: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      cards: generateCards(),
      flippedIds: [],
      moves: 0,
      time: 0,
      status: "idle",
      ranking: [],
      isChecking: false,

      startNewGame: () => {
        set({
          cards: generateCards(),
          flippedIds: [],
          moves: 0,
          time: 0,
          status: "idle",
          isChecking: false,
        });
      },

      flipCard: (id: string) => {
        const state = get();

        // Guard: don't allow flipping while checking, or if already won
        if (state.isChecking || state.status === "won") return;

        const card = state.cards.find((c) => c.id === id);
        if (!card || card.isFlipped || card.isMatched) return;

        // Already have 2 flipped cards waiting
        if (state.flippedIds.length === 2) return;

        // Start timer on first move
        const newStatus =
          state.status === "idle" ? "playing" : state.status;

        const newFlippedIds = [...state.flippedIds, id];
        const newCards = state.cards.map((c) =>
          c.id === id ? { ...c, isFlipped: true } : c
        );

        // Check for match when 2 cards are flipped
        if (newFlippedIds.length === 2) {
          const [idA, idB] = newFlippedIds;
          const cardA = newCards.find((c) => c.id === idA)!;
          const cardB = newCards.find((c) => c.id === idB)!;
          const newMoves = state.moves + 1;

          if (checkMatch(cardA, cardB)) {
            // Match! Mark both as matched
            const matchedCards = newCards.map((c) =>
              c.id === idA || c.id === idB
                ? { ...c, isMatched: true }
                : c
            );

            const allDone = isGameComplete(matchedCards);

            set({
              cards: matchedCards,
              flippedIds: [],
              moves: newMoves,
              status: allDone ? "won" : newStatus,
              isChecking: false,
            });
          } else {
            // No match — flip back after delay
            set({
              cards: newCards,
              flippedIds: newFlippedIds,
              moves: newMoves,
              status: newStatus,
              isChecking: true,
            });

            setTimeout(() => {
              set((s) => ({
                cards: s.cards.map((c) =>
                  newFlippedIds.includes(c.id) && !c.isMatched
                    ? { ...c, isFlipped: false }
                    : c
                ),
                flippedIds: [],
                isChecking: false,
              }));
            }, 1000);
          }
        } else {
          set({
            cards: newCards,
            flippedIds: newFlippedIds,
            status: newStatus,
          });
        }
      },

      tickTimer: () => {
        set((s) => ({ time: s.time + 1 }));
      },

      addRankingEntry: (entry: RankingEntry) => {
        set((s) => {
          const updated = [...s.ranking, entry]
            .sort((a, b) => a.time - b.time || a.moves - b.moves)
            .slice(0, 10);
          return { ranking: updated };
        });
      },

      clearRanking: () => set({ ranking: [] }),
    }),
    {
      name: "game-store",
      partialize: (state) => ({ ranking: state.ranking }),
    }
  )
);
