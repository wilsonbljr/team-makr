import { createTheme } from '@mui/material';
import { darkSecondaryColour } from './components/UI/Variables'

const mainTheme = createTheme({
    palette: {
        primary: {
            main: darkSecondaryColour,
            contrastText: '#FFF'
        },
        secondary: {
            main: darkSecondaryColour,
            contrastText: '#FFF'
        }
    },
    typography: {
        fontFamily: [
            'Roboto', 
            'sans-serif'
        ]
    }
})

export default mainTheme;