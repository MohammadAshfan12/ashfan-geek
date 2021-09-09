import React from "react";
import { NavLink } from "react-router-dom";
import { useDimension } from "../contant/useDimention";
import profileIcon from '../../Images/profileIcon.png';
import experienceIcon from '../../Images/experienceIcon.png';
import skillsIcon from '../../Images/skillsIcon.png';
import projectIcon from '../../Images/projectIcon.png';
import styles from "./SideBar.module.scss";

const sideBarOptions = [
  { id: 0, name: "Profile", link: "/", profileIcon: profileIcon },
  { id: 1, name: "Experience", link: "/experience", profileIcon: experienceIcon },
  { id: 2, name: "Skills", link: "/skills", profileIcon: skillsIcon },
  { id: 3, name: "Projects", link: "projects", profileIcon: projectIcon }
];
function SideBar() {
  const { width } = useDimension();
  const themeMode = localStorage.getItem("themeMode");
  const currentThemeMode = JSON.parse(themeMode);
  
  return (
    <div className={styles.sidebar}>
      {sideBarOptions.map(item => {
        if (width >= 768) {
          return (
            <NavLink
              exact
              to={item.link}
              className={styles.sidebarItem}
              activeClassName={styles.active}
            >
              {item.name}
            </NavLink>
          );
        }
        return (
          <NavLink to={item.link} activeClassName={styles.active} 
            className={styles.sidebarItem}>
            <img src={item.profileIcon} alt="icons"/>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SideBar;
