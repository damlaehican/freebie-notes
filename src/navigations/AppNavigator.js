import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {
  Login,
  SignUp,
  Splash,
  MainScreen,
  ForgotPass,
  AddNotePage,
  PhotoNote,
  VoiceNote,
} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Album} from '../components/SVGR-Components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Notes">
      <Tab.Screen name="Photo" component={PhotoNote} />
      <Tab.Screen name="Notes" component={AddNotePage} />
      <Tab.Screen name="Voice" component={VoiceNote} />
    </Tab.Navigator>
  );
};
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="Tabs" component={Tabs} />
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
