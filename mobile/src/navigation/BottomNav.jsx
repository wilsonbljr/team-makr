import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../app/pages/Home/Home';
import Search from '../app/pages/Search/Search';
import Skills from '../app/pages/Skills/Skills';
import Teams from '../app/pages/Teams/Teams';
import { primaryColour, secondaryColour } from '../app/styles/styles';

const Tab = createMaterialBottomTabNavigator();

export const BottomNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting={true}
            sceneAnimationEnabled={false}
            barStyle={{ backgroundColor: primaryColour }}
            activeColor={secondaryColour}
        >
            <Tab.Screen
                name="Teams"
                component={Teams}
                options={{
                    tabBarIcon: 'account-multiple',
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: 'home-account',
                }}
            />
            <Tab.Screen
                name="Skills"
                component={Skills}
                options={{
                    tabBarIcon: 'code-tags',
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNav;