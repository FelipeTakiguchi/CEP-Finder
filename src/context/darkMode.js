import React, { useEffect, useState } from 'react';

export const DarkModeContext = React.createContext();
DarkModeContext.displayName = 'DarkMode';

export const DarkModeProvider = ({ children }) => {
    const [mode, setMode] = useState("light");
    const [primaryColor, setPrimaryColor] = useState("#fff");
    const [secondaryColor, setSecondaryColor] = useState("#000");
    const [terciaryColor, setTerciaryColor] = useState("#565");

    const setTheme = () => {
        if (mode == "dark") {
            setPrimaryColor("#fff");
            setSecondaryColor("#000");
            setTerciaryColor("#183446");
        } else if (mode == "light") {
            setPrimaryColor("#000");
            setSecondaryColor("#E9EBF8");
            setTerciaryColor("#AFD2E9");
        }
        else {
            throw Error("Not A Valid Theme");
        }
    }

    useEffect(() => {
        setTheme();
    }, [mode]);

    useEffect(() => {
        setTheme();
    }, [])

    return (
        <DarkModeContext.Provider
            value={{
                setMode, mode,
                primaryColor, secondaryColor, terciaryColor
            }}>
            {children}
        </DarkModeContext.Provider>
    )
}