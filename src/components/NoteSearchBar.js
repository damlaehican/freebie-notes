import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Menu} from '../components/SVGR-Components';

const NotesSearchBar = (props) => {
  return (
    <>
      <Header1 />
      <View style={styles.container}>
        <TextInput
          placeholder="Notlar içerisinde ara"
          onChangeText={props.onSearch}
          style={styles.textInput}
        />
      </View>
    </>
  );
};
const Header1 = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={{marginLeft: 5}}>
        <Menu width={30} height={30} fill="white" />
      </View>

      <TouchableOpacity style={{borderRadius: 100, marginRight: 10}}>
        <Image
          source={require('../assets/profileEx.jpeg')}
          style={{width: 40, height: 40, borderRadius: 100}}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    shadowColor: '#000',
    top: -22,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerContainer: {
    height: 110,
    backgroundColor: '#FF5227',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerImage: {
    height: 100,
    opacity: 0.7,
  },
});
export default NotesSearchBar;
