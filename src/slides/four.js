import React from 'react'

import styles from './four.module.css'

const Four = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>No CLI's, Templates / Boilerplates</span>
      <div className={styles.container1}>
        <img src="https://media.giphy.com/media/X4YqmJEl6wJoY/giphy.gif" className={styles.image} />
      </div>
    </div>
  )
}

export default Four
