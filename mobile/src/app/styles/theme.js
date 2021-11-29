import { configureFonts, DefaultTheme } from 'react-native-paper';
import { backgroundColour, primaryColour, secondaryColour, textColour } from './styles';
import { fontConfig } from './fonts';

const theme = {
    ...DefaultTheme,
    roudness: 2,
    colors: {
        ...DefaultTheme.colors,
        background: primaryColour,
        primary: secondaryColour,
        accent: primaryColour,
        text: textColour,
        placeholder: textColour,
    },
    fonts: configureFonts(fontConfig)
};

export default theme;