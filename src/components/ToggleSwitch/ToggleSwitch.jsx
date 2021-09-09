import React from 'react'
import styles from './ToggleSwitch.module.scss';

function ToggleSwitch({ theme, toggleTheme }) {
    const isOn = theme === 'Dark' ? true : false;
        return (
            <div className={styles.switchWrapper}>
              <input
                checked={isOn}
                onChange={toggleTheme}
                className={styles.reactSwitchCheckbox}
                id={`react-switch-new`}
                type="checkbox"
              />
              <label title="switchLabel" className={styles.reactSwitchLabel} htmlFor={`react-switch-new`} 
                // style={{background: isOn ? "#2b2b32" : '#ffffff'}}
                >
                <span className={styles.reactSwitchButton} style={{background: isOn ? "#FFFAFA" : '#121212'}}/>
              </label>
            </div>
        );
}

export default ToggleSwitch
