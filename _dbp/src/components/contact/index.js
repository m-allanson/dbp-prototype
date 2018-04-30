import React from 'react'

import styles from './index.module.css'

export default () => (
  <div>
    <h1 className={styles.text}><a className={styles.link} href='mailto:studio@designbypascal.com'>studio[at]designbypascal.com</a><br />07906 079 068<br />112 Manor Avenue<br />Brockley<br />London</h1>
    <span className={styles.hr} />
    <h2 className={styles.credits}>Web development in collaboration with: <a className={styles.linkCredit} target='_blank' href='https://github.com/m-allanson/designbypascal-portfolio'>Michael Allanson</a><br />Photography: <a className={styles.linkCredit} target='_blank' href='http://tinahillier.com'>Tina Hillier</a></h2>
  </div>
)
