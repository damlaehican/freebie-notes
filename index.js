import {AppRegistry} from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import {Login} from './src/screens';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
