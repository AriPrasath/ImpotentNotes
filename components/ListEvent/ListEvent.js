import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from '../../components/colors';

const ListEvent = (props) => {

    const state = useSelector((state) => { state });
    const dispatch = useDispatch();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.activeMainContainer}>
                <View style={styles.subContainer}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.dateIcon}>April 12</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Wake Up Buddy</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>07:00 AM</Text>
                    </View>
                </View>
            </View>
            <View style={styles.inactiveMainContainer}>
                <View style={styles.subContainer}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.dateIcon}>April 12</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Morning Yoga</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>08:00 AM</Text>
                    </View>
                </View>
            </View>
            <View style={styles.inactiveMainContainer}>
                <View style={styles.subContainer}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.dateIcon}>April 12</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Daily WorkOut</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>09:00 AM</Text>
                    </View>
                </View>
                <View style={styles.subPointsContianer}>
                    <Text style={styles.subPointsText}>. Squat 10x3 Squat 10x3Squat 10x3</Text>
                    <Text style={styles.subPointsText}>. Push Up 10x3</Text>
                    <Text style={styles.subPointsText}>. Pull Up 10x3</Text>
                </View>
            </View>
            <View style={styles.activeMainContainer}>
                <View style={styles.subContainer}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.dateIcon}>April 12</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Wake Up Buddy</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>07:00 AM</Text>
                    </View>
                </View>
            </View>
            <View style={styles.inactiveMainContainer}>
                <View style={styles.subContainer}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.dateIcon}>April 12</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Morning Yoga</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>08:00 AM</Text>
                    </View>
                </View>
            </View>
            <View style={styles.inactiveMainContainer}>
                <View style={styles.subContainer}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.dateIcon}>April 12</Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Daily WorkOut</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>09:00 AM</Text>
                    </View>
                </View>
                <View style={styles.subPointsContianer}>
                    <Text style={styles.subPointsText}>. Squat 10x3 Squat 10x3Squat 10x3</Text>
                    <Text style={styles.subPointsText}>. Push Up 10x3</Text>
                    <Text style={styles.subPointsText}>. Pull Up 10x3</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.milkwhite,
        flexDirection: 'row',
    },
    activeMainContainer: {
        marginLeft: windowWidth * 0.08,
        width: windowHeight * 0.375,
        minHeight: 80,
        borderRadius: 20,
        flexDirection: 'column',
        marginBottom: 10,
        backgroundColor: colors.goldenglow
    },
    inactiveMainContainer: {
        marginLeft: windowWidth * 0.08,
        width: windowHeight * 0.375,
        minHeight: 80,
        backgroundColor: '#e6e6e6',
        borderRadius: 20,
        flexDirection: 'column',
        marginBottom: 10,
    },
    subContainer: {
        flexDirection: 'row',
    },
    iconContainer: {
        marginLeft: windowWidth * 0.05,
        marginTop: windowHeight * 0.025,
    },
    dateIcon: {
        padding: 3,
        width: windowWidth * 0.12,
        height: windowHeight * 0.05,
        textAlign: 'center',
        backgroundColor: colors.milkwhite,
        borderRadius: 10,
        fontFamily: 'TypoRoundLightDemo-wAg3',
    },
    titleContainer: {
        width: windowWidth * 0.35,
        marginLeft: windowWidth * 0.05,
        minHeight: windowHeight * 0.05,
        paddingTop: windowHeight * 0.035,
    },
    titleText: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: "400"
    },
    timeContainer: {
        width: windowWidth * 0.3,
        marginLeft: windowWidth * 0.05,
        minHeight: windowHeight * 0.05,
        paddingTop: windowHeight * 0.035,
    },
    timeText: {
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'TypoRoundLightDemo-wAg3',
        fontWeight: "400"
    },
    subPointsContianer: {
        paddingVertical: windowHeight * 0.02,
        marginHorizontal: 30
    },
    subPointsText: {
        fontWeight: '400',

    },
});

// Exports
export default ListEvent;