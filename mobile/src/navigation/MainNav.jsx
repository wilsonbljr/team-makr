import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import Login from '../app/pages/Login/Login';
import Register from '../app/pages/Register/Register';
import RecoverPassword from '../app/pages/RecoverPassword/RecoverPassword';

import BottomNav from './BottomNav';
import UserProfile from '../app/pages/User/UserProfile';
import TeamProfile from '../app/pages/Teams/TeamProfile';
import Search from '../app/pages/Search/Search';

import { primaryColour, secondaryColour } from '../app/styles/styles';
import HeaderLogo from '../app/components/HeaderLogo';
import HeaderSearchButton from '../app/components/HeaderSearchButton';

const Stack = createStackNavigator();

const MainNav = () => {
    return (
        <Stack.Navigator
            initialRouteName='Authentication'
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerStyle: { backgroundColor: primaryColour },
                headerTintColor: secondaryColour,
                headerRight: () => <HeaderLogo />,
                headerTitle: () => <></>,
            }}

        >

            <Stack.Group>
                <Stack.Screen
                    name='Login'
                    component={Login}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                />
                <Stack.Screen
                    name='RecoverPassword'
                    component={RecoverPassword}
                />
            </Stack.Group>

            <Stack.Group>
                <Stack.Screen
                    name='HomeNav'
                    component={BottomNav}
                    options={({ navigation }) => ({
                        headerTitle: () => <HeaderSearchButton navigation={navigation} />
                    })}
                />

                <Stack.Screen
                    name='UserProfile'
                    component={UserProfile}
                />
                <Stack.Screen
                    name='TeamProfile'
                    component={TeamProfile}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={({ navigation }) => ({
                        headerTitle: () => <HeaderSearchButton navigation={navigation} />
                    })}
                />
            </Stack.Group>

        </Stack.Navigator>
    )
}

export default MainNav;