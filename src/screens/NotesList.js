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
import {useTheme} from '@react-navigation/native';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';

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
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const getData = () => {
    firebase
      .database()
      .ref(`notes/${user.uid}`)
      .on('value', (snapshot) => {
        if (snapshot.val() != null) {
          let responselist = Object.entries(snapshot.val());
          responselist = responselist.reverse();
          setData(responselist);
          setList(responselist);
          setLoading(true);
        } else {
          setLoading(false);
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
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('NoteDetails', {item: item[0]});
        }}>
        <NoteCard item={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      <NoteSearchBar onSearch={Search} />
      {loading === false ? (
        <View style={styles.emptyNoteList}>
          <Text style={styles.emptyNoteListText}>
            Henüz bir not oluşturmadınız!
          </Text>
        </View>
      ) : !loading === true ? (
        <View
          style={{
            flexDirection: 'column',
          }}
        />
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
