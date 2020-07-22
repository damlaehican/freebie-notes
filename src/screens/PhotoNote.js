import React, { useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Context from "../context/store";

const PhotoNote = () => {

  const { state, dispatch } = useContext(Context);
  const themeColor = state.themeColors[state.currentTheme];
  const styles = customStyles(themeColor)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Burası fotoğraf ile</Text>
    </SafeAreaView>
  );
};
export default PhotoNote;


const customStyles = (themeColor) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColor.backgroundColor,
    },
    text: {
      color: themeColor.textColor,
    }
  });
