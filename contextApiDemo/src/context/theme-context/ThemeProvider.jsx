import React, { useState } from 'react';
import { ThemeContext } from './theme-context/ThemeContext';

const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = ()=>{
    setTheme((prevTheme) => prevTheme == 'light' ? 'dark' : 'light')
  };


  return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
