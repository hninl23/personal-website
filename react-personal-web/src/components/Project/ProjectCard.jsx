import React, {useState} from 'react';
import styles from './ProjectCard.module.css';
import { getImgUrl } from '../../util';



export const ProjectCard = ({
    project: {title,imageSrc,description,skillz,source},
}) => {
    return (
    <div className={styles.Cardcontainer}>
        <img className={styles.projectImg}
            src={getImgUrl(imageSrc)} 
            alt="image"
        />
        <h3 className={styles.projTitle}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skillz}>
            {skillz.map((skill,id) => {
                return <li className={styles.skill} key={id}>{skill}</li>
            })}
        </ul>
        <div className={styles.links}>
            <a href={source} className={styles.link}>Source</a>
        </div>
    </div>
    );
};