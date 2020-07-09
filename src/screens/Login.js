import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import styles from './style';
import {MyButton, MyInput, AppName} from '../components';
import AsyncStorage from '@react-native-community/async-storage';


const Login = () => {
  const [usermail, setUserMail] = useState('');
  const [userpass, setUserPass] = useState('');

  const setMail = text => setUserMail(text);
  const setPass = text => setUserPass(text);

  let useruid = 'abc'; // firebaseden gelecek, firebase auth().currentUser.uid

  const login = async () => {
    AsyncStorage.setItem('@USER_ID', userid);
  };
  const googleLogin = props => {};


  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <SafeAreaView style={styles.pages.loginPage.container}>
        <View style={styles.pages.loginPage.logoContainer} >
          <Image source={require('../assets/logo.png')}/>
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
          />
        </View>
        <View style={{marginVertical: 10}}>
          <MyButton buttonName={'GİRİŞ'} pressButton={login}/>
        </View>
        <View style={{alignItems: 'center', marginVertical: 15}}>
          <Text style={{fontWeight: 'bold', fontSize: 17, color: '#FF5227',}}>veya</Text>
        </View>
        <TouchableOpacity style={styles.pages.loginPage.googleLoginContainer} onPress={googleLogin}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style= {styles.pages.loginPage.googleIcon} source={require('../assets/google-icon.png')} />
            <View style={{marginLeft: 20}}>
              <Text style={styles.pages.loginPage.googleText}>Google ile giriş yapın.</Text>
            </View>
          </View>
        </TouchableOpacity>
        <AppName />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export {Login};
