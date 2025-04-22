import {createContext,useState} from 'react';

//1. Create a context for the theme

export const ThemeContext = createContext();

//2. Create a provider component
export const ThemeProvider =({children})=>{
    const [theme, setTheme] = useState('light'); //default theme

    //3. Function to toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}