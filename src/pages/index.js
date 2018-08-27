import React from 'react';
import Link from 'gatsby-link';


import Project from '../components/project';
import Footer from '../components/footer.jsx';

import styles from '../assets/grid.module.scss';

import urlabsgluck from '../static/img/urlabsgluck.png';
import notesapp from '../static/img/notes-app.png';

const IndexPage = () => (
  <div>
    <h1 className={styles.header}>Projects</h1>
    <div className={styles.grid}>
      <Project name="URLABSGLUCK" id="1" code="#" demo="https://dbevz.pp.ua/urlabsgluck" img={urlabsgluck} />
      <Project name="Notes App" id="2" code="#" demo="https://dbevz.pp.ua/notes-app" img={notesapp} />

    </div>
    <Footer />
  </div>
)

export default IndexPage
