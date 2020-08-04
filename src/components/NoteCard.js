import React, {useContext} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Clock} from '../components/SVGR-Components';
import {useTheme} from '@react-navigation/native';
import {Megaphone} from '../components/SVGR-Components';

const NoteCard = (props) => {
  const {colors} = useTheme();
  const styles = customStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{props.date}</Text>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.bodyText} numberOfLines={5}>
        {props.icerik}
      </Text>
      <Text style={[styles.bodyText, {color: '#006064'}]} numberOfLines={5}>
        {props.voice}
      </Text>
      <Text style={[styles.bodyText, {color: '#d92027'}]}>{props.selectedDate}</Text>
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
  });
export default NoteCard;
