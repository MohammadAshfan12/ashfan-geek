import React from "react";
import styles from "./Experience.module.scss";
function Experience() {

  const themeMode = localStorage.getItem("themeMode");
  const currentThemeMode = JSON.parse(themeMode);

  return (
    <div>
      <h1 style={{color: currentThemeMode.titleColor}}>Experience</h1>
      <h2 style={{ color: currentThemeMode.subTitleColor}}>Front End Developer</h2>
      <p>
        I like to work on front end side of the website for better UX. Got to
        worked with talented people to develop the video streaming site. Have
        implemented a OTP input hook. Got hands-on experience on developing responsive website.
      </p>
    </div>
  );
}

export default Experience;
