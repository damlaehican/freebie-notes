import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  Alert,
  Image,
  TextInput,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import {MyInput, NoteSearchBar, NoteCard} from '../components';
import {
  Album,
  Plus,
  Microphone,
  Light,
  Menu,
} from '../components/SVGR-Components/';
import PhotoNote from './PhotoNote';

const dummy = [
  {
    time: '15.07.2020',
    title: 'Alışveriş',
    icerik: 'Zeytin, Şarap, Peynir',
  },
  {
    time: 'Bugün',
    title: 'Notlarım',
    icerik: 'React Native Çalış,',
  },
  {
    time: 'Bugün',
    title: 'Notlarım',
    icerik: 'React Native Çalış,',
  },
  {
    time: 'Bugün',
    title: 'Notlarım',
    icerik: 'React Native Çalış,',
  },
  {
    time: 'Bugün',
    title: 'Notlarım',
    icerik: 'React Native Çalış,',
  },
  {
    time: 'Bugün',
    title: 'Notlarım',
    icerik: 'React Native Çalış,',
  },
];

const AddNotePage = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setData(dummy);
    }, 1000);
  }, []);
  const renderItem = ({item}) => {
    return (
      <View style={{marginRight: 10, marginLeft: 10}}>
        <NoteCard title={item.title} icerik={item.icerik} date={item.time} />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <NoteSearchBar />
      <FlatList data={data} numColumns={2} renderItem={renderItem} />
      <TouchableOpacity
        style={{
          borderRadius: 100,
          marginRight: 10,
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: '#ff5227',
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
        }}>
        <Plus width={40} height={40} fill="white" margin={10} />
      </TouchableOpacity>
    </View>
  );
};
export default AddNotePage;
