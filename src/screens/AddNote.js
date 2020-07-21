import React from 'react';
import {View, TextInput, StatusBar} from 'react-native';

const AddNote = (props) => {
  return (
    <View style={{flex: 1, margin: 100}}>
      <StatusBar barStyle="dark-content" />
      <TextInput placeholder="bir not giriniz..." />
    </View>
  );
};
export default AddNote;
