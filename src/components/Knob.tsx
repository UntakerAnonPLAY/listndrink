import React from "react";
import styles from "../styles/knob.module.css";

export function Knobs() {
  return (
    <section className={styles.box}>
      <p>Alcohol percent</p>
      <label htmlFor="minAlcohol">Min alc. %</label>
      <input type="number" id="minAlcohol"></input>
      <label htmlFor="maxAlcohol">Min alc. %</label>
      <input type="number" id="maxAlcohol"></input>
    </section>
  );
}
