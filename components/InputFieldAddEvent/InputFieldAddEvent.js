import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { colors } from '../../components/colors';

const InputFiledAddEvent = (props) => {

    const state = useSelector((state) => { state });
    const dispatch = useDispatch();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.activeMainContainer}>
                <TextInput onChangeText={()=> {}} style={styles.inputField} />
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
        width: windowHeight * 0.2,
        minHeight: 40,
        borderRadius: 20,
        flexDirection: 'column',
        marginBottom: 10,
        backgroundColor: colors.goldenglow
    },
});

// Exports
export default InputFiledAddEvent;