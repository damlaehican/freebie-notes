import React, { useContext } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { Clock } from '../components/SVGR-Components';

const NoteCard = (props) => {

  const { state, dispatch } = useContext(Context);
  const themeColor = state.themeColors[state.currentTheme];
  const styles = customStyles(themeColor)

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{props.date}</Text>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text style={styles.bodyText} numberOfLines={5}>
        {props.icerik}
      </Text>
      <View style={styles.clockView}>
        <Clock fill="#FF5227" width={18} height={18} />
      </View>
    </View>
  );
};

const customStyles = (themeColor) =>
  StyleSheet.create({
    container: {
      height: 250,
      borderRadius: 10,
      backgroundColor: themeColor.backgroundColor,
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
      paddingLeft: 10,
      marginTop: 20,
    },
    dateText: {
      color: themeColor.mainColor,
      fontSize: 12,
    },
    titleText: {
      color: themeColor.textColor,
      fontWeight: 'bold',
      fontSize: 16,
    },
    bodyText: {
      color: themeColor.textColor,
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
