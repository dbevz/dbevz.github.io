import React from 'react'

import styles from './project.module.scss';


const Project = ({name, id, img, code, demo}) => (
  <div className={styles.project}>
    <img src={img} className={styles.img} />
    <div className={styles.hover}>
      <h2 className={styles.header}>{name}</h2>
      <a href={demo} className={styles.button}>View</a>
    </div>
  </div>
)

export default Project