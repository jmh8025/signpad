/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';
import thunk from 'redux-thunk';

Navigation.registerComponent(`Home`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "Home"
      }
    }
  });
});