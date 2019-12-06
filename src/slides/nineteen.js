import React from 'react'

import styles from './nineteen.module.css'

const Nineteen = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Thank You !</h1>
      <div className={styles.container1}>
        <span className={styles.text}>Slides made with ♥ using</span>
        <img src="https://docs.teleporthq.io/logo.svg" className={styles.image} />
      </div>
    </div>
  )
}

export default Nineteen
