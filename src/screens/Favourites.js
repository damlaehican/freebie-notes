import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Text,
} from 'react-native';
import { NoteSearchBar, NoteCard } from '../components';
import { useTheme } from '@react-navigation/native';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';

const Favourites = (props) => {
  const { colors, dark } = useTheme();
  const styles = customStyles(colors);
  const user = auth().currentUser;
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    firebase
      .database()
      .ref(`notes/${user.uid}`)
      .on('value', (snapshot) => {
        if (snapshot.val() != null) {
          let responselist = Object.entries(snapshot.val());
          responselist = responselist.reverse();
          let favouriteList = responselist.filter(item => item[1].isFavourite === true)
          setData(favouriteList);
          setList(favouriteList);
          setLoading(true);
        }
        else {
          setLoading(false);
          console.log(loading);
        }
      });
  };

  useEffect(() => {
    getData();
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

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('NoteDetails')}>
        <NoteCard item={item} />
      </TouchableOpacity>
    )
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      <NoteSearchBar onSearch={Search} />
      {loading === false ? (
        <View style={styles.emptyNoteList}>
          <Text style={styles.emptyNoteListText}>
            Favori notunuz bulunmuyor!
          </Text>
        </View>
      ) : !loading === true ? (
        <View
          style={{
            flexDirection: 'column',
          }}>
        </View>
      ) : (
            <FlatList
              data={list}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
    </View>
  );
};

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
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
export default Favourites;
