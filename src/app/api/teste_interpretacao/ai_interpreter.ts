"use server";

import type { TarotCard } from "../../cards";
import type { SpreadType } from "./spread";
import { ollamaGenerate } from "../ollama";

interface TarotReadingInput {
  spread: SpreadType;
  drawnCards: TarotCard[];
}

export async function interpretTarotReading({
  spread,
  drawnCards,
}: TarotReadingInput): Promise<string> {
  let baseText = `Tiragem: ${spread.name}\nObjetivo: ${spread.objective}\n\n`;

  for (let i = 0; i < spread.positions.length && i < drawnCards.length; i++) {
    const pos = spread.positions[i];
    const card = drawnCards[i];

    baseText += `
Posição ${pos.number} - ${pos.meaning}
Carta: ${card.name}
Palavras-chave: ${card.keywords.slice(0, 3).join(", ")}
Luz: ${card.meanings.light[0]}
Sombra: ${card.meanings.shadow[0]}
\n`;
  }

  const prompt = `
Você é um tarólogo experiente. Interprete a seguinte tiragem:
${baseText}
  `;

  const interpretation = await ollamaGenerate(prompt);
  return interpretation;
}
