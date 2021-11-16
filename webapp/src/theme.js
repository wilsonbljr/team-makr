import { createTheme } from '@mui/material';

const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#344955'
        },
        secondary: {
            main: '#f9aa33'
        },
        warning: {
            main: '#ffea19'
        },
    },
    typography: {
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700,
        fontWeightBold: 900,
        fontFamily: 'Lato'
    },
    shape: {
        borderRadius: 9
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: 'linear-gradient(90deg, #4A6572 40%, #364654 95%)',
                    border: 0,
                    borderRadius: 9,
                    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0)',
                    color: 'white',
                    height: 42,
                    padding: '0 30px'
                }
            }
        }
    }
})

export default mainTheme;