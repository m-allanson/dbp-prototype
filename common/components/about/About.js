import React from 'react'

export default () => (
  <div className='About'>
    <picture property='photo'>
      <source
        media='(min-width: 640px)'
        srcSet='/static/images/pascal-large.jpg 1x'
      />
      <img
        className='About-image'
        alt='Pascal at work'
        src='static/images/pascal.jpg'
      />
    </picture>
    <h1 className='About-title'>A senior designer working across branding, digital, print & UX</h1>
    <ul className='About-statement'>
      <li className='About-icon About-icon--first'></li>
      <li className='About-statementCopy'>I have clear ideas and strong values that inform a thorough process, ensuring design interacts with and facilitates business objectives.</li>
    </ul>
    <ul className='About-statement'>
      <li className='About-icon About-icon--second'></li>
      <li className='About-statementCopy'>My work is informed by evidence, research and user testing, as well as intuition developed over a broad and varied career within design.</li>
    </ul>
    <ul className='About-statement'>
      <li className='About-icon About-icon--third'></li>
      <li className='About-statementCopy'>I believe in immersing myself in a project, working with one client at a time, providing a unique service as well as design solution.</li>
    </ul>
    <ul className='About-statement'>
      <li className='About-icon About-icon--fourth'></li>
      <li className='About-statementCopy'>I work with those who are passionate about their work, who make a positive social contribution, and who value creative collaboration.</li>
    </ul>
  </div>
)
