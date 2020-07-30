/* eslint-disable no-const-assign */
import React, {useState} from 'react';
import {
  Button,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {MicButton} from '../components';
const VoiceNote = () => {
  const {colors} = useTheme();
  const styles = customStyles(colors);
  const [words, setWords] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.text}>Burası Sesli not</Text>
      <MicButton lang={'tr-TR'} func={setWords} />
      <View>
        <Text>{words}</Text>
      </View>
      <Button title="Temizle" onPress={() => setWords('')} />
    </SafeAreaView>
  );
};

export {VoiceNote};

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
