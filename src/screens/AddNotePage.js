import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import {NoteSearchBar, NoteCard} from '../components';
import {Plus} from '../components/SVGR-Components/';
import PhotoNote from './PhotoNote';

const dummy = [
  {
    time: '15.07.2020',
    title: 'Alışveriş',
    icerik:
      'Eiusmod qui officia ad est.Ipsum laborum consectetur enim laboris.Laboris nisi incididunt eiusmod voluptate tempor et aute velit.',
  },
  {
    time: 'Bugün',
    title: 'Notlarım',
    icerik:
      'Pariatur sunt veniam dolore quis fugiat ipsum voluptate fugiat pariatur ipsum adipisicing exercitation cillum.',
  },
  {
    time: 'Bugün',
    title: 'Notlarım',
    icerik: 'Pariatur aliqua dolor consequat et sunt laboris et labore.',
  },
  {
    time: 'Bugün',
    title: 'Notlarım',
    icerik:
      'Id amet ullamco laboris veniam irure sint cillum proident cillum ex proident.In deserunt qui esse labore eu anim reprehenderit mollit commodo tempor do commodo duis.Nulla nulla aute aute consectetur tempor.Enim nostrud tempor quis consectetur consequat labore laboris aliqua.',
  },
  {
    time: 'Bugün',
    title: 'Notlarım',
    icerik: 'Elit id proident proident cillum qui sint ad voluptate eu.',
  },
  {
    time: 'Bugün',
    title: 'Notlarım',
    icerik:
      'Irure nulla ex commodo qui consectetur sit nostrud anim occaecat enim cupidatat adipisicing aliquip.',
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
        <TouchableOpacity>
          <NoteCard title={item.title} icerik={item.icerik} date={item.time} />
        </TouchableOpacity>
      </View>
    );
  };
  const split = () => {
    let icerik = data.map((item, key) => item.icerik);
    return icerik.slice(0, 1) + '...';
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <NoteSearchBar />
      <FlatList data={data} numColumns={2} renderItem={renderItem} />
      <TouchableOpacity style={styles.addButton}>
        <Plus width={40} height={40} fill="white" margin={10} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
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
  },
});
export default AddNotePage;
