import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { MyInput, MyButton, AppName } from "../components";
import styles from './style';

const SignUp = () => {

  const [usermail, setUserMail] = useState('');
  const [userpass, setUserPass] = useState('');

  const setMail = text => setUserMail(text);
  const setPass = text => setUserPass(text);

  const signUp = props => { };

  return (
    <View style={styles.pages.signUpPage.container}>
      <ImageBackground
        style={styles.pages.signUpPage.imageBackground}
        source={require('../assets/background.png')}
      >
        <SafeAreaView style={styles.pages.signUpPage.safeAreaView}>

          <View style={styles.pages.signUpPage.logoContainer} >
            <Image source={require('../assets/signUpLogo.png')} />
          </View>

          <View style={{ marginVertical: 45 }}>
            <MyInput
              holder="E-mail giriniz..."
              changeText={setMail}
              capital="none"
              keyboard="email-address"
            />
            <MyInput
              holder="Parola giriniz..."
              changeText={setPass}
              capital="none"
              keyboard="default"
              secureText={true}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <MyButton buttonName={'KAYIT OL'} 
              pressButton={signUp} 
              style={{ backgroundColor: '#fff', color: '#FF5227' }} 
            />
          </View>

          <AppName style={{ color: '#fff' }} />

        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export { SignUp };

