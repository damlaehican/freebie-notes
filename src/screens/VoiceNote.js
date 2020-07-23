import React from 'react';
import { View, Text, StatusBar, SafeAreaView , StyleSheet} from 'react-native';
import { useTheme } from '@react-navigation/native';

const VoiceNote = () => {

  const { colors } = useTheme();
  const styles = customStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.text}>Burası Sesli not</Text>
    </SafeAreaView>
  );
};

export default VoiceNote;

const customStyles = (colors) => 
 StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:colors.background,
  },
  text : {
    color:colors.text,
  }
 });