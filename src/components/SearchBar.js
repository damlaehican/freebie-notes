/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TextInput, StyleSheet, Dimensions} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 20, height: 20, alignSelf: 'center', marginLeft: 15}}
        source={require('../assets/search.png')}
      />
      <TextInput
        style={styles.textInputStyle}
        onChangeText={props.onChangeText}
        placeholder={props.holder}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 2,
    borderRadius: 10,
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 23,
    //marginTop: -30,
  },
  textInputStyle: {
    fontSize: 12,
    justifyContent: 'center',
    color: 'black',
    marginLeft: 15,
  },
});

export {SearchBar};
