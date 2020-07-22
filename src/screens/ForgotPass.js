import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Alert,
} from 'react-native';
import {MyInput, MyButton} from '../components';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ForgotPass = (props) => {
  const [forgatPass, setForgat] = useState('a');
  const setForgotPass = (text) => setForgat(text);

  const createAlert = () => {
    Alert.alert('E-posta sıfırlama', 'Gelen kutunuza kontrol edin !', [
      {text: 'Tamam'},
    ]);
  };
  const sendButton = () => {
    props.navigation.navigate('Login');
    auth().sendPasswordResetEmail(forgatPass).then(createAlert);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/background.png')}>
        <SafeAreaView style={styles.logoContainer}>
          <Image source={require('../assets/signUpLogo.png')} />
        </SafeAreaView>
        <Text
          style={{
            alignSelf: 'center',
            marginVertical: 50,
            fontSize: 26,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Şifremi Unuttum ?
        </Text>
        <MyInput
          style={{paddingLeft: 30}}
          holder="E-mail adresinizi giriniz.."
          changeText={setForgotPass}
          capital="none"
          keyboard="email-address"
        />
        <Text
          style={{
            alignSelf: 'center',
            marginBottom: 80,
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
          }}>
          * Lütfen geçerli bir e-posta adresi giriniz !
        </Text>
        <MyButton
          buttonName="Gönder"
          style={{backgroundColor: '#fff', color: '#FF5227'}}
          pressButton={sendButton}
        />
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: 'bold',
              marginVertical: 20,
            }}>
            Vazgeç
          </Text>
        </TouchableOpacity>
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
    marginVertical: 70,
  },
});

export {ForgotPass};
