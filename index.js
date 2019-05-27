/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import thunk from 'redux-thunk';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
