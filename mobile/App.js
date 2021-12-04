import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import MainNav from './src/navigation/MainNav';
import { useFonts } from 'expo-font';
import theme from './src/app/styles/theme';

import { UserInfoContextProvider } from './src/core/hooks/useUserInfo';
import { TeamsContextProvider } from './src/core/hooks/useTeams';
import { SkillsContextProvider } from './src/core/hooks/useSkills';
import { AuthContextProvider } from './src/auth/AuthContext';


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
    <UserInfoContextProvider>
      <TeamsContextProvider>
        <SkillsContextProvider>
          <AuthContextProvider>
            <PaperProvider theme={theme}>
              <NavigationContainer>
                <MainNav />
              </NavigationContainer>
            </PaperProvider>
          </AuthContextProvider>
        </SkillsContextProvider>
      </TeamsContextProvider>
    </UserInfoContextProvider>
  );
}

export default App;


