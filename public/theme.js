import { createContext, useState, useMemo } from "react";
import { createTheme } from '@mui/material/styles';
import { blue, grey, deepPurple, indigo, green, red } from '@mui/material/colors';
import { fontSize } from "@mui/system";


//color design tokens

// export const tokens = (mode) => ({
//     ...(mode === "dark" ? {


//     } : {}),
// });
export const themeSettongs = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark" ? {
                primary: {
                    main: indigo[600],
                },
                secondary: {
                    main: "rgb(52, 71, 103)",
                },
                neutral: {
                    greenlight: green[300],
                    greendark: green[700],
                    green: green[400],
                    red: red[500],
                    blue: blue[900],
                },
                background: {
                    main: "hsl(238,27%,12%)",
                    // main: "rgb(52, 71, 103)",
                },
                text: {
                    primary: '#fff',
                    secondary: grey[500],
                },

            } : {
                primary: {
                    main: '#fff',
                },
                secondary: {
                    main: grey[100],
                },
                neutral: {
                    greenlight: green[300],
                    greendark: green[700],
                    green: green[400],
                    red: red[500],
                    blue: blue[900],
                },
                background: {
                    main: grey[100],
                }, text: {
                    primary: "black",
                    secondary: grey[500],
                },

            }),

        },
        typography: {
            fontFamily: ["sans-serif", "sans-serif"].join(", "),
            fontSize: 12
        },

    }
};


export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = () => {
    const [mode, setMode] = useState("light");
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === "dark" ? "light" : "dark"))
        }
    }), []);
    const theme = useMemo(() => createTheme(themeSettongs(mode)), [mode]);
    return [theme, colorMode];
};