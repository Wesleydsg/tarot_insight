"use server";

import { promises as fs } from "fs";
import path from "path";

export interface TarotCard {
  name: string;
  number: string;
  arcana: string;
  suit: string;
  img: string;
  fortune_telling: string[];
  keywords: string[];
  meanings: {
    light: string[];
    shadow: string[];
  };
  Archetype?: string;
  "Hebrew Alphabet"?: string;
  Numerology?: string;
  Elemental?: string;
  "Mythical/Spiritual"?: string;
  Astrology?: string;
  Affirmation?: string;
  "Questions to Ask"?: string[];
}

const filePath = path.join(process.cwd(), "public", "assets", "data_portuguese.json");

export async function getCards(){
  const fileData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileData);

  return data.cards as TarotCard[];
}

export async function getCardInfo(cardName: string): Promise<TarotCard | null> {
  try {
    const cards = await getCards();
    const found = cards.find(
      (c) => c.name.toLowerCase() === cardName.trim().toLowerCase()
    );

    return found || null;
  } catch (error) {
    console.error("Erro ao buscar carta:", error);

    return null;
  }
}

export async function drawRandomCard(): Promise<TarotCard | null> {
  try {
    const cards = await getCards();
    if (!cards || cards.length === 0) throw new Error("Nenhuma carta encontrada.");

    const randomIndex = Math.floor(Math.random() * cards.length);
    
    return cards[randomIndex];
  } catch (error) {
    console.error("Erro ao sortear carta:", error);

    return null;
  }
}