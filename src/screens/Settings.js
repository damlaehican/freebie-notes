/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-native/no-inline-styles */

//ContextAPI 'den ya da firebase' deki yapıda usermailden mail adresinin
// bu sayfaya gelmesi gerekiyor.
import React, {useState} from 'react';
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
} from 'react-native';
import {MyInput, MyButton, AppName} from '../components';
import {useTheme} from '@react-navigation/native';
import Modal from 'react-native-modal';

const Settings = (props) => {
  const {colors} = useTheme();
  const styles = customStyles(colors);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const [newMail, setNewMail] = useState('');

  const setNewmail = (text) => setNewMail(text);

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
    console.log(newMail);
    toggleModal();
  };

  const saveInfo = () => {
    Alert.alert('Freebie Notes', 'Kaydedildi', [{text: 'Tamam'}]);
    props.navigation.goBack();
  };

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
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.mail}>
            <Text style={styles.infoTexts}>E-mail :</Text>
            <Text style={styles.infoTexts}> {newMail}</Text>
          </View>
          <TouchableOpacity onPress={editMail}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginHorizontal: 10,
              }}
              source={require('../assets/edit.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Modal
            isVisible={isModalVisible}
            animationType="fade"
            transparent={true}
            onBackdropPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.newMailCont}>
                <Text style={styles.newMailText}>
                  Yeni mail adresinizi giriniz
                </Text>
              </View>
              <MyInput
                changeText={setNewmail}
                style={styles.input}
                holder="Mail adresi.."
                capital="none"
              />
              <Text
                style={{
                  fontSize: 11,
                  marginTop: -10,
                  marginBottom: 15,
                  fontWeight: '600',
                }}>
                Lütfen geçerli bir mail adresi giriniz !
              </Text>
              <View style={styles.yesOrNo}>
                <TouchableOpacity
                  style={{marginRight: 70}}
                  onPress={updateMail}>
                  <Image
                    style={{width: 35, height: 35}}
                    source={require('../assets/okey.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleModal()}>
                  <Image
                    style={{width: 35, height: 35}}
                    source={require('../assets/close.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.mail}>
          <Text style={[styles.infoTexts, {paddingRight: 15}]}>
            Bildirimler :
          </Text>
          <Switch
            trackColor={{false: colors.background, true: colors.text}}
            thumbColor={isEnabled ? colors.background : colors.background}
            ios_backgroundColor="grey"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.buttonContainer}>
          <MyButton
            style={styles.button}
            buttonName="Kaydet"
            pressButton={saveInfo}
          />
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles.ignore}>Vazgeç</Text>
          </TouchableOpacity>
        </View>
        <AppName style={styles.appName} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
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
      marginVertical: 35,
      alignSelf: 'center',
      flexDirection: 'row',
    },
    infoTexts: {
      fontWeight: 'bold',
      fontSize: 22,
      color: 'white',
    },
    buttonContainer: {
      marginVertical: 70,
    },
    button: {
      backgroundColor: 'white',
      color: '#FF5227',
    },
    ignore: {
      color: 'white',
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    appName: {
      color: 'white',
    },
    modalContainer: {
      borderRadius: 10,
      backgroundColor: colors.background,
      height: Dimensions.get('window').height / 4.4,
      borderWidth: 3,
      borderColor: 'grey',
      alignItems: 'center',
    },
    newMailCont: {
      margin: 13,
    },
    newMailText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FF5227',
    },
    input: {
      justifyContent: 'center',
      width: 300,
      paddingLeft: 10,
    },
    yesOrNo: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });

export {Settings};
