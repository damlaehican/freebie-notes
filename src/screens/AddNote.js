import React, {useState, useEffect } from 'react';
import { SafeAreaView, TextInput, StatusBar, StyleSheet, Button ,TouchableOpacity} from 'react-native';
import { useTheme } from "@react-navigation/native";
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';



const AddNote = (props) => {
  const { colors } = useTheme();
  const styles = customStyles(colors);

  const user = auth().currentUser
  const date = new Date().toLocaleString();
  const [data, setData] = useState("")
  const [data2, setData2] = useState("")
  const [list, setList] = useState([])

  const config =  {
    apiKey: "AIzaSyC7Wtd777P-gYVGWvtvx148h7c8YJZU8Qo",
    authDomain: "freebie-notes.firebaseapp.com",
    databaseURL: "https://freebie-notes.firebaseio.com",
    projectId: "freebie-notes",
    storageBucket: "freebie-notes.appspot.com",
    messagingSenderId: "33866530069",
    appId: "1:33866530069:web:e59e809cf02da65fcc7d1c"
  }
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const sendData = () => {
    let newList = [...list]
    newList.push(data)
    setList(newList)

    firebase.database().ref(`notes/${user.uid}`).push({
      noteTitle: data,
      noteDetails: data2,
      uid: user.uid,
      username: user.email,
      timestamp: date,
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TextInput
        placeholder="Note Title"
        placeholderTextColor={colors.text}
        style={styles.textInput}
        onChangeText={(text) => setData(text)} />
        <TextInput
        placeholder="buraya notunuzu girin..."
        placeholderTextColor={colors.text}
        style={styles.textInput}
        onChangeText={(text) => setData2(text)} />
        <Button 
        title="Bitir"
        onPress={sendData}
        >
        </Button>
    </SafeAreaView>
  );
};
export default AddNote;

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    textInput: {
      padding: 20,
      color: colors.text,
      alignSelf: 'center'
    },

  });
