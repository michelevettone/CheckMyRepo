import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainView } from '../view/MainView';
import { InsertUserView } from '../view/InsertUser';
import { InsertRepoView } from '../view/InsertRepo';
import { AllDoneView } from '../view/AllDoneView';
import { HeaderLeft } from '../components/HeaderLeft';

const MainStackNavigator = createStackNavigator();
export default function MainStack() {
    return (
        <MainStackNavigator.Navigator initialRouteName={'MainView'}>
            <MainStackNavigator.Screen name="MainView" component={MainView} options={{ headerShown: false }} />
            <MainStackNavigator.Screen
                name="InsertUserView"
                component={InsertUserView}
                options={{
                    headerTitle: '',
                    headerLeft: () => <HeaderLeft label="USER"></HeaderLeft>,
                }}
            />
            <MainStackNavigator.Screen
                name="InsertRepoView"
                component={InsertRepoView}
                options={{
                    headerTitle: '',
                    headerLeft: () => <HeaderLeft label="REPOSITORY"></HeaderLeft>,
                }}
            />
            <MainStackNavigator.Screen name="AllDoneView" component={AllDoneView} options={{ headerShown: false }} />
        </MainStackNavigator.Navigator>
    );
}
