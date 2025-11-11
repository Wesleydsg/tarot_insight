import { NextResponse } from "next/server";
import { getCards } from "@/app/cardsUtils";

export async function GET() {
  const cards = await getCards();
  return NextResponse.json(cards);
}