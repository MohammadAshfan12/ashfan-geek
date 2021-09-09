// export const themeMode = theme === 'Light' ? LightTheme : DarkTheme;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
.portfolio{
        background: ${({ theme }) => theme.body};
    }
`;

export const LightTheme = {
    body: '#FFFAFA',
    titleColor: '#000',
    subTitleColor: '#0b86bf',
    textColor: '#666',
}

export const DarkTheme = {
    body: '#121212',
    titleColor: '#F5F5F5',
    subTitleColor: '#4594b9',
    textColor: '#888888'
    
}

export const setThemeMode = (theme) => {
    if(theme) {
        if(theme === 'Light') {
            localStorage.setItem('themeMode', JSON.stringify(LightTheme));
        }
        else{
            localStorage.setItem('themeMode', JSON.stringify(DarkTheme));
        }
    }
    // console.log(localStorage.getItem('themeMode'))
}

