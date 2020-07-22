import React, { useContext } from 'react';
import { SafeAreaView, TextInput, StatusBar, StyleSheet } from 'react-native';
import Context from '../context/store';

const AddNote = (props) => {

  const { state, dispatch } = useContext(Context);
  const themeColor = state.themeColors[state.currentTheme];
  const styles = customStyles(themeColor);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TextInput
        placeholder="bir not giriniz..."
        placeholderTextColor={themeColor.textColor}
        style={styles.textInput} />
    </SafeAreaView>
  );
};
export default AddNote;

const customStyles = (themeColor) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColor.backgroundColor,
    },
    textInput: {
      margin:100,
      color: themeColor.textColor,
    }
  });
