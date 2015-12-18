import React from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules';
import styles from './Header.css';

const Header = () => (
  <div className={styles.Header}>
    <ul>
      <li><Link to='/'>Design by Pascal</Link></li>
      <li><Link to='/projects'>Projects</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/shop'>Shop</Link></li>
      <li><Link to='/hindsight'>Hindsight</Link></li>
    </ul>
  </div>
)

export default CSSModules(Header, styles);
