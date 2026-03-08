import { Card, CardSymbol } from "@/types/game";
import { shuffle } from "./shuffle";

const SYMBOLS: CardSymbol[] = [
  "🐶",
  "🐱",
  "🐺",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
];

/**
 * Generates 16 cards (8 pairs) shuffled randomly.
 */
export function generateCards(): Card[] {
  const pairs: Card[] = SYMBOLS.flatMap((symbol, idx) => [
    { id: `card-${idx}-a`, symbol, isFlipped: false, isMatched: false },
    { id: `card-${idx}-b`, symbol, isFlipped: false, isMatched: false },
  ]);
  return shuffle(pairs);
}

/**
 * Checks if two flipped cards are a matching pair.
 */
export function checkMatch(cardA: Card, cardB: Card): boolean {
  return cardA.symbol === cardB.symbol;
}

/**
 * Returns true if all cards are matched (game over).
 */
export function isGameComplete(cards: Card[]): boolean {
  return cards.every((card) => card.isMatched);
}

/**
 * Formats seconds into MM:SS string.
 */
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}
