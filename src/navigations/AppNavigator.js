import 'react-native-gesture-handler';
import React from 'react';
import {
  Login,
  SignUp,
  ForgotPass,
  NotesList,
  PhotoNote,
  VoiceNote,
  AddNote,
  Favourites
} from '../screens';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Microphone, Menu, Note} from '../components/SVGR-Components';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const icons = {
  Photo: <Menu fill="gray" width={25} height={25} />,
  Notes: <Note fill="black" width={25} height={25} />,
  Voice: <Microphone fill="gray" width={24} height={25} />,
};

function Menus({ navigation }) {
  return (
      <Drawer.Navigator initialRouteName="Tabs">
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name="Tabs" component={Tabs} />
      </Drawer.Navigator>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Notes"
      screenOptions={({route}) => ({
        tabBarIcon: () => icons[route.name],
      })}
      tabBarOptions={{
        activeTintColor: '#FF5227',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Photo" component={PhotoNote} />
      <Tab.Screen name="Notes" component={NotesList} />
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
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Menu" component={Menus} />
        <Stack.Screen
          name="AddNote"
          component={AddNote}
          options={{gestureDirection: 'vertical-inverted'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
