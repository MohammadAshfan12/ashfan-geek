import React from "react";
import { useDimension } from "../contant/useDimention";
import profileImage from "../../Images/ashfan-profile.jpeg";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const { width } = useDimension();

  const themeMode = localStorage.getItem("themeMode");
  const currentThemeMode = JSON.parse(themeMode);
  console.log(currentThemeMode.titleColor)

  return (
    <div className={styles.layout}>
      {width < 768 ? (
        <div className={styles.imageWrapper}>
          <img src={profileImage} alt="profile" style={{ border: `4px solid #ffffff`}}/>
        </div>
      ) : null}
      {children}
    </div>
  );
};
export default Layout;
