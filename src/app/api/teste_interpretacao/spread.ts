"use server";

import { promises as fs } from "fs";
import path from "path";

export interface SpreadPosition {
  number: number;
  meaning: string;
}

export interface SpreadType {
  name: string;
  cards: number;
  objective: string;
  positions: SpreadPosition[];
}

export async function getSpreadByName(spreadName: string): Promise<SpreadType | null> {
  const filePath = path.join(process.cwd(), "public/assets/spread.json");
  const fileData = await fs.readFile(filePath, "utf-8");
  const spreads = JSON.parse(fileData).spread_types as SpreadType[];

  return spreads.find((s) => s.name === spreadName) || null;
}
