import React from "react";
import tagsConfig from "../configs/tags.config";
import styles from "../styles/styles.module.css";
import InfoIcon from "../../assets/images/icons/Info.svg";
import GlobIcon from "../../assets/images/icons/Glob.svg";
import GrapeIcon from "../../assets/images/icons/Grape.svg";

const imgBaseUrl = "https://images.alko.fi/images/cs_srgb,f_auto,t_medium/cdn/";

export type WineCardInfo = {
  name: string;
  imgSlug: string;
  description: string;
  tags: string[];
  alcoholPercent: number;
  price: number;
};

function Tags({ tags = [] }: { tags: string[] }) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <img
          src={tagsConfig[tag as keyof typeof tagsConfig]}
          alt={tag}
          key={tag}
          style={{
            width: "5em",
          }}
        />
      ))}
    </div>
  );
}

export function WineCard({ info }: { info: WineCardInfo }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{info.name}</h3>
      <img src={InfoIcon} className={styles.infoIcon} />
      <div
        style={{
          display: "flex",
          height: "60%",
          width: "100%",
        }}
      >
        <img className={styles.image} src={imgBaseUrl + info.imgSlug} />
        <div className={styles.infoBox}>
          {/* <Tags tags={info.tags} /> */}
          <img src={GlobIcon} width={100} />
          <img src={GrapeIcon} width={100} />
        </div>
      </div>
      <div className={styles.description}>{info.description}</div>
      <strong className={styles.price}>Price: {info.price} €</strong>
    </div>
  );
}
