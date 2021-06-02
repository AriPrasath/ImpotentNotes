import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SingOutUserAction } from '../../actions/AuthAction'

const ProfileScreen = (props) => {

  const state = useSelector((state) => { state });
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <Text>PROFILE</Text>
      <TouchableOpacity onPress={() => {dispatch(SingOutUserAction({}))}}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceef1',
    padding: windowWidth * 0.06
  },
  logo: {
    marginTop: 10,
    fontSize: 50,
    color: "#2d2d2d",
    marginBottom: 40,
    fontFamily: 'TypoRoundBoldItalicDemo-26Dv'
  },
  midContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "#eceef1"
  },
  forgot: {
    color: "#2d2d2d",
    fontSize: 11,
    marginTop: 10,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10
  },
  loginText: {
    color: "#2d2d2d",
  },
  signUpText: {
    color: "#2d2d2d",
    borderBottomWidth: 2,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    height: 250,
    width: 250,
    elevation: 5,
    borderColor: 'red'
  }
});

// Exports
export default ProfileScreen;