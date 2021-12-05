import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { MainView } from '../view/MainView';
import { InsertUserView } from '../view/InsertUser';
import { InsertRepoView } from '../view/InsertRepo';
import { AllDoneView } from '../view/AllDoneView';
import { BACK_ICON } from '../../assets/images/imagesIndex';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainStackNavigator = createStackNavigator();
export default function MainStack() {
    const navigation = useNavigation();
    return (
        <MainStackNavigator.Navigator initialRouteName={'MainView'}>
            <MainStackNavigator.Screen name="MainView" component={MainView} options={{ headerShown: false }} />
            <MainStackNavigator.Screen
                name="InsertUserView"
                component={InsertUserView}
                options={{
                    headerTitle: 'USER',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image style={{ marginLeft: 30 }} source={BACK_ICON} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <MainStackNavigator.Screen
                name="InsertRepoView"
                component={InsertRepoView}
                options={{
                    headerTitle: 'REPOSITORY',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image style={{ marginLeft: 30 }} source={BACK_ICON} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <MainStackNavigator.Screen name="AllDoneView" component={AllDoneView} options={{ headerShown: false }} />
        </MainStackNavigator.Navigator>
    );
}
