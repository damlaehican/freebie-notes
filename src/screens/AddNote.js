import React, {useState, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  TextInput,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Alert,
  ScrollView,
  Platform,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';
import Voice from '@react-native-community/voice';
import {
  Camera,
  OpenMic,
  MuteMic,
  Trash,
  Map,
  Calender,
} from '../components/SVGR-Components';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Modal from 'react-native-modal';
import {SearchBar} from '../components';
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ActivityIndicator} from 'react-native-paper';

const AddNote = (props) => {
  const {colors, dark} = useTheme();
  const styles = customStyles(colors);
  const user = auth().currentUser;
  const date = new Date().toLocaleString();
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');
  const [list, setList] = useState([]);
  const [words, setWords] = useState('');
  const [push, setPush] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDateModalVisible, setDateModalVisible] = useState(false);
  const [image, setImage] = useState(false);
  const [isImageFullScreen, setIsImageFullScreen] = useState(false);
  const [dates, setDate] = useState(new Date(1598051730000));
  const [time, setTime] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [markers, setMarker] = useState({
    coordinate: {
      latitude: 4,
      longitude: 4,
    },
  });
  const [isDone, setDone] = useState(false);
  const [place,setPlace] = useState('');

  const config = {
    apiKey: 'AIzaSyC7Wtd777P-gYVGWvtvx148h7c8YJZU8Qo',
    authDomain: 'freebie-notes.firebaseapp.com',
    databaseURL: 'https://freebie-notes.firebaseio.com',
    projectId: 'freebie-notes',
    storageBucket: 'freebie-notes.appspot.com',
    messagingSenderId: '33866530069',
    appId: '1:33866530069:web:e59e809cf02da65fcc7d1c',
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  useEffect(() => {
    const onSpeechResults = (e) => {
      setWords(e.value);
    };
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startRecognizing = async () => {
    try {
      await Voice.start('tr_TR');
    } catch (e) {
      console.error(e);
    }
  };
  const sendData = () => {
    let newList = [...list];
    newList.push(data);
    setList(newList);

    firebase
      .database()
      .ref(`notes/${user.uid}`)
      .push({
        noteTitle: data,
        noteDetails: data2,
        uid: user.uid,
        username: user.email,
        timestamp: date,
        voiceNote: words,
        image: image,
        selectedDateTime: formatDate(dates, time),
        selectedPlace: {coordinate: markers.coordinate, placeName: place},
        isFavourite: false,
        isDone: isDone,
      })
      .then((data) => {
        //success callback
      })
      .catch((error) => {
        //error callback
      });
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const chooseImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.2,
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.fileSize > 1000000) {
        Alert.alert(
          'Freebie Notes',
          'Dosya boyutu çok büyük. Desteklenen maksimum dosya boyutu : 10.0 MB.',
        );
      } else {
        const source = 'data:image/jpeg;base64,' + response.data;
        setImage(source);
      }
    });
  };
  const showFullScreenImage = () => setIsImageFullScreen(!isImageFullScreen);
  const deleteImage = () => {
    Alert.alert('Freebie Notes', 'Fotoğrafı Sil?', [
      {text: 'Hayır', style: 'cancel'},
      {text: 'Evet', onPress: () => setImage(false)},
    ]);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    setDateModalVisible(true);
  };
  const openCalendar = (event, selectedValue) => {
    if (Platform.OS === 'ios') {
      const currentDate = selectedValue || new Date();
      setShow(true);
      setDate(currentDate);
      const currentTime = selectedValue || new Date();
      setTime(currentTime);
    } else {
      setShow(false);
      if (mode == 'date') {
        const currentDate = selectedValue || new Date();
        setDate(currentDate);
        setMode('time');
        setShow(true);
      } else {
        const selectedTime = selectedValue || new Date();
        setTime(selectedTime);
        setShow(false);
        setMode('date');
      }
    }
  };

  const showDate = () => {
    showMode('date');
  };
  const showTime = () => {
    showMode('time');
  };
  const formatDate = (date, time) => {
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
  };

  const addMarker = useCallback((coordinates) => {
    setMarker({
      coordinate: coordinates,
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={{flex: 1}} bounces={false}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => props.navigation.goBack()}>
            <Text style={styles.text}>Vazgeç</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              if (data != '' || words != '') {
                if (data2 != '' || words != '') {
                  sendData();
                  props.navigation.goBack('Tabs');
                } else {
                  Alert.alert('Bir not gir..', ' ', [{text: 'Tamam'}]);
                }
              } else {
                Alert.alert('Bir başlık gir..', ' ', [{text: 'Tamam'}]);
              }
            }}>
            <Text style={styles.text}>Bitir</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Başlık"
          style={styles.textInput}
          onChangeText={(text) => setData(text)}
          multiline={true}
        />
        <TextInput
          placeholder="Not"
          style={[styles.textInput, {fontWeight: 'normal'}]}
          onChangeText={(text) => setData2(text)}
          multiline={true}
        />
        <Text
          style={[styles.textInput, {fontWeight: 'normal'}]}
          multiline={true}>
          {words}
        </Text>
        <Text style={[styles.textInput, {fontWeight: 'normal'}]}>
          {formatDate(dates, time)}
        </Text>
        <View style={styles.iconBar}>
          <TouchableOpacity style={styles.button} onPress={chooseImage}>
            <Camera fill="#FF5227" width={50} height={40} />
          </TouchableOpacity>
          {push ? (
            <TouchableOpacity
              style={[styles.button, {width: 40}]}
              onPress={() => {
                setPush(false);
                Voice.stop();
              }}>
              <View>
                <OpenMic width={40} height={40} />
                <ActivityIndicator style={{marginTop: 20}} color="#ff5227" />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.button, {width: 40}]}
              onPress={() => {
                setPush(true);
                startRecognizing();
              }}>
              <MuteMic width={40} height={40} />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => setWords('')}
            style={[styles.button, {width: 40}]}>
            <Trash width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleModal()}
            style={[styles.button, {width: 40}]}>
            <Map width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity onPress={showDate} style={styles.button}>
            <Calender width={40} height={40} />
            {show &&
              (Platform.OS === 'ios' ? (
                <Modal
                  isVisible={isDateModalVisible}
                  onBackdropPress={() => setDateModalVisible(false)}
                  style={{justifyContent: 'flex-end', margin: 0}}>
                  <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={180}
                    value={dates}
                    mode={'datetime'}
                    is24Hour={true}
                    display="default"
                    onChange={openCalendar}
                    style={{backgroundColor: colors.noteBackground}}
                  />
                </Modal>
              ) : (
                <DateTimePicker
                  testID="dateTimePicker"
                  timeZoneOffsetInMinutes={0}
                  value={dates}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={openCalendar}
                />
              ))}
          </TouchableOpacity>
          <Modal
            isVisible={isModalVisible}
            animationType="fade"
            transparent={true}
            onBackdropPress={() => setModalVisible(false)}>
            <View style={{flex: 0.9, justifyContent: 'center'}}>
              <SearchBar holder="Konum" onChangeText={(text) => setPlace(text)}/>
              <MapView
                provider={PROVIDER_GOOGLE}
                style={{flex: 0.9, borderRadius: 15}}
                initialRegion={{
                  latitude: 41.00824,
                  longitude: 28.978359,
                  latitudeDelta: 1,
                  longitudeDelta: 1,
                }}
                onPress={(e) => addMarker(e.nativeEvent.coordinate)}>
                <Marker coordinate={markers.coordinate} title={place}>
                </Marker>
              </MapView>
            </View>
          </Modal>
        </View>
        {image && (
          <View
            style={
              isImageFullScreen
                ? styles.fullScreenImageContainer
                : styles.imageContainer
            }>
            <TouchableOpacity
              onPress={showFullScreenImage}
              onLongPress={deleteImage}>
              <Image
                source={{uri: image}}
                style={
                  isImageFullScreen ? styles.fullScreenImage : styles.image
                }
              />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};
export default AddNote;

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.noteBackground,
    },
    textInput: {
      fontSize: 20,
      margin: 5,
      width: Dimensions.get('screen').width / 1,
      fontWeight: 'bold',
      color: colors.placeHolder,
      alignSelf: 'center',
      borderEndWidth: 0.5,
      textAlign: 'center',
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius: 100,
      width: 50,
      height: 40,
      marginLeft: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10,
    },
    iconBar: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 50,
    },
    text: {
      fontSize: 20,
      fontWeight: '500',
      color: '#FF5227',
    },
    saveButton: {
      alignItems: 'flex-end',
      marginRight: 10,
    },
    image: {
      width: Dimensions.get('screen').width / 1.5,
      height: Dimensions.get('screen').width / 1.75,
    },
    fullScreenImage: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      resizeMode: 'contain',
      justifyContent: 'center',
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    fullScreenImageContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      position: 'absolute',
      backgroundColor: '#212121',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
