import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/login/login';
import SignUp from '../screens/signup/signup';
import MainScreen from '../screens/MainScreen/MainScreen';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigator from './MainNavigator';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  const isUserLoggedIn = useSelector((state) => { return state.auth.isUserLoggedIn});
  console.log("*****************************",isUserLoggedIn)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isUserLoggedIn ? (
          <>
            <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainNavigator" component={MainStackNavigator} options={{ headerShown: false }} />
          </>
        )}  
      </Stack.Navigator>
    </NavigationContainer>
  );
}