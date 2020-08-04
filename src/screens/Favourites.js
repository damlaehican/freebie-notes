import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';

const Favourites = (props) => {
  const {colors,dark} = useTheme();
  const styles = customStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      <View>
        <Text style={styles.text}>Favoriler</Text>
      </View>
    </SafeAreaView>
  );
};
export default Favourites;

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text,
    },
  });
