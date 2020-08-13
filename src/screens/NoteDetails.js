import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Dimensions,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import {NoteCard} from '../components';
import {useTheme} from '@react-navigation/native';

const NoteDetails = (props) => {
  const {colors, dark} = useTheme();
  const imageUri = props.route.params.item.image;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.view1,
          {
            backgroundColor: '#ff5227',
          },
        ]}>
        <View
          style={[
            styles.view1,
            {alignItems: 'center', borderTopLeftRadius: 150},
          ]}>
          <Text style={(styles.text, {fontWeight: 'bold'})}>
            {props.route.params.item.noteTitle}
          </Text>
          <Text>Damla</Text>
          <Text>ısdhgflkgşdflg</Text>
          <Text>{props.route.params.item.noteDetails}</Text>
          {imageUri && (
            <Image source={{uri: imageUri}} style={{width: 250, height: 250}} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  view1: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: Dimensions.get('screen').height / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    color: '#546e7a',
    fontSize: 18,
  },
});

export {NoteDetails};
