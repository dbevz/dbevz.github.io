import React from 'react';

import styles from './footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <ul  className={styles.list}>
      <li className={styles.listItem}><a href="https://github.com/dbevz" className={styles.github} target="_blank">github</a></li>
      <li className={styles.listItem}><a href="https://twitter.com/object__Object" className={styles.twitter} target="_blank">twitter</a></li>
      <li className={styles.listItem}><a href="https://www.facebook.com/profile.php?id=100014275489390" className={styles.facebook} target="_blank">facebook</a></li>
      <li className={styles.listItem}><a href="https://www.linkedin.com/in/dmitriy-bevz-08470393/" className={styles.linkedin} target="_blank">linkedin</a></li>
    </ul>
  </div>
);

export default Footer;
