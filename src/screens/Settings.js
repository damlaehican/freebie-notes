import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {MyInput, MyButton, AppName} from '../components';

const Settings = (props) => {
  const [userName, setUserName] = useState('');
  const [usermail, setUserMail] = useState('');
  const [userpass, setUserPass] = useState('');

  const setName = (text) => setUserName(text);
  const setMail = (text) => setUserMail(text);
  const setPass = (text) => setUserPass(text);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../assets/background.png')}>
        <View style={styles.settingsContainer}>
          <Image
            style={styles.settingsImage}
            source={require('../assets/settings2.png')}
          />
          <Text style={styles.settingsText}>Ayarlar</Text>
        </View>
        <View style={styles.mail}>
          <Text style={styles.infoTexts}>İsim :</Text>
          <Text style={styles.infoTexts}> Alper Karataş</Text>
        </View>
        <View style={styles.mail}>
          <Text style={styles.infoTexts}>E-mail :</Text>
          <Text style={styles.infoTexts}> alpkrts3@gmail.com</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
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
  settingsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginLeft: 20,
    borderWidth: 0.1,
    padding: 10,
    borderBottomColor: 'white',
    borderColor: '#FF5227',
    borderBottomWidth: 5,
  },
  settingsText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  settingsImage: {
    marginRight: 20,
    width: 45,
    height: 45,
  },
  mail: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
    marginVertical: 25,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  infoTexts: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
  },
});

export {Settings};
