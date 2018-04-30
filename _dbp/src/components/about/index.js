import React from 'react'

import styles from './index.module.css'

export default () => (
  <div>
    <picture property='photo'>
      <source
        media='(min-width: 640px)'
        srcSet='/static/images/pascal-large.jpg 1x'
      />
      <img
        className={styles.image}
        alt='Pascal at work'
        src='static/images/pascal.jpg'
      />
    </picture>
    <h1 className={styles.title}>A multi-disciplinary designer working across identity, digital, print and type design</h1>
    <ul className={styles.statement}>
      <li className={styles.iconFirst}></li>
      <li className={styles.statementCopy}>I have clear ideas and strong values that inform a thorough process, ensuring design interacts with and facilitates business objectives.</li>
    </ul>
    <ul className={styles.statement}>
      <li className={styles.iconSecond}></li>
      <li className={styles.statementCopy}>My work is informed by evidence, research and user testing, as well as intuition developed over a broad and varied career within design.</li>
    </ul>
    <ul className={styles.statement}>
      <li className={styles.iconThird}></li>
      <li className={styles.statementCopy}>I believe in immersing myself in a project, working with one client at a time, providing a unique service as well as design solution.</li>
    </ul>
    <ul className={styles.statement}>
      <li className={styles.iconFourth}></li>
      <li className={styles.statementCopy}>I work with those who are passionate about their work, who make a positive social contribution, and who value creative collaboration.</li>
    </ul>
    <ul className={styles.statement}>
      <li className={styles.statementHeader}>Clients</li>
    </ul>
    <ul className={styles.statement}>
      <li className={styles.statementCopy}>British Council, Nigel Slater, NHS, Global Radio, CAT Footwear, Deezer, Victorinox, Imperial War Museum, O2, Innovation Unit, ILOVEDUST, Design Studio for Film, Commonwealth Foundation, London Communications Agency, The Literary Consultancy, Book Marketing Society, Daylesford</li>
    </ul>
  </div>
)
