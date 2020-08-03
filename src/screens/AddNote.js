import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TextInput,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import Voice from '@react-native-community/voice';
import {Camera, OpenMic, MuteMic, Trash} from '../components/SVGR-Components';

const AddNote = (props) => {
  const {colors} = useTheme();
  const styles = customStyles(colors);
  const user = auth().currentUser;
  const date = new Date().toLocaleString();
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');
  const [list, setList] = useState([]);
  const [words, setWords] = useState('');
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
  useEffect(() => {
    const onSpeechResults = (e) => {
      setWords(e.value);
    };
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startRecognizing = async () => {
    try {
      await Voice.start('tr_TR');
    } catch (e) {
      console.error(e);
    }
  };
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
        voiceNote: words,
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
        style={styles.saveButton}
        onPress={() => {
          if (data != '') {
            if (data2 != '') {
              sendData();
              props.navigation.goBack('Tabs');
            } else {
              alert('Bir not gir');
            }
          } else {
            alert('Bir başlık gir ');
          }
        }}>
        <Text style={styles.text}>Bitir</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Başlık"
        style={styles.textInput}
        onChangeText={(text) => setData(text)}
        multiline={true}
      />
      <TextInput
        placeholder="Not"
        style={[styles.textInput, {fontWeight: 'normal'}]}
        onChangeText={(text) => setData2(text)}
        multiline={true}
      />
      <Text style={[styles.textInput, {fontWeight: 'normal'}]} multiline={true}>
        {words}
      </Text>
      <View style={styles.iconBar}>
        <TouchableOpacity style={styles.button}>
          <Camera fill="#FF5227" width={50} height={40} />
        </TouchableOpacity>
        {push ? (
          <TouchableOpacity
            style={[styles.button, {width: 40}]}
            onPress={() => {
              setPush(false);
              Voice.stop();
            }}>
            <OpenMic width={40} height={40} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.button, {width: 40}]}
            onPress={() => {
              setPush(true);
              startRecognizing();
            }}>
            <MuteMic width={40} height={40} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => setWords('')}
          style={[styles.button, {width: 40}]}>
          <Trash width={40} height={40} />
        </TouchableOpacity>
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
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 100,
      width: 50,
      height: 40,
      marginLeft: 10,
    },
    iconBar: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 50,
    },
    text: {
      fontSize: 20,
      fontWeight: '500',
      color: '#FF5227',
    },
    saveButton: {
      alignItems: 'flex-end',
      marginRight: 10,
    },
  });
