import React, { useContext } from 'react';
import { View, Text, StatusBar, SafeAreaView , StyleSheet} from 'react-native';
import Context from '../context/store';

const VoiceNote = () => {

  const { state, dispatch } = useContext(Context);
  const themeColor = state.themeColors[state.currentTheme];
  const styles = customStyles(themeColor)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.text}>Burası Sesli not</Text>
    </SafeAreaView>
  );
};

export default VoiceNote;

const customStyles = (themeColor) => 
 StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:themeColor.backgroundColor,
  },
  text : {
    color:themeColor.textColor,
  }
 });