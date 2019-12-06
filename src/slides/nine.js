import React from 'react'

import styles from './nine.module.css'

const Nine = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}></span>
      <span className={styles.text01}>.browserslist</span>
      <span className={styles.text02}>.npmignore</span>
      <span className={styles.text03}>.babelrc</span>
      <span className={styles.text04}>.storybook</span>
      <span className={styles.text05}>.prettierrc</span>
      <span className={styles.text06}>.gitignore</span>
      <span className={styles.text07}>tsconfig.json</span>
      <span className={styles.text08}>webpack-base.config.json</span>
      <span className={styles.text09}>webpack-prod.config.json</span>
      <span className={styles.text10}>webpack-dev.config.json</span>
      <span className={styles.text11}>eslintrc.json</span>
      <span className={styles.text12}>tslint.json / eslint.json</span>
      <span className={styles.text13}>polyfills.js</span>
    </div>
  )
}

export default Nine
