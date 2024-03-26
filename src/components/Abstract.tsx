import React from "react";
import type {
  WineType,
  WineTaste,
  GenericWineDescription,
  TasteDescription,
} from "../types/genericWineDescription";
import wineDescription from "../configs/genericWineDescription.config";
import styles from "../styles/miniArticle.module.css";

function parse(wineDescription: GenericWineDescription[]): any {
  const wineDescriptionObj = {} as any;
  wineDescription.forEach((wineDesc) => {
    wineDescriptionObj[wineDesc.type] ??= {};
    wineDescriptionObj[wineDesc.type][wineDesc.taste] =
      wineDesc.tasteDescription;
  });
  return wineDescriptionObj;
}

const wineDescriptionObj = parse(wineDescription);

export function Abstract({
  wineType,
  wineTaste,
}: {
  wineType: WineType;
  wineTaste: WineTaste;
}) {
  const wineDesc: TasteDescription = wineDescriptionObj[wineType][wineTaste];
  return (
    <section className={styles.miniarticle}>
      <h2 className={styles.tag}>{wineType}</h2>
      <h2 className={styles.tag}>{wineTaste}</h2>
      <h3>Taste</h3>
      <div>{wineDesc.taste}</div>
      <h3>Tips for use</h3>
      <div>{wineDesc.tipsForUse}</div>
      <h3>How to serve</h3>
      <div>{wineDesc.howToServe}</div>
    </section>
  );
}
