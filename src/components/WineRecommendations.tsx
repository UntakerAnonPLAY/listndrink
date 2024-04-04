import React from "react";
import { WineCard, WineCardInfo } from "./WineCard";
import styles from "../styles/wineRecommendations.module.css";

const wineInfo: WineCardInfo = {
  name: "Adobe Cabernet Sauvignon Merlot 2020 bag-in-box",
  imgSlug: "931877/jean-biecher-pinot-noir-reserve-organic-2022.jpg",
  description:
    "Full-bodied, tannic, blackcurrant notes, blackberry notes, raspberry notes, hint of paprika, spicy, light oak notes",
  tags: ["Vegan", "Organic"],
  alcoholPercent: 0,
  price: 15.5,
};

export function WineRecommendations({ amount }: { amount: number }) {
  const wineCards = [];
  for (let i = 0; i < amount; i++) {
    wineCards.push(<WineCard info={wineInfo} />);
  }
  return (
    <section>
      <h2>Wine Recommendations</h2>
      {wineCards}
    </section>
  );
}
