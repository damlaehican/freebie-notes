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
  Image
} from 'react-native';
import {NoteCard} from '../components';
import {useTheme} from '@react-navigation/native';

const NoteDetails=(props)=>{
    const {colors, dark} = useTheme();

    console.log(props)
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text,{fontWeight:'bold'}}>{props.route.params.item.noteTitle}</Text>
                <Text>{props.route.params.item.noteDetails}</Text>
                <Image source={{uri:props.route.params.item.image}}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 40,
      width: Dimensions.get('window').width / 1,
      height: Dimensions.get('window').height / 18,
    },
    text: {
      color: '#546e7a',
      fontSize: 18,
    },
  });

export {NoteDetails}