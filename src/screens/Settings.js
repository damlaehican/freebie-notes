/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-native/no-inline-styles */

//ContextAPI 'den ya da firebase' deki yapıda usermailden mail adresinin
// bu sayfaya gelmesi gerekiyor.
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
  Dimensions,
  StatusBar,
} from 'react-native';
import {MyInput, MyButton, AppName} from '../components';
import {
  User,
  Key,
  Mail,
  Notification,
  Delete,
} from '../components/SVGR-Components';
import {useTheme} from '@react-navigation/native';
import Modal from 'react-native-modal';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import TextField from '../components/TextField';
import {LocalNotification} from '../services/LocalPushController';

const Settings = (props) => {
  const navigation = useNavigation();
  const user = auth().currentUser;
  const {colors, dark} = useTheme();
  const styles = customStyles(colors);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [newMail, setNewMail] = useState(user.email);

  const setnewmail = (text) => setNewMail(text);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const editMail = () => {
    toggleModal();
  };

  const updateMail = () => {
    user
      .updateEmail(newMail)
      .then(
        Alert.alert(
          'Mail adresiniz başarıyla değiştirildi. Tekrar giriş yapınız.',
        ),
        [{text: 'Tamam'}],
      );
    navigation.navigate('Login');
  };

  const saveInfo = () => {
    Alert.alert('Freebie Notes', 'Kaydedildi', [{text: 'Tamam'}]);
    props.navigation.goBack();
  };

  const resetPass = () => {
    auth()
      .sendPasswordResetEmail(newMail)
      .then(function () {
        Alert.alert('Parola sıfırlama talebi mail adresinize gönderildi.');
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const deleteUser = () => {
    user
      .delete()
      .then(function () {
        Alert.alert('Freebie Notes', 'Hesap başarıyla silindi !', [
          {text: 'Tamam'},
        ]);
        props.navigation.navigate('Login');
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const handlePress = () => {
    if (isEnabled === false) {
      LocalNotification();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 28,
          paddingLeft: 5,
          color: '#546e7a',
          fontWeight: 'bold',
          paddingBottom: 50,
        }}>
        Ayarlar
      </Text>
      <View style={{flexDirection: 'row'}}>
        <User color="black" width={24} height={24} />
        <TextField title="Kullanıcı Adı:" details={user.displayName} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Mail color="black" width={24} height={24} />
        <TextField title="Email" details={newMail} />
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: Dimensions.get('window').height / 18,
        }}
        onPress={resetPass}>
        <Key width={24} height={24} />
        <Text style={{fontSize: 18, paddingLeft: 5, color: '#546e7a'}}>
          Parola Sıfırla
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: Dimensions.get('window').height / 2.25,
          height: Dimensions.get('window').height / 18,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Notification color="black" width={24} height={24} />
          <Text style={{fontSize: 18, paddingLeft: 5, color: '#546e7a'}}>
            Bildirimler
          </Text>
        </View>
        <View
          style={{
            paddingLeft: 20,
          }}>
          <Switch
            trackColor={{false: 'lightgray', true: colors.text}}
            thumbColor={colors.primary}
            ios_backgroundColor="grey"
            onValueChange={toggleSwitch}
            onTouchStart={handlePress}
            value={isEnabled}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          Alert.alert('Freebie Notes Hesabınız Silinecek', 'Emin misiniz ?', [
            {text: 'Sil', onPress: deleteUser},
            {text: 'Vazgeç'},
          ])
        }
        style={{
          flexDirection: 'row',
          height: Dimensions.get('window').height / 18,
        }}>
        <Delete width={24} height={24} />
        <Text style={{fontSize: 18, paddingLeft: 5, color: '#546e7a'}}>
          Hesabı Sil
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      marginLeft: 10,
    },
  });

export default Settings;
