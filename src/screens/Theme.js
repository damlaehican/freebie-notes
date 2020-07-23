import React, { useState, useContext } from "react";
import { SafeAreaView, Switch, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";



const Theme = () => {

  const { state, dispatch } = useContext(Context);
  const { colors } = useTheme();
  const styles = customStyles(colors);
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {

    setIsEnabled(previousState => !previousState);
    dispatch({ type: 'SET_THEME' });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Switch
        trackColor={{ false: colors.background, true: colors.text }}
        thumbColor={isEnabled ? colors.background : colors.background}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SafeAreaView>
  );
}

export default Theme;

const customStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    }
  });
