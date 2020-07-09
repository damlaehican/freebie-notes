import React from 'react';
import {SafeAreaView,View, Text,Image,ImageBackground} from 'react-native';
import styles from './style';

const SplashScreen = () => {
  return (
    <View style={styles.pages.signUpPage.container}>
      <ImageBackground
        style={styles.pages.signUpPage.imageBackground}
        source={require('../assets/background.png')}>
        <SafeAreaView style={styles.pages.signUpPage.safeAreaView}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
              <Image source={require('../assets/signUpLogo.png')} />
          </View>
          <Text style={{color:'white',fontWeight:'bold',alignSelf:'center'}}>Freebie Notes</Text>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;
