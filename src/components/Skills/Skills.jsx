import React from 'react'
import  styles from './Skills.module.scss';
function Skills() {
    const themeMode = localStorage.getItem('themeMode');
    const currentThemeMode = JSON.parse(themeMode);
    return (
        <div className={styles.skills}>
            <h1 style={{ color: currentThemeMode.titleColor}}>Skills</h1>
            <div className={styles.programmingLanguages}>
                <h2 style={{ color: currentThemeMode.subTitleColor}}>Languages</h2>
                <span> HTML5,</span>
                <span> JavaScript,</span>
                <span> CSS3</span>
            </div>
            <br/>
            <div className={styles.librabries}>
                <h2 style={{ color: currentThemeMode.subTitleColor}}>Libreries and Technologies</h2>
                <span>React,</span>
                <span>Redux,</span>
                <span>React Testing Librery and Jest,</span>
                <span>Basics of VueJs and NestJs</span>
            </div>
            <br/> 
            <div className={styles.debugging}>
                <h2 style={{ color: currentThemeMode.subTitleColor}}>Debugging Tools</h2>
                <span>Chrome devtools</span>
            </div>
            <br/> 
            <div className={styles.versionContol}>
                <h2 style={{ color: currentThemeMode.subTitleColor}}>Version Control</h2>
                <span>Git, GitLab</span>
            </div>
        </div>
    )
}

export default Skills
