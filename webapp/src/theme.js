import { createTheme } from '@mui/material';
import { primaryColour, secondaryColour, backgroundColour, darkSecondaryColour } from './components/UI/Variables'

const mainTheme = createTheme({
    palette: {
        primary: {
            main: darkSecondaryColour
        }
    }
})

export default mainTheme;