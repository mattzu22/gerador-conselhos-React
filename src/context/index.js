import { createContext, useState } from "react"

export const themes = {
    dark:{
        bg: 'hsl(218, 23%, 16%)',
        bgCard: 'hsl(217, 19%, 24%)',
        bgMode: '#ffffff',
        color: '#ffffff',
        colorMode: '#000000',
        mode: 'Light'
    },
    light:{
        bg: '#ffffff',
        bgCard: 'rgb(128,128,128)',
        bgMode: '#000000',
        colorMode: '#ffffff',
        color: '#000000',
        mode: 'Dark'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) =>{
    const [ theme, setTheme ] = useState(themes.dark)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}