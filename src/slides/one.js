import React from "react";
import image from "../playground_assets/abstract_pic.png";
import styles from "./one.module.css";

const One = props => {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
      <div className={styles.container1}>
        <h1 className={styles.h1}>Rethinking Frontend</h1>
        <span className={styles.text}>Jaya Krishna Namburu</span>
        <span className={styles.text1}>@jkrishna</span>
      </div>
    </div>
  );
};

export default One;
