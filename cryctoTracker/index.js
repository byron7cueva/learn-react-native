// react-native-gesture-handler: Para el manejo de gestos es mejor que viene por defecto
// con react-native
// Se necesita cargar antes de ue la aplicacion haga boostrap de la aplicacion
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
