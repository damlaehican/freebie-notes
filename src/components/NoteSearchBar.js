import React, { useContext } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Menu } from '../components/SVGR-Components';
import { Profile } from '../screens';
import { useNavigation } from '@react-navigation/native';
import Context from "../context/store";

const NotesSearchBar = (props) => {

  const { state, dispatch } = useContext(Context);
  const themeColor = state.themeColors[state.currentTheme];
  const styles = customStyles(themeColor)

  return (
    <>
      <Header1 />
      <View style={styles.container}>
        <TextInput
          placeholder="Notlar içerisinde ara"
          placeholderTextColor={themeColor.textColor}
          onChangeText={props.onSearch}
          style={styles.textInput}
        />
      </View>
    </>
  );
};
const Header1 = (props) => {
  const navigation = useNavigation();

  const { state, dispatch } = useContext(Context);
  const themeColor = state.themeColors[state.currentTheme];
  const styles = customStyles(themeColor)
  return (
    <SafeAreaView style={styles.headerContainer}>
      <TouchableOpacity
        style={{ marginLeft: 5 }}
        onPress={() => navigation.openDrawer()}>
        <Menu width={30} height={30} fill="white" />
      </TouchableOpacity>

      <TouchableOpacity style={{ borderRadius: 100, marginRight: 10 }}>
        <Profile />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const customStyles = (themeColor) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 10,
      shadowColor: '#000',
      top: -22,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },
    textInput: {
      borderRadius: 10,
      backgroundColor: themeColor.backgroundColor,
      color:themeColor.textColor,
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    headerContainer: {
      height: 110,
      backgroundColor: themeColor.mainColor,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    headerImage: {
      height: 100,
      opacity: 0.7,
    },
  });
export default NotesSearchBar;
