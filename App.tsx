import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import React from 'react';
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
        <NavigationContainer theme={NavigationTheme}>
            <MainStack></MainStack>
        </NavigationContainer>
    );
};

export default App;
