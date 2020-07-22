/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {Gravatar, GravatarApi} from 'react-native-gravatar';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

const Profile = (props) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const signOut = () => {
    auth().signOut();
    AsyncStorage.removeItem('@USER_ID');
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={toggleModal}>
        <Gravatar
          options={{
            email: 'alpkrts3@gmail.com', //m.enver.akkoc@gmail.com
            parameters: {size: '200', d: 'mm'},
            secure: true,
          }}
          style={styles.roundedProfileImage}
        />
      </TouchableOpacity>
      <SafeAreaView>
        <Modal
          isVisible={isModalVisible}
          animationType="fade"
          transparent={true}
          onBackdropPress={() => setModalVisible(false)}>
          <View style={{alignSelf: 'center'}}>
            <Gravatar
              options={{
                email: 'alpkrts3@gmail.com', //m.enver.akkoc@gmail.com
                parameters: {size: '200', d: 'mm'},
                secure: true,
              }}
              style={[styles.roundedProfileImage, styles.modalProfileImage]}
            />
          </View>
          <View style={styles.modalContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.mailText}>alpkrts3@gmail.com</Text>
            </View>
            <View style={styles.chooseContainer}>
              <View style={styles.IconCont}>
                <TouchableOpacity>
                  <Image
                    style={styles.settingsImage}
                    source={require('../assets/settings.png')}
                  />
                  <Text style={styles.settingsText}>Ayarlar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.IconCont}>
                <TouchableOpacity onPress={signOut}>
                  <Image
                    style={styles.logoutImage}
                    source={require('../assets/logout.png')}
                  />
                  <Text style={styles.settingsText}>Çıkış</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export {Profile};

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 6.2,
    borderWidth: 3,
    borderColor: 'grey',
  },
  roundedProfileImage: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
  },
  modalProfileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    alignSelf: 'center',
    width: 250,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  mailText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5227',
  },
  IconCont: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  settingsImage: {
    width: 35,
    height: 35,
    marginLeft: 12,
  },
  logoutImage: {
    width: 35,
    height: 35,
    marginLeft: 9,
  },
  chooseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 11,
  },
  settingsText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5227',
  },
});
