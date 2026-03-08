import { Language } from "@/types/game";

export const translations: Record<Language, Record<string, string>> = {
  es: {
    title: "Logic Memory Game",
    subtitle: "Encuentra todos los pares",
    moves: "Movimientos",
    time: "Tiempo",
    newGame: "Nuevo juego",
    ranking: "Ranking",
    bestScores: "Mejores partidas",
    youWon: "¡Ganaste!",
    playAgain: "Jugar otra vez",
    noScores: "Aún no hay partidas guardadas.",
    moves_label: "movimientos",
    date: "Fecha",
    congratulations: "¡Felicitaciones!",
    foundAllPairs: "Encontraste todos los pares",
    yourResult: "Tu resultado",
    closeRanking: "Cerrar",
    clearRanking: "Borrar ranking",
    rank: "#",
  },
  en: {
    title: "Logic Memory Game",
    subtitle: "Find all the pairs",
    moves: "Moves",
    time: "Time",
    newGame: "New Game",
    ranking: "Ranking",
    bestScores: "Best Scores",
    youWon: "You Won!",
    playAgain: "Play Again",
    noScores: "No saved scores yet.",
    moves_label: "moves",
    date: "Date",
    congratulations: "Congratulations!",
    foundAllPairs: "You found all the pairs",
    yourResult: "Your result",
    closeRanking: "Close",
    clearRanking: "Clear ranking",
    rank: "#",
  },
};

export function t(lang: Language, key: string): string {
  return translations[lang][key] ?? key;
}
