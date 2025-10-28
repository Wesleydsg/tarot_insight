"use client";

import { useState } from "react";
import Image from "next/image";
import { drawRandomCard, TarotCard } from "../cards"; // ajuste o caminho se necessário

export default function HomePage() {
  const [card, setCard] = useState<TarotCard | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleDraw() {
    setLoading(true);
    const randomCard = await drawRandomCard();
    setCard(randomCard);
    setLoading(false);
  }

  return(
    <main className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
      <h1 className="text-3xl font-bold">Tarot</h1>

      <button
        onClick={handleDraw}
        className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
      >
        {loading ? "Sortenando..." : "Sortear carta"}
      </button>

      {card && (
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-xl font-semibold mb-3">{card.name}</h2>
          <Image
            src={`/assets/rider_waite_cards/${card.img}`}
            alt={card.name}
            width={300}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </main>
  );
}

