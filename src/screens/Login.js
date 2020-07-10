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
} from 'react-native';
import {MyButton, MyInput, AppName} from '../components';
import AsyncStorage from '@react-native-community/async-storage';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Login = (props) => {
  const [usermail, setUserMail] = useState('');
  const [userpass, setUserPass] = useState('');

  const setMail = (text) => setUserMail(text);
  const setPass = (text) => setUserPass(text);

  let useruid = 'abc'; // firebaseden gelecek, firebase auth().currentUser.uid

  const login = async () => {
    AsyncStorage.setItem('@USER_ID', userid);
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
            changeText={setMail} 
            secureText={true}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <MyButton buttonName={'GİRİŞ'} pressButton={login} />
        </View>
        <View style={{alignItems: 'center', marginVertical: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 17, color: '#FF5227'}}>
            veya
          </Text>
        </View>
        <TouchableOpacity
          style={styles.googleLoginContainer}
          onPress={() => props.navigation.navigate('SignUp')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.googleIcon}
              source={require('../assets/google-icon.png')}
            />
            <View style={{marginLeft: 20}}>
              <Text style={styles.googleText}>Google ile giriş yap</Text>
            </View>
          </View>
        </TouchableOpacity>
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
