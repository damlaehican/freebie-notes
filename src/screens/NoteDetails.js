import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Dimensions,
  Text,
  SafeAreaView
} from 'react-native';
import {NoteCard, TextField} from '../components';
import {useTheme} from '@react-navigation/native';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';

const NoteDetails=(props)=>{
    const {colors, dark} = useTheme();

    return(
        <SafeAreaView>
        <View>
        <Text>Not Detay Sayfası</Text>
        </View>
        </SafeAreaView>
    )
}

export {NoteDetails}