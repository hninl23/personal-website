import React from 'react';
import { getImgUrl } from '../../util';
import styles from "./Person.module.css";


export const Person = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, My name is Hnin ❄️</h1>
            <p className={styles.description}>I am a third-year Computer Science student at CUNY Hunter College based in NYC and also an aspiring full-stack developer! As a very passionate learner and collaborator, in the future, I am hoping to leverage my knowledge and technology to enhance people's lives, making daily tasks more convenient and efficient. 😃  </p>
        </div>
        <img className={styles.personImage}src={getImgUrl("person/girl.png")} alt="me"/>
        <div className={styles.topBlur}></div>
        <div className={styles.botBlur}></div>
    </section>
    );
};