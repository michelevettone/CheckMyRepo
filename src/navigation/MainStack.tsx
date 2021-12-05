import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import React from 'react';
import { MainView } from '../view/MainView';
import { InsertUserView } from '../view/InsertUser';
import { InsertRepoView } from '../view/InserRepo';

const MainStackNavigator = createStackNavigator();
export default function MainStack() {
    enableScreens();

    return (
        <MainStackNavigator.Navigator initialRouteName={'MainView'}>
            <MainStackNavigator.Screen name="MainView" component={MainView} options={{ headerShown: false }} />
            <MainStackNavigator.Screen name="InsertUserView" component={InsertUserView} options={{ headerTitle: 'USER' }} />
            <MainStackNavigator.Screen name="InsertRepoView" component={InsertRepoView} options={{ headerTitle: 'REPOSITORY' }} />
        </MainStackNavigator.Navigator>
    );
}
