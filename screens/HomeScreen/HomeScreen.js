import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SingOutUserAction } from '../../actions/AuthAction';
import ListEvent from '../../components/ListEvent/ListEvent';
import { colors } from '../../components/colors';
import AddEvent from '../AddEvent/AddEvent';

const HomeScreen = (props) => {

  const state = useSelector((state) => { state });
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <AddEvent />
      <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Today's Schedule</Text>
          <Text style={styles.subTitleText}>Monday 12</Text>
        </View>
        <ListEvent />
      </ScrollView>
      <View style={styles.bottomContainer}></View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.milkwhite,
    padding: windowWidth * 0.06,
    paddingBottom: 0
  },
  subContainer: {
    flex: 1,
  },
  titleContainer: {
    margin: 20,
  },
  titleText: {
    color: '#2d2d2d',
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'BeautifulPeoplePersonalUse-dE0g',
    paddingBottom: 10,
  },
  subTitleText: {
    color: colors.goldYellow,
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: 'TypoRoundLightDemo-wAg3'
  },
  mainContainer: {
    
  },
  bottomContainer: {
    height: 40,
    // backgroundColor: 'red',
    opacity: 0.2,
    position: 'relative'
  }
});

// Exports
export default HomeScreen;