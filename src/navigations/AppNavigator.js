import 'react-native-gesture-handler';
import React from 'react';
import {
  Login,
  SignUp,
  ForgotPass,
  NotesList,
  AddNote,
  Favourites,
  Settings,
  DrawerContent,
  Splash,
  NoteDetails,
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
import {Note, Star, SettingsIcon} from '../components/SVGR-Components';
import Provider from '../context/Provider';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const icons = {
  Notes: <Note fill="gray" width={25} height={25} />,
  Favourites: <Star stroke="gray" width={27} height={27} />,
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
    noteBackground: '#b0bec5',
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
    noteBackground: '#fff',
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
      <Drawer.Screen
        name="Notes"
        component={Tabs}
        options={{title: 'Notlar'}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Ayarlar'}}
      />
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
      <Tab.Screen
        name="Notes"
        component={NotesList}
        options={{title: 'Notlar'}}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{title: 'Favoriler'}}
      />
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
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="Splash">
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
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="ForgotPass" component={ForgotPass} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen
                name="Menu"
                component={Menus}
                options={{gestureEnabled: false}}
              />
              <Stack.Screen name="AddNote" component={AddNote} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="NoteDetails" component={NoteDetails} />
            </Stack.Navigator>
          </NavigationContainer>
        )}
      </Context.Consumer>
    </Provider>
  );
};
export default AppNavigator;
