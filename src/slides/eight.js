import React from 'react'

import styles from './eight.module.css'

const Eight = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>✅ Library</span>
      <span className={styles.text01}>✅ Bundler</span>
      <span className={styles.text02}>✅ Transpiler / Compiler</span>
      <span className={styles.text03}>✅ Plugins for Bundler</span>
      <span className={styles.text04}>✅ Plugins for Transpiler</span>
      <span className={styles.text05}>✅ And one plugin for React with JSX</span>
      <span className={styles.text06}>✅ CSS-In Js-Library</span>
      <span className={styles.text07}>✅ Typescript /Flow for static type checking</span>
      <span className={styles.text08}>✅ Ployfills</span>
      <span className={styles.text09}>✅ Code Formatters</span>
      <span className={styles.text10}>✅ Linter</span>
      <span className={styles.text11}>✅ Ok!! State Management. (Adds Redux / ngRX / Vuex)</span>
      <span className={styles.text12}>✅ Ok!! Everyone is using service worker, let me add</span>
    </div>
  )
}

export default Eight
