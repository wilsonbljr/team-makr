import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts } from 'expo-font';
import theme from './src/app/styles/theme';
import MainNav from './src/navigation/MainNav';

const App = () => {
  const [loaded] = useFonts({
    MontserratBold: require('./src/assets/fonts/Montserrat-Bold.ttf'),
    MontserratLight: require('./src/assets/fonts/Montserrat-Light.ttf'),
    MontserratMedium: require('./src/assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('./src/assets/fonts/Montserrat-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;


