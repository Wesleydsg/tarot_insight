"use client";

import { useEffect, useState } from "react";
import { TarotCard } from "@/app/cardsUtils";

export default function Gallery() {
    const [cards, setCards] = useState<TarotCard[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCards() {
            const res = await fetch("/api");
            const data: TarotCard[] = await res.json();
            setCards(data);
            setLoading(false);
        }

        fetchCards();
    }, []);

    return (
        <main className="p-8 grid grid-cols-3 gap-6">
            {loading ? (
                <p className="col-span-3 text-center text-lg">Carregando cartas...</p>
            ) : (
                cards.map((card) => (
                    <div key={card.name} className="text-center">
                        <img
                            src={`/assets/rider_waite_cards/${card.img}`}
                            alt={card.name}
                            width={200}
                            height={350}
                            className="rounded-lg shadow"
                        />
                        <p className="mt-2 font-semibold">{card.name}</p>
                    </div>
                ))
            )}
        </main>
    );
}