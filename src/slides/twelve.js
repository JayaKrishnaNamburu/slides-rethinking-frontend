import React from 'react'

import styles from './twelve.module.css'

const Twelve = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Things we should be worried about</span>
      <span className={styles.text01}>✅ First Contentful Paint</span>
      <span className={styles.text02}>✅ First Meaningful Paint</span>
      <span className={styles.text03}>✅ Initial Load Time</span>
      <span className={styles.text04}>✅ Bundle Size</span>
      <span className={styles.text05}>✅ Responsive Design</span>
      <span className={styles.text06}>✅ Accessibility</span>
      <span className={styles.text07}>✅ Browser Support</span>
      <span className={styles.text08}>✅ Time to Interactive</span>
      <span className={styles.text09}>✅ Loading on Demand</span>
      <span className={styles.text10}>✅ Prefetching</span>
    </div>
  )
}

export default Twelve
