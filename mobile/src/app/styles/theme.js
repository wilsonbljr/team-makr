import { configureFonts, DefaultTheme } from 'react-native-paper';
import { primaryColour, secondaryColour, textColour } from './styles';
import { fontConfig } from './fonts';

const theme = {
    ...DefaultTheme,
    roundness: 6,
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