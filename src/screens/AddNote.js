import React from 'react';
import { SafeAreaView, TextInput, StatusBar, StyleSheet } from 'react-native';
import { useTheme } from "@react-navigation/native";

const AddNote = (props) => {

  const { colors } = useTheme();
  const styles = customStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TextInput
        placeholder="bir not giriniz..."
        placeholderTextColor={colors.text}
        style={styles.textInput} />
    </SafeAreaView>
  );
};
export default AddNote;

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    textInput: {
      margin:100,
      color: colors.text,
    }
  });
