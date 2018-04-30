import React from 'react'

import styles from './index.module.css'

export default () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <span className={styles.hr} />
      <ul className={styles.list}>
        <li className={styles.listItem}>&copy; {year} Pascal Barry</li>
      </ul>
    </div>
  )
}
