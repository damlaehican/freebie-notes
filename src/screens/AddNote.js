import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TextInput,
  StatusBar,
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import VoiceNote from './VoiceNote';
import {Microphone, Camera} from '../components/SVGR-Components';

const AddNote = (props) => {
  const {colors} = useTheme();
  const styles = customStyles(colors);

  const user = auth().currentUser;
  const date = new Date().toLocaleString();
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');
  const [list, setList] = useState([]);
  const [push, setPush] = useState(false);

  const config = {
    apiKey: 'AIzaSyC7Wtd777P-gYVGWvtvx148h7c8YJZU8Qo',
    authDomain: 'freebie-notes.firebaseapp.com',
    databaseURL: 'https://freebie-notes.firebaseio.com',
    projectId: 'freebie-notes',
    storageBucket: 'freebie-notes.appspot.com',
    messagingSenderId: '33866530069',
    appId: '1:33866530069:web:e59e809cf02da65fcc7d1c',
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const sendData = () => {
    let newList = [...list];
    newList.push(data);
    setList(newList);

    firebase
      .database()
      .ref(`notes/${user.uid}`)
      .push({
        noteTitle: data,
        noteDetails: data2,
        uid: user.uid,
        username: user.email,
        timestamp: date,
      })
      .then((data) => {
        //success callback
        console.log('data ', data);
      })
      .catch((error) => {
        //error callback
        console.log('error ', error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TouchableOpacity
        style={{alignItems: 'flex-end', marginRight: 10}}
        onPress={() => {
          sendData();
          props.navigation.goBack('Tabs');
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: '#FF5227',
          }}>
          Bitir
        </Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Başlık"
        style={styles.textInput}
        onChangeText={(text) => setData(text)}
        multiline={true}
      />
      <TextInput
        placeholder="Buraya notunuzu girin..."
        style={[styles.textInput, {fontWeight: 'normal'}]}
        onChangeText={(text) => setData2(text)}
        multiline={true}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 30,
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 100,
            width: 40,
            height: 40,
            marginRight: 10,
          }}>
          <Microphone fill="#FF5227" width={35} height={40} />
        </TouchableOpacity>
        <Camera fill="#FF5227" width={35} height={40} />
        <TouchableOpacity />
      </View>
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
      fontSize: 20,
      margin: 5,
      width: Dimensions.get('screen').width / 1,
      fontWeight: 'bold',
      color: colors.placeholder,
      alignSelf: 'center',
      borderEndWidth: 0.5,
      textAlign: 'center',
    },
  });
