import React from 'react'

export default ({
  sectionName
}) => {
  const className = `Footer Footer--${sectionName}`
  return (
    <div className={className}>
      <h1 className='Footer-title'>CONTACT</h1>
      <ul className='Footer-list'>
        <li className='Footer-listItem'>Design by Pascal</li>
        <li className='Footer-listItem'>Deptford Broadway</li>
        <li className='Footer-listItem'>London SE8 4PB</li>
      </ul>
      <ul className='Footer-list'>
        <li className='Footer-listItem'>
          <a className='Footer-emailLink' href='mailto:studio@designbypascal.com'>studio@designbypascal.com</a>
        </li>
        <li className='Footer-listItem'>+44 (0)7906 079 068</li>
      </ul>

      <ul className='Footer-list'>
        <li className='Footer-listItem'>
          Web development: <a className='Footer-link' href='http://michaelallanson.com'>michaelallanson.com</a>
        </li>
        <li className='Footer-listItem'>
          Photography: &copy; <a className='Footer-link' href='http://www.tinahillier.com'>tinahillier.com</a>
        </li>
      </ul>
    </div>
  )
}
