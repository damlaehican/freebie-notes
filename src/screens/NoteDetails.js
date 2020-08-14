import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Back} from '../components/SVGR-Components';

const {width, height} = Dimensions.get('window');

const NoteDetails = (props) => {
  const {colors, dark} = useTheme();
  const styles = customStyles(colors);
  const item = props.route.params.item;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.noteContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.infoContainer}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Back style={{width: 30, height: 30, marginTop: -10}} />
              </TouchableOpacity>
              <Text style={styles.noteTitle}>{item.noteTitle}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.noteDetails}>{item.noteDetails}</Text>
            </View>
            <View style={styles.seperator} />
            <View style={styles.infoContainer}>
              <Text style={styles.boldText}>Sesli Not</Text>
              <Text style={styles.lightText}>
                {item.voiceNote ? item.voiceNote : 'Sesli not bulunmuyor'}
              </Text>
            </View>
            <View style={styles.imageContainer}>
              {item.image && (
                <Image source={{uri: item.image}} style={styles.image} />
              )}
            </View>
            <View style={styles.additionalInfo}>
              <View style={styles.infoContainer}>
                <Text style={styles.boldText}>Oluşturulma Zamanı</Text>
                <Text style={styles.lightText}>{item.timestamp}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.boldText}>Hatırlatıcı</Text>
                <Text style={styles.lightText}>{item.selectedDateTime}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.boldText}>Lokasyon</Text>
                <Text style={styles.lightText}>
                  {item.selectedPlace.placeName
                    ? item.selectedPlace.placeName
                    : 'Lokasyon bilgisi bulunmuyor'}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundContainer: {
      flex: 1,
      backgroundColor: colors.primary,
      margin: 20,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    noteContainer: {
      flex: 1,
      backgroundColor: colors.secondary,
      borderTopRightRadius: 150,
      borderRadius: 15,
      padding: 20,
    },
    imageContainer: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    image: {
      width: width / 1.75,
      height: width / 1.75,
      borderRadius: 20,
      marginVertical: 10,
    },
    rowContainer: {
      flexDirection: 'row',
    },
    seperator: {
      borderColor: 'gray',
      borderWidth: 0.5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      marginVertical: 10,
    },
    noteTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
      marginVertical: 15,
    },
    noteDetails: {
      fontSize: 20,
      color: 'gray',
    },
    lightText: {
      fontSize: 15,
      color: 'gray',
    },
    boldText: {
      fontSize: 16,
      fontWeight: '500',
      color: colors.text,
      marginBottom: 5,
    },
    infoContainer: {
      marginVertical: 10,
    },
  });

export {NoteDetails};
