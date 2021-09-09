import React from 'react';
import { Link } from "react-router-dom";
import styles from './Projects.module.scss';
function Projects() {
    const themeMode = localStorage.getItem('themeMode');
    const currentThemeMode = JSON.parse(themeMode);

    return (
        <div className={styles.projects}>
            <h1 style={{ color: currentThemeMode.titleColor}}>Projects</h1>
            <Link to="/projects/vootkids" style={{ color: currentThemeMode.subTitleColor}} >Vootkids</Link>
            <p>1. Worked on front end, where I worked on building reuseable components</p>
            <p>2. Got Experience on React Testing Library</p>
            <p>3. Have basic knowledge on Server Side Rendering and Razzle</p>
            <p>4. Got Experience in working with Technologies like React, Redux and SCSS</p>
             <br/><br/>
            <h2 style={{ color: currentThemeMode.subTitleColor}}>Last Pass Clone</h2>
            <p>1. Worked on front end, where I worked on responsive UI</p>
            <p>2. Got hands on experience on working with React hooks</p>
            <p>3. Have a knowledge on REST API, and implemented basic CRUD operations using Express JS</p>
        </div>
    )
}

export default Projects





