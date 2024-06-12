import { useContext, createContext } from "react";

export const ThemeContextdif = createContext({
    thememode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

export const ThemeProvider = ThemeContextdif.Provider

export default function useTheme(){
    return useContext(ThemeContextdif)
}