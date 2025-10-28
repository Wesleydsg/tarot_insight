"use client";
import { useState, useEffect } from "react";
import { getCardInfo, TarotCard } from "../cards";

export default function TestePage() {
  const [card, setCard] = useState<TarotCard | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function testar() {
      try {
        const carta = await getCardInfo("O Louco");
        if (!carta) {
          setErro("Carta não encontrada!");
          return;
        }
        setCard(carta);
      } catch (e) {
        setErro("Erro ao buscar carta");
        console.error(e);
      }
    }

    testar();
  }, []);

  if (erro) return <p>{erro}</p>;
  if (!card) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{card.name}</h2>
      <img
        src={`/assets/rider_waite_cards/${card.img}`}
        alt={card.name}
        width={150}
      />
      <p><strong>Arcano:</strong> {card.arcana}</p>
      <p><strong>Palavras-chave:</strong> {card.keywords.join(", ")}</p>
      <h4>Significados (Luz):</h4>
      <ul>
        {card.meanings.light.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
