import React from 'react';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';

const VoiceNote = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />

      <Text>Burası Sesli not</Text>
    </SafeAreaView>
  );
};

export default VoiceNote;
