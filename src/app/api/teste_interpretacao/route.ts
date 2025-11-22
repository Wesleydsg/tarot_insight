import { interpretTarotReading } from "@/app/api/teste_interpretacao/ai_interpreter";
import { getSpreadByName } from "@/app/api/teste_interpretacao/spread";
import { drawRandomCard } from "@/app/cards";
import type { TarotCard } from "@/app/cards";

export async function GET() {
  const spread = await getSpreadByName("Tiragem de 3 Cartas");
  if (!spread) return Response.json({ error: "Spread não encontrado" });

  const cards: (TarotCard | null)[] = [];
  for (let i = 0; i < spread.cards; i++) {
    cards.push(await drawRandomCard());
  }

  const drawnCards = cards.filter((c): c is TarotCard => c !== null);

  if (drawnCards.length !== spread.cards) {
    return Response.json({
      error: `Erro ao sortear cartas suficientes. Esperado: ${spread.cards}, obtido: ${drawnCards.length}`,
    });
  }

  const result = await interpretTarotReading({
    spread,
    drawnCards,
  });

  return Response.json({ result });
}