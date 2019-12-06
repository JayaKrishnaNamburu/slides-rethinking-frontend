import React from "react";
import stars from "../playground_assets/stars.png";
import styles from "./thirteen.module.css";

const Thirteen = props => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Choosing Boilerplates</span>
      <div className={styles.container1}>
        <img src={stars} className={styles.image} />
        <span className={styles.text1}>📦</span>
      </div>
    </div>
  );
};

export default Thirteen;
