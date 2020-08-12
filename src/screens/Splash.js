import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SplashLogo } from "../components/SVGR-Components";
import AsyncStorage from "@react-native-community/async-storage";
import SplashScreen from 'react-native-splash-screen';

const Splash = ({ navigation }) => {

  const {state, dispatch} = useContext(Context);

  useEffect(() => {
    SplashScreen.hide();
    AsyncStorage.getItem('@THEME')
      .then(res => {
        if (res === 'true') {
          dispatch({type:'SET_THEME'})
        }
      })
    AsyncStorage.getItem('@USER_ID')
      .then(res => {
        if (res == null) {
          navigation.navigate('Login');
        } else {
          navigation.navigate('Menu');
        }
      });
  }, [])

  return (
    <View style={styles.container}>
      <SplashLogo />
    </View>
  )
}

export { Splash };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#EFEFEF',
  }
})