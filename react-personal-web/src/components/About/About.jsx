import React, {useState} from 'react';
import styles from './About.module.css';
import { getImgUrl } from '../../util';

export const About = () => {
    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}> ABOUT</h2>
            <div className={styles.content}>
                <img className={styles.aboutImg} src={getImgUrl("person/astro.png")} alt="astro"/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={getImgUrl("about/clicker.png")}/>
                    <div className={styles.aboutItemText}>
                        <h3>Aspiring Software Developer 💻</h3>
                        <p> I transitioned to computer science two years ago! I am currently experimenting and learning more through projects, internships, and YouTube Videos! </p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImgUrl("about/clicker.png")}/>
                    <div className={styles.aboutItemText}>
                        <h3>Crochet Enthusiast 🧶</h3>
                        <p>I love crocheting during my freetime when I am not coding, especially patterns from Amigurumi!  </p>
                    </div>
                    </li>
                    <li className={styles.aboutItem}><img src={getImgUrl("about/clicker.png")}/>
                    <div className={styles.aboutItemText}>
                        <h3>Rewriting the Code Fellow 👩🏻</h3>
                        <p>I recently joined RTC as a fellow back in December and I am excited to announce that I am currently part of a community that fosters growth, collaboration, and empowerment. </p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    )
};