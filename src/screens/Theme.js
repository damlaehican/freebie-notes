import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {Switch} from 'react-native-paper'
import Context from "../context/store";
import styles from "../components/style";


const Theme = () => {
  const {state, dispatch} = useContext(Context);
  const themeColor = state.themeColors[state.currentTheme];
  const styles = customStyles(themeColor);


  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    dispatch({type:'SET_THEME'});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SafeAreaView>
  );
}

export default Theme;

const customStyles = (themeColor) => 
  StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:themeColor.backgroundColor,
    }
  });
