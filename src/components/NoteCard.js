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
import {Dots, Delete, Done} from '../components/SVGR-Components';
import Modal from 'react-native-modal';

const NoteCard = (props) => {
  const {colors} = useTheme();
  const styles = customStyles(colors);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const DeleteItem = () => {
    setModalVisible(false);
    Alert.alert('Delete');
  };

  const DoneItem = () => {
    setModalVisible(false);
    Alert.alert('Done');
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalVisible}
        animationType="fade"
        transparent={true}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={DeleteItem}>
            <Delete style={{width: 40, height: 40}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={DoneItem}>
            <Done style={{width: 40, height: 40}} />
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.dateText}>{props.date}</Text>
        <TouchableOpacity onPress={toggleModal}>
          <Dots style={{width: 25, height: 25}} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.bodyText} numberOfLines={5}>
        {props.icerik}
      </Text>
      <Text style={[styles.bodyText, {color: '#006064'}]} numberOfLines={5}>
        {props.voice}
      </Text>
      <Text style={[styles.bodyText, {color: '#d92027'}]}>
        {props.selectedDate}
      </Text>
      <View style={styles.clockView}>
        <Clock fill="#FF5227" width={18} height={18} />
      </View>
    </View>
  );
};

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      height: 250,
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
    },
    bodyText: {
      color: colors.text,
      fontSize: 14,
    },
    clockView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      bottom: 5,
      right: 5,
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
  });
export default NoteCard;
