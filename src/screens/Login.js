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
    //Burada girişe basıldığı gibi girilsin diye şimdilik
    try {
      await auth().signInWithEmailAndPassword(usermail, userpass);
      props.navigation.navigate('Menu');
      AsyncStorage.setItem('@USER_ID', auth().currentUser.uid);
    } catch (error) {
      Alert.alert('Freebie Notes', 'Bir hata oluştu, tekrar deneyin.', [
        {text: 'Tamam'},
      ]);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} />
        </View>
        <View style={styles.inputCont}>
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
        <View style={styles.loginButtonCont}>
          <MyButton buttonName={'GİRİŞ'} pressButton={login} />
        </View>
        <TouchableOpacity
          style={styles.forgotPassCont}
          onPress={() => props.navigation.navigate('ForgotPass')}>
          <Text style={styles.forgotPass}>Şifremi Unuttum ?</Text>
        </TouchableOpacity>
        <View style={styles.accountYetCont}>
          <Text style={styles.accountYet}>Henüz hesabınız yok mu?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Kaydol</Text>
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
  inputCont: {marginVertical: 45},
  loginButtonCont: {marginVertical: 10},
  logoContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  forgotPassCont: {
    alignItems: 'center',
    marginVertical: 15,
  },
  forgotPass: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FF5227',
  },
  accountYetCont: {
    alignItems: 'center',
    marginVertical: 30,
  },
  accountYet: {
    fontSize: 12,
    color: 'grey',
    marginTop: 15,
    fontWeight: 'bold',
  },
  signUpText: {
    width: 100,
    height: 70,
    color: '#FF5227',
    textAlign: 'center',
    padding: 5,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export {Login};
