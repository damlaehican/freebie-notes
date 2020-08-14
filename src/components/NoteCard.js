import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Clock} from '../components/SVGR-Components';
import {useTheme} from '@react-navigation/native';
import {Dots, Delete, Done, Star} from '../components/SVGR-Components';
import Modal from 'react-native-modal';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';

const NoteCard = (props) => {
  const user = auth().currentUser;
  const [key, value] = props.item;
  const {colors} = useTheme();
  const styles = customStyles(colors);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isFavourite, setIsFavourite] = useState(value.isFavourite);
  const [done, setDone] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const deleteItem = () => {
    firebase.database().ref(`notes/${user.uid}/${key}`).remove();
    setTimeout(() => {
      setModalVisible(false);
    }, 500);
  };

  const doneItem = () => {
    firebase.database().ref(`notes/${user.uid}/${key}`).update({
      isDone: !value.isDone,
    });
    setTimeout(() => {
      setModalVisible(false);
    }, 300);
    firebase
      .database()
      .ref(`notes/${user.uid}/${key}/isDone`)
      .on('value', (snapshot) => {
        if (snapshot.val() == true) {
          setDone(true);
        } else {
          setDone(false);
        }
      });
    console.log('DONE STATEİ : ' + done);
  };

  const favourItem = () => {
    setIsFavourite(!isFavourite);
    firebase.database().ref(`notes/${user.uid}/${key}`).update({
      isFavourite: !value.isFavourite,
    });
    setTimeout(() => {
      setModalVisible(false);
    }, 300);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Modal
          isVisible={isModalVisible}
          animationType="fade"
          transparent={true}
          onBackdropPress={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={deleteItem}>
              <Delete style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={doneItem}>
              <Done style={styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={favourItem}>
              <Star
                style={styles.iconStyle}
                stroke={'#FF5227'}
                fill={isFavourite ? '#FF5227' : 'none'}
              />
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={styles.touchableOpacity}>
          <Text style={styles.dateText}>{value.timestamp}</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Dots style={{width: 25, height: 25}} />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 5, marginTop: 5}}>
          <Text style={styles.titleText}>{value.noteTitle}</Text>
          <Text style={styles.bodyText} numberOfLines={5}>
            {value.noteDetails}
          </Text>
          <Text style={[styles.bodyText, {color: '#006064'}]} numberOfLines={5}>
            {value.voiceNote}
          </Text>
        </View>

        <View style={styles.clockView}>
          <View
            style={
              ([styles.iconContainer],
              {flexDirection: 'row', alignItems: 'center', marginVertical: 10})
            }>
            {done ? (
              <Done style={{width: 15, height: 15, marginRight: 10}} />
            ) : null}
            {isFavourite ? (
              <Star
                stroke={'#FF5227'}
                style={{width: 20, height: 20, marginRight: 10}}
              />
            ) : null}
          </View>
          <View style={{flexDirection: 'row'}}>
            <Clock fill="#FF5227" width={18} height={18} />
            <Text style={[styles.bodyText, {color: '#d92027', marginLeft: 10}]}>
              {value.selectedDateTime}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 10,
    },
    cardContainer: {
      height: Dimensions.get('window').height / 3.2,
      borderRadius: 10,
      backgroundColor: colors.secondary,
      width: Dimensions.get('window').width / 2.3,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginLeft: 5,
      padding: 10,
      marginTop: 20,
    },
    dateText: {
      color: colors.primary,
      fontSize: 12,
      marginBottom: 10,
    },
    titleText: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
    },
    bodyText: {
      color: colors.text,
      fontSize: 14,
    },
    clockView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 5,
    },
    modalView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      backgroundColor: colors.background,
      height: Dimensions.get('window').height / 8,
      width: Dimensions.get('window').width / 2,
      borderWidth: 3,
      borderColor: 'grey',
    },
    iconStyle: {
      width: 40,
      height: 40,
    },
    touchableOpacity: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    completeNote: {
      justifyContent: 'flex-end',
      alignSelf: 'center',
    },
    iconContainer: {
      marginVertical: 15,
    },
  });
export default NoteCard;
