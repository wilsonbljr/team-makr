import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        background: {
            default: '#031424'
        },
        primary: {
            main: '#cf6766',
        },
        secondary: {
            main: '#30415d',
            light: '#8eaebd',
            dark: '#031424',
        },
        warning: {
            main: '#ffea19',
        },
        divider: '#cf6667',
        text: {
            primary: '#FFF',
            disabled: '#a0a1a3'
        }
    },
    typography: {
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontFamily: 'Montserrat',
        fontSize: 14,
        button: {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 2,
        },
    },
    shape: {
        borderRadius: 6,
    },
    props: {
        MuiTooltip: {
            arrow: true,
        },
        MuiAppBar: {
            color: 'secondary',
        },
    },
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    "&:last-child": {
                        paddingBottom: 0
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: "white"
                }
            }
        }
    }
})

export default theme;