import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loginUserAction } from '../../actions/AuthAction';
import { colors } from '../../components/colors';

const LogIn = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function onPressLogin() {
    if(email === "")
      alert('Email can\'t be blank');
    else if(password === "")
      alert('password can\'t be blank');
    else
      dispatch(loginUserAction({email: email, password: password}))
  }

  return (
    <ScrollView style={styles.container}>
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
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => {onPressLogin()}}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.loginText}>Don't Have a Account?  </Text>
          <TouchableOpacity onPress={() => {props.navigation.navigate('SignUp', {}) }}>
            <Text style={styles.signUpText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.imageContainer}>
        <Image source={require('../../assets/images/developer.png')} style={{height: 250, width: 250 }} />
      </View> */}
    </ScrollView>
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
    marginTop: windowHeight * 0.06,
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
    padding: 20,
  },
  inputText: {
    height: 50,
    color: colors.black
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
    marginBottom: 10,
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
  imageContainer: {
    height: 250,
    width: 250,
    elevation: 5,
    borderColor: 'red'
  }
});

// Exports
export default LogIn;