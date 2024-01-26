import React, {useState} from 'react';
import styles from './Experience.module.css';
import { getImgUrl } from '../../util';
import skills from '../../data/skills.json'
import history from '../../data/history.json'

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience/Organizations 💡</h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill,id) => {
                        return <div className={styles.skill} key={id}>
                                <div className={styles.skillImgContainer}><img src={getImgUrl(skill.imageSrc)} alt='skillsImg'/></div>
                                <p>{skill.title}</p>
                            </div>
                    })
                    }
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                        <li className={styles.historyItem} key={id}>
                            <img src={getImgUrl(historyItem.imageSrc)} alt="logo"/>
                            <div className={styles.historyItemContent}>
                                <h3>{`${historyItem.role}, ${historyItem.organization}`}</h3>
                                <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((experience,id)=> {
                                        return <li key={id}>{experience}</li>
                                    })}
                                </ul>
                            </div>
                        </li>
                    );
                    })}
                </ul>
            </div>
        </section>
    )
};