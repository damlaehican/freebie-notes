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
          <View style={styles.modalContainer}>
            <View style={styles.infoContainer}>
              <Gravatar
                options={{
                  email: 'alpkrts3@gmail.com', //m.enver.akkoc@gmail.com
                  parameters: {size: '200', d: 'mm'},
                  secure: true,
                }}
                style={styles.roundedProfileImage}
              />
            </View>
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
  },
  roundedProfileImage: {
    width: 43,
    height: 43,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 25,
  },
  infoContainer: {
    justifyContent: 'center',
    marginVertical: 10,
    alignSelf: 'center',
    width: 250,
    height: 30,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  settingsImage: {
    width: 35,
    height: 35,
    marginLeft: 9,
  },
  logoutImage: {
    width: 35,
    height: 35,
    marginLeft: 4,
  },
  chooseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  settingsText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5227',
  },
});
