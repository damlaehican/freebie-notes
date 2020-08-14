import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const TextField = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>{props.details}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 40,
    width: Dimensions.get('window').width / 1.05,
    height: Dimensions.get('window').height / 11,
  },
  text: {
    color: '#546e7a',
    fontSize: 18,
  },
});
export default TextField;
