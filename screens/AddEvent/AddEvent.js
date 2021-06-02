import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Dimensions, ScrollView, Modal, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SingOutUserAction } from '../../actions/AuthAction'
import { colors } from '../../components/colors';
import { addEventModalVisibility } from '../../actions/AppAction';
import InputFiledAddEvent from '../../components/InputFieldAddEvent/InputFieldAddEvent';

const AddEvent = (props) => {

  const addEventModalVisibilityState = useSelector((state) => { return state.app.addEventModalVisibility });
  const dispatch = useDispatch();

  const [date , setDate] = useState("");

  console.log("PROPS ADD EVENT ", props);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={addEventModalVisibilityState}
        onRequestClose={() => {
          dispatch(addEventModalVisibility({ addEventModalVisibility: false }));
        }}
      >
        <View style={styles.centeredView}>
          <Pressable style={styles.closeContainer} onPress={() => dispatch(addEventModalVisibility({ addEventModalVisibility: false }))}>
            <Image source={require('../../assets/icons/close.png')} style={styles.closeImage} />
          </Pressable>
          <ScrollView style={styles.modalView}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Date : </Text>
              <InputFiledAddEvent />
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: -20,
    backgroundColor: colors.blurredMilkwhite,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: windowHeight * 0.55,
    width: windowWidth * 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeContainer: {
    marginTop: 10,
    marginRight: 10,
    height: 40,
    width: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 30,
    backgroundColor: colors.sandleYellow,
    marginBottom: -15
  },
  closeImage: {
    height: 15,
    width: 15,
    tintColor: colors.milkwhite,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    maxWidth: windowWidth * 0.8,
    minWidth: windowWidth * 0.5,
    height: 40,
  },
  inputTitle: {
    marginLeft: 10,
    alignSelf: 'center',
    fontFamily: 'TypoRoundLightDemo-wAg3',
    fontSize: 20,
    fontWeight: "400"
  }
});

// Exports
export default AddEvent;