import React from 'react'
import Link from 'gatsby-link'

import styles from './header.module.scss'
import logo from '../static/logo.svg';


const Header = () => (
  <div className={styles.header}>
    <div>
      <Link to="/" className={styles.logo}> <img className={styles.img} src={logo} width="100" height="100" /></Link>
    </div>
    <div>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/blog/" className={styles.link}>Blog</Link>
      <Link to="/about/" className={styles.link}>About</Link>
    </div>
  </div>
)

export default Header
