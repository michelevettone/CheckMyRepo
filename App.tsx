import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStack from './src/navigation/MainStack';
import { LogBox } from 'react-native';

const App = () => {
    LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
    return (
        <NavigationContainer>
            <MainStack></MainStack>
        </NavigationContainer>
    );
};

export default App;
