import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Dimensions,
  Text,
} from 'react-native';
import {NoteSearchBar, NoteCard, GhostLoader} from '../components';
import {Plus} from '../components/SVGR-Components';
import {ActivityIndicator} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

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

const NotesList = (props) => {
  const {colors, dark} = useTheme();
  const styles = customStyles(colors);
  const user = auth().currentUser;
  const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const getData = () => {
    firebase
      .database()
      .ref(`notes/${user.uid}`)
      .on('value', (snapshot) => {
        if (snapshot.val() != null) {
          let responselist = Object.values(snapshot.val());
          responselist = responselist.reverse();
          setData(responselist);
          setList(responselist);
          console.log(snapshot.val());
          setLoading(true);
        }
      });
  };

  useEffect(() => {
    getData();
    setIsVisible(true);
  }, []);

  const Search = (text) => {
    let list = [...data];
    let filteredList = list.filter(function (item) {
      const itemData = item.noteTitle.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setList(filteredList);
  };

  const renderItem = ({item}) => {
    return (
      <View style={{marginRight: 10, marginLeft: 10}}>
        <TouchableOpacity>
          <NoteCard
            title={item.noteTitle}
            icerik={item.noteDetails}
            date={item.timestamp}
            voice={item.voiceNote}
            selectedDate={item.selectedDateTime}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      <NoteSearchBar onSearch={Search} />
      {list == '' ? (
        <View style={styles.emptyNoteList}>
          <Text style={styles.emptyNoteListText}>
            Henüz kayıtlı notunuz bulunmuyor..
          </Text>
        </View>
      ) : !loading ? (
        <View
          style={{
            flexDirection: 'column',
          }}>
          <GhostLoader />
          <GhostLoader />
        </View>
      ) : (
        <FlatList
          data={list}
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
      flex: 1,
      backgroundColor: colors.background,
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
    emptyNoteList: {
      flex: 1,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    emptyNoteListText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.primary,
    },
  });
export default NotesList;
