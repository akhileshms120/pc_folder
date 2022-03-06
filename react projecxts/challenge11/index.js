/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Course from "../challenge11/Screen/Courses"
import Home from "../challenge11/Screen/Home"

AppRegistry.registerComponent(appName, () =>Course);

