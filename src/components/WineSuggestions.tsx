import React from "react";
import { WineCard, WineCardInfo } from "./WineCard";

const wineInfo: WineCardInfo = {
  name: "Adobe Cabernet Sauvignon Merlot 2020 bag-in-box",
  imgSlug: "931877/jean-biecher-pinot-noir-reserve-organic-2022.jpg",
  description:
    "Full-bodied, tannic, blackcurrant notes, blackberry notes, raspberry notes, hint of paprika, spicy, light oak notes",
  tags: ["Vegan", "Organic"],
  alcoholPercent: 0,
  price: 15.5,
};

export function WineSuggestions({ amount }: { amount: number }) {
  return (
    <section>
      <h2>Wine Suggestions</h2>
      <WineCard info={wineInfo} />
      <WineCard info={wineInfo} />
      <WineCard info={wineInfo} />
      <WineCard info={wineInfo} />
      <WineCard info={wineInfo} />
      <WineCard info={wineInfo} />
    </section>
  );
}
