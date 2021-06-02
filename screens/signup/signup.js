import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import {createUserAction} from '../../actions/AuthAction';
import {useDispatch} from 'react-redux';
import { colors } from '../../components/colors';

const SignUp = (props) => {

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  function onPressSignUp() {
    console.log(password, confirmPassword, email, password !== confirmPassword && password);
    if(password !== confirmPassword || !password){
      alert("Password doesn't match");
      return ;
    }
    if(!email){
      alert("Email can't be empty");
      return ;
    }
    if(!phoneNumber){
      alert("Phone Number can't be empty");
      return ;
    }
    if(!userName){
      alert("UserName can't be empty");
      return ;
    }
    dispatch(createUserAction({email: email, password: password, displayName: userName, phoneNumber: phoneNumber}));
  }

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
            style={styles.inputText}
            placeholder="Name..."
            placeholderTextColor="#2d2d2d"
            onChangeText={text => setUserName(text)} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Phone Number..."
            placeholderTextColor="#2d2d2d"
            onChangeText={text => setPhoneNumber(text)} />
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
        <TouchableOpacity style={styles.loginBtn} onPress={onPressSignUp}>
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
    backgroundColor: colors.milkwhite,
    padding: windowWidth * 0.06
  },
  logo: {
    marginTop: 10,
    fontSize: 50,
    color: colors.black,
    marginBottom: 40,
    fontFamily: 'TypoRoundBoldItalicDemo-26Dv'
  },
  midContainer: {
    marginTop: windowHeight * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    width: "80%",
    backgroundColor: colors.goldenglow,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: colors.black,
  },
  forgot: {
    color: colors.black,
    fontSize: 11,
    marginTop: 10,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: colors.goldenglow,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10
  },
  loginText: {
    color: colors.black,
  },
  signUpText: {
    color: colors.black,
    borderBottomWidth: 2,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});

export default SignUp