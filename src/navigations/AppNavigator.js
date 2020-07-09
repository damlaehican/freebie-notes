import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {Login, SignUp, SplashScreen} from '../screens';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const RootStack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            ...TransitionPresets.ModalPresentationIOS,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
