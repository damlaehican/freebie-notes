import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const Splash = (props) => {
  SplashScreen.hide();
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login'); //
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/background.png')}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/signUpLogo.png')} />
          </View>
          <Text
            style={{color: 'white', fontWeight: 'bold', alignSelf: 'center'}}>
            Freebie Notes
          </Text>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5227',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Splash};
