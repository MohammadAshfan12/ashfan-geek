import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ToggleSwitch from "./components/ToggleSwitch";
import { useDarkMode } from "./components/contant/useDarkMode";
import {
  setThemeMode,
  getThemeMode,
  GlobalStyles,
} from "./components/contant/setThemeMode";
import { ThemeProvider } from "styled-components";
import styles from "./App.module.scss";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import SideBar from "./components/SideBar";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  setThemeMode(theme);
  const themeMode = localStorage.getItem("themeMode");
  const currentThemeMode = JSON.parse(themeMode);

  return (
    <div
      className={styles.portfolio}
      style={{
        background: currentThemeMode.body,
        color: currentThemeMode.textColor,
      }}
    >
      <ThemeProvider theme={currentThemeMode}>
        <GlobalStyles />
        <Router>
          <SideBar />
          <Layout>
              <ToggleSwitch theme={theme} toggleTheme={toggleTheme} />
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
