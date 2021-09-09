import React from "react";
import { useDimension } from "../contant/useDimention";
import profileImage from "../../Images/ashfan-profile.jpeg";
import styles from "./Profile.module.scss";
function Profile() {
  const { width } = useDimension();
  const themeMode = localStorage.getItem("themeMode");
  const currentThemeMode = JSON.parse(themeMode);
  return (
    <div className={styles.profile}>
      {width >= 768 ? (
        <div className={styles.imageWrapper}>
          <img src={profileImage} alt="profile" />
        </div>
      ) : null}
      {width < 768 ? <h2>Front End Developer</h2> : null}
      <div className={styles.profileInfo}>
        <h1 style={{ color: currentThemeMode.titleColor }}>
          Hi, I am Ashfan. Nice To Meet You
        </h1>
        <h3>
          Started my career as a Front End Developer, with 8 months of
          experience. I had worked on a project developing UI using React,
          responsive UI using SCSS Technology and also Redux for state
          management.
        </h3>
      </div>
    </div>
  );
}

export default Profile;
