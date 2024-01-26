import React, {useState} from 'react';
import styles from './Contact.module.css';
import { getImgUrl } from '../../util';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImgUrl("contact/profile.png")} alt="Resume icon" />
          <a href="https://hnin-lwin-resume.tiiny.site">Resume</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImgUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/hninlwin23/">linkedin.com/hninlwin23</a>
        </li>
        <li className={styles.link}>
          <img src={getImgUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/hninl23">github.com/hninl23</a>
        </li>
      </ul>
    </footer>
  );
};