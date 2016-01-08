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
    <ul className='About-statement'>
      <li className='About-statementIcon'></li>
      <li className='About-statementCopy'>I have clear ideas and strong values that inform a thorough process, ensuring design interacts with and facilitates business objectives.</li>
    </ul>
    <ul className='About-statement'>
      <li className='About-statementIcon'></li>
      <li className='About-statementCopy'>I have clear ideas and strong values that inform a thorough process, ensuring design interacts with and facilitates business objectives.</li>
    </ul>
    <ul className='About-statement'>
      <li className='About-statementIcon'></li>
      <li className='About-statementCopy'>I have clear ideas and strong values that inform a thorough process, ensuring design interacts with and facilitates business objectives.</li>
    </ul>
  </div>
)
