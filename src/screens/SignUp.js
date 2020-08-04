import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import { MyInput, MyButton, AppName } from '../components';

const SignUp = (props) => {
  const [userName, setUserName] = useState('');
  const [usermail, setUserMail] = useState('');
  const [userpass, setUserPass] = useState('');
  const [userpassRep, setPasswordRep] = useState('');

  const setName = (text) => setUserName(text);
  const setMail = (text) => setUserMail(text);
  const setPass = (text) => setUserPass(text);
  const setPassRep = (text) => setPasswordRep(text);

  const signUp = async () => {
    if (userpass == userpassRep) {
      await auth()
        .createUserWithEmailAndPassword(usermail, userpass)
        .then((userCredentials) => {
          userCredentials.user.updateProfile({
            displayName: userName,
          }).then(() => {
            props.navigation.navigate('Login');
          })
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      Alert.alert('Hata', 'Şifreler uyuşmuyor !');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/background.png')}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/signUpLogo.png')} />
          </View>
          <View style={{ marginVertical: 45 }}>
            <MyInput
              holder="Adınızı giriniz..."
              changeText={setName}
              keyboard="default"
            />
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
            <MyInput
              holder="Parola tekrarı giriniz..."
              changeText={setPassRep}
              capital="none"
              keyboard="default"
              secureText={true}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <MyButton
              buttonName={'KAYIT OL'}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5227',
  },
  imageBackground: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
});
export { SignUp };
