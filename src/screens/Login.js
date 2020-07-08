import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {MyButton, MyInput, AppName} from '../components';


const Login = () => {
  const [usermail, setUserMail] = useState('');
  const [userpass, setUserPass] = useState('');

  const setMail = text => setUserMail(text);
  const setPass = text => setUserPass(text);


  const login = props => {};
  const googleLogin = props => {};


  return (
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
          capital="none"
          keyboard="email-address"
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
  );
};

export {Login};
