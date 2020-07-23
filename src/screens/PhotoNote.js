import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useTheme } from "@react-navigation/native";

const PhotoNote = () => {

  const { colors } = useTheme();
  const styles = customStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Burası fotoğraf ile</Text>
    </SafeAreaView>
  );
};
export default PhotoNote;


const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text,
    }
  });
