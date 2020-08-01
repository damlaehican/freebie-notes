import {AppRegistry} from 'react-native';
import MainNavigator from './src/navigations/AppNavigator';
import {Login, SignUp, Splash} from './src/screens';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainNavigator);
