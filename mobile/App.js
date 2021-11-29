import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider as PaperProvider } from 'react-native-paper';
import Login from './src/app/pages/Login/Login';
import theme from './src/app/styles/theme';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

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
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;


