import React from "react";

import styles from "./sixteen.module.css";

const Sixteen = props => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>🚀 Ok, i have choosen my library</span>
      <span className={styles.text01}>
        😃 Ok, css is render blocking so i will choose a CSS -In -Js instead
      </span>
      <span className={styles.text02}>
        😎 Yay !! After donwloading initial bundle. No block with css
      </span>
      <span className={styles.text03}>
        😟 What ?? My JS bundle size increased
      </span>
      <span className={styles.text04}>
        😬System to make components configurable (adds style systems)
      </span>
      <span className={styles.text05}>
        🤔 Oh! My users might be using old system let me add transpiler
      </span>
      <span className={styles.text06}>
        😫Bundle size increased a little more
      </span>
      <span className={styles.text07}>
        😐 Let me add async & defer to my scripts
      </span>
      <span className={styles.text08}>
        😳 Not working in old browsers (adds more ployfills)
      </span>
      <span className={styles.text09}>
        😫Bundle size increased a little more
      </span>
      <span className={styles.text10}>
        😨 Site is taking time to load (adds sw-worker)
      </span>
      <span className={styles.text11}>
        😭 Ok! now why the site is not updating
      </span>
    </div>
  );
};

export default Sixteen;
