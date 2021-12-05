import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import MainStack from './src/navigation/MainStack';

const NavigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

const App = () => {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar barStyle={'light-content'} />
            <NavigationContainer theme={NavigationTheme}>
                <MainStack></MainStack>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
