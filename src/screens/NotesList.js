import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import { NoteSearchBar, NoteCard } from '../components';
import { Plus } from '../components/SVGR-Components';
import { ActivityIndicator } from 'react-native-paper';
import { useTheme } from "@react-navigation/native";
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';

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



const NotesList = (props) => {

  const { colors } = useTheme();
  const styles = customStyles(colors);

  const user = auth().currentUser
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    firebase.database().ref(`/notes/`).on('value', snapshot => {
        let responselist = Object.values(snapshot.val())
        setData(responselist)
        console.log(snapshot.val())
        setLoading(true);
    });
  }

  useEffect(() => {
      getData();
  }, []);
  
  const renderItem = ({ item }) => {
    return (
      <View style={{ marginRight: 10, marginLeft: 10 }}>
        <TouchableOpacity>
          <NoteCard title={item.noteTitle} icerik={item.noteDetails} date={item.timestamp} />
        </TouchableOpacity>
      </View>
    );
  };
  const split = () => {
    let icerik = data.map((item, key) => item.icerik);
    return icerik.slice(0, 1) + '...';
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <NoteSearchBar />
      {!loading ? (
        <View style={{ alignItems: 'center' }}>
          <ActivityIndicator color="#ff5227" />
        </View>
      ) : (
          <FlatList
            data={data}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => props.navigation.navigate('AddNote')}>
        <Plus width={40} height={40} fill="white" margin={10} />
      </TouchableOpacity>
    </View>
  );
};

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:colors.background,
    },
    addButton: {
      borderRadius: 100,
      marginRight: 10,
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: colors.primary,
      width: 60,
      height: 60,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
export default NotesList;
