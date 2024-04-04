import React from "react";
import type { TrackInfo } from "src/lib/lib";
import { Abstract } from "./Abstract";
import type { WineType } from "../types/genericWineDescription";
import { SpotifyEmbed } from "./SpotifyEmbed";
import { WineRecommendations } from "./WineRecommendations";

//article with a little of info and wine suggestions
export function Article({ track }: { track: TrackInfo }) {
  const [wineType, wineTaste] = ["red", "nuanced'n'developed"];

  return (
    <article>
      <SpotifyEmbed trackId={track.id} />
      <Abstract wineType={wineType as WineType} wineTaste={wineTaste} />
      <WineRecommendations amount={20} />
    </article>
  );
}
