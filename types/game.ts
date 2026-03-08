export type CardSymbol =
  | "🐶"
  | "🐱"
  | "🐺"
  | "🦊"
  | "🐻"
  | "🐼"
  | "🐨"
  | "🐯";

export interface Card {
  id: string;
  symbol: CardSymbol;
  isFlipped: boolean;
  isMatched: boolean;
}

export type GameStatus = "idle" | "playing" | "won";

export interface RankingEntry {
  id: string;
  time: number; // seconds
  moves: number;
  date: string; // ISO string
}

export type Language = "es" | "en";
