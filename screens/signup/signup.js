import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const SignUp = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Developer's life is Mess</Text>
      {/* <Text style={styles.subLogo}>Developer's life is Mess</Text> */}
      <View style={styles.midContainer}>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#2d2d2d"
            onChangeText={text => setEmail(text)} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#2d2d2d"
            onChangeText={text => setPassword(text)} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password..."
            placeholderTextColor="#2d2d2d"
            onChangeText={text => setConfirmPassword(text)} />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.loginText}>Already Have a Account?  </Text>
          <TouchableOpacity onPress={()=> {props.navigation.goBack()}}>
            <Text style={styles.signUpText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
});

export default SignUp