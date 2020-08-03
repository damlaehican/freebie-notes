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
  Favourites,
  Settings,
  Map,
  DrawerContent,
} from '../screens';
import {
  NavigationContainer,
  DefaultTheme as NavigatorDefaultTheme,
  DarkTheme as NavigatorDarkTheme,
  useTheme,
} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Microphone,
  Menu,
  Note,
  Star,
  SettingsIcon,
} from '../components/SVGR-Components';
import Provider from '../context/Provider';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const icons = {
  Photo: <Menu fill="gray" width={25} height={25} />,
  Notes: <Note fill="gray" width={25} height={25} />,
  Voice: <Microphone fill="gray" width={24} height={25} />,
};
const drawerIcons = {
  Notes: <Note fill="gray" width={25} height={25} />,
  Settings: <SettingsIcon stroke="gray" width={25} height={25} />,
  Favourites: <Star stroke="gray" width={25} height={25} />,
};

const darkTheme = {
  ...NavigatorDarkTheme,
  colors: {
    ...NavigatorDarkTheme.colors,
    primary: '#FF5227',
    secondary: '#37474f', //NotesCardColor
    background: '#263238', //ScreenBackgroundColor
    card: '#263238', //NavigatorBackgroundColor
    placeHolder: 'white',
    profile: '#b0bec5',
  },
};
const defaultTheme = {
  ...NavigatorDefaultTheme,
  colors: {
    ...NavigatorDefaultTheme.colors,
    primary: '#FF5227',
    secondary: '#fff',
    background: '#fff',
    card: '#fff',
    placeHolder: 'gray',
    profile: '#37474f',
  },
};

function Menus({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="Notes"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={({route}) => ({
        drawerIcon: () => drawerIcons[route.name],
      })}
      drawerContentOptions={{
        activeBackgroundColor: null,
      }}>
      <Drawer.Screen name="Notes" component={Tabs} />
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="Settings" component={Settings} />
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
    </Tab.Navigator>
  );
};
const AppNavigator = () => {
  return (
    <Provider>
      <Context.Consumer>
        {(value) => (
          <NavigationContainer
            theme={value.state.isDarkTheme ? darkTheme : defaultTheme}>
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
              <Stack.Screen name="AddNote" component={AddNote} />
              <Stack.Screen name="Voice" component={VoiceNote} />
              <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </Context.Consumer>
    </Provider>
  );
};
export default AppNavigator;
