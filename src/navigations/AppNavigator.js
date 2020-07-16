import 'react-native-gesture-handler';
import React from 'react';
import {Login, SignUp, Splash, MainScreen, ForgotPass,Notes} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer initialRouteName="Splash">
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
