import React, {useState} from 'react';
import styles from './Project.module.css';
import projects from "../../data/project.json";
import {ProjectCard} from "./ProjectCard"


export const Project = () => {
    return (
    <section id="project" className={styles.container}>
       <h2 className={styles.title}>Projects 🖼️</h2>
       <div className={styles.content}>
        {projects.map((project, id) => {
            return <ProjectCard key={id} project={project}/>;
        })}
       </div>
    </section>
    );
};