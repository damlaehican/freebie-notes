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

const Profile = (props) => {
  const navigate = props.navigation;
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const signOut = () => {
    auth().signOut();
    AsyncStorage.removeItem('@USER_ID');
    navigate('Login');
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={toggleModal}>
        <Gravatar
          options={{
            email: 'm.enver.akkoc@gmail.com', //alpkrts3@gmail.com
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
          <View style={styles.modalContainer}>
            <View style={styles.chooseContainer}>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Image
                    style={styles.settingsImage}
                    source={require('../assets/settings.png')}
                  />
                  <Text style={styles.settingsText}>Ayarlar</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigate('Login')}>
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
  },
  roundedProfileImage: {
    width: 43,
    height: 43,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
  },
  settingsImage: {
    width: 45,
    height: 45,
    marginLeft: 9,
  },
  logoutImage: {
    width: 45,
    height: 45,
    marginLeft: 4,
  },
  chooseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 40,
  },
  settingsText: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5227',
  },
});
