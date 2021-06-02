import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './BottomNavgator';
import AddEvent from '../screens/AddEvent/AddEvent';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
    return (
        <Stack.Navigator 
        headerMode= "none"
        screenOptions={{ animationEnabled: false }}
        mode= "modal"
        >
            <Stack.Screen name="TabBar" component={TabNavigator} options={{ animationEnabled: true }} />
            <Stack.Screen name="AddEvent" component={AddEvent} options={{ animationEnabled: true }} />
        </Stack.Navigator>
    );
}