import React, { useEffect, useState } from "react";
import {ThemeProvider} from "./context/Theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

const App = () => {

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme= ()=>{
    setThemeMode('light')
  }
  const darkTheme = ()=>{
    setThemeMode('dark')
  }

  //actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* {themebutton} */}
            <ThemeButton/>
          </div>
          <div className="w-full max-w-sm mx-auto">{/* {card} */} <Card/></div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
