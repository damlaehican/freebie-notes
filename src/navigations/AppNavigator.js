import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {Login, SignUp, Splash} from '../screens';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer initialRouteName="Splash">
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
