import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Keyboard,
} from 'react-native';
import PassMeter from "react-native-passmeter";
import {MyInput, MyButton, AppName} from '../components';

const SignUp = () => {
  const MAX_LEN = 9,
  MIN_LEN = 6,
  PASS_LABELS = ["Çok Kısa", "Normal", "Güçlü"];
  const [userName, setUserName] = useState('');
  const [usermail, setUserMail] = useState('');
  const [userpass, setUserPass] = useState('');

  const setName = (text) => setUserName(text);
  const setMail = (text) => setUserMail(text);
  const setPass = (text) => setUserPass(text);

  const signUp = (props) => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/background.png')}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/signUpLogo.png')} />
          </View>
          <View style={{marginVertical: 45}}>
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
            <PassMeter
              showLabels
              password={userpass}
              maxLength={MAX_LEN}
              minLength={MIN_LEN}
              labels={PASS_LABELS}
            />
          </View>
          <View style={{marginVertical: 10}}>
            <MyButton
              buttonName={'KAYIT OL'}
              pressButton={signUp}
              style={{backgroundColor: '#fff', color: '#FF5227'}}
            />
          </View>
          <AppName style={{color: '#fff'}} />
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
export {SignUp};
