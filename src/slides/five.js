import React from 'react'

import styles from './five.module.css'

const Five = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Choosing Stack !!</span>
      <div className={styles.container1}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhvR8hIi2Eabk4XqB6JasvvYDi6O4OcgS2J1AipyL79iccqcv4"
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default Five
