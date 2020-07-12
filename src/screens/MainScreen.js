import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const MainScreen = props => {
  return (
    <SafeAreaView>
      <Text>Burası not sayfası</Text>
      <Button title="Cıkıs" onPress={() => props.navigation.navigate('Login')}/>
    </SafeAreaView>
  );
};

export {MainScreen};
