import React from 'react'

import styles from './fifteen.module.css'

const Fifteen = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>⛓</span>
      <span className={styles.text1}>
        We are in a inflinte loop, where our tools are linked to one another very deeply
      </span>
    </div>
  )
}

export default Fifteen
