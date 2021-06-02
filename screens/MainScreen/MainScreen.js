import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {TabNavigator} from '../../navigations/BottomNavgator'
import { colors } from '../../components/colors';

const MainScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.subContainer}>
        <View style={styles.addStyle}><Text>plus</Text></View>
      </ScrollView>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.milkwhite,
    paddingBottom: 0
  },
  subContainer: {
    flex: 1,
  },
  addStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

// Exports
export default MainScreen;