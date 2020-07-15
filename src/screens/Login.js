import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import {MyButton, MyInput, AppName} from '../components';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Login = (props) => {
  const [usermail, setUserMail] = useState('');
  const [userpass, setUserPass] = useState('');

  const setMail = (text) => setUserMail(text);
  const setPass = (text) => setUserPass(text);

  const login = async () => {
    try {
      await auth().signInWithEmailAndPassword(usermail, userpass);
      props.navigation.navigate('MainScreen');
      AsyncStorage.setItem('@USER_ID', auth().currentUser.uid);
    } catch (error) {
      Alert.alert('Freebie Notes');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} />
        </View>
        <View style={{marginVertical: 45}}>
          <MyInput
            holder="E-mail giriniz..."
            changeText={setMail}
            capital="none"
            keyboard="email-address"
          />
          <MyInput
            holder="Parola giriniz..."
            changeText={setPass}
            secureText={true}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <MyButton buttonName={'GİRİŞ'} pressButton={login} />
        </View>
        <TouchableOpacity
          style={{alignItems: 'center', marginVertical: 15}}
          onPress={() => props.navigation.navigate('ForgotPass')}
        >
          <Text style={{fontWeight: 'bold', fontSize: 17, color: '#FF5227'}}>
            Şifremi Unuttum ?
          </Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center', marginVertical: 30}}>
          <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                fontSize: 12,
                color: 'grey',
                marginTop: 15,
                fontWeight: 'bold',
              }}>
              Henüz hesabınız yok mu?
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 100,
                  height: 70,
                  color: '#FF5227',
                  textAlign: 'center',
                  padding: 5,
                  fontSize: 22,
                  fontWeight: 'bold',
                }}>
                Kaydol
              </Text>
            </TouchableOpacity>
        </View>
        <AppName />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  googleLoginContainer: {
    width: Width / 1.2,
    height: Height / 14.5,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {height: 0, width: 0},
    marginVertical: 10,
  },
  googleIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  logoContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  googleText: {
    color: '#BDAAAA',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export {Login};
