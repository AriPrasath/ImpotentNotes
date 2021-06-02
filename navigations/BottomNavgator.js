import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { colors } from '../components/colors';
import MainScreen from '../screens/MainScreen/MainScreen';
import { addEventModalVisibility } from '../actions/AppAction';
import {useDispatch} from 'react-redux';

const Tab = createBottomTabNavigator(
    // {
    //     Home: {
    //         screen: HomeScreen,
    //         navigationOptions: {
    //             tabBarLabel: 'Home',
    //             tabBarIcon: ({ tintColor }) => (
    //                 <Icon name="ios-home" color={tintColor} size={25} />
    //             )
    //         }
    //     },
    //     Profile: {
    //         screen: ProfileScreen,
    //         navigationOptions: {
    //             tabBarLabel: 'Profile',
    //             tabBarIcon: ({ tintColor }) => (
    //                 <Icon name="ios-person" color={tintColor} size={25} />
    //             )
    //         }
    //     },
    // },
);

export default function TabNavigator() {

    const dispatch = useDispatch();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName, styles, viewStyle;

                    if (route.name === 'Home') {
                        iconName = require('../assets/icons/history.png');
                        styles = {
                            marginBottom: -10,
                            height: 20,
                            width: 20,
                            tintColor: focused ? colors.sandleYellow : colors.black,
                        }
                        viewStyle = {}
                    } else if (route.name === 'Profile') {
                        iconName = require('../assets/icons/profile.png');
                        styles = {
                            marginBottom: -10,
                            height: 20,
                            width: 20,
                            tintColor: focused ? colors.sandleYellow : colors.black,
                        }
                        viewStyle = {}
                    } else if (route.name === 'MainScreen') {
                        iconName = require('../assets/icons/plus.png');
                        styles = {
                            height: 20,
                            width: 20,
                            alignSelf: 'center',
                            tintColor: colors.milkwhite,

                        }
                        viewStyle = {
                            width: 40,
                            height: 40,
                            borderBottomRightRadius: 20,
                            borderTopRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            borderTopLeftRadius: 30,
                            justifyContent: 'center',
                            backgroundColor: colors.sandleYellow,
                        }
                    }

                    // You can return any component that you like here!
                    return <View style={viewStyle}><Image source={iconName} size={size} style={styles} /></View>;
                },
            })}
            tabBarOptions={{
                showIcon: true,
                showLabel: false,
                style: {
                    backgroundColor: 'transparent',
                    borderTopWidth: 0,
                    position: 'absolute',
                    bottom: 17,
                    marginLeft: 45,
                    height: 40,
                    borderWidth: 0,
                    elevation: 0,
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} size={5} />
            <Tab.Screen name="MainScreen" component={MainScreen} size={5} listeners={({ navigation }) => ({
                tabPress: event => {
                    event.preventDefault();
                    dispatch(addEventModalVisibility({addEventModalVisibility: true}));
                    // navigation.navigate("AddEvent")
                }
            })} />
            <Tab.Screen name="Profile" component={ProfileScreen} size={5} />
        </Tab.Navigator>

    );
}