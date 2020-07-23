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
import { useNavigation, useTheme } from '@react-navigation/native';


const NotesSearchBar = (props) => {

  const styles = customStyles(useTheme().colors);

  return (
    <>
      <Header1 />
      <View style={styles.container}>
        <TextInput
          placeholder="Notlar içerisinde ara"
          placeholderTextColor={useTheme().colors.text}
          onChangeText={props.onSearch}
          style={styles.textInput}
        />
      </View>
    </>
  );
};
const Header1 = (props) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = customStyles(colors);
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
const customStyles = (colors) =>
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
      backgroundColor: colors.secondary,
      color: colors.text,
      fontSize: 16,
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    headerContainer: {
      height: 110,
      backgroundColor: colors.primary,
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    headerImage: {
      height: 100,
      opacity: 0.7,
    },
  });
export default NotesSearchBar;
